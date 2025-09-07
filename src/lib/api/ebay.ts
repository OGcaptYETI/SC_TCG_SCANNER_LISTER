import axios from 'axios'

interface eBayConfig {
  appId: string
  certId: string
  devId: string
  sandbox: boolean
}

export interface CardListing {
  itemId: string
  title: string
  price: number
  condition: string
  images: string[]
  seller: string
  endTime: string
  category: string
}

class eBayAPI {
  private config: eBayConfig
  private baseUrl: string
  private accessToken: string = ''

  constructor(config: eBayConfig) {
    this.config = config
    this.baseUrl = config.sandbox 
      ? 'https://api.sandbox.ebay.com'
      : 'https://api.ebay.com'
  }

  // Get OAuth access token
  async getAccessToken(): Promise<string> {
    if (this.accessToken) return this.accessToken

    const { appId, certId } = this.config
    
    // Ensure we have valid credentials
    if (typeof appId !== 'string' || typeof certId !== 'string' || !appId.trim() || !certId.trim()) {
      throw new Error('Missing or invalid eBay API credentials. Please check your environment variables.')
    }

    // Create credentials buffer safely
    const credentials = Buffer.from(
      `${String(appId || '').trim()}:${String(certId || '').trim()}`
    ).toString('base64')

    try {
      const response = await axios.post(
        `${this.baseUrl}/identity/v1/oauth2/token`,
        'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope',
        {
          headers: {
            'Authorization': `Basic ${String(credentials)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      this.accessToken = response.data.access_token
      return this.accessToken
    } catch (error) {
      console.error('Failed to get eBay access token:', error)
      throw new Error('eBay authentication failed')
    }
  }

  // Search for sports cards
  async searchSportsCards(query: string, limit: number = 50): Promise<CardListing[]> {
    const token = await this.getAccessToken()

    try {
      const response = await axios.get(
        `${this.baseUrl}/buy/browse/v1/item_summary/search`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
          },
          params: {
            q: query,
            category_ids: '261328', // Sports Trading Cards category
            limit,
            sort: 'newlyListed',
            filter: 'buyingOptions:{FIXED_PRICE|AUCTION}',
          },
        }
      )

      return response.data.itemSummaries?.map((item: any) => ({
        itemId: item.itemId,
        title: item.title,
        price: item.price?.value || 0,
        condition: item.condition || 'Unknown',
        images: item.image?.imageUrl ? [item.image.imageUrl] : [],
        seller: item.seller?.username || 'Unknown',
        endTime: item.itemEndDate || '',
        category: item.categories?.[0]?.categoryName || 'Sports Cards',
      })) || []
    } catch (error) {
      console.error('eBay search failed:', error)
      throw new Error('Failed to search eBay listings')
    }
  }

  // Get detailed item information
  async getItemDetails(itemId: string): Promise<any> {
    const token = await this.getAccessToken()

    try {
      const response = await axios.get(
        `${this.baseUrl}/buy/browse/v1/item/${itemId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
          },
        }
      )

      return response.data
    } catch (error) {
      console.error('Failed to get item details:', error)
      throw new Error('Failed to get item details')
    }
  }

  // Get sold listings for price history
  async getSoldListings(query: string, limit: number = 25): Promise<CardListing[]> {
    const token = await this.getAccessToken()

    try {
      const response = await axios.get(
        `${this.baseUrl}/buy/browse/v1/item_summary/search`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
          },
          params: {
            q: query,
            category_ids: '261328',
            limit,
            filter: 'conditionIds:{1000|1500|2000|2500|3000|4000|5000|6000}',
            sort: 'endingSoonest',
          },
        }
      )

      return response.data.itemSummaries?.map((item: any) => ({
        itemId: item.itemId,
        title: item.title,
        price: item.price?.value || 0,
        condition: item.condition || 'Unknown',
        images: item.image?.imageUrl ? [item.image.imageUrl] : [],
        seller: item.seller?.username || 'Unknown',
        endTime: item.itemEndDate || '',
        category: item.categories?.[0]?.categoryName || 'Sports Cards',
      })) || []
    } catch (error) {
      console.error('Failed to get sold listings:', error)
      return []
    }
  }
}

// Export configured instance
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  const value = process.env[key]
  if (value === undefined) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Environment variable ${key} is not set. Using default value.`)
    }
    return defaultValue
  }
  return value
}

export const ebayAPI = new eBayAPI({
  appId: getEnvVar('EBAY_APP_ID'),
  certId: getEnvVar('EBAY_CERT_ID'),
  devId: getEnvVar('EBAY_DEV_ID'),
  sandbox: (process.env.NODE_ENV || 'development') !== 'production',
})

// No need to export CardListing again as it's already exported above

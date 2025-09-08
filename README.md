# CardScanner AI - Advanced Trading Card Recognition Platform

A comprehensive AI-powered trading card recognition platform supporting both sports cards and trading card games (TCG) with real-time market data integration and collection management.

## 🎯 Features

### Core Functionality
- **AI-Powered Card Recognition** - 95%+ accuracy for sports cards and TCG cards
- **Real-Time Market Data** - Live pricing from multiple marketplaces
- **Collection Management** - Track, organize, and analyze your card collection
- **Marketplace Integration** - Browse and compare prices across platforms
- **Advanced Analytics** - Portfolio tracking with profit/loss analysis

### Supported Card Types
**Sports Cards:**
- Baseball, Basketball, Football, Soccer, Hockey

**Trading Card Games:**
- Pokémon, Magic: The Gathering, Disney Lorcana, Yu-Gi-Oh!

### Key Features
- Drag-and-drop image scanning
- Instant card identification with confidence scores
- Condition assessment and grading estimates
- Population data and rarity information
- Market trend analysis
- Collection value tracking
- Responsive design with dark mode support

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Molecular architecture with Headless UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **AI/ML:** TensorFlow.js, Google Cloud Vision API
- **State Management:** Zustand, React Query
- **Utilities:** class-variance-authority, clsx, tailwind-merge

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/OGcaptYETI/SC_TCG_SCANNER_LISTER.git
   cd SC_TCG_SCANNER_LISTER
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Update the environment variables in .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_GOOGLE_CLOUD_PROJECT_ID=your-project-id
NEXT_PUBLIC_GOOGLE_CLOUD_STORAGE_BUCKET=your-bucket-name
# Add other environment variables as needed
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# SC_TCG_SCANNER_LISTER
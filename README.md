# SC TCG Scanner/Lister

A modern web application for scanning and listing trading cards with AI-powered features.

## Features

- Card scanning and recognition
- Price lookup and tracking
- Collection management
- AI-powered card grading
- Integration with popular marketplaces

## Tech Stack

- Next.js 13+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- TensorFlow.js
- Google Cloud Vision API

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

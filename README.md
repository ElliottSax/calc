# Dividend Calculator Hub

A professional-grade dividend investment calculator built with Next.js 14+, TypeScript, and modern web technologies.

## Features

### Calculators & Tools
- **DRIP Calculator**: Calculate dividend reinvestment projections with compound growth
- **Dividend Aristocrats Explorer**: Interactive screener for S&P 500 Dividend Aristocrats
  - Advanced filtering by sector, yield range, and growth rate
  - Side-by-side stock comparison (up to 3 stocks)
  - Detailed stock analysis with dividend history charts
  - Watchlist functionality with Supabase integration

### Data & Integration
- **Real-time Stock Data**: Integration with Financial Modeling Prep API
- **Caching Strategy**: Intelligent caching with fallback data for reliability
- **User Accounts**: Save calculations and track portfolios with Supabase
- **Email Marketing**: Lead generation with newsletter signup forms

### Technical Features
- **High Precision**: Financial calculations using Big.js for accuracy
- **Responsive Design**: Beautiful UI with Tailwind CSS and shadcn/ui
- **Enterprise Logging**: Three-layer logging architecture with Pino
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Performance**: Optimized for Core Web Vitals

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **API**: Financial Modeling Prep
- **Calculations**: Big.js for precise decimal arithmetic
- **Logging**: Pino with custom three-layer architecture

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for database)
- Financial Modeling Prep API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dividend-calculator-hub.git
cd dividend-calculator-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials:
- Supabase URL and keys
- Financial Modeling Prep API key

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
dividend-calculator-hub/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── calculators/       # Calculator components
│   ├── layout/           # Layout components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility libraries
│   ├── api/              # API clients (FMP)
│   ├── logger/           # Logging setup
│   ├── supabase/         # Supabase clients
│   └── utils/            # Calculation utilities
├── types/                 # TypeScript definitions
├── hooks/                 # Custom React hooks
└── public/               # Static assets
```

## Architecture Decisions

### Logging Architecture

The app uses a three-layer logging system:

1. **Core Logger**: Base Pino configuration with environment-specific settings
2. **Context Logger**: Adds user/request context to logs
3. **Domain Loggers**: Specialized loggers for different app areas (API, calculator, auth)

### Financial Calculations

All financial calculations use Big.js to ensure precision:
- Avoids JavaScript floating-point errors
- Maintains accuracy for large numbers
- Proper rounding for financial display

### State Management

- Local state with React hooks for calculator inputs
- Supabase for persistent user data
- Server-side caching for API responses

## Extending the Project

### Adding New Calculators

1. Create a new component in `components/calculators/`
2. Add calculation logic in `lib/utils/calculations.ts`
3. Define TypeScript types in `types/calculator.ts`
4. Add to navigation in the Header component

### API Integration

The FMP client in `lib/api/fmp.ts` can be extended with additional endpoints:
- Historical prices
- Company financials
- Sector comparisons

### Database Schema

Extend the Supabase schema in `types/database.ts` for new features:
- Portfolio tracking
- Calculation history
- User preferences

## Deployment

The app is optimized for deployment on Vercel:

```bash
npm run build
npm start
```

Environment variables need to be configured in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.
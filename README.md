# Cambridge Rentals

A React and TypeScript starter for a property-rental interface.

## Requirements

- Node.js 20 or later
- npm or pnpm

## Get started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Check code quality with ESLint
npm run preview  # Preview the production build locally
```

## Project structure

```text
src/
  main.tsx                 Application entry point
  App.tsx                  Main page layout
  components/
    index.ts               Shared component exports
    Header/                Site header
    Title/                 Page title
    PropertyList/          Property-list components
    Footer/                Site footer
```

Import shared components from the component index:

```tsx
import { Footer, Header, PropertyList, Title } from './components'
```

## Styling

Components use CSS Modules where appropriate. Keep a component's styles in the same folder as its `.tsx` file. `PropertyList` currently uses a regular CSS file.

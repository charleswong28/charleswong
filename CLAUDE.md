# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is the personal website of Charles Wong.
LinkedIn: https://www.linkedin.com/in/hkcharleswong/

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture & Structure

This is a Next.js 15 website using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Technologies
- **Next.js 15** with App Router for file-based routing
- **React 19** for components
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with CSS variables and theme inline syntax
- **Geist fonts** (Sans and Mono) optimized via `next/font`

### Project Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with CSS variables and dark mode support
- `public/` - Static assets (SVG icons)
- Custom path alias: `@cw/*` maps to `./src/*`

### Styling Architecture
- Uses Tailwind CSS v4 with `@theme inline` syntax
- CSS variables for theming (`--background`, `--foreground`)
- Automatic dark mode support via `prefers-color-scheme`
- Font variables integrated with Tailwind config

### Development Notes
- Uses Turbopack for faster development builds
- TypeScript strict mode enabled
- ESLint configured with Next.js recommended rules
- Font optimization handled automatically by Next.js
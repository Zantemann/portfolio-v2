# Website Service Discovery Quiz

## Overview

An interactive quiz component that helps visitors discover which website services best match their business needs. The quiz is integrated into both the home page and the services page.

## Features

- **Interactive Multi-Step Quiz**: 6 conditional questions that guide users through their needs
- **Smart Recommendations**: AI-powered recommendation engine that suggests 1-2 services based on answers
- **Bilingual Support**: Full support for English and Finnish translations
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Progress Tracking**: Visual progress bar showing quiz completion

## Components Created

### 1. Core Files

- `src/components/Quiz/Quiz.tsx` - Main quiz component with state management
- `src/components/Quiz/quiz.module.css` - Styling for the quiz
- `src/types/quiz.ts` - TypeScript types and interfaces
- `src/utils/quizEngine.ts` - Recommendation logic engine
- `src/utils/quizQuestions.ts` - Question builder with translations

### 2. Translations

Added complete quiz translations in:

- `locales/en/translation.json` - English translations
- `locales/fi/translation.json` - Finnish translations

### 3. Integration

Integrated into:

- `src/app/[locale]/page.tsx` - Home page (after LogoSlider, before Projects)
- `src/app/[locale]/software-services/page.tsx` - Services page (after intro text)

## Quiz Flow

### Questions

1. **Q1**: Do you have an existing website? (yes/no)
2. **Q2**: What's your goal? (refresh/new) - _Only if Q1 = yes_
3. **Q3**: What platform? (landing page/webstore)
4. **Q4**: Website size? (small/medium/large)
5. **Q5**: Audience goal? (existing/new customers)
6. **Q6**: Market competition? (high/low)

### Recommendation Logic

**Primary Service** (Infrastructure):

1. **Shopify E-commerce** - If site_type = 'webstore'
2. **Website Modernization** - If has_old_site = 'yes' (and not webstore)
3. **Custom Development** - Default (starting from scratch)

**Secondary Service** (SEO):

- **Strategic SEO (Shopify-specific)** - If primary is Shopify
- **Strategic & Technical SEO** - If primary is Modernization/Custom

The SEO description varies based on:

- Aggressive growth: if competitors = 'beat_competitors' OR customer_goal = 'new_customers'
- Foundation: otherwise

### Brand Messaging

Every result displays:

- ✓ Risk-free 1 year warranty
- ✓ Affordable professional maintenance for only 20€ per month
- ✓ First functional version in 1 to 2 weeks

## Styling

The quiz uses a clean, modern design with:

- Card-based layout
- Progress bar showing completion
- Hover effects on options
- Selected state highlighting
- Responsive breakpoints for mobile devices
- High contrast colors for accessibility (WCAG compliant)

## Usage

The quiz is automatically displayed on:

1. Home page - positioned between the logo slider and projects sections
2. Services page - positioned right after the intro text

No additional configuration needed - it's ready to use!

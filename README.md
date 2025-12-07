# Digital Agency Showcase

![App Preview](https://imgix.cosmicjs.com/16264b60-d39d-11f0-b693-79ceb5783a41-photo-1558655146-d09347e92766-1765133208132.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive digital agency website built with Next.js 16 and powered by Cosmic CMS. Showcase your services, team, testimonials, and case studies with a beautiful, conversion-optimized design.

## Features

- 🎨 Modern, professional design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Server-side rendering with Next.js 16 for optimal performance
- 🖼️ Automatic image optimization with imgix
- 🔍 SEO-optimized with proper meta tags
- 💼 Dynamic service showcase with pricing
- 👥 Team member profiles with social links
- ⭐ Client testimonials with ratings
- 📊 Detailed case study portfolio with galleries
- 🎯 Call-to-action sections throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6935caed949144de1d8f6a23&clone_repository=6935d281949144de1d8f6a46)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency website with services, team members, testimonials, and case studies."

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for a digital agency website with services, team members, testimonials, and case studies.', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React** - UI components
- **imgix** - Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content model set up

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Objects

```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes services_used and testimonial objects
```

### Fetching Team Members

```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Services** - Agency service offerings with descriptions and pricing
- **Team Members** - Staff profiles with photos and social links
- **Testimonials** - Client reviews with ratings
- **Case Studies** - Project portfolios with results and galleries

All content is managed through your Cosmic dashboard and fetched dynamically using the Cosmic SDK with proper TypeScript typing.

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add your environment variables in Netlify's dashboard
4. Deploy!

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── services/           # Services pages
│   ├── team/               # Team pages
│   ├── case-studies/       # Case study pages
│   └── globals.css         # Global styles
├── components/             # Reusable React components
├── lib/
│   └── cosmic.ts          # Cosmic SDK configuration
└── types.ts               # TypeScript type definitions
```

<!-- README_END -->
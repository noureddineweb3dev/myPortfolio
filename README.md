# Noureddine — Creative Frontend Developer

Welcome to my personal portfolio website. This is a showcase of my work as a creative frontend developer specializing in **interaction design**, **motion**, and **performance-driven development**.

## � About This Portfolio

This portfolio is built to demonstrate:

- **Advanced animation techniques** with Framer Motion and scroll-driven interactions
- **Performance-first development** with optimized rendering and lazy loading
- **Accessibility excellence** with full WCAG compliance and reduced-motion support
- **Modern web standards** using Next.js 15, React 19, and TypeScript
- **Beautiful UX/UI design** with smooth transitions and thoughtful interactions

## ✨ Key Features

### Interactive Animations

- Scroll-driven parallax effects with separate looping animations
- Entrance animations with staggered timing
- Hover states that respond to user intent
- Animated SVG signature with pulsing glow effect

### Accessibility & Performance

- Full support for `prefers-reduced-motion` media query
- Semantic HTML with ARIA labels
- Keyboard navigation support
- Image optimization and lazy loading
- Fast page loads and smooth 60fps animations

### Responsive & Modern Design

- Mobile-first design approach
- Dark mode support with persistent preference
- Modern gradient backgrounds and blur effects
- Water surface WebGL shader effects
- Tailwind CSS for maintainable styling

## 🛠️ Technology Stack

| Category               | Tools                            |
| ---------------------- | -------------------------------- |
| **Frontend Framework** | Next.js 15, React 19, TypeScript |
| **Styling**            | Tailwind CSS, PostCSS            |
| **Animation**          | Framer Motion                    |
| **Theme Management**   | next-themes                      |
| **Development**        | ESLint, Node.js 18+              |
| **Backend Ready**      | Node.js, Express.js              |

## � Quick Start

### Prerequisites

- Node.js 18+ (or use Bun/PNPM)
- npm, yarn, pnpm, or bun package manager

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## ⚙️ Configuration Guide

### Update Contact Information

Edit `src/components/sections/ContactForm.tsx` and `src/components/sections/Contact.tsx`:

```typescript
// Replace: mailto:your@email.com
mailto:your-email@example.com
```

### Update Social Links

Edit `src/components/layout/Footer.tsx`, `src/components/sections/Contact.tsx`:

```typescript
// Replace href="#" with actual URLs
href = 'https://github.com/your-username';
href = 'https://linkedin.com/in/your-profile';
href = 'https://twitter.com/your-handle';
```

### Add Portfolio Projects

Edit `src/data/projects.ts`:

```typescript
export const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    // ... other fields
  },
];
```

### Customize Colors & Theme

Edit `tailwind.config.cjs` to adjust:

- Gradient colors (indigo, cyan)
- Typography
- Spacing
- Accent colors

## 🎨 Design & Performance Highlights

### Animations

- **Scroll-Driven**: Text and visuals respond to scroll position
- **Entrance**: Staggered animations for visual hierarchy
- **Hover**: Interactive feedback on buttons and cards
- **Loop**: Continuous subtle animations (pulsing glow, rotating text)

### Accessibility

- Respects user motion preferences (`prefers-reduced-motion`)
- Full keyboard navigation
- ARIA labels for screen readers
- High contrast and readable typography

### Performance

- Server-side rendering with Next.js
- Code splitting and lazy loading
- Optimized images
- CSS minification

## 📦 Dependencies

**Core:**

- `next`: Next.js framework
- `react`: React library
- `framer-motion`: Animation library
- `next-themes`: Theme management

**Styling:**

- `tailwindcss`: Utility-first CSS
- `postcss`: CSS processing

**Development:**

- `typescript`: Type safety
- `eslint`: Code quality

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint checks
```

## � Project Structure & Pages

### File Structure

```
my-portfolio/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── about/page.tsx        # About page
│   │   ├── projects/page.tsx     # Projects showcase
│   │   ├── contact/page.tsx      # Contact page with form
│   │   └── blog/page.tsx         # Blog (placeholder)
│   ├── components/
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx        # Navigation bar with theme toggle
│   │   │   └── Footer.tsx        # Footer with animated signature
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx          # Hero section with gradient
│   │   │   ├── About.tsx         # About with scroll animations
│   │   │   ├── Projects.tsx      # Projects grid
│   │   │   ├── Contact.tsx       # Contact CTA section
│   │   │   └── ContactForm.tsx   # Contact form component
│   │   ├── effects/              # Special effects
│   │   │   └── WaterSurface.tsx  # WebGL water shader
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── ProjectCard.tsx   # Project card component
│   │   │   └── ThemeToggle.tsx   # Dark/light mode toggle
│   │   └── providers/            # Context providers
│   │       └── ThemeProvider.tsx # Theme context
│   └── data/
│       └── projects.ts           # Projects data array
├── public/
│   └── assets/                   # Static assets
├── tailwind.config.cjs           # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies & scripts
```

### Pages & Sections

| Page         | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| **Home**     | Landing page with hero section and gradient background              |
| **About**    | Introduction with animated signature and "currently exploring" list |
| **Projects** | Portfolio showcase with hover animations and project details        |
| **Contact**  | Contact form with email integration (opens on /contact?form=1)      |
| **Blog**     | Blog section (placeholder for future content)                       |

## � Deployment Options

### Vercel (Recommended)

Vercel is the creator of Next.js and provides seamless deployment:

```bash
npm install -g vercel
vercel
```

### Docker

For containerized deployment:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

- **Netlify**: Supports Next.js with serverless functions
- **AWS Amplify**: Easy GitHub integration
- **Self-hosted**: Use Docker or standard Node.js deployment

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contact & Social

- **Email**: your-email@example.com
- **GitHub**: [@your-username](https://github.com)
- **LinkedIn**: [/in/your-profile](https://linkedin.com/in)
- **Twitter**: [@your-handle](https://twitter.com)

## 📄 License

This is a **personal portfolio**. All code, design, and content are proprietary and owned by Noureddine.

Unauthorized use, reproduction, or distribution is prohibited.

---

**Designed & built by Noureddine** — A creative frontend developer focused on interaction, motion, and performance.

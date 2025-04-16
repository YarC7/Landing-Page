# 🚀 Modern Landing Page

A high-performance, feature-rich landing page built with cutting-edge technologies. Perfect for businesses and portfolios looking for a professional web presence.

![Project Preview](image.png)

## ✨ Key Features

- 🎨 **Modern UI/UX**
  - Fully responsive design that works on all devices
  - Beautiful animations powered by Framer Motion
  - Dark/Light theme support
  - Clean and minimalist design philosophy

- 🛠 **Technical Features**
  - Server-side rendering with Next.js 15
  - Type-safe development with TypeScript
  - Secure authentication via Clerk
  - Real-time data updates
  - SEO optimized
  - Analytics integration with Vercel

- 💼 **Business Features**
  - E-commerce capabilities through Wix Stores
  - Booking system integration
  - Member management
  - Interactive maps with Mapbox
  - Multi-language support
  - Content management through Wix CMS

## 🔧 Tech Stack

### Frontend
- **Framework:** Next.js 15.2.4
- **UI Library:** React 18.3.1
- **Styling:** 
  - Tailwind CSS
  - Radix UI Components
  - Framer Motion for animations
- **State Management:** 
  - Redux Toolkit
  - Redux Persist for local storage

### Backend & Services
- **Database:** MongoDB with Prisma ORM
- **Authentication:** Clerk
- **CMS:** Wix Headless CMS
- **Maps:** Mapbox GL
- **Analytics:** 
  - Vercel Analytics
  - Speed Insights

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YarC7/LandingPage.git
   cd LandingPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in `.env`

4. **Set up Prisma**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 🚀 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
LandingPage/
├── src/
│   ├── app/          # App router pages
│   ├── components/   # Reusable components
│   ├── lib/         # Utility functions
│   ├── store/       # Redux store setup
│   └── types/       # TypeScript types
├── prisma/          # Database schema
├── public/          # Static assets
└── ...config files
```

## 🔐 Environment Variables

Required environment variables:
- `DATABASE_URL` - MongoDB connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `WIX_API_KEY` - Wix API credentials
- `MAPBOX_TOKEN` - Mapbox access token

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email nguyenduccanh177@gmail.com.

---

Made with ❤️ by [NgDCanh]

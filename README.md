# 🌐 Landing Page

A responsive, modular landing page built with **Next.js**, **Redux**, **Tailwind CSS**, and integrated with **Wix CMS**.

🧩 Features
- Fully responsive and dynamic landing page

- Theme and language toggling with Redux

- Integration with Wix CMS for dynamic content

- MongoDB database connection via Prisma

- Filterable and animated components

- Modular and scalable codebase

## 🧱 Architecture

This project follows a clean separation between **Presentation Layer**, **Business Logic**, and **Configuration/External Services**:

![alt text](image.png)

### Key Components

- **Next.js Pages**
  - `Home`, `About`, `Projects`, `Contact`, `Dynamic ([slug])`
- **UI Components**
  - `Navbar`, `Menu`, `Slider`, `Filter`
- **State Management**
  - `Redux Store` with `Language Slice` and `Theme Slice`
- **Database Layer**
  - `Prisma` and `Next Server` for CRUD actions with `MongoDB`.
- **Wix Integration**
  - `WixContext` and `useWixClient` for external content
- **Styling**
  - Tailwind CSS configuration for scalable design
  - Integrate with Shacdn UI component and lucide-react for styling

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **CMS**: [Wix CMS](https://www.wix.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/),[Shacdn UI](https://ui.shadcn.com/)
- **TypeScript**: Type-safe development

---

## 📦 Installation

```bash
git clone https://github.com/YarC7/Landing-Page.git
cd Landing-Page
npm install
```

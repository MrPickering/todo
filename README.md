# Todo App

A modern, responsive todo list application built with React, TypeScript, and Vite.

## Features

- ✅ Add, edit, and delete todos
- 🎯 Filter todos by status (all, active, completed)
- 📊 Track active, completed, and total todos
- 🎨 Beautiful gradient UI with Tailwind CSS
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MrPickering/todo.git
cd todo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deploying to Vercel with Neon Database

This app is configured to deploy on Vercel with Neon Postgres integration.

### Setup Instructions

1. **Deploy to Vercel:**
   - Push your code to GitHub
   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will automatically detect the `vercel.json` configuration

2. **Add Neon Database Integration:**
   - Go to your Vercel project dashboard
   - Navigate to the **Storage** tab or **Integrations** marketplace
   - Search for "Neon" and click "Add Integration"
   - Follow the prompts to:
     - Create a new Neon account or link an existing one
     - Create a new database or connect an existing one
     - Select your database region
   - Vercel will automatically inject `DATABASE_URL` and other required environment variables

3. **Enable Preview Branching (Optional):**
   - In the Neon integration settings, enable "Preview Branching"
   - This creates isolated database branches for each preview deployment

4. **Verify Connection:**
   - Your app will now have access to the Neon database via environment variables
   - The `DATABASE_URL` environment variable is automatically available to your serverless functions

### Local Development with Neon

To develop locally with your Neon database:

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Get your Neon connection string:
   - Go to your Neon project dashboard
   - Copy the connection string
   - Paste it in your `.env` file as `DATABASE_URL`

3. Or pull environment variables from Vercel:
```bash
vercel env pull
```

4. Run the development server:
```bash
npm run dev
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Deployment platform
- **Neon** - Serverless Postgres database

## License

MIT
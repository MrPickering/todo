# Todo App

A modern, responsive todo list application built with React, TypeScript, and Tailwind CSS. This app helps you stay organized and productive with an intuitive interface for managing your daily tasks.

## Features

- ✅ **Create Tasks** - Quickly add new todos with a simple input form
- ✏️ **Edit Tasks** - Inline editing with keyboard shortcuts (Enter to save, Escape to cancel)
- ✓ **Complete Tasks** - Mark tasks as complete with a visual checkbox
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Filter Views** - Switch between All, Active, and Completed tasks
- 📊 **Live Statistics** - Track active, completed, and total task counts
- 🎨 **Beautiful UI** - Modern gradient background with glass-morphism effects
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
todo/
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx      # Form component for adding new todos
│   │   └── TodoItem.tsx     # Individual todo item with edit/delete
│   ├── App.tsx              # Main application component with state management
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind directives
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
└── postcss.config.js        # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
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

## Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## How to Use

1. **Add a Todo**: Type your task in the input field and click "Add" or press Enter
2. **Complete a Todo**: Click the circular checkbox to mark a task as complete
3. **Edit a Todo**: Click the edit icon (pencil), modify the text, and press Enter or click the checkmark
4. **Delete a Todo**: Click the delete icon (trash bin) to remove a task
5. **Filter Tasks**: Use the All/Active/Completed tabs to filter your view
6. **Track Progress**: View your statistics at the top showing active, completed, and total tasks

## Design Features

- **Gradient Background**: Purple-to-blue gradient for a modern aesthetic
- **Glass Morphism**: Translucent components with backdrop blur effects
- **Smooth Transitions**: Animated interactions for a polished user experience
- **Accessibility**: Keyboard navigation and focus states
- **Icon Integration**: Lucide React icons for clear visual communication

## License

This project is open source and available for personal and educational use.
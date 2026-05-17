# ApplyFlow

**ApplyFlow** is a job application tracking tool. Organize candidates across hiring stages using an intuitive Kanban board with drag-and-drop support.

## Tech Stack

**Frontend**
- React 19
- Vite 7
- SCSS (Sass)
- @dnd-kit — drag-and-drop interactions

**Backend**
- Node.js (`backend/` directory)

## Project Structure

```
ApplyFlow/
├── backend/          # Server-side code
├── public/           # Static assets
├── src/              # React application source
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MOODDDII/ApplyFlow.git
cd ApplyFlow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## License

MIT

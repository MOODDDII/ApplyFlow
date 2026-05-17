# ApplyFlow

**ApplyFlow** — інструмент для відстеження заявок на роботу. Організовуй кандидатури на різних етапах найму за допомогою зручної Kanban-дошки з підтримкою drag-and-drop.

## Стек технологій

**Frontend**
- React 19
- Vite 7
- SCSS (Sass)
- @dnd-kit — drag-and-drop взаємодія

**Backend**
- Node.js (папка `backend/`)

## Структура проекту

```
ApplyFlow/
├── backend/          # Серверна частина
├── public/           # Статичні файли
├── src/              # Вихідний код React-застосунку
├── index.html
├── vite.config.js
└── package.json
```

## Встановлення та запуск

### 1. Клонування репозиторію

```bash
git clone https://github.com/MOODDDII/ApplyFlow.git
cd ApplyFlow
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Запуск у режимі розробки

```bash
npm run dev
```

Застосунок буде доступний за адресою `http://localhost:5173`

### 4. Збірка для продакшну

```bash
npm run build
```

### 5. Попередній перегляд збірки

```bash
npm run preview
```

## Доступні скрипти

| Скрипт | Дія |
|--------|-----|
| `npm run dev` | Запуск dev-сервера з HMR |
| `npm run build` | Збірка для продакшну |
| `npm run preview` | Локальний перегляд збірки |
| `npm run lint` | Перевірка коду через ESLint |

## Ліцензія

MIT

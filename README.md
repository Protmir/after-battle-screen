## Getting Started

Первой запускается серверная часть, происходит это следующим образом:

```bash
cd server
npm install
npm run start
```

Запуск клиентской части происходит можно следующим образом:

```bash
cd client
npm install
npm run dev
```

Серверная часть написана на Express и выполняют одну функцию, отдает массив игроков.

Клиентская часть написана на React + Typescript, сборщик Vite. Используется SCSS-препроцессор, а так же Tooltip из Material UI

# mernkit

mernkit is a starter kit for building MERN (MongoDB, Express.js, React, Node.js) full-stack applications. It provides a basic project structure with pre-configured frontend and backend templates.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

To create a new MERN project, run the following command:

```bash
npx mernkit my-mern-project
```

### Project structure

```bash
my-mern-project
|-- backend
| |-- controllers
| |-- config
| |-- models
| |-- routes
| |-- .env
| |-- .gitignore
| |-- index.js
| |-- package.json

|-- frontend
| |-- public
| |-- src
| | | --assets
| | | |-- images
| | | |-- svg
| | | --components
| | | --Pages
| | | --App.jsx
| |-- package.json
| |-- .gitignore
| |-- package.json

```

### Usage
```bash
cd my-mern-project
```

```bash
cd backend
npm install
node index.js
```
Backend starts on whichever port you define in .env folder

```bash
cd frontend
npm install
npm run dev
```
Front-end starts on localhost:5173 (vitejs defined port)

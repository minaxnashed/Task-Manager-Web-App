# Task Manager Web App

A simple full-stack web app for managing tasks. Built with React (frontend) and ASP.NET Core (backend).

## Features

- View tasks
- Add new tasks
- Toggle task completion
- Delete tasks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for frontend)
- [.NET 8 SDK](https://dotnet.microsoft.com/download) (for backend)

---

### Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-web-app.git
cd task-manager-web-app
```

---

## Backend Setup (ASP.NET Core)

1. Navigate to the backend folder (if separated, e.g. `TaskManagerAPI`):

    ```bash
    cd TaskManagerAPI
    ```

2. Restore dependencies and run:

    ```bash
    dotnet restore
    dotnet run
    ```

   The backend will start on `http://localhost:5000`.

---

## Frontend Setup (React)

1. Navigate to the frontend folder (e.g. `task-manager-web-app`):

    ```bash
    cd task-manager-web-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React app:

    ```bash
    npm start
    ```

   The frontend will start on `http://localhost:3000`.

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Add, toggle, and delete tasks.

---

## Notes

- Make sure both frontend and backend are running.
- The backend uses SQLite by default (`tasks.db` will be created automatically).
- CORS is enabled for development.

---

##

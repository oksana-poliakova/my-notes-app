# 📝 My Notes App

This is a simple Task Manager app built with React and styled using Materialize UI. The app allows you to add tasks, mark them as completed, and delete them. The tasks are saved in `localStorage`, so they persist even after a page refresh.

## 🚀 Features

- **Add Tasks**: Quickly add tasks to your list by typing and hitting Enter.
- **Mark as Completed**: Check off tasks once they're done.
- **Delete Tasks**: Easily remove tasks from your list.
- **Persistent Storage**: Your tasks will remain saved in the browser even after you refresh the page, thanks to `localStorage`.
- **Minimal UI**: Clean and intuitive user interface using Materialize.

## 🛠️ Technologies Used

- **React**
- **Materialize UI**
- **React Hooks**: `useState` and `useEffect` for state management and lifecycle handling
- **localStorage** for data persistence

## 📦 Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

    ```bash
    npm start
    ```

The app will be available at http://localhost:3000.

## How It Works

- Adding Tasks: Type a task name and press Enter to add it to the list.
- Marking as Completed: Click the checkbox next to a task to mark it as done.
- Removing Tasks: Click the red ❌ button to delete a task from the list.
- Persistent Data: Tasks are saved in the browser’s localStorage, so they persist between reloads.
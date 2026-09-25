# 📝 Quick Notes

A simple and responsive **React Note-Taking Application** that allows users to create, edit, search, filter, pin, and delete notes.

The project was built to practice important React concepts such as **useState, useEffect, event handling, conditional rendering, list rendering, localStorage, Context API, reusable components, and React Router**.

---

## 🚀 Features

* ✍️ Create new notes
* 📝 Edit existing notes
* 🗑️ Delete individual notes
* 📌 Pin and unpin notes
* 🔍 Search notes by title
* 🏷️ Filter notes by category
* 📊 View note statistics
* 🧹 Clear all notes with confirmation
* 🔄 Clear search and category filters
* 💾 Save notes using browser `localStorage`
* ⏰ Display note creation date and time
* 🔢 Character counter with 200-character limit
* 📱 Responsive design
* 🧩 Reusable React components
* 🛣️ Page navigation using React Router
* 🎨 Bootstrap + custom CSS styling

---

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **React Router**
* **Bootstrap**
* **CSS**
* **Vite**
* **Browser localStorage**

---

## 📚 React Concepts Practiced

This project helped practice:

* `useState`
* `useEffect`
* Context API (`createContext`, `useContext`)
* Controlled form inputs
* Event handling
* Conditional rendering
* Rendering lists using `.map()`
* Array methods such as `.filter()` and `.sort()`
* Updating objects inside arrays
* Passing props between components
* Reusable components
* Component-based architecture
* Browser localStorage
* React Router navigation (`useNavigate`, `useParams`, dynamic routes)

---

## 📂 Project Structure

```text
quick-notes/
│
├── public/
│
├── src/
│   ├── context/
│   │   └── NotesContext.jsx
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── NoteForm.jsx
│   │   ├── Toolbar.jsx
│   │   ├── StatsRow.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NotesGrid.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AddNotePage.jsx
│   │   └── EditNotePage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🧩 Component Overview

### `App.jsx`

The root application component. Wraps the app in `NotesProvider` and sets up `BrowserRouter` with all route definitions.

### `context/NotesContext.jsx`

Holds all note state and logic, exposed to the rest of the app through the `useNotes()` hook, including:

* Notes array (synced to `localStorage`)
* Note creation (`addNote`)
* Note editing (`updateNote`)
* Note deletion (`deleteNote`)
* Pinning (`togglePin`)
* Clearing all notes (`clearNotes`)

### `Header.jsx`

Contains the application header, note count badge, and navigation links.

Routes:

* `/` → Your Notes
* `/new` → New Note

### `Footer.jsx`

Contains the footer section of the application.

### `Layout.jsx`

Shared page shell that renders the `Header`, the active routed page (via `Outlet`), and the `Footer`.

### `NoteForm.jsx`

Handles creating and editing notes. Reused by both the "add" and "edit" flows.

Users can enter:

* Note title
* Note content
* Category

### `NoteCard.jsx`

Displays an individual note with actions for:

* Edit
* Pin / Unpin
* Delete

### `NotesGrid.jsx`

Displays the collection of notes and delegates to `EmptyState` when there's nothing to show.

### `EmptyState.jsx`

Reusable "no notes yet" / "no matching notes" message with an optional action button.

### `Toolbar.jsx`

Provides:

* Search functionality
* Category filtering
* Clear filters button

### `StatsRow.jsx`

Displays:

* Total notes
* Pinned notes
* Unpinned notes

### `HomePage.jsx`

The main page (`/`) containing the toolbar, statistics, and the searchable, filterable notes collection.

### `AddNotePage.jsx`

The page (`/new`) containing the note creation form.

### `EditNotePage.jsx`

The page (`/edit/:id`) containing the note editing form, pre-filled with the note matching the URL parameter.

---

## 🏷️ Note Categories

Notes can be organized into four categories:

* 📚 Study
* 💼 Work
* 👤 Personal
* 📌 Others

---

## 💾 Local Storage

The application uses the browser's `localStorage` to preserve notes.

This means notes remain available even after refreshing the browser or closing and reopening the application.

---

## 🛣️ Routing

React Router is used to navigate between different sections of the application.

### Your Notes

```text
/
```

Contains:

* Search
* Category filters
* Statistics
* Notes
* Edit
* Pin
* Delete
* Clear All

### New Note

```text
/new
```

Contains the note creation form.

### Edit Note

```text
/edit/:id
```

Contains the note editing form, pre-filled with the note matching `:id`.

---

## 🎨 UI & Design

The application uses **Bootstrap** for responsive layouts and reusable UI utilities, combined with custom CSS for the application's visual identity.

The design uses a warm, modern palette with:

* Ivory/paper background
* Dark ink typography
* Lavender accents
* Coral highlights
* Mint details

The interface is responsive and adapts to different screen sizes.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd quick-notes
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Bootstrap

```bash
npm install bootstrap
```

### 5. Install React Router

```bash
npm install react-router-dom
```

### 6. Start the development server

```bash
npm run dev
```

Open the localhost URL shown in the terminal.

---

## 🖥️ Application Flow

```text
             Quick Notes
                  │
        ┌─────────┴─────────┐
        │                   │
   Your Notes ("/")     New Note ("/new")
        │                   │
  Search / Filter      Create Note
        │                   │
    Statistics          Edit Note ("/edit/:id")
        │                   │
    Note Cards           Update Note
        │
  Pin / Edit / Delete
        │
     Clear All
```

---

## 🎯 Learning Objective

The main goal of this project was to strengthen React fundamentals by building a practical application rather than working only with isolated examples.

Through this project, I practiced managing application state, creating reusable components, handling user interactions, persisting data with localStorage, sharing state with the Context API, and implementing client-side navigation with React Router.

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🌙 Dark mode
* 🔐 User authentication
* ☁️ Backend integration
* 🗄️ MongoDB database
* 📱 Progressive Web App support
* 🔄 Drag-and-drop note organization
* 📌 Advanced sorting options
* 🏷️ Custom categories
* 🔔 Reminder functionality
* 📤 Export notes
* ☁️ Cloud synchronization

---

## 👩‍💻 Author

**Harini G**

Aspiring Full Stack Developer

Built as part of my journey learning **React and Full Stack Development**.

---

## ⭐ If you like this project

Feel free to explore the project, learn from it, and build your own version with additional features.

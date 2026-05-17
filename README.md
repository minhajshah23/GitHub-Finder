# GitHub Finder 🔍

A React app that lets you search any GitHub user and view their profile info — built with React, Context API, React Router, and Tailwind CSS.

---

## Features

- Search any GitHub username using the GitHub public API
- View profile details: avatar, bio, followers, following, repos, location, blog, and more
- Handles "User Not Found" gracefully
- Navigate between search and profile pages using React Router
- Global state managed with Context API (no Redux needed)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React | UI library |
| React Router DOM | Client-side routing |
| Context API | Global state (user data) |
| Tailwind CSS | Styling |
| GitHub REST API | Fetching user data |

---

## Project Structure

```
src/
├── components/
│   ├── Getdata.jsx     # Search input and API call
│   ├── Navbar.jsx      # Top navigation bar
│   └── Profile.jsx     # Displays fetched user profile
├── UserContext.js      # React Context for global user state
└── App.jsx             # Root component with routes and context provider
```

---

## How It Works

1. User enters a GitHub username in the search box on the home page (`/`)
2. `Getdata` component fetches data from `https://api.github.com/users/{username}`
3. The result is stored in `UserContext` using `setUser`
4. The app navigates to `/profile` where `Profile` displays the user's data
5. If the user is not found, a "User Not Found" message is shown with a back button

---

## Getting Started

### Prerequisites

- Node.js installed
- A package manager (npm or yarn)

### Installation

```bash
git clone https://github.com/minhajshah23/github-finder.git
cd github-finder
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Used

**GitHub REST API** — Public, no authentication required for basic user lookups.

```
GET https://api.github.com/users/{username}
```

Returns fields like `name`, `avatar_url`, `bio`, `followers`, `following`, `public_repos`, `location`, `blog`, `email`, `created_at`, `updated_at`, and `message` (set to `"Not Found"` if user doesn't exist).

---

## Author

**Minhaj Shah** — [github.com/minhajshah23]
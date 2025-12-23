## Purpose

This repository is a small static frontend (no build step). These instructions give AI coding agents the minimal, concrete context needed to be productive editing or extending the project.

## Project Overview
- Single-page static site served from the repo root: key files are index.html, user.html, index.js, user.js, and index.css.
- No bundler or test runner present. Files are loaded via script tags at the end of HTML pages.

## High-level intent
- `index.html` / `index.js` — list users (API: https://jsonplaceholder.typicode.com/users). Render user cards into the `.user-list` container; each card markup should match the existing structure under `.user-card__container`.
- `user.html` / `user.js` — show posts for a selected user (API: https://jsonplaceholder.typicode.com/posts?userId=:id). Render posts into `.post-list` using `.post__title` and `.post__body` classes.

## Concrete, discoverable patterns & examples
- Endpoints (already present as comments in `index.js`):
  - Users: `https://jsonplaceholder.typicode.com/users`
  - Posts by user: `https://jsonplaceholder.typicode.com/posts?userId=:id`
- DOM selectors used by the UI:
  - Users container: `.user-list`
  - User card inner container: `.user-card__container` (example children: h3, p.email, p.phone, a[href])
  - Posts container: `.post-list`
  - Post title: `.post__title`
  - Post body: `.post__body`
  - Search input on `user.html`: the input inside `.post__search--container`
- Script loading: scripts are plain ES5/ES6 files referenced with `<script src="..."></script>` at the end of each HTML file — do not convert to ESM modules unless you update the HTML accordingly.

## Developer workflows (how to run & debug)
- No build step — open `index.html` directly in a browser, or run a local static server from the repository root for correct relative routing and to avoid file:// issues.
  - PowerShell (recommended for Windows devs):
    ```powershell
    cd path\to\repo
    python -m http.server 8000
    # or, if Node installed:
    npx http-server . -p 8000
    ```
  - Use the Live Server extension in VS Code for iterative development.
- Debugging: use browser DevTools → Console & Network. Watch for CORS/network errors (jsonplaceholder supports simple GETs).

## Project-specific conventions
- No framework or state management — keep logic simple, DOM-driven, and appended into the existing containers.
- Use the existing class names and markup shape when rendering to avoid CSS regressions.
- Keep all new client code in `index.js` or `user.js` rather than adding many new files unless adding a clear separation (e.g., `lib/` for utilities).

## Integration points & constraints
- External API is jsonplaceholder; assume responses mirror that API shape (user objects and post objects).
- `user.html` contains a Back link to `/index.html` — routing is file-based (no SPA router).

## Notable current state
- `index.js` currently contains only commented API endpoints; implementation of fetching/rendering is expected there.
- `user.js` is currently empty; `user.html` reveals expected UI structure for posts and a search/input for filtering by id.

## Suggested first tasks for contributors (explicit, small PRs)
- Implement `index.js` user fetch + render into `.user-list` using the existing card markup.
- Implement `user.js` to read a user id (from query string or the search input) and fetch posts from the posts endpoint, rendering into `.post-list`.

## When you need more context
- If behavior is unclear, inspect `index.html` and `user.html` for the expected DOM shape and the CSS in `index.css` for layout assumptions.

---
If any part of this guidance is unclear or you want me to expand examples (small code snippets showing the minimal fetch-and-render), tell me which file you want a starter implementation for.

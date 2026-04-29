# Agents Documentation

## Overview

This is a React-based single-page application that uses client-side routing to display informational pages. The app currently features a Home page and an India country information page, connected via a navigation system powered by `react-router-dom`.

## Project Structure

```
├── package.json
├── src/
│   ├── App.js              # Root component with routing configuration
│   ├── App.css             # Global styles, nav bar, and home page styles
│   └── pages/
│       ├── India.js        # India page component
│       └── India.css       # India page styles
```

## Dependencies

| Dependency        | Version   | Purpose                          |
| ----------------- | --------- | -------------------------------- |
| react             | ^18.2.0   | UI library                       |
| react-dom         | ^18.2.0   | DOM rendering                    |
| react-router-dom  | ^6.20.0   | Client-side routing              |
| react-scripts     | 5.0.1     | Build tooling (Create React App) |

## Components

### `App` — `src/App.js`

The root component that sets up the application's routing using `react-router-dom`.

- Wraps the application in a `<BrowserRouter>` (`Router`).
- Defines two routes via `<Routes>` and `<Route>`:
  - **`/`** → renders the `Home` component
  - **`/india`** → renders the `India` component
- Imports the `India` page component from `./pages/India`.

### `Home` — `src/App.js`

A functional component defined within `App.js` that serves as the landing page.

- Renders a navigation bar (`nav.nav-bar`) with a `<Link>` to `/india`.
- Displays a welcome message ("Hello!") and subtitle inside `.home-content`.
- Styled via `src/App.css`.

### `India` — `src/pages/India.js`

A functional component that displays an informational page about India.

- **Navigation**: Includes a nav bar with a `<Link>` back to `/` (Home).
- **Hero Section** (`.india-hero`): Displays the page title "🇮🇳 India" and subtitle "Incredible India — Unity in Diversity" with an Indian flag–inspired gradient background (`#ff9933` → `#ffffff` → `#138808`).
- **Content Sections** (`.india-content`): Contains three `info-card` sections:
  1. **About India**: A descriptive paragraph about the country.
  2. **Quick Facts**: A list (`ul.facts-list`) of key facts including capital, population, official languages, currency, independence day, national animal, and national bird.
  3. **What Makes India Special**: A responsive grid (`.highlights`) of four `highlight-item` cards covering Rich Heritage, Diverse Cuisine, Vibrant Culture, and Tech Powerhouse.
- Styled via `src/pages/India.css`.

## Routing

Routing is handled by `react-router-dom` v6 using the `BrowserRouter` pattern.

| Path     | Component | Description                      |
| -------- | --------- | -------------------------------- |
| `/`      | `Home`    | Landing page with welcome message |
| `/india` | `India`   | India country information page    |

Navigation between pages is done using `<Link>` components from `react-router-dom`:

- **Home → India**: Link in the Home nav bar (`<Link to="/india">`)
- **India → Home**: Link in the India nav bar (`<Link to="/">`)

## Styling

### `src/App.css`

- **`.App`**: Base container with dark background (`#282c34`), white text, full viewport height.
- **`.nav-bar`**: Flex row layout with padding and darker background (`#1e2229`), used for top navigation.
- **`.nav-link`**: Styled links in cyan (`#61dafb`), bold, with hover underline effect.
- **`.home-content`**: Centered flex column layout filling remaining viewport height (`calc(100vh - 60px)`).
- **`.home-content h1`**: Large heading at `4rem`.
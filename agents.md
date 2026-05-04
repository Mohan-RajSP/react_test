# Agents Documentation

## Overview

This is a React-based single-page application that uses client-side routing to display informational pages. The app currently features a Home page, an India country information page, and a US country information page, connected via a navigation system powered by `react-router-dom`.

## Project Structure

```
├── package.json
├── src/
│   ├── App.js              # Root component with routing configuration
│   ├── App.css             # Global styles, nav bar, and home page styles
│   └── pages/
│       ├── India.js        # India page component
│       ├── India.css       # India page styles
│       └── Us.js           # US page component
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
- Defines three routes via `<Routes>` and `<Route>`:
  - **`/`** → renders the `Home` component
  - **`/india`** → renders the `India` component
  - **`/us`** → renders the `Us` component
- Imports the `India` page component from `./pages/India`.
- Imports the `Us` page component from `./pages/Us`.

### `Home` — `src/App.js`

A functional component defined within `App.js` that serves as the landing page.

- Renders a navigation bar (`nav.nav-bar`) with:
  - A `<Link>` to `/india`.
  - A `<Link>` to `/us`.
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

### `Us` — `src/pages/Us.js`

A functional component that displays a simple informational page for the US.

- Renders a `div` with the `.App` class containing a heading "Hello US!".
- Currently a minimal placeholder page without additional content sections or dedicated styling.

## Routing

Routing is handled by `react-router-dom` v6 using the `BrowserRouter` pattern.

| Path     | Component | Description                      |
| -------- | --------- | -------------------------------- |
| `/`      | `Home`    | Landing page with welcome message |
| `/india` | `India`   | India country information page    |
| `/us`    | `Us`      | US country information page       |

Navigation between pages is done using `<Link>` components from `react-router-dom`:

- **Home → India**: Link in the Home nav bar (`<Link to="/india">`)
- **Home → US**: Link in the Home nav
# HotelHub

A hotel search and discovery app built with React, Vite, and Tailwind CSS. Search hotels by destination, browse results, and view full hotel details — all backed by a live hotels API.

## Features

- **Destination search** — search hotels by city from the hero section, backed by autocomplete suggestions for supported cities.
- **Hotel listing** — a responsive grid of hotel cards with thumbnail, rating, location, and price per night, with loading and empty/error states.
- **Hotel details** — a dedicated page per hotel with a photo gallery, rating, price, location, and full description.
- **404 page** — a friendly not-found page for unmatched routes.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Axios](https://axios-http.com/) for API requests
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## API

The app consumes the public [Hotels Demo API](https://demohotelsapi.pythonanywhere.com/hotels/):

| Endpoint | Description |
|---|---|
| `GET /hotels/` | List hotels, supports `location`, `search`, `min_price`, `max_price`, `min_rating`, `max_rating`, `limit`, `skip`, `order_by` query params |
| `GET /hotels/{id}/` | Fetch a single hotel by id |

API access is wrapped in [`src/services/HotelApi.js`](src/services/HotelApi.js).

## Project Structure

```
src/
├── assets/                 # static assets
├── components/
│   ├── layouts/            # Navbar, Footer, Layout
│   ├── Hero.jsx             # hero section with destination search
│   └── HotelCard.jsx        # hotel listing card
├── pages/
│   ├── Home.jsx             # hero + hotel listing
│   ├── HotelDetails.jsx      # single hotel page
│   └── NotFound.jsx          # 404 page
├── routes/
│   └── AppRoutes.jsx         # route definitions
└── services/
    └── HotelApi.js           # API client
```

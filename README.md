# FilmVault

FilmVault is a React-based movie discovery and watchlist management application built with React, Vite, and Tailwind CSS. It integrates with the TMDB API to provide users with popular movies, detailed movie information, and personalized watchlist functionality.

## Features

### Movie Discovery

- Browse popular movies fetched from the TMDB API
- Dynamic cinematic movie banner with smooth transitions
- Responsive movie card grid layout
- View detailed information for each movie
- Display movie ratings, genres, popularity, and descriptions

### Watchlist Management

- Add movies to a personal watchlist
- Remove movies from the watchlist
- Persist watchlist data using LocalStorage
- Search movies by title
- Filter movies by genre
- Sort movies by rating

### User Interface

- Dark cinematic theme
- Responsive design for different screen sizes
- Animated background effects
- Smooth page and component transitions
- Glassmorphism-inspired UI elements
- Interactive hover states and animations


## Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- TMDB API
- React Icons

## Installation

Clone the repository:

```bash
git clone https://github.com/Abbas-ANP/filmvault.git
```

Navigate to the project directory:

```bash
cd filmvault
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

A TMDB API key can be obtained from:

https://www.themoviedb.org/

## Project Structure

```text
src/
├── components/
│   ├── Banner.jsx
│   ├── Description.jsx
│   ├── MovieCard.jsx
│   ├── Movies.jsx
│   ├── Navbar.jsx
│   ├── Pages.jsx
│   └── WatchList.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## API

FilmVault uses the TMDB API to retrieve movie information.

TMDB:

https://www.themoviedb.org/

## Future Improvements

- User authentication
- Movie trailer integration
- Personalized recommendations
- Advanced search and filtering
- Infinite scrolling
- Improved accessibility
- Deployment optimizations

## Author

Abbas ANP

GitHub:

https://github.com/Abbas-ANP

## License

This project is developed for educational purpose.
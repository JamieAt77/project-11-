# Project-11

This repository contains a full-stack application built using Vite and React for the frontend and Express for the backend. The application provides a simple list of items retrieved from the backend API.

## Project Structure

- `project/`: Root directory.
- `backend/`: Backend server directory.
- `frontend/`: Frontend application directory.

### Backend

- `backend/server.js`: Entry point for the Express server.
- `backend/routes/items.js`: Route handler for the `/api/items` endpoint.

### Frontend

- `frontend/package.json`: Frontend dependencies.
- `frontend/vite.config.js`: Vite configuration for the frontend.
- `frontend/index.html`: HTML entry point for the frontend.
- `frontend/src/main.jsx`: Entry file for the React application.
- `frontend/src/App.jsx`: Root component for the React application.
- `frontend/src/components/ItemList.jsx`: Component to display the list of items.
- `frontend/src/services/api.js`: API module to fetch items from the backend.
- `frontend/src/styles/global.css`: Global styles for the application.

## API Contract

- **GET /api/items**
  - **Response**: `{ items: [...] }`

## Environment Variables

- `PORT`: Port number for the backend server (default 4000).

## Setup and Running the Application

1. **Backend**:
   - Install dependencies: `npm install` in the `backend` directory.
   - Start the server: `node server.js`.

2. **Frontend**:
   - Install dependencies: `npm install` in the `frontend` directory.
   - Start the development server: `npm run dev`.

## Usage

- The frontend application will display a list of items retrieved from the backend API at `http://localhost:5173`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

# Full Stack Music App

This project is a full-stack application built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). The app allows users to manage a collection of songs, including creating, listing, updating, and deleting songs. Additionally, it provides statistics about the songs, artists, albums, and genres.

## Technologies Used

### Backend
- **ExpressJS**: To handle HTTP requests.
- **MongoDB**: To store song data.
- **Mongoose**: To interact with MongoDB and create data schemas.
- **Docker**: To package and run the backend server in a container.

### Frontend
- **ReactJS**: To build the user interface.
- **Typescript**: For type-safe JavaScript development.
- **Redux Toolkit**: To manage the application state.
- **Redux-Saga**: To handle side effects and make API calls.
- **Emotion and Styled System**: For styling the app.

## Features

### Backend
- Create, list, update, and delete songs.
- Generate statistics:
  - Total number of songs, artists, albums, genres.
  - Number of songs in each genre.
  - Number of songs & albums each artist has.
  - Number of songs in each album.

### Frontend
- Display a list of songs.
- Create new songs.
- Edit and delete existing songs.
- Display statistics about songs, artists, albums, and genres.
- Filtering functionality (e.g., filter by genre).

## Getting Started

### Prerequisites
- Docker
- Node.js (for frontend development)
- npm or yarn (for frontend development)

### Backend Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ManaIsrael/addis-software.git
    cd addis-software
    ```

2. **Build and run the Docker container:**
    ```bash
    docker-compose up --build
    ```

3. **API Endpoints:**
    - `GET /api/songs`: List all songs.
    - `POST /api/songs`: Create a new song.
    - `PUT /api/songs/:id`: Update a song.
    - `DELETE /api/songs/:id`: Delete a song.
    - `GET /api/stats`: Get statistics.

### Frontend Setup

1. **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```


3. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

4. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

### Project Structure

#### Backend
addissoftware/
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
└── server.js

#### Frontend
frontend/
├── src/
│ ├── components/
│ │ ├── SongForm.tsx
│ │ ├── SongList.tsx
│ │ └── Statistics.tsx
│ ├── redux/
│ │ ├── sagas/
│ │ ├── slices/
│ │ ├── rootReducer.ts
│ │ ├── rootSaga.ts
│ │ └── store.ts
│ ├── types/
│ ├── App.tsx
│ ├── index.tsx
└── package.json


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
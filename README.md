![Beige Pink  Retro Game Arcade Poster](https://github.com/user-attachments/assets/5cc2e2ce-3057-4a6d-947c-30ad2f8f4431)

---

# HOPAHOP - A Embodied Therapeutical Gaming for Children with ADHD
HOPAHOP is a web-based therapeutic game designed specifically for children with ADHD. The game combines physical activity with cognitive challenges, creating an engaging experience that helps improve both motor skills and attention control. 

The gameplay is structured around alternating phases of movement and stillness. During the active phase, children jump over obstacles, while the freezing phase requires them to hold specific postures. One complete game consists of four blocks, with each block containing both an active and freezing phase. This structure helps children practice transitions between high activity and focused stillness. 

The technical environment of HOPAHOP consists of: 

- A web-based interface accessible through standard browsers 
- Kinect device for precise motion tracking 
- Kinectron server that processes and transmits movement data in real-time 
- Backend systems for game logic and data management 

Every movement is captured by the Kinect device and processed through the Kinectron server, ensuring accurate and responsive gameplay. This setup allows for precise tracking of jumps, poses, and movement patterns, making the therapeutic aspects of the game both effective and measurable. 

## Frontend

### Compile and Hot-Reload for Development
```bash
cd app
npm install
npm run dev
```

### Compile and Minify for Production
```bash
cd app
npm install
npm run build
```

### Lint with ESLint
```bash
cd app
npm install
npm run lint
```

## Backend

### Installation

1. **Clone the repository:**
   ```bash
   git clone [<repository-url>](https://github.com/khanhpham2134/g21-adhd-kinesthetic-game)
   ```

2. **Install dependencies:**
   ```bash
   cd server
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```plaintext
   PORT=8080
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   COOKIE_SECRET=<your-cookie-secret>
   NODE_ENV=<development-or-production>
   ```

### Usage

#### Development
To start the server in development mode with hot-reloading:
```bash
cd server
pnpm run dev
```

#### Production
To start the server in production mode:
```bash
cd server
pnpm start
```

#### Reset Database
To reset the database with initial data:
```bash
cd server
pnpm run reset-db
```

### API Endpoints

#### User Routes
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login a user
- `POST /api/v1/users/logout` - Logout a user
- `GET /api/v1/users/current` - Get the current logged-in user
- `GET /api/v1/users/leaderboards` - Get user leaderboards
- `GET /api/v1/users/:username` - Get user by username
- `PUT /api/v1/users/:username` - Update user by username

#### Gameplay Routes
- `POST /api/v1/gameplays` - Save a new gameplay
- `GET /api/v1/gameplays/leaderboards` - Get gameplay leaderboards
- `GET /api/v1/gameplays/:id` - Get gameplay by ID
- `GET /api/v1/gameplays/player/:username` - Get gameplays by player username

#### Posture Routes
- `GET /api/v1/postures` - Get all postures
- `GET /api/v1/postures/:id` - Get posture by ID

### Environment Variables
- `PORT` - Port number for the server
- `MONGODB_URI` - MongoDB connection URI
- `JWT_SECRET` - Secret key for JWT
- `COOKIE_SECRET` - Secret key for cookies
- `NODE_ENV` - Node environment (development or production)

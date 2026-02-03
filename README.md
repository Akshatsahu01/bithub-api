🎵 BitHub API

A backend API for managing artists, albums, songs, users, and playlists using Node.js, MongoDB, and Mongoose.

📦 Requirements

Node.js (v18+ recommended)

MongoDB Atlas or local MongoDB

npm

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone <your-github-repo-url>
cd bithub-api

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in the project root
MONGO_URI=your_mongodb_connection_string

🌱 Run the Seed Script

The seed script clears the database and inserts sample data.

From the project root, run:

node server/scripts/seed.js


If successful, you will see:

Connected to MongoDB
Seeding Complete!
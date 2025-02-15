import dotenv from 'dotenv/config';
import http from 'http';
import app from './app.js'; // Correct path with .js extension

const server = http.createServer(app);
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

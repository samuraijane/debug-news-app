import 'dotenv/config'
import path  from 'path';
import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import headlineRoutes  from './routes/headlineRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';


const server = express();
const PORT = 8080;

server.use(cors())
server.use(express.json());

//server.use(express.static(path.resolve(`${__dirname}/react-ui/build`)));

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});


// server points 
server.use("/api/articles",articleRoutes); //combined here
server.use("/api/headlines",headlineRoutes)
server.use("/api/account",accountRoutes)
server.use("/auth",authRoutes)



server.listen(PORT, async () => {
  console.log(`This server is running at PORT ${PORT}`);
});
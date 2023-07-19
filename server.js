
const express = require('express')
const path = require ('path')
const mongoose = require ('mongoose')
const cors = require ('cors')
const dotenv=require('dotenv')
const session = require('express-session');
dotenv.config()

const articleRoutes = require('./routes/articleRoutes.js')
const headlineRoutes = require ('./routes/headlineRoutes.js')
const worldRoutes = require ('./routes/worldRoutes.js')
const authRoutes = require ('./routes/authRoutes.js')
const exp = require('constants')



const server = express();
const PORT = 8080;


// //middleware
// server.use(cors())
// server.use(express.urlencoded({extend: true}))
// server.use(bodyParser.urlencoded({ extended: true })); //not sure
// server.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)


server.use(
  session({
    cookie: {
      secure: false,  // allow requests over http; if true, allow only over https
      maxAge: 86400  // set cookie expiration for 86,400 seconds (i.e. 24 hours)
    },
    resave: false,  // update the session even when there are no changes
    saveUninitialized: true,  // always create a session
    secret: 'H!4e_#uTr2'  // a unique value that signs the cookie
  })
);


server.use(cors());

// Parse URL-encoded request bodies
server.use(express.urlencoded({ extended: true }));

// Parse JSON request bodies
server.use(express.json());

//reads the disct files

//server.use(express.static(path.resolve(__dirname + '/my-react-app/dist')));


main().catch(err=> console.log(err));

async function main(){

    await mongoose.connect('mongodb+srv://suleimanhodan9:VAXyKAHBU2HjaeDx@cluster0.n0x2sha.mongodb.net/?retryWrites=true&w=majority')
}



server.use(express.static(path.resolve(`${__dirname}/my-react-app/dist`)));

const cn = {
  host: 'localhost',
  port: 8080,
  database: 'newsusers',
  username: 'cindy23@gmail.com',
  password: 'applejuice',
  allowedExitOnIdle: true,
}

//const db = pgp(cn);

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});


// Routes
// server.use('/auth', authRoutes); // Login & register
// server points 
server.use("/api/articles",articleRoutes); //combined here
server.use("/api/headlines",headlineRoutes) //headline
server.use("/api/world",worldRoutes); // world
server.use("/auth",authRoutes) //login & register 



// catch-all so react can handle routing
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './my-react-app/dist', 'index.html'));
});

server.listen(PORT, async () => {
  console.log(`This server is running at PORT ${PORT}`);
});
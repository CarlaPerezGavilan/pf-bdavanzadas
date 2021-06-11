import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import cors from 'cors';
import docsRoutes from './routes/documents.js'; 
import util from "util";
import MongooseCache from 'mongoose-redis';


const app = express();
const cache = MongooseCache(mongoose, "redis://127.0.0.1:6379");

app.use(bodyParser.json({limit: "200mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "200mb", extended:true }));
app.use(cors());
app.use('/documents', docsRoutes);

const CONNECTION_URL = 'mongodb+srv://carla:carla1234@cluster0.g9wio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true })
.then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT} `)))
.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

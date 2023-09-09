import express from 'express'
import Connection from './database/db.js'
import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

//the post req send from the server to database require body parser or else it will be undifined

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))

//cors is used to connect one url to another eg: connect localhost 3000 and localhoat 8001
app.use(cors())
app.use("/configurations",router)

const PORT = 8001;

Connection()
app.listen(PORT, () => console.log(`server is running successfully on port ${PORT}`))

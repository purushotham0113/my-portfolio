import express from 'express'
import cors from 'cors'
import dotEnv from 'dotenv'
dotEnv.config()
const app = express();
const PORT = process.env.PORT || 5000;

//imports
import connectDB from './utils/mongoClient.js'
import userRoutes from './routers/userRoutes.js'

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://my-portfolio-eilp-two.vercel.app"]
}));
app.use(express.json());
connectDB()


app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${res.statusCode} `)
  next()
})

app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.json("server is running ")
})



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

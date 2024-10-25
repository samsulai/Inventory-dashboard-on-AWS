import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import dashboardRoute from "./routes/dashboardRoute"
import productRoute from "./routes/productRoutes"
import userRoute from "./routes/userRoutes"
dotenv.config();


const app: Application = express();
const port = parseInt(process.env.PORT || '3000', 10);


app.use(morgan('common')); // Logs HTTP requests to the console
app.use(bodyParser.json()); // Parses incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(helmet()); // Adds security-related HTTP headers
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))
app.use(cors()); // Enables Cross-Origin Resource Sharing

app.use("/dashboard", dashboardRoute)
app.use("/products", productRoute);
app.use("/users", userRoute)
  
  // Error handling middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // Start the server
  app.listen(port, "0.0.0.0",() => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
  export default app;



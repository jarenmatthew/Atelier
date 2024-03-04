import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/users", (req: Request, res: Response) => {
  console.log(req.query)
  res.send("Express + TypeScript Server");
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
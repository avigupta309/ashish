import express, { json, urlencoded } from "express";
import { configDotenv } from "dotenv";
import { connection } from "./connection.js";
import { userRouter } from "./router/user.js";
import cors from "cors";
configDotenv();
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;
const corsOperation = {
  origin: "http://localhost:5173/",
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true,
};
app.use(cors(corsOperation));

connection(URL);
app.use(urlencoded({ extended: false }));
app.use(express.json);

app.use("/", (req, res) => {
  return res.status(200).json({ data: "Sucess" });
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("Server is Started at port : ", PORT);
});

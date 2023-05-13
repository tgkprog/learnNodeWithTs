import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
console.log("  s");

app.use(express.json());
app.use("/reminders", remindersRouter);
app.get("/heartbeat", (req, res) => {
  res.send("Hi, v2, at server time " + Date.now());
});
app.listen(8000, () => console.log("Serv s"));
console.log(" after lis");

console.log(" after lis 2");
console.log(" after lis 3");

let y = 43;

console.log(" after lis " + y);
console.log(" after lis 8");

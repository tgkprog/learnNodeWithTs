import express from "express";
const app = express();
console.log("  s");

app.get("/heartbeat", (req, res) => {
  res.send("Hi at server time " + new Date());
});
app.listen(8000, () => console.log("Serv s"));
console.log(" after lis");

console.log(" after lis 2");
console.log(" after lis 3");

let y = 43;

console.log(" after lis " + y);
console.log(" after lis 8");

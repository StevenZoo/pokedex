import express from "express";
let api = require("./routes/api");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use("/api", api);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(err.status || 500);
  res.send({
    message: "Internal server error :(",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

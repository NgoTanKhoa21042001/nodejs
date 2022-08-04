// nạp express
const express = require("express");
// trả lại đối tượng mà đối tượng là nodeJS gọi là app
const app = express();
const port = 3000;
// route
app.get("/", (req, res) => {
  return res.send("Hello Worl em 12");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

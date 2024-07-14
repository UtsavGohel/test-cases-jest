const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res, next) => {
  res.status(200).json({
    users: [
      {
        name: "Utsav",
        email: "utsv@gmail.com",
        pwd: 112233,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("server started");
});

const add = (a, b) => {
  return a + b;
};

const err = () => {
  throw new Error("I am a new Error");
};

const mul = (a, b) => {
  return a * b;
};

const promiseTest = (a, b) => {
  return new Promise((res, rej) => {
    if (a - b > 0) {
      res("+ve");
    } else {
      rej("-ve");
    }
  });
};

module.exports = { app, add, err, mul, promiseTest };

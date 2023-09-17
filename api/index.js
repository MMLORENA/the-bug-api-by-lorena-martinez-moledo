const dotenv = require("dotenv");
const jsonServer = require("json-server");

dotenv.config();

const server = jsonServer.create();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN_WHITELIST);
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.get("/", (_req, res) => {
  res.status(200).json({ message: "Pong 🏓" });
});

const router = jsonServer.router("bugs.json");

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;

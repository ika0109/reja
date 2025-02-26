const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://ikhboloy:CPgGs2mn6NVL82HK@cluster0.dnrs0.mongodb.net/rej";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed")
        module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

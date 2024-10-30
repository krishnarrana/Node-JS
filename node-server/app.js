const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'> <button type='submit'>Send to</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log("Received message:", message);

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing to file", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/plain");
          res.write("Internal Server Error");
          return res.end();
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Server</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

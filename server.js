const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");

app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement("h1", null, "Hello, React on Express!")
  );

  res.send(`
    <html>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

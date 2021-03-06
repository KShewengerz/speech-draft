const express = require("express");
const path    = require("path");
const app     = express();
const port    = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/dist/speech-draft`));

app.listen(port);

app.get("/*", (req, res) => res.sendFile(path.join(`${__dirname}/dist/speech-draft/index.html`)));

console.log("Console listening");

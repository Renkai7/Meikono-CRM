const express = require("express");
const app = express();
// This code creates a simple HTTP server using the Express.js framework that responds when a GET request is made to the root path "/". The server runs on port 3000.
app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

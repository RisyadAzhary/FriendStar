require("dotenv").config();
const express = require("express");
const routes = require("./routes/");
const errorHandler = require("./middlewares/error-handler")
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`connected to http://localhost:${PORT}/`);
});

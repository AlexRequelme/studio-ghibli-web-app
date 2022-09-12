const express = require("express");
const { filmsRoutes } = require("./routes/films.routes.js");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", filmsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const express = require("express");
const { filmsRoutes } = require("./routes/films.routes.js");
const app = express();
const port = 5000;

app.use(express.json());
app.use("/api", filmsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

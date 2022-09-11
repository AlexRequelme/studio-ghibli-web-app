const axios = require("axios");

const STUDIO_GHIBLI_API =
  "https://ghibliapi.herokuapp.com/films?fields=id,title,original_title_romanised,image,description,director,producer,release_date,rt_score";

const getFilmsByFilter = async (req, res) => {
  const query = req.query;
  const response = await axios.get(STUDIO_GHIBLI_API);
  let films = response.data;

  if (Object.keys(query).length > 0) {
    for (let key in query) {
      films = films.filter((film) => {
        if (key in film) {
          return film[key].toLowerCase().includes(query[key].toLowerCase());
        }

        return true;
      });
    }
  }

  return res.json({ query, films });
};

module.exports = {
  getFilmsByFilter,
};

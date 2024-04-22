const express = require(`express`);

const app = express();
const PORT = 5555;

app.use(express.json());

app.get(`/`, (req, res) => {
  res.json(`time2code`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port`, PORT);
});

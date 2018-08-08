const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
      return db.seed();
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)));


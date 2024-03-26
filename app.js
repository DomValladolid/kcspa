import express from 'express';
import stringReplace from 'string-replace-middleware';

const app = express();
const port = 80;

app.use(stringReplace({
  KC_URL: process.env.KC_URL || "https://dauth.me"
}));

app.use('/', express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

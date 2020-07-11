const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => 'You are now connected to Mongo!')
  .catch((err) => console.error('Something went wrong', err));

const MongoStore = connectMongo(expressSession);

app.use(
  expressSession({
    secret: '5ebe2294ecd0e0f08eab7690d2a6ee69',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  }),
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/api', postRouter);
app.use('/api/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

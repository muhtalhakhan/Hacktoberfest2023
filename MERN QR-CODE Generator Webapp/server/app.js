require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth.routes');
const linkRouter = require('./routes/link.routes');
const qrcodeRouter = require('./routes/qrcode.routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);

app.use('/sl', linkRouter);
app.use('/api/qrcode', qrcodeRouter);
app.use('/api/auth', authRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => console.log('Started on port:', PORT));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();

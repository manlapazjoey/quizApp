const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Routers
const authRouter = require('./routes/auth');
const questionRouter = require('./routes/questions');
const resultRouter = require('./routes/results');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/questions', questionRouter);
app.use('/api/quiz', resultRouter);

// app.use('/api/user', userRouter);
//     app.use('/api/auth', authRouter);
//     app.use('/api/questions', questionRouter);
//     app.use('/api/products', productsRouter);
//     app.use('/api/cart', cartRouter);
//     app.use('/api/quiz', resultRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SERVER started at ${port}`);
});

// const server = http.createServer((req, res) => {
//   switch (key) {
//     case value:
//       break;

//     default:
//       break;
//   }

//   //   res.statusCode = 200;
//   //   res.setHeader('Content-Type', 'text/plain');
//   //   res.end('hello world');
// });

// server.listen(port, hostname, () => {
//   console.log('server started');
// });

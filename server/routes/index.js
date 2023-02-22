import authRouter from './auth';
import cartRouter from './cart';
import productsRouter from './products';
import userRouter from './user';
import questionRouter from './questions';
import resultRouter from './results';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('hello wold');
    });

    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/questions', questionRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/cart', cartRouter);
    app.use('/quiz', resultRouter);
  }
}

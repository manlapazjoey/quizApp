import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ history, questions, user, loading, errors }) => ({
  history,
  questions,
  user,
  loading: loading.some(
    x =>
      x.action === 'LOAD_PRODUCTS' ||
      x.action === 'LOAD_CART' ||
      x.action === 'LOAD_QUESTIONS' ||
      x.action === 'LOAD_HISTORY',
  ),
  hasError: errors.some(
    x =>
      x.action === 'LOAD_PRODUCTS' ||
      x.action === 'LOAD_CART' ||
      x.action === 'LOAD_QUESTIONS' ||
      x.action === 'LOAD_HISTORY',
  ),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () =>
    dispatch({
      type: 'LOAD_PRODUCTS_REQUEST',
      payload: {
        url: '660/products',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
  loadCart: () =>
    dispatch({
      type: 'LOAD_CART_REQUEST',
      payload: {
        url: '660/cart',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),

  loadQuestions: () =>
    dispatch({
      type: 'LOAD_QUESTIONS_REQUEST',
      payload: {
        url: '660/questions',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),

  loadHistory: () =>
    dispatch({
      type: 'LOAD_HISTORY_REQUEST',
      payload: {
        url: '660/history',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

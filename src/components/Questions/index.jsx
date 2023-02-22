import { connect } from 'react-redux';
import Question from './question';

const mapStateToProps = ({ loading }, { question }) => ({
  isLoading: loading.some(x => x.loadingId === question.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: data =>
    dispatch({
      type: 'ADD_CART_REQUEST',
      payload: {
        url: '660/cart',
        method: 'post',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
  updateCartItem: data =>
    dispatch({
      type: 'UPDATE_CART_REQUEST',
      payload: {
        url: `660/cart/${data.id}`,
        method: 'put',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
  deleteCartItem: data =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload: {
        url: `660/cart/${data.id}`,
        method: 'delete',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);

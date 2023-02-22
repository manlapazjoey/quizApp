import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ result, user, loading, errors }) => ({
  result,
  user,
  loading: loading.some(x => x.action === 'LOAD_HISTORY'),
  hasError: errors.some(x => x.action === 'LOAD_RESULT'),
});

const mapDispatchToProps = dispatch => ({
  loadResult: () =>
    dispatch({
      type: 'LOAD_RESULTS_REQUEST',
      payload: {
        url: '660/quiz/results',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux';
import Exam from './exam';

const mapStateToProps = ({ questions, loading, errors }) => ({
  questions,
  loading: loading.some(x => x.action === 'LOAD_QUESTIONS'),
  hasError: errors.some(x => x.action === 'LOAD_QUESTIONS'),
});

const mapDispatchToProps = dispatch => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);

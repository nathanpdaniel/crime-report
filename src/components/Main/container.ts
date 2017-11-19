import Main from './template';
import { connect, Dispatch } from 'react-redux';
import { State } from '../../reducers';
import { DataActions } from '../../actions/';

function mapStateToProps(state: State) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch: Dispatch<DataActions.DataAction>) {
  return {
    getNationalEstimates: () => dispatch(DataActions.getNationalEstimates()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
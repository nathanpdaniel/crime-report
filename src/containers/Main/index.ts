import Main from '../../components/Main';
import { connect, Dispatch } from 'react-redux';
import { DataActions } from '../../actions/';
import { RootState } from '../../reducers';

function mapStateToProps(state: RootState) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch: Dispatch<DataActions.DataAction>) {
  return {
    getNationalData: () => dispatch(DataActions.getNationalData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import Main from '../../components/Main';
import { connect, Dispatch } from 'react-redux';
import { EnthusiasmActions } from '../../actions/';
import { RootState } from '../../reducers';

export function mapStateToProps(state: RootState) {
  return {
    enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
    name: state.enthusiasm.languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmActions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(EnthusiasmActions.incrementEnthusiasm()),
    onDecrement: () => dispatch(EnthusiasmActions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
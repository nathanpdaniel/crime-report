import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export type State = {
  enthusiasmLevel: number;
  languageName: string;
};

export type Action = {
  type: string;
  payload?: object;
};

export function enthusiasm(state: State = { enthusiasmLevel: 1, languageName: 'TS'}, action: Action): State {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
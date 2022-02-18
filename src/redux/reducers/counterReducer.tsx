export interface IState {
  value: number;
  data: number[];
}

export const defaultState: IState = {
  value: 0,
  data: [],
};

export function counterReducer(state = defaultState, action: any) {
  if (action.type === 'counter/increment') {
    return { ...state, value: state.value + 1 };
  }
  if (action.type === 'counter/decremented') {
    return { ...state, value: state.value - 1 };
  }
  if (action.type === 'reset') {
    return { ...state, value: 0 };
  }
  if (action.type === 'setValue') {
    return { ...state, value: action.value1 };
  }
  return state;
}

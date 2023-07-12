import { Text, Button } from '@ui/atoms';
import { useReducer } from 'react';

interface State {
  count: number;
}

enum ActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

interface Action {
  type: ActionType,
  payload?: unknown
}

const initialValues: State = {
  count : 0
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREASE:
      return { count: state.count - 1 };
    case ActionType.INCREASE:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const decrease = () => ({ type: ActionType.DECREASE });
const increase = () => ({ type: ActionType.INCREASE });

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  return (
    <div className="flex">
      <Button className="rounded-full" label="-" onClick={() => dispatch(decrease())} />
      <Text className="mx-4 w-[36px] text-center">{state.count}</Text>
      <Button  className="rounded-full" label="+" onClick={() => dispatch({ type: ActionType.INCREASE })} />
    </div>
  );
}

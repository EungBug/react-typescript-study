import React, { useState, useReducer } from 'react';

//* Reducer 사용해보기
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action type');
  }
};

const Counter = () => {
  //* Reducer
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  // * Generic으로 넣어준 number 타입을 생략해도 타입추론을 통해 동일한 동작을 한다.
  // const [count, setCount] = useState<number>(0);
  // const onIncrease = () => setCount((current) => current + 1);
  // const onDecrease = () => setCount((current) => current - 1);

  //* 상태가 null일 수도 있고 아닐수도 있을 때 Generics를 활요하면 좋다.
  // const [info, setInfo] = useState<string | null>(null);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;

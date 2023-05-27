import React from 'react';

// * React.FC를 사용하여 Component 구현
// * props의 타입을 Generics로 넣어서 사용한다.

// * React.FC를 사용할 때 이점
// * 1. props에 기본으로 children이 들어있다.
// * 2. 컴포넌트의 defaultProops, propTypes, contextTypes를 설정할 때 자동완성이 가능하다.

// ----------------------------------------------------------------
// * 단점
// * 1. children이 옵셔널 형태로 들어가 있어서 컴포넌트의 props의 타입이 명백하지 않다.
// * children이 필요한 경우 Props 타입안에 명시해야한다.
// * 2. defaultProps가 제대로 동작하지 않는다.

// ----------------------------------------------------------------
// * 때문에 React.FC 사용하지 않는 것을 추천!

// React.FC<GreetingsProps>

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도 되고 없어도 되는 props의 경우 ?를 붙여준다.
  onClick: (name: string) => void; // 특정 함수를 props로 받을 경우
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;

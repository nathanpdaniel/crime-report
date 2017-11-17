import * as React from 'react';

interface Props {
  name: string;
  enthusiasmLevel: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Main({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  return (<div>MAIN</div>);
}

export default Main;

import * as React from 'react';

interface Props extends React.Props<Main> {
  data?: {};
  getNationalData: () => void;
}

class Main extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (<div>MAIN</div>);
  }
}

export default Main;

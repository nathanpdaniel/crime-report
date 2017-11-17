import * as React from 'react';
import { INationalEstimateResponse } from '../../model/index';
import { DataAction } from '../../actions/DataActions';

interface Props {
  data: INationalEstimateResponse;
  getNationalEstimates: () => DataAction;
}

class Main extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNationalEstimates();
  }
  public render() {
    console.log(this.props.data);
    return (<div>HELLO</div>);
  }
}

export default Main;

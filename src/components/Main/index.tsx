import * as React from 'react';
import Grid from 'material-ui/Grid';
import { VictoryChart, VictoryLine, VictoryLegend, VictoryGroup } from 'victory';
import { INationalEstimateResponse, INationalEstimate } from '../../model/index';
import { DataAction } from '../../actions/DataActions';

interface Props {
  data: INationalEstimateResponse;
  getNationalEstimates: () => DataAction;
}

class Main extends React.Component<Props> {
  private CAPITA: number = 100000;
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNationalEstimates();
  }

  public render() {
    return (
      <div>
        <Grid container={true} spacing={24}>
          <Grid item={true} style={{ margin: '0 auto' }}>
            <VictoryChart width={1080} height={607} padding={{ left: 100, right: 100, bottom: 100, top: 100 }}>
              <VictoryLegend />
              <VictoryGroup>
                <VictoryLine
                  data={this.props.data.results}
                  x={(d: INationalEstimate) => d.year}
                  y={this.homicideRate}
                />
                <VictoryLine
                  data={this.props.data.results}
                  x={(d: INationalEstimate) => d.year}
                  y={this.violentCrimeRate}
                />
              </VictoryGroup>
            </VictoryChart>
          </Grid>
        </Grid>
      </div>
    );
  }

  private homicideRate = (d: INationalEstimate): number => {
    return (d.homicide / d.population) * this.CAPITA;
  }

  private violentCrimeRate = (d: INationalEstimate): number => {
    return (d.violent_crime / d.population) * this.CAPITA;
  }
}

export default Main;

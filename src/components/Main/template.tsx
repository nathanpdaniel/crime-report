import * as React from 'react';
import { AppBar, Toolbar, Typography, Grid } from 'material-ui';
import * as d3 from 'd3-format';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { INationalEstimateResponse } from '../../model/index';
import { DataAction } from '../../actions/DataActions';
import { Colors } from '../../types';

interface Props {
  data: INationalEstimateResponse;
  getNationalEstimates: () => DataAction;
}

interface State {
  homicide: string;
  robbery: string;
  rape_revised: string;
  rape_legacy: string;
  violent_crime: string;
  assault: string;
  chartTitle: string;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      homicide: 'homicide_rate',
      robbery: 'robbery_rate',
      rape_revised: 'rape_revised_rate',
      rape_legacy: 'rape_legacy_rate',
      violent_crime: 'violent_crime_rate',
      assault: 'aggravated_assault_rate',
      chartTitle: 'Crime Rates per 100,000'
    };
  }
  componentDidMount() {
    this.props.getNationalEstimates();
  }

  public render() {
    const { homicide, robbery, rape_revised, rape_legacy, violent_crime, assault, chartTitle } = this.state;
    return (
      <div>
         <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title">Historical Crime Data</Typography>
          </Toolbar>
        </AppBar>
        <Grid container={true} style={{ margin: '0 auto', width: 1280 }}>
          <Grid item={true} xs={12}>
            <Typography type="headline">
              {chartTitle}
            </Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={this.props.data.results}>
                <XAxis dataKey="year" />
                <Tooltip />
                <Line dataKey={homicide} stroke={Colors.homicide} />
                <Line dataKey={robbery} stroke={Colors.robbery} />
                <Line dataKey={rape_revised} stroke={Colors.rape_revised} />
                <Line dataKey={rape_legacy} stroke={Colors.rape_legacy} />
                <Line dataKey={violent_crime} stroke={Colors.violent_crime} />
                <Line dataKey={assault} stroke={Colors.aggravated_assault} />
                <YAxis tickFormatter={d3.format('.2s')} />
                <Legend verticalAlign="bottom" layout="horizontal" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
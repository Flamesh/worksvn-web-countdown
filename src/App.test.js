import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import {styles} from './Style'
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import tileData from './tileData';

import './App.css'
import { CardHeader, Paper } from '@material-ui/core';
/**
 * Note : 
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead. 
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

const tiers = [
  {
    title: 'Day',
  },
  {
    title: 'Hours',   
  },
  {
    title: 'Min', 
  },
  {
    title: 'Second',
  },
]
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 100,
  },
  gridTime: {
    height: 60,
    width: 90
  },
  control: {
    padding: theme.spacing(2),
  },
});
class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    //

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    
    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    const {classes} = this.props;
    return (
      <div className="App">
        <React.Fragment><CssBaseline/>      
          <Grid item xs={12}>     
          <Grid container spacing={5} >
          <Paper className={classes.paper} elevation={1} >            
            <Typography variant="h6" component="h3" align="center" className={classes.Typography}>
              <h3>CỔNG THÔNG TIN KẾT NỐI
                Thời gian ra mắt còn
              </h3>
            </Typography>
          <Grid container className={classes.gridTime} spacing={2}>
          <Grid container className={classes.demo} justify="center" spacing="2">
              <Grid item>
                <Paper className={classes.box} />
              </Grid>
              <Grid item>
                <Paper className={classes.box} />
              </Grid>
              <Grid item>
                <Paper className={classes.box} />
              </Grid>
              <Grid item>
                <Paper className={classes.box} />
              </Grid>
          </Grid>
        </Grid>
        <Button href="#" color="primary" variant="outlined" className={classes.button}>
            ỨNG DỤNG TÌM VIỆC
        </Button>
        <Button href="#" color="primary" variant="outlined" className={classes.button}>
            WEDSITE TUYỂN DỤNG
        </Button>
        <Button href="#" color="primary" variant="outlined" className={classes.button}>
            WEDSITE TUYỂN SINH
        </Button>
         </Paper>
          </Grid>

          <Grid>
            <Grid>
            <h1 className={classes.textInfor}> 
              <div><font size="6" face="Calibri"> THỨ HAI, 9:09' 09.09.19</font></div>
              <div><font size="6">PHÁT HÀNH SẢN PHẨM </font></div>
              <div><font size="6">CỔNG THÔNG TIN KẾT </font></div>
              <div><font size="6">NỐI WORKS.VN</font></div>
              <div/>
              <div>________________________________</div>
              <div/>
              <div><font size="3.4">"Kết nối Sinh viên - Nhà trường - Doanh nghiệp</font></div>
            </h1>
            <Button className={classes.button2} variant="outlined"color="primary"> 
                <font size="2.5">Quan Tâm</font>
            </Button>
            </Grid>
          </Grid>
         </Grid>  
      </React.Fragment>
      </div>
      
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};


export default withStyles(styles)(Countdown);

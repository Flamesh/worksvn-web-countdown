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
//import tileData from './tileData';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';


import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

import './App.css'
import { CardHeader, Paper, Hidden } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';
import color from '@material-ui/core/colors/indigo';

import { unstable_Box as Box } from '@material-ui/core/Box';



const styles = theme => ({
  gridTime: {
    flexGrow: 1,
    marginTop: 100
  },
  
  control: {
    padding: theme.spacing(2),
  },
  button: {
    width: 330,
    height: 50,
    color: "red",
    marginTop: 23,
    borderWidth: 3,
  },
  button2: {
    width: 270,
    height: 50,
    color: "white",
    marginLeft: 200,
    marginTop: 25,
    fontFamily: "Calibri",
    backgroundColor: 'orange',
    
  },
  paper: {
    ...theme.mixins.gutters(),
    marginLeft: 200,
    marginTop: 80,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 2,
    width: 380,
    height: 450,
  },
  paper2: {
    ...theme.mixins.gutters(),
    marginLeft: 650,
    marginTop: -420,
    width: 400,
    height: 400,
    color: "red",
    
    
  },
  box: {
    border: 2,
    border: "black",
    marginTop: -80,
    width: 66,
    height: 66,
    background: "#FF0040",
    color: "white"
  },
  Typography: {
    color: "DodgerBlue",
    marginTop: -70,
  },
  textInfor: {
    marginLeft: 650,
    marginTop: -450,
    color: "#FBEFEF",
    textAlign: "left",
  },
  textInBox: {
    
    ...theme.typography.button,
    //backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  }
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
      years: 1,
      days: 0,
      hours: 0,
      min: 0,
      sec: 2
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
    const {classes} = this.props;
    const countDown = this.state;
    return (
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
                  <Paper className={classes.box} component="div">
                  <div align="center" className={classes.textInBox}><font size="6">{this.addLeadingZeros(countDown.days)}</font></div>
                  </Paper>
              </Grid>
              <Grid item>
                  <Paper className={classes.box} component="div">
                  <div align="center" className={classes.textInBox}><font size="6">{this.addLeadingZeros(countDown.hours)}</font></div>
                  </Paper>
              </Grid>
              <Grid item>
                  <Paper className={classes.box} component="div">
                  <div align="center" className={classes.textInBox}><font size="6">{this.addLeadingZeros(countDown.min)}</font></div>
                  </Paper>
              </Grid>
              <Grid item>
                  <Paper className={classes.box} component="div">
                  <div align="center" className={classes.textInBox}><font size="6">{this.addLeadingZeros(countDown.sec)}</font></div>
                  </Paper>
              </Grid>
          </Grid>
        </Grid>
        <Button href="#" color="primary" color="defaul" variant="outlined" className={classes.button}>
            <font size="4" face="Arial">ỨNG DỤNG TÌM VIỆC </font>
        </Button>
        <Button href="#" color="primary" variant="outlined" className={classes.button}>
        <font size="4" face="Arial">WEDSITE TUYỂN DỤNG </font>
        </Button>
        <Button href="#" color="primary" variant="outlined" className={classes.button}>
        <font size="4" face="Arial">WEDSITE TUYỂN SINH </font>
        </Button>
         </Paper>
          </Grid>

          <Grid>
            <Grid>
            <h1 className={classes.textInfor}> 
              <div><font size="6" face="Calibri"> THỨ HAI, 9:09' 09.09.19</font></div>
              <div><font size="6">PHÁT HÀNH SẢN PHẨM </font></div>
              <div><font size="6.5">CỔNG THÔNG TIN KẾT NỐI </font></div>
              <div><font size="6.5"> WORKS.VN</font></div>
              <div/>
              <div>________________________________</div>
              <div/>
              <div><font size="3.4">"Kết nối Sinh viên - Nhà trường - Doanh nghiệp</font></div>
            </h1>
            <Button className={classes.button2} variant="outlined" color="primary"> 
                <font size="5" face="Calibri">Quan Tâm</font>
            </Button>
            </Grid>
          </Grid>
         </Grid>  
      </React.Fragment>
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

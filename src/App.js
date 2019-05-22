import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './logo.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from "react-router-dom";
import {Router, Switch, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
//import Container from '@material-ui/core/Container';


const footers1 =[
  {
    title: 'Tư vấn giải pháp',
    description: 'Tư vấn giải pháp phát triển phần mềm giải quyết vấn đề thực tiễn, đáp ứng nhu cầu nghiệp vụ quản lý, điều hành',
  },

  {
    title: 'Phân tích thiết kế',
    description: 'Phân tích chi tiết các yêu cầu của khách hàng từ đó đưa ra bản tính năng theo quy trình, thiết kế giao diện sản phẩm',
  },

  {
    title: 'Phát triển wedsite',
    description: 'Phát triển nền tảng web app với các công nghệ, hạ tầng phù hợp với từng  bài toán thực tế',
  },
];

const footers2 = [
  {
    title: "Phát triển mobile",
    description: "Phát triển ứng dụng trên thiết bị di động đa nền tảng để giúp khách hàng cung ứng dịch vụ tốt nhất tới người dùng",
  },
  {
    title: "Cổng thông tin",
    description: "Cổng thông tin kết nối nhu cầu giữa sinh viên, nhà trường và doanh nghiệp trong lĩnh vực Tuyển dụng, Tuyển sinh",
  },
  {
    title: "Sản phẩm quản lý",
    description: "Cung cấp các sản phẩm phần mềm nghiệp vụ phục vụ công tác quản lý trong các trường học",
  },
];
class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <React.Fragment><CssBaseline/>     
      <div className="header">
      <BrowserRouter>
      <Link to="/" style={{ textDecoration: 'none'}}>
      <img src={logo} className="App-logo" alt="logo"/> 
        </Link>
        </BrowserRouter>
      </div>
      <style>{'body { background-color: DodgerBlue;}'}</style> 
      <div className="App" >
        <Countdown date={`${year}-09-09T09:09:09`} /> 
      </div>
      <div className="App-footer">
      <div>
        <br></br><br></br>
        <font className="App-text" size="9">
        DỊCH VỤ CUNG CẤP 
        </font> 
      </div>
      <br/>
      <br/>
      <Container maxWidth="md" componen="footer">
      <Grid container spacing={2} justify="space-evenly" className="Grid-footer">
          {footers1.map(footer => (
            <Grid item xs={10} sm={4} key={footer.title} spacing={2}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <font size="5">{footer.title}</font>
              </Typography>
              <Typography align="left" variant="h7" color="textPrimary" gutterBottom>
              <font size="2">{footer.description}</font>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <br></br>
       <Grid container spacing={10} justify="space-evenly" className="Grid-footer">
          {footers2.map(footer => (
            <Grid item xs={10} sm={4} key={footer.title} spacing={2}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <font size="5">{footer.title}</font>
              </Typography>
              <Typography align="left" variant="h7" color="textPrimary" gutterBottom>
                <font size="2">{footer.description}</font>
              </Typography>
            </Grid>
          ))}
          <br></br>
          <footer>
         <font color="gray" size="3">Bản quyền thuộc về WorksVn</font>
        
            <div></div>
         <font size="2" color="gray"> Liên hệ: Workshotro@gmail.com</font>
      </footer>
          </Grid>
        </Container>
      </div>
      </React.Fragment>
    );
  }
}

export default App;

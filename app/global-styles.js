import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    position: relative;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fcfcfc;
    min-height: 100%;
    min-width: 100%;
    margin-top: 60px;
  }

  label{
    font-weight: normal !important;
  }

  
.top_margin_20{
  margin: 10vh 0; 
} 

.padding_20{
  padding: 20px; 
}
.padding_10{
  padding: 10px; 
}
  
.uppercase{
    text-transform: uppercase;
}

.logo img{
  height: 100px;
  width: 100px;
}


  .submit {
    background: transparent;
    font-weight:400;
    border-radius:4;
    padding:10px;
    color: white;
    fontSize:20px;
    marginBottom:10px;
    border: 1px solid white;
  }

  // .submit:hover, .submit:focus, .submit:active{
  //   background: white;
  //   // color: #27ae60;
  //   color: #27ae60;
  //   -webkit-transition: width .35s ease-in-out; 
  //   transition: width .35s ease-in-out;
  // }

  .submit1 {
    background:  #27ae60;
    font-weight:400;
    border-radius:4;
    color: white;
    border: 1px solid white;
  }

  .submit:hover, .submit:focus, .submit:active{
    background: white;
    // color: #27ae60;
    color: #1e7e34;
    -webkit-transition: width .35s ease-in-out; 
    transition: width .35s ease-in-out;
  }



  // index and index items styles
    
  .boxItem{
    background: white;
    border: 1px solid white;
    box-shadow: 3px 3px 10px 0 #888888;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
    
  .largeBoxItem{
    position: relative;
    background: white;
    border: 1px solid white;
    box-shadow: 3px 3px 10px 0 #888888;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .topRight{
    padding: 5px;
    text-align: right;
  }

  .topRight img{
    width: 13px;
    height: 13px;
  }

  .topRight a{
    margin: 10px;
  }

  .itemBoxInner{
    padding-left: 30px;
  }

  
  .itemBoxInner img{
      width: 40px;
      height: 40px;
      background: %#ddd;
      border : 1px solid #ddd;
      border-radius: 50%;
      margin-right: 20px;
  }


  .itemBoxInner .arrow > img{
    margin: 15px;
    width: 20px;
    height: 20px;
  }
  
  .pull-right-arrow{
    position: absolute;
    right: 30px;
  }

  .transparent-button, 
  .transparent-button:focus, 
  .transparent-button:active, 
  .transparent-button:hover {
    
    background: transparent;
    color: transparent;
    border: none;
  }

     
  .activityBox{
    background: #fff;
    border: 1px solid white;
    box-shadow: 3px 3px 10px 0 #888888;
    width: 100%;
    border-radius:4px; 
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px 20px;
    color: black;
  }
`;
  
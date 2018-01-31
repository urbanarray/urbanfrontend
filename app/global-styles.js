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

  
.uppercase{
    text-transform: uppercase;
}

.logo img{
  height: 100px;
  width: 100px;
}
  
  .inner-body{
    margin: 30px 30px;
  }
   
  .box{
    background: white;
    border: 1px solid white;
    box-shadow: 1px 1px 10px -2px rgba(0,0,0,0.6);
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  
  
  .box-header{
    border-bottom:1px solid #ddd;
    padding: 10px 20px;
  }
  
  .box-body{
  margin: 30px;
  background: white;
  border: 1px solid white;
}
`;
  
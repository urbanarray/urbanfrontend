# Welcome to Urban Array

We're so excited that you're here. To check out the Urban Array web app, please fork and clone this repository on your machine.

Whenever you're working on this code, make sure you pull from the **development** branch of this repository for the most up-to-date version. 

## Getting Started

To run the code and play around with our app using our online server, the steps are as follows: 

1. `npm install` to make sure your node modules are up-to-date with what we're using. 
2. `npm start` 

## Connecting to the Back End

If you'd like to fork, clone, and run our back end locally, you can do so [here](https://github.com/urbanarray/UA-Backend)

Before running the back end locally, go to the `app/utils/axios.js` file and make the following change: 

```javascript
const api = axios.create({

    baseURL: local, // change this line from onlineServer to local
    timeout: 20000,
});
```

The back end code can then be run using the command `npm run dev`. 

You should then be able to view the app at `localhost:3000` or the path displayed in your terminal.




*If you're interested in working with Urban Array as a volunteer open source contributor, please contact [hannah.werman@gmail.com](hannah.werman@gmail.com) for more information about what we're working on and how you can get involved.*

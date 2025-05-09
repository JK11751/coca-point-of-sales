import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store';
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path= "/*" element= {<App/>}/>
          </Routes>
    </BrowserRouter>
    </Provider>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

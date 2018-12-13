import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Home from 'components/Home';
import Footer from 'components/Footer'; 
import Navigation from 'components/Navigation';

const App = props => [
    <Navigation/>,
    <Home/>,
    <Footer />
]

export default App;
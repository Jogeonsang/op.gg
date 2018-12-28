import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Home from 'components/Home';
import Summoner from 'components/Summoner';
import Footer from 'components/Footer'; 
import Navigation from 'components/Navigation';

const App = props => [
    <Navigation key={1} />,
    <PrviateRoutes key={2} />,
    <Footer key={3} />,
]

const PrviateRoutes = props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/summoner" component={Summoner} />
    </Switch>
);

export default App;
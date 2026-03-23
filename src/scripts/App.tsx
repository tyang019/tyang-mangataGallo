import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BagProvider from './path/to/BagProvider'; // Adjust the path as necessary
import './index.css';


const App = () => {
    return (
        <BagProvider>
            <Router>
                <Switch>
                    {/* Define your routes here */}
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    {/* Add more routes as needed */}
                </Switch>
            </Router>
        </BagProvider>
    );
};

export default App;
import React from 'react';

import {BrowserRouter, Route} from  'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';


function App(){
    return(
        <BrowserRouter>
            <Layout>
                <switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
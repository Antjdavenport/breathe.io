import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Initial from './pages/initial';
import App from './components/app';

export default (
<Route path="/" component={Initial}> </Route>
<Route path="/app" component={App} > </Route>
);

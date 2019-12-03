import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Plan from '~/pages/Plan';
import Student from '~/pages/Student';
import Enrollment from '~/pages/Enrollment';
import Help_order from '~/pages/Help_order';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/plan" component={Plan} />
      <Route path="/student" component={Student} />
      <Route path="/enrollment" component={Enrollment} />
      <Route path="/help_order" component={Help_order} />
    </Switch>
  );
}

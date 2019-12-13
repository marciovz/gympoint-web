import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Plan from '~/pages/Plan';
import NewPlan from '~/pages/Plan/New';
import Student from '~/pages/Student';
import Enrollment from '~/pages/Enrollment';
import Help_order from '~/pages/Help_order';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/plan/new" component={NewPlan} isPrivate />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route path="/help_order" component={Help_order} isPrivate />
    </Switch>
  );
}

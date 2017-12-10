'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions'
import { CardSection, Card, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { employeeUpdate })(EmployeeEdit);
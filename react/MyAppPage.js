import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
// Your component pages
import PrivacyPolicySettings from './components/PrivacyPolicySettings'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/privacy-policy" component={PrivacyPolicySettings} />
  </Fragment>
)

export default MyAppPage
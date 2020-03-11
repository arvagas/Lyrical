// library imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// component imports
import Landing from './landing/Landing'


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      {/* <Route path='/about' component={}/> */}
    </Switch>
  )
}

export default AppRouter
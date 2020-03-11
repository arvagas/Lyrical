// library imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// component imports


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/'>Home</Route>
      <Route path='/about'>About</Route>
    </Switch>
  )
}

export default AppRouter
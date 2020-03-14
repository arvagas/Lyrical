// library imports
import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
// component imports
import Landing from './landing/Landing'

// initialize google analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const AppRouter = () => {
  const location = useLocation()

  // will update ga every time a different page is navigated
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location])

  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      {/* <Route path='/about' component={}/> */}
    </Switch>
  )
}

export default AppRouter
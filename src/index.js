import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WithoutFormik from './WithoutFormik/WithoutFormik'
import WithFormik from './WithFormik/WithFormik'
import './styles.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WithoutFormik} exact />
        <Route path="/without-formik" component={WithoutFormik} exact />
        <Route path="/with-formik" component={WithFormik} exact />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React, { useEffect, useState } from 'react'
import { Route, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, history, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.token;
  useEffect(() => {
    // you can add a loading animation with this
    setLoading(true);
    const fn = () => {

      // if the token doesnt exist in our local storage, push back to homepage
      if (!token) {
        setLoading(false);
        history.replace("/")
      }
    }
    fn();
    setLoading(false);
  },[path, history, token])
  
  // we're trying to mimic a Route component here.
  const render = props =>
  token ? <Component {...props} /> : null;
  return <Route path={path} render={render} {...rest} loading={loading}/>;
}

export default withRouter(PrivateRoute)

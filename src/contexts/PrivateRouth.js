import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);
    console.log(user);
  });
  useEffect(() => {
    return unsubscribe;
  }, []);
  return (
    <Route
      {...rest}
      render={
        (routeProps) =>
          !user ? (
            <Navigate to={"/login"} />
          ) : (
            <RouteComponent {...routeProps} />
          )
        //

        //
      }
    />
  );
};

export default PrivateRoute;

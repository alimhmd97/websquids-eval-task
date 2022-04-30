// import React, { useEffect, useState } from "react";
// import { Navigate, Route } from "react-router-dom";
// import { Home } from "../components/HOME/Home";
// import { auth } from "../firebase";

// const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//   const [user, setUser] = useState(null);
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     setUser(user);
//     console.log(user);
//   });
//   useEffect(() => {
//     return unsubscribe;
//   }, []);
//   return (
//     <Route
//       {...rest}
//       render={
//         (routeProps) => (!user ? <Navigate to={"/login"} /> : <Home />)
//         //

//         //
//       }
//     />
//   );
// };

// export default PrivateRoute;

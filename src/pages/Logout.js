import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/AuthActions";

function Logout() {
  const authContent = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signOut = () => {
    return (dispatch) => {
      dispatch(logout(false, "", ""));
    };
  };

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  if (!authContent.isLoggedIn) {
    return <p>You are logged out of Stock Control.</p>;
  } else {
    return null;
  }
}

export default Logout;

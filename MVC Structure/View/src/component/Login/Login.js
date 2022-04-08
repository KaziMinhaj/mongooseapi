import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "firebase/analytics";
// Firebase App
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import login from "../../images/login.jpg";
import { firebaseConfig } from "./firebase.config";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  //google sign in
  const handleGoogleSignIn = () => {
    //add provider
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="row container-fluid">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img style={{ height: "500px" }} src={login} alt="" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline-success d-flex"
          >
            <FontAwesomeIcon className="m-3" icon={faGoogle} />
            <p className="m-2">Sign in with google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

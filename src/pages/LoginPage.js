import { Button } from "@material-ui/core";
import React from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";
import { base, fire } from "../firebase";

export default function LoginPage() {
  const enterWithGoogle = () => {
    const provider = new fire.auth.GoogleAuthProvider();
    base.auth().signInWithPopup(provider);
  };
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center pt-5'>
      {/* <TwitterIcon /> */}
      <h1>Login With</h1>
      <div className='py-3' />
      <Button size='large' variant='outlined' onClick={enterWithGoogle}>
        Google
      </Button>
    </div>
  );
}

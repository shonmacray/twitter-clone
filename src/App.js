import { useEffect, useState } from "react";
import "./App.css";
import { base } from "./firebase";
import AppStack from "./pages/appStacks";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    base.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  if (isLoggedIn) {
    return <AppStack  />;
  } else if (isLoggedIn === null) {
    return null;
  } else {
    return <LoginPage />;
  }
}

export default App;

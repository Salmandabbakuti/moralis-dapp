import { useMoralis } from "react-moralis";
import "./styles.css";

export default function App() {
  const { authenticate, logout, isAuthenticated, user } = useMoralis();
  return (
    <div className="App">
      {!isAuthenticated ? (
        <button onClick={() => authenticate({ signingMessage: "Welcome to Moralis Login With Ethereum" })}>Authenticate</button>
      ) : (
        <>
          <h1>Welcome, {user.get("ethAddress")}</h1>
          <button onClick={logout}>Signout</button>
        </>
      )}
    </div>
  );
}

import { useMoralis } from "react-moralis";
import "./styles.css";

export default function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  return (
    <div className="App">
      {!isAuthenticated ? (
        <button onClick={() => authenticate()}>Authenticate</button>
      ) : (
        <h1>Welcome {user.get("username")}</h1>
      )}
    </div>
  );
}

import "./styles.css";
import SearchUsers from "./components/SearchUsers";

export default function App() {
  return (
    <div className="App">
      <h1>Github Search Users</h1>
      <h2>Search for a user</h2>
      <SearchUsers />
    </div>
  );
}

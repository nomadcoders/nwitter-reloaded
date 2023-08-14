import { auth } from "../firebase";

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <h1>
      <button onClick={logOut}>Log Out</button>
    </h1>
  );
}

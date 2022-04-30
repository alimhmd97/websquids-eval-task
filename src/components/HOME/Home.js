import welcomeImg from "../../assets/1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
function Home() {
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div
      className={"text-primary"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img src={welcomeImg} />
      <button
        className={"btn btn-primary px-5 py-2"}
        style={{ width: "400px" }}
        onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export { Home };

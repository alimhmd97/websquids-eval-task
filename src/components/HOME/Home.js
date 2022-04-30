import welcomeImg from "../../assets/1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  return (
    <div className={"text-primary"}>
      {console.log(10)}
      <img src={welcomeImg} />
      <button className={"btn btn-primary px-5 py-2"} onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export { Home };

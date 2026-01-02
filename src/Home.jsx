import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname: "/data",
    });
  }
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>Go to data</button>
    </>
  );
}

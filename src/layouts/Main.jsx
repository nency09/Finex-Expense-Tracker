import { Outlet, useLoaderData } from "react-router-dom";


import wave from "../assets/wave.svg";
import "./Main.css"
import Nav from "../components/Nav";


import { fetchData } from "../helpers"


export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    // <div className="layout">
    //   <Nav userName={userName} />
    //   <main>
    //     <Outlet />
    //   </main>
    //   <img src={wave} alt="" />
    // </div>

  <div className="layout">
    <Nav userName={userName} />
    <main>
      <Outlet />
    </main>
    <div className="image-container">
      <img src={wave} alt="" />
      <div className="overlay-text">
        <p>Name: <span>Nency Shah</span></p>
        <p>Email: shahnency752@gmail.com</p>

      </div>

      
    </div>
  </div>
  )
}
export default Main
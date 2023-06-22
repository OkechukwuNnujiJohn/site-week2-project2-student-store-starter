import * as React from "react"
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import {BsCart4, BsX, BsList} from "react-icons/bs";
import "./Sidebar.css"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({
  isOpen,
  handleOnToggle,
}) {

  console.log(isOpen);

  // const sidebarWidth = isOpen ? "wider-than-350px" : "not-wider-than-150px";

  const toggleSidebar = () => {
    handleOnToggle(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
      {isOpen ? <FaTimes /> : <FaBars />}
        {/* <FaBars/> */}
      </button>
      {/* <RiMenu4Line /> */}
      {isOpen && (
        <>
          <BsCart4 />
        </>
      )}
    </section>
  );
}

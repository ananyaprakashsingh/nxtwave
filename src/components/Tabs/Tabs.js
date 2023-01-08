import React from "react";
import "./tabs.css";

const Tabs = ({ activeClass, setActiveClass, setPage }) => {
  const handleTabClick = (tabname) => {
    setActiveClass(tabname)
    setPage(1)
  }
  return (
    <div class="tab">
      <button
        class={`tablinks ${activeClass === "Resources" ? "active" : null}`}
        onClick={(e) => handleTabClick("Resources")}
      >
        Resources
      </button>
      <button
        class={`tablinks ${activeClass === "Requests" ? "active" : null}`}
        onClick={(e) => handleTabClick("Requests")}
      >
        Requests
      </button>
      <button
        class={`tablinks ${activeClass === "Users" ? "active" : null}`}
        onClick={(e) => handleTabClick("Users")}
      >
        Users
      </button>
    </div>
  );
};

export default Tabs;

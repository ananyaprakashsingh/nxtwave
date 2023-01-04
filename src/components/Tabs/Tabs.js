import React from "react";
import "./tabs.css";

const Tabs = ({ activeClass, setActiveClass }) => {
  console.log(activeClass);
  return (
    <div class="tab">
      <button
        class={`tablinks ${activeClass === "Resources" ? "active" : null}`}
        onClick={(e) => setActiveClass("Resources")}
      >
        Resources
      </button>
      <button
        class={`tablinks ${activeClass === "Requests" ? "active" : null}`}
        onClick={(e) => setActiveClass("Requests")}
      >
        Requests
      </button>
      <button
        class={`tablinks ${activeClass === "Users" ? "active" : null}`}
        onClick={(e) => setActiveClass("Users")}
      >
        Users
      </button>
    </div>
  );
};

export default Tabs;

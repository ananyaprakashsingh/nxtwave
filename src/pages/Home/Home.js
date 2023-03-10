import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Items from "../../components/Items/Items";
import SearchBar from "../../components/Search/SearchBar";
import Tabs from "../../components/Tabs/Tabs";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeClass, setActiveClass] = useState("Resources");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  let filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  if (activeClass !== "Resources") {
    filteredItems = filteredItems.filter(
      (item) => item.tag + "s" === activeClass.toLowerCase()
    );
  }
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      setItems(res.data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <div className="bg">
        <Tabs activeClass={activeClass} setActiveClass={setActiveClass} setPage={setPage}/>
        <SearchBar search={search} setSearch={setSearch} />
        {
          loading ?
            <h2 className="center">Loading...</h2> :
            <Items items={filteredItems} page={page} setPage={setPage} />
        }
      </div>
    </div>
  );
}

export default Home
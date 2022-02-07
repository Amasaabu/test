import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import axios from "axios";
import Card from "../../components/Card/Card";
import SearchBox from "../../components/SearchBox/SearchBox";
const Home = () => {
  const [games, setGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const getGames = async () => {
      const { data } = await axios.get(
        "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
      );
      //   console.log(data);
      setGames(data);
    };
    getGames();
  }, []);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       const filtered = games.filter((it) => {
  //         console.log("filtering");
  //         return it.name.toString() == searchInput.toString();
  //       });
  //     });
  //   }, [games]);
  const sortByName = (input) => {
    console.log(input);
    const filter = games.filter((it) => {
      return it.name.toString() === input.toString();
    });
    if (filter.length) {
      setGames(filter);
    }
  };
  const sortBySelect = (val) => {
    const value = val.target.value;
    if (value.toString() === "date") {
      const arr = [...games];
      arr.sort((a, b) => b.first_release_date - a.first_release_date);
      setGames(arr);
    }
    if (value.toString() === "ratings") {
      const arr = [...games];
      arr.sort((a, b) => b.rating - a.rating);
      setGames(arr);
    }
  };
  const clear = () => {
    const getGames = async () => {
      const { data } = await axios.get(
        "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
      );
      //   console.log(data);
      setGames(data);
    };
    getGames();
  };
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <SearchBox
          sortBySeclect={sortBySelect}
          searchInput={searchInput}
          sortByName={sortByName}
          clear={clear}
        />
      </div>
      <div className={classes.cards}>
        {games.length === 0 ? <h2>Loading...</h2> : <Card games={games} />}
      </div>
    </div>
  );
};

export default Home;

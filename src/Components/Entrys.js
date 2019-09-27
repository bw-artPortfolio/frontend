import React, { useState, useEffect } from "react";
import axios from "axios";
import Entry from "./Entry";
import { Route } from "react-router-dom";

const Entrys = () => {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    axios
      .get("https://art-portfolio-backend.herokuapp.com/api/entries/")
      .then(res => {
        setEntries(res.data.entries);
        // console.log('App.js -> %cres:', 'color: magenta', entries)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {Array.from(entries).map(entry => {
        return (
          <div>
            {/* <EntryCard id={entry.id} {...entry}/> */}
            <Route
              path="/entrys"
              component={Entrys}
              render={props => {
                return <Entry id={entry.id} entry={entry} />;
              }}
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Entrys;

import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  //this consts is just for alternate URL to fetch in localhost desktop and smartphone (development mode)
  // const url = ["http://192.168.15.120:3000/api/data.json", "http://localhost:3000/api/data.json"];
  const url2 = `${window.location.origin}/api/data.json`;
  // const screen = window.innerWidth;
  //---

  useEffect(async () => {
    const response = await fetch(url2);
    const json = await response.json();
    setJobs(json);
    setData(json);
  }, []);

  useEffect(() => {
    if (filter != '') {
      setJobs(data);
      jobs.map(job => {
        filter.map(f => {
          setJobs(oldArray => (
            oldArray.filter(value => value.role === f || value.level === f || value.tools.includes(f) || value.languages.includes(f))
          ))
        })
      })
    } else {
      setJobs(data);
    }
  }, [filter]);

  return (
    <GlobalContext.Provider value={{ jobs, filter, setFilter }}>
      {children}
    </GlobalContext.Provider>
  );
};
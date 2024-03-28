import React, { useContext } from 'react';

import styles from './tag.module.css';
import { GlobalContext } from '../../Context/JobsContext';

const Tag = ({ title }) => {
  const { filter, setFilter } = useContext(GlobalContext);

  function handleClick() {
    if (!filter.includes(title)) {
      setFilter(oldArray => [...oldArray, title]);
    }
  }

  return (
    <div className={`me-2 `} onClick={handleClick}>
    <button className={`btn bg-color2 text-color mb-2 fw-bold  ${styles.tag}`}>{title}</button>
      {/* <strong>{title}</strong> */}
    </div>
  )
}

export default Tag;
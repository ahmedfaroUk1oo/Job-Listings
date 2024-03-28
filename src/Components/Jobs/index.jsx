import React, { useContext } from 'react';

import styles from './jobs.module.css';

import Filter from '../Filter/index';
import Description from '../Description';
import { GlobalContext } from '../../Context/JobsContext';


const Jobs = () => {
  const { jobs, filter } = useContext(GlobalContext);

  return (
    <div className={`container ${filter == '' && styles.pddTop}`}>
      {filter != '' && <Filter />}
      {jobs.map(job => {
        return <Description job={job} key={job.id} />
      })}
    </div>
  )
}

export default Jobs;
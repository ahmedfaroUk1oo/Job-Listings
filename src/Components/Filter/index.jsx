import React, { useContext } from 'react'
import style from './Filter.module.css'
import { GlobalContext } from '../../Context/JobsContext';

export default function Filter() {
  const { filter, setFilter } = useContext(GlobalContext);

  function handleRemove(item) {
    setFilter(filter.filter(value => value !== item))
  }

  function handleClear() {
    setFilter([]);
  }

    
  return (
    <>
     <div className="container py-5">
        <div className="row g-3 align-items-center bg-white p-2 my-3 shadow rounded-2">
            <div className="col-md-12 ">
           <div className="content d-flex flex-wrap justify-content-between  align-items-center">
            <div className="filter">
           {filter != '' && filter.map((item,index)=> <button key={index} className='btn bg-color2 fw-bold text-color me-1 mb-2' >{item} <button className='btn bg-color fw-bold  text-white' onClick={() => handleRemove(item)}>x</button></button>)}

            </div>
            <div className="clear"><button className='btn' onClick={handleClear}>Clear</button></div>
           </div>
            </div>
        </div>
    </div> 
      
    </>
  )
}

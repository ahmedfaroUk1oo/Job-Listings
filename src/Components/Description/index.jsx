import React from 'react';
import style from './description.module.css';
import Tag from '../Tag/index';

const Description = ({ job }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <>
    
      
          <div
            key={job.id}
            className={`row position-relative g-3 align-items-center bg-white p-2 my-3 shadow rounded-2  ${style.borderStart}`}
          >
            {/* {item.logo} */}
            <div
              className={`col-md-2 col-2 col-sm-2 col-lg-1  p-3 ${style.img}`}
            >
              <div className={`img}`}>
                <img src={job.logo} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="title d-flex align-items-center mb-2">
                <p className=" m-0 text-color fw-bold me-2">{job.company}</p>
                <div className="new d-flex flex-wrap ">
                  {job.new && (
                    <p
                      className={` m-0 text-center bg-color   text-white me-2 p-2 mb-1 rounded-2 `}
                    >
                      NEW!
                    </p>
                  )}
                  {job.featured && (
                    <p
                      className={`m-0  text-center bg-black  p-2  text-white rounded-2 `}
                    >
                      FEATURED
                    </p>
                  )}
                </div>
              </div>
              <div className="content">
                <h5>{job.position}</h5>
              </div>
              <div className="time d-flex align-items-center flex-wrap">
                <p className="text-muted m-0 me-3">{job.postedAt}</p>
                <span className="text-muted me-3">.</span>
                <p className="text-muted m-0 me-3">{job.contract}</p>
                <span className="text-muted me-3">.</span>
                <p className="text-muted m-0 ">{job.location}</p>
              </div>
            </div>
            <div className="col-md-5 d-flex flex-wrap">
            {tags.map(tag => {
          return <Tag key={tag} title={tag} />
        })}
            </div>
          </div>
       
    
  
    </>
  )
}

export default Description;
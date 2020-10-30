import React from 'react';
import Projects from '../Projects/Projects';
import ShowProjects from '../ShowProjects/ShowProjects';

const HomeProjects = () => {
    console.log(Projects)
    return (
        <div className="container mt-5 mb-5" id="project">
           <div className="row">
               <div className="col-md-6">
                    <h2 className="mb-4">My Projects</h2>
               </div>
               <div className="col-md-6 text-right">
                    <a href="/seeAll">See All</a>
               </div>
           </div>
           <div className="row" style={{marginRight: "0px", marginLeft: "0px"}}>
            {
                Projects.map(data => <ShowProjects data={data}></ShowProjects>)
            }
           </div>
        </div>
    );
};

export default HomeProjects;
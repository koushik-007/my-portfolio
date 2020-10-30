import React from 'react';
import travel from '../images/travel-guru.png'
const ShowProjects = ({data}) => {
    
    return (
        <div class="card-deck col-md-4 mr-2">
            <div class="card">
                <img src={travel} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{data.projectName}</h5>
                <p class="card-text">{data.projectDetails}</p>
                </div>
                <div class="row container pb-3">
                    <div className="col-md-6">
                        <a href={data.githubLink} target="_blank">Github</a>
                    </div>
                    <div className="col-md-6">
                        <a href={data.websiteLink} target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProjects;
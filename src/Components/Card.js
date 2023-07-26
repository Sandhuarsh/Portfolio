import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react'

const Card = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val,ind)=>{
                     return(
                        <WorkCard key={ind} imgsrc={val.imgrc} text={val.text} title={val.title} view={val.view} source={val.source}/>
                     )
                })}
            </div>

        </div>
    )
}

export default Card;

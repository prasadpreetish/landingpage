import React from "react";
import Featurecards from "./Featurecards";

function Feature(){
    return <div className="featurecontainer">
        <div className="feature--heading--banner">
            <h2 className="bold featureheading">Beautiful and easy to use UI, professional animations and drag and drop feature</h2>
            <p className="faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div style={{overflowY: "hidden"}} id="feature--cards--holder">
            <Featurecards/>
            <Featurecards/>
            <Featurecards/>
            <Featurecards/>
        </div>
    </div>
}

export default Feature;
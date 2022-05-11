import "./style/story.css"
import cristian from "../files/aurora.jpg"
import React from "react"

function oi() {


    return (
        <div className="containerstory">
            <div className="gradient">
                <div className="containerstoryimg" >
                    <img src={cristian}></img>
                </div>
            </div>
            <div>
                <h2>auroraseles</h2>
            </div>
        </div>

    )

}

export default oi;
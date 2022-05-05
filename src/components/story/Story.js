import "./style/story.css"
import cristian from "./imagem/cristianferreiradeoliveira.jpg"
import React from "react"

function oi() {

    let currentScrollPosition = 0;
    let scrollAmount = 320;

    const sCont = document.querySelector(".story-container");
    const hScroll = document.querySelector(".horizontal-scroll");
    const btnScrollLeft = document.querySelector("#btn-scroll-left");
    const btnScrollRight = document.querySelector("#btn-scroll-right");

    btnScrollLeft.getElementsByClassName.opacity = "0";

    let maxScroll = -sCont.offsetWidth - hScroll.offsetWidth;
    function scrollHorizontally(val) {


        currentScrollPosition += (val * scrollAmount);

        if (currentScrollPosition > 0) {
            currentScrollPosition = 0
            btnScrollLeft.getElementsByClassName.opacity = "0";
        } else {
            btnScrollLeft.style.opacity = "1"
        }

        if (currentScrollPosition < maxScroll) {
            currentScrollPosition = maxScroll
            btnScrollRight.style.opacity = "0";
        } else {
            btnScrollRight.style.opacity = "1";
        }
        sCont.style.left = currentScrollPosition + "px";
    }
    return (
        <div className="containerstory">
            <div className="horizontal-scroll">
                <button className="btn-scroll" id="btn-scroll-left" onClick={this.scrollHorizontally(1)} >direita <i className="fa fa-chevron-left"></i></button>
                <button className="btn-scroll" id="btn-scroll-right" onClick={this.scrollHorizontally(-1)} >esquerda <i className="fa fa-chevron-right"></i></button>

                <div className="storys-container">

                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                    <div className="story-circle"><img src={cristian} all="ke"></img></div>
                </div>
            </div>
        </div>

    )

}

export default oi;

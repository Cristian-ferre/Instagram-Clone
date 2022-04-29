import React from "react";
import "../../App.css"
import "./style/Header.css"

import home from "./imagens/home.svg"
import pic from "./imagens/publish.svg"
import imagemUsuario from "../header/imagens/cristian_tocando.jpg"
import curtidasSerguidas from "../header/imagens/like.svg"


export default (props) => {
    return (

        <div className="app__header">
            <div className="app__headerWrapper">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo" title="Instagram original logo"
                />
                <div className="app__headerButtons">
                    <img src={curtidasSerguidas} className="app__headerButtons"  alt="" />
                    <img src={pic} alt="" />
                    <img src={home} alt="" />
                </div>
            </div>
        </div>

    )
}
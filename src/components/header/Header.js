import React from "react";
import "../../App.css"
import "./style/Header.css"

import Save from "./icons/save.svg"
import like from "./icons/like.svg"
import explore from "../header/icons/explore.svg"
import publish from "./icons/publish.svg"
import home from "./icons/home.svg"
import direct from "./icons/direct.svg"
import comment from "./icons/comment.svg"
import proaIcone from "./icons/proa-icone.png"
import busca from "./icons/procurar.svg"




export default (props) => {
    return (

        <div className="border" >
            <div className="container">
                <div className="">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt="Instagram original logo" title="Instagram original logo"
                    />
                </div>
                <div className="buscaIcones">

                    <div className="busca">
                        <input autoCapitalize="none" type="text" placeholder="Pesquisar" />
                        <img className="iconeBusca" role="img" src={busca} />
                    </div>

                    <div className=" icones">
                        <img src={home} className="tamanhoIcones" alt="" />
                        <img src={direct} className="tamanhoIcones" alt="" />
                        <img src={publish} className="tamanhoIcones" alt="" />
                        <img src={explore} className="tamanhoIcones" alt="" />
                        <img src={like} className="tamanhoIcones" alt="" />
                        <img src={proaIcone} className=" fotoPerfil" alt="" />

                        {/* <img src={Save} className="tamanhoIcones" alt="" />
                        <img src={comment} className="tamanhoIcones" alt="" />*/}
                    </div>
                </div>
            </div>
        </div>

    )
}
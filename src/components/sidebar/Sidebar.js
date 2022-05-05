import React from "react"
import "./style/sidebar.css"
import fotoPerfil from "./imagens/cristianferreiradeoliveira.jpg"
import institutoProa from "./imagens/institutoproa.png"
import apadrinheMe from "./imagens/apadrinhe-me.logo.jpeg"
import gaaugusto from "./imagens/gaaugusto.jpg"
import marcelababyenxovais from "./imagens/marcelababyenxovais.jpeg"

export default (props) => {
    return (
        <div className="sidebar">
            <div>
                <div>
                    <div className="estrura_img_perfil" >
                        <img className="imgstory" src={fotoPerfil} alt="" />
                    </div>
                    <h2 >Cristianf_Olv</h2>
                </div>
                <h3>mudar</h3>
            </div>

            <div className="sugestoes">
                <p>Sugestões para ti</p>
                <h3 >Ver todas</h3>
            </div>

            <div>
                <div >
                    <div className="estrura_img_perfil">
                        <img className="imgsugetoes  " src={institutoProa} alt="" />
                    </div>
                    <h2>instituto.proa</h2>

                </div>
                <h3>Seguir</h3>
            </div>

            <div>
                <div>
                    <div className="estrura_img_perfil"><img className="imgsugetoes" src={gaaugusto} alt="" /></div>
                    <h2>gab.augustoz</h2>
                </div>
                <h3>Seguir</h3>
            </div>

            <div>
                <div>
                    <div className="estrura_img_perfil"><img className="imgsugetoes" src={apadrinheMe} alt="" /></div>
                    <h2>Apadrime.me</h2>
                </div>
                <h3>Seguir</h3>
            </div>

            <div>
                <div >
                    <div className="estrura_img_perfil" ><img className="imgsugetoes" src={marcelababyenxovais} alt="" /></div>
                    <h2>marcelababyenxovais</h2>
                </div>
                <h3>Seguir</h3>
            </div>

            <div className="footerSidebar">
                <ul><li>Sobre </li><li>Ajuda</li><li>Imprensa</li><li>API</li><li>Empregos</li>
                    <li>Privacidade</li><li>Termos</li><li>Localizações</li><li>
                        Contas
                        principais
                    </li><li>Hashtags</li><li>Idioma</li>
                </ul>

                <p>© 2022 INSTAGRAM FROM META</p>
            </div>
        </div >


    )
}
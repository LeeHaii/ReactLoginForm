import { useState, useEffect } from "react";
import FazbearVideo from '../../assets/freddy.mp4'
import './Fazbear.css'

function Fazbear(){

    return(
        <>
            <div className="all">
                <div className="txtThuong">Rim thương otry lắm!!!!</div>
                <div className="video">
                    <video src={FazbearVideo} controls></video>
                </div>
            </div>
        </>
    )
}

export default Fazbear 
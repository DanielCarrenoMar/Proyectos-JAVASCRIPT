import React, { useState } from "react";

export function Icon({name, icon, size, heigth, link, image}) {
    function typeIcon() {
        if (image == null) {
            return(
                <div className="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height={heigth} viewBox={`0 0 280 ${size}`} focusable="false">
                        <path d={icon}></path>
                    </svg>
                </div>
            )
        }else{
            return(
                <div className="Avatar">
                    <img src={image} alt={name} height={25}/>
                </div>
            )
        }
    }

    return (
        <div className="ColumnsItem">
            <a href={link}>
                <div className="Icon">
                    {typeIcon()}
                </div>
                <div className="ColumsItemText">
                    {name}
                </div>
            </a>
        </div>
    )

}
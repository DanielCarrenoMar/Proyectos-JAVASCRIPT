import React, { useState } from "react";

export function Icon({name, icon, size, heigth, link}) {

    return (
        <div className="ColumnsItem">
            <a href={link}>
                <div className="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height={heigth} viewBox={`0 0 280 ${size}`} focusable="false">
                        <path d={icon}></path>
                    </svg>
                </div>
            </a>
        </div>
    )
}
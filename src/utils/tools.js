
import React from "react";
import {Link} from "react-router-dom";

import { toast } from 'react-toastify';


import mCityLogo from "../Resources/images/logos/manchester_city_logo.png";

export const CityLogo=(props)=>{
    const templates=<div className="img_cover"
        style={{ 
            width:props.width,
            height:props.height,
            background:`url(${mCityLogo}) no-repeat` 
        }}
    ></div>

    if(props.link){
        return(<Link  className="link_logo" to={props.linkTo}>
                {templates}
            </Link>)
    }else{
        return templates;
    }
}

export const showToastError=(msg)=>{
    toast.error(msg,{
        position:toast.POSITION.TOP_CENTER
    })
}

export const showToastSuccess=(msg)=>{
    toast.success(msg,{
        position:toast.POSITION.TOP_CENTER
    })
}
import React,{useState} from 'react'
import { Animate } from 'react-move'
import { easePolyOut } from 'd3-ease'


const Test = () => {
    const [show,setShow]=useState(true)
    return (
        <>
            <Animate
                show={show}
                start={{ 
                    color:"white",
                    marginTop:"1.2rem",
                    fontSize:"2rem",
                    backgroundColor:"tomato",
                    opacity:1,
                    width:500,
                    height:200

                 }}
                 enter={{ 
                     width:[120],
                     height:[60],
                     opacity:[1],
                     timing:{
                         duration:1000,
                         delay:1000,
                         ease:easePolyOut
                     }

                  }}
            >
                {({color,backgroundColor,opacity,width,height,marginTop,fontSize})=>(
                    <div style={{ color,backgroundColor,opacity,width,height,marginTop,fontSize }}>
                        Testing
                    </div>
                )}
            </Animate>
        
        </>
        
    )
}

export default Test

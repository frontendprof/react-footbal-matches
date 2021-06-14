import React from 'react'
import { Animate } from 'react-move'
import { easePolyOut } from 'd3-ease'


let stripesState=[
    {
        id:34235656,
        background:"#98c5e9",
        left:120,
        rotate:25,
        top:260,
        delay:0
    },
    {
        id:34212656,
        background:"#ffffff",
        left:360,
        rotate:25,
        top:-394,
        delay:200
    },
    {
        id:91235653,
        background:"#98c5e9",
        left:600,
        rotate:25,
        top:-498,
        delay:400
    }
]

const Stripes = () => {

    const handleShowStripe=()=>(
        stripesState.map(st=>(
            <Animate
                key={st.id}
                show={true}
                start={{
                    background:"#ffffff",
                    left:0,
                    rotate:0,
                    top:0,
                    delay:0
                }}
                enter={{ 
                    background:`${st.background}`,
                    opacity:[1],
                    left:[st.left],
                    rotate:[st.rotate],
                    top:[st.top],
                    timing:{
                        delay:st.delay,
                        duration:200,
                        ease:easePolyOut
                    }
                 }}
            >
                {({opacity,left,top,rotate,background})=>{
                    <div className="stripe" style={{ opacity,background,
                        transform:`rotate(${rotate}deg) translate(${left}px ${top}px)`
                    }}>

                    </div>
                }}
            </Animate>
        ))
    )

    return <div className="featured_stripes">{handleShowStripe()} </div>;

}

export default Stripes

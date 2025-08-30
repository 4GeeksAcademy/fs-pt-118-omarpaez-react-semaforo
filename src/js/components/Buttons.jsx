import React from "react";


const Buttons = (props) => {
    /*console.log(props)*/
    return (

        <>
            <button onClick={props.onSelect} className={`btn btn-${props.color} me-2`} type="button">{`${props.label}`}</button>

        </>

    )
}


export default Buttons
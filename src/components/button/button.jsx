import React from "react";

const button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default button;
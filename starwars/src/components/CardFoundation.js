import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const CardFoundation = props => {
    return (
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <div>
        <Toast>
            <ToastHeader tag = "h3"> {props.name} </ToastHeader>
            <ToastBody tag = "h5">Birth year: {props.birthyear}</ToastBody>
            <ToastBody tag = "h5"><a href = {props.homeworld}>Homeworld</a> </ToastBody>
        </Toast>
        </div>
        </div>
    );
};

export default CardFoundation;
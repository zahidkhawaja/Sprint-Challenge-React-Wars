import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CardFoundation = props => {
    return (
        <Card>
            <CardTitle> Name: {props.name} </CardTitle>
            <CardSubtitle> Homeworld: {props.homeworld} </CardSubtitle>
        </Card>
    );
};

export default CardFoundation;
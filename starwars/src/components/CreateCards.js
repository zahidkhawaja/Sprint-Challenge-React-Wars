import React, { useState, useEffect } from "react";
import CardFoundation from "./CardFoundation";
import axios from "axios";

const CreateCards = () => {
    const [starwars, setStarWars] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                setStarWars(response.data.results);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            });
            }, []);

    return (
        <div>
        {starwars.map(object => (
            <CardFoundation name = {object.name} homeworld = {object.homeworld}/>
        ))}
        </div>
    );

}

export default CreateCards;


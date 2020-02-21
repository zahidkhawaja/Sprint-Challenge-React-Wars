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
        <div className = "container">
        <div className = "cards">
        {starwars.map(object => (
            <CardFoundation name = {object.name} birthyear = {object.birth_year} homeworld = {object.homeworld}/>
        ))}
        </div>
        </div>
    );

}

export default CreateCards;


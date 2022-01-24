import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import "./TinderCards.css";



function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get("/tinder/cards")

            setPeople(req.data);
        }
        fetchData();
    }, []);

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }


    return ( <
        div className = 'tinderCards' >

        <
        div className = 'tinderCard_cardContainer' > {
            people.map((person) => (

                <TinderCard className = "swipe"
                key = { person.name }
                onSwipe = {
                    (dir) => swiped(dir, person.name) }
                onCardLeftScreen = {
                    () => outOfFrame(person.name) }
                preventSwipe = {
                    ['up', 'down'] } >
                <div style = {
                    { backgroundImage: `url(${person.imgUrl})` } }
                className = "card" >
                <h3> { person.name } </h3> 
                </div>

                </TinderCard>

            ))
        } </div> 
        </div>
    );


}

export default TinderCards;
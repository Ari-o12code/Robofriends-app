import React from "react";
import Card from "./Card";


const CardList = ({robots}) =>{
    return(
        <div>
            {robots.map((user, i)=>{
                return (
                <Card key = {i} 
                {...user}
                />
                );
                })
            } 
        </div>
    );
}

export default CardList;
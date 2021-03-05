import React from 'react'

const PersonCard = (props) => {
    return (
        <div className="person-div">
            <p className="first-name">{props.person.name.first} {props.person.name.last}</p>
            <img className="img" alt="none" src={props.person.picture.medium}></img>
        </div>
    )
}

export default PersonCard;
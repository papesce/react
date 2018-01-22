import React from "react";
import People from "./People";

const PeopleList = ({peopleL}) => {
  return (
  <div>
    <ul>
    {peopleL.map((people, index) => {
      return <li key={index}>
         <People people={people}/>
      </li>
    })}
    </ul>
  </div>
 )}

export default PeopleList;
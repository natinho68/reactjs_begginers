import React from 'react';
import Person from './Person';

function NameList() {
    /*const names = ['Tony', 'Peter', 'Bruce'];*/
    const persons = [
        {
            id: 1,
            name: 'Tony',
            age: 36,
            skill: 'technology science'
        },
        {
            id: 2,
            name: 'Peter',
            age: 24,
            skill: 'reporting'
        },
        {
            id: 3,
            name: 'Bruce',
            age: 34,
            skill: 'human science'
        },
    ];
    /*const nameList = names.map(name => <h2>{name}</h2>);*/


    const personList = persons.map((person, index) => <Person key={index} person={person} />);
    return (
        /*<div>{nameList}</div>*/
        <div>{personList}</div>
    );
}

export default NameList;

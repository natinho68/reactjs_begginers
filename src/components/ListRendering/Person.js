import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age}, and I am good at {person.skill}</h2>
        </div>
    );
}

export default Person;

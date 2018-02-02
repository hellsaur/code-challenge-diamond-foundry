import React from 'react';


const Employee = function(props) {

    return(
        <div className="members">
        {props.members.map(member => (
            <div key={member.id} onClick={() => props.selectEmployee(member.id)} className="diamonds">
                <img src={member.thumb} draggable="false" alt=""/>
            </div>
        ))}
    </div>
    )
}

export default Employee;
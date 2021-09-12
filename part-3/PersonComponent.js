function PersonComponent(props) {
    const canVote = props.age > 18;
    const longName = props.name.length > 6;
    return (
        <div>
           <p>Learn some more information about this person</p> 
           <p>{longName? props.name.substring(0,7) : props.name}</p>
           <h3>{canVote ? "please go vote" : "you must be 18"}</h3>
           <ul>Hobbies {props.hobbies.map(hobby => <li>{hobby}</li>)}</ul>
        </div>
    )
}

function ChildComponent(props) {

    return (
    <div>
        {props.votes.name} had a total vote count of {props.votes.count}
        <p>{props.phrase}</p>
       <p>Hello World from ChildComponent</p> 
    </div>)
}

export default ChildComponent;
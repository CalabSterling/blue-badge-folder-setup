import ChildComponent from '../Votes/ChildComponent';

function ParentComponent(props){

    const votes = [
        { name: "Abe Lincoln", count: 139033 }, 
        {name: "Stephen Douglas", count: 11509}
    ]

    return (
    <div>
        Hello from ParentComponent
        {votes.map(vote=> <ChildComponent votes = {vote} phrase = {props.phrase}/>)}
        
    </div>
    )
}

export default ParentComponent;
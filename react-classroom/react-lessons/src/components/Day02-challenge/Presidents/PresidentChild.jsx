function PresidentChild(props) {
    const year = props.president.passed - props.president.year;

    return (
        <div>
            {props.president.first} {props.president.last} {year}
        </div>
        )
}

export default PresidentChild;

//President Child is responsible for displaying the information

//President Parent it's responsible for using the map feature and have it call the child

//Bronze: See if you can display all the presidents first and last name by using the .map

// Silver: Create a filtered Array of so that the child will only display the presidents that are alive (map and filter)

//Gold: Display all presidents that have died and display the age that they did die

const Hello = ({name, age}) => {
    //const name = props.name;
    //const age = props.age;

    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old!
            </p>
            <p>
                So you were probably born in {bornYear()}, huh?
            </p>
        </div>
    )
}


export default Hello;
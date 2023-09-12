class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//Does not work in browser console - Must be bound to window object window.adam/window.janja or defined without var, let, or const
const adam = new Person("Adam Ondra the Greatest Climber Ever", 29)
adam.greet();

const janja = new Person("Janja Garnbret", 23);
janja.greet();

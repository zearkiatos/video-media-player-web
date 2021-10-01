function getThis() {
    return this;
}

function whoIsThisStrict() {
    "use strict";
    console.log(`whoIsThisStrict: ${getThis()}`)
}

const person = {
    name: 'Gabriel',
    greet: function () {
        console.log(`Hi I'm ${this.name}`);
    }
}

function Person (name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`My name is ${this.name}`);
}

export default {
    getThis,
    whoIsThisStrict,
    person,
    Person
}
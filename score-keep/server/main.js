import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(function () {
    // class Person {
    //     constructor(name = 'Anon', age = 0) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     getGreetings() {
    //         return `Hi! ${this.name}`;
    //     }

    //     getPersonDescription() {
    //         return `${this.name} is ${this.age} year(s) old.`;
    //     }
    // };

    // class Proger extends Person {
    //     constructor(name, age, lang = 'assembly') {
    //         super(name, age);
    //         this.lang = lang;
    //     }

    //     getGreetings() {
    //         if (this.lang) {
    //             return `Hi! I am ${this.name}. I am ${this.lang} developer`;
    //         } else {
    //             return super.getGreetings();
    //         }
    //     }
    // }

    // let me = new Proger();
    // console.log(me.getGreetings());
});

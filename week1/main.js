class Person {
    constructor(name, title, age) {
        this.name = name;
        this.title = title;
        this.age = age;
    }
}
const cards = document.querySelectorAll(".card");
const Maria = new Person("Maria", "CEO", 29);
const Kati = new Person("Kati", "Developer", 25);
const Karin = new Person("Karin", "Designer", 45);
const persons = [Maria, Kati, Karin];
let card;

function templateText(person) {
    let template = `<h2>${person.name}</h2><p>Title: ${person.title}</p><p>Age: ${person.age}</p>`
    return template;
}

function populateCard() {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < persons.length; i++) {
        let cardText = templateText(persons[i]);
        console.log(cards[i]);
        let text = document.createElement('div');
        cards[i].appendChild(text);
        text.innerHTML = cardText;
        console.log(cardText);
    }
}

window.onload = function () {
    populateCard();
}
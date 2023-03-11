//variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {quote: " The best way to find yourself is to lose yourself in the service of others. ",person: "mathatma Ghandi"},
    {quote: " If you want to live a happy life, tie it to a goal, not to people or things.",person:"Alberti Einstein"},
    {quote: " at his best, man is the noblest of all animals, separated from law and justice he is the worst.",person : "Aristotle"},
    {quote: " Your time is limited, so don't waste it living someone else's life. ", person:"Steve Jobs"},
    {quote: " Your existence lies down with your dead body but your deed doesn't.", person:"Abu Rayhan"},
    {quote: " God fear is good but when you use it to fullfill your intention; it's the worst", person:"Abu Rayhan"},
    {quote: "You name doesn't define who you are but you action does.", person: "Abraham Lincoln"}
];

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;

})

console.log(document.getElementById (`message`).innerHTML);

const user_age = prompt("Qual'è la tua età?")

console.log(user_age);

const user_kilometers = prompt("Qual'è il numero di chilometri che vuoi percorrere?")

console.log(user_kilometers);

const ticket_price = user_kilometers * 0.21;

console.log(ticket_price);


if (user_age < "18") {
    console.log (ticket_price - ticket_price * 20 / 100);
}

else if (user_age > "65") {
    console.log (ticket_price - ticket_price * 40 / 100);
}

else {
    console.log (ticket_price);
}

message.innerHTML = `Il prezzo del tuo biglietto sarà: ${ticket_price}`


    
   
    
 


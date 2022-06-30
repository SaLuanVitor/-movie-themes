
//Crie 3 variáveis, cada uma com um array:
//-Comedy
//-Action
//-Fantasy

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year:

//*DESAFIO EXTRA*

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

let comedy = [
    {
        title: "Don't Look Up",
        director: "Adam McKay",
        year: 2021
    },
    {
        title: "Red Notice",
        director: "Rawson Marshall Thurber",
        year: 2021
    },
    {
        title: "Scary Movie",
        director: "Keenen Ivory Wayans",
        year: 2000
    }
];

let action = [
    {
        title: "Rush Hour",
        director: "Brett Ratner",
        year: 1998
    },
    {
        title: "Bad boys for life",
        director: ["Bilall Fallah", "Adil El Arbi"],
        year: 2020
    },
    {
        title: "Kingsman: The Secret Service",
        director: "Matthew Vaughn",
        year: 2015
    }
];

let fantasy = [
    {
        title: "about time",
        director: " Richard Curtis",
        year: 2013
    },
    {
        title: "real steel",
        director: "Shawn Levy",
        year: 2011
    },
    {
        title: "Spider-man 2",
        director: "Sam Raimi",
        year: 2004
    }
];


if (fantasy.length >= 1) {
    console.log("MY FAVORIT MOVIE IS", fantasy[1].title.toUpperCase());
} else {
    console.log("NOT EVEN 5 STARS... but i like", fantasy[2].title);
}
/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


//Creo un oggetto che descriva uno studente
let studente = {
    nome : "Antonio",
    cognome : "Russo",
    eta : 24
}

//Stampo le proprietà
console.log("INFORMAZIONI PRIMO STUDENTE SINGOLO.")
for (let key in studente) {
    console.log(key + " : " + studente[key]);
}

//Creo un array di oggetti di studenti.
let studenti = [
    {
        nome : "Harry",
        cognome : "Potter",
        eta : 25
    },
    {
        nome : "Hermione",
        cognome : "Granger",
        eta : 26
    },
    {
        nome : "Ronald",
        cognome : "Weasley",
        eta : 25
    },
    {
        nome : "Albus Percival Wulfric Brian",
        cognome : "Silente",
        eta : 115
    }
]

//"pusho" il primo studente inserito in precedenza
studenti.push(studente);

// richiamo funzione per chiedere i dati all'utente
userStudent();

// richiamo funzione per inserire l'oggetto nell'array "studenti"
putInArray(studenti, userInfo);

//Stampo le proprietà di tutti gli studenti dell'array
console.log("INFORMAZIONI ARRAY STUDENTI.")
for (let i = 0; i < studenti.length; i++) {
    for (let key in studenti[i]) {
        console.log(key + " : " + studenti[i][key])
    }
}

/* -----FUNZIONI----- */

/* Funzione che:
    - Chiede all'utente i dati tramite prompt
    - Inserisce questi ultimi in un oggetto
*/
function userStudent() {
    //Chiedo i dati
    let userName = prompt("Inserisci il nome");
    let userSurname = prompt("Inserisci il cognome");
    let userEta = parseInt(prompt("Inserisci l'età"));
    //Creo oggetto per l'utente
    userInfo = {};
    userInfo.nome = userName;
    userInfo.cognome = userSurname;
    userInfo.eta = userEta;
}

// Funzione per inserire un oggetto in un array.
function putInArray (array, object) {
    array.push(object);
}
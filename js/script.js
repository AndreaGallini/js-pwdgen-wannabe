// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)




let nomeUtente = prompt( 'Inserisci il tuo nome ');

let cognomeUtente = prompt( 'Inserisci il tuo cognome ');

let coloreUtente = prompt( 'Quale è il tuo colore preferito ? ');

let etaUtente = prompt( 'Quanti anni hai ? ');


console.log(nomeUtente, cognomeUtente, coloreUtente, etaUtente);

document.getElementById("main_title").innerHTML =
   nomeUtente + cognomeUtente + coloreUtente + etaUtente;

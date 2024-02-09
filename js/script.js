// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

// otteniamo l'ora attuale

const now = new Date();
const targetDate = new Date();


// imposto la data e l'ora per lunedi alle 9.30
// questo comando i resituisce il giorno attuale
targetDate.setDate((targetDate.getDate() - (1 + 7 - targetDate.getDay())) % 7);

targetDate.setHours(9, 30, 0, 0);

console.log(targetDate);


// calcoliamo la differenza

const timeDifference = targetDate.getTime() - now.getTime();

// creiamo una funzione per convertire i ms in ore,minuti e sec

function formatTime(ms) {
    const seconds =Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 / 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//ora creiamo la funzione del countdown

function updateCountdown() {
    const currentTime = new Date();

    const remainingTime = targetDate.getTime() - currentTime.getTime();


    if (remainingTime > 0) {
        ocument.getElementById('countdown').innerText = formatTime(remainingTime);
    } else {
        document.getElementById('countdown').innerText = "Il countdown è scaduto!";
    }

}
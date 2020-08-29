//Prato Fiorito
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    //bonus
    //all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
    // con difficoltà 0 => tra 1 e 100
    // con difficoltà 1 =>  tra 1 e 80
    // con difficoltà 2 => tra 1 e 50


    ////////////////////////////////////////////////////////START////////////////////////////////////////////////

    var numBombe = 48; 
    var campoMinato = [];
    var tentativi = 1; 
    var limiteCiclo = 50;


    //1. scelta livello
    console.log(selectLevel());

    //2. generazione bombe
            //associo bomba a array campoMinato casualmente
            genRandomBomb();
            console.log(campoMinato);


    //3. richiesta numero
        //ciclo for n.tentativi-numBombe
            //controllo numero = 2 campoMinato reprompt numero
            //controllo numero = 1 campoMinato FINE
            //(uguale a 0) campoMinato[i] = valore 2
        while (tentativi <= (limiteCiclo - numBombe)) {
            console.log("Tentativo n." + tentativi + " di " + limiteCiclo);
            var userNumber = (parseInt(prompt("Inerisci un numero compreso tra 1 e " + limiteCiclo)) - 1);
            
            if (campoMinato[userNumber] == 0) {
                campoMinato[userNumber] = 2;
                tentativi++;
            } else if (campoMinato[userNumber] == 1) {
                var singolare = " numeri corretti" ;
                if (tentativi == 2) {
                    singolare = " numero corretto";
                }
                alert("Hai perso, hai inserito " + (tentativi -1) + singolare);
                break;
            } else {
                alert("Numero non valido")
            }
            if ((tentativi -1) == (campoMinato.length - numBombe)) {
                alert("COMPLIMENTI HAI VINTO")
            }
        }


        //FINE
        //stampa n.tentativi fatti 
        //if n.tentativi = campoMinato.length-numBombe allora HAI VINTO  
        //vuoi fare un altra partita











//////////////////////////////////////////////////FUNZIONI////////////////////////////////////////////////

//funziona scelta livello
    //se 0 n.tentativi =100, 1 = 80, 2 = 50
    //creo array campoMinato (lunghezza n.tentativ) valore = 0 se vuota, 1 se bomba, 2 se numero utente 
    function selectLevel () {
        var selector = document.getElementById("level");
        var option = selector[selector.selectedIndex].value;

        if ( option == 0 ) {
            limiteCiclo = 100;
            console.log("livello facile");
        } else if ( option == 1 ) {
            limiteCiclo = 80;
            console.log("livello medio");
        } else {
            console.log("livello difficile");
        }
        for (var i=0; i<limiteCiclo; i++ ) {
            campoMinato.push(0);
        }

    }



//generazione bombe
        //associo bomba a array campoMinato casualmente
        function genRandomBomb() {
            var i = 0;
            while (i < numBombe) {
                var randomNum = Math.floor(Math.random() * (limiteCiclo) + 1);
                if ( campoMinato[randomNum] == 0 ) {
                    campoMinato[randomNum] = 1;
                    i++
                }
            }
        }

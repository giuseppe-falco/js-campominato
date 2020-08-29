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

    var numBombe = 16; 
    var campoMinato = [];
    var tentativi = 1; 
    var limiteCiclo = 50;


    //1. scelta livello
        //funzione con button on click in fondo alla pagina

    //2. generazione bombe
            //associo bomba a array campoMinato casualmente
            console.log(campoMinato);


    //3. richiesta numero
        //ciclo for n.tentativi-numBombe
            //controllo numero = 2 campoMinato reprompt numero
            //controllo numero = 1 campoMinato FINE
            //(uguale a 0) campoMinato[i] = valore 2
                // sendNumber()
                // console.log(userNumber)
     

        //FINE
        //stampa n.tentativi fatti 
        //if n.tentativi = campoMinato.length-numBombe allora HAI VINTO  
        //vuoi fare un altra partita











//////////////////////////////////////////////////FUNZIONI////////////////////////////////////////////////

//funzioni scelta livello
    //funzione botton scelta livello
    function popupLevel () {
        // document.getElementById("select-level").classList.add("show");
        selectLevel();
        genRandomBomb();

    }

    //se 0 n.tentativi =100, 1 = 80, 2 = 50
    //creo array campoMinato (lunghezza n.tentativ) valore = 0 se vuota, 1 se bomba, 2 se numero utente 
    function selectLevel () {
        var selector = document.getElementById("level");
        var option = selector[selector.selectedIndex].value;
        var outLevel = "difficile";
        var limiteCiclo = 50;
        campoMinato = [];

        
        if ( option == 0 ) {
            limiteCiclo = 100;
            outLevel = "facile";
            console.log("livello facile");
        } else if ( option == 1 ) {
            limiteCiclo = 80;
            outLevel = "medio";
            console.log("livello medio");
        } else {
            console.log("livello difficile");
        }

        for (var i=0; i<limiteCiclo; i++ ) {
            campoMinato.push(0);
        }
        document.getElementById("out-level").innerHTML = outLevel;
        document.getElementById("num-tentativi").innerHTML = limiteCiclo;
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
            console.log(campoMinato);

        }




// controllo numeri

        function sendNumber () {

            userNumber = document.getElementById("number-user").value;
                //////ciclo usato cartella es, non cancello perchè non si puo mai sapere///
                // while (tentativi <= (limiteCiclo - numBombe)) {
                    outputTentativo = ("Tentativo n." + tentativi + " di " + limiteCiclo);
                    // var userNumber = (parseInt(prompt("Inerisci un numero compreso tra 1 e " + limiteCiclo)) - 1);
                    // console.log(userNumber)
                    // if (campoMinato[userNumber] == 0) {
                    //     campoMinato[userNumber] = 2;
                    //     tentativi++;
                    // } else if (campoMinato[userNumber] == 1) {
                    //     var singolare = " numeri corretti" ;
                    //     if (tentativi == 1) {
                    //         singolare = " numero corretto";
                    //     }
                    //     alert("Hai perso, hai inserito " + (tentativi -1) + singolare);
                    //     // break;
                    // } else {
                    //     // alert("Hai già inserito questo numero")
                    // }
                
                // }
            if (campoMinato != "") {

                if (userNumber != "") {
                    userNumber --;
                    switch (campoMinato[userNumber]) {
                        case 0:
                            campoMinato[userNumber] = 2;
                            tentativi++;
                            break;

                        case 1 :
                            var singolare = " numeri corretti" ;
                            if (tentativi == 2) {
                                singolare = " numero corretto";
                            }
                            alert("Hai perso, hai inserito " + (tentativi -1) + singolare);
                            break;
                        
                        default :
                            alert("Inserisci un numero che non hai già inserito")
                            break;
                    }
                        
                        
                        console.log(outputTentativo);
                        console.log(userNumber)
                        document.getElementById("number-user").value = "";

                } else {
                    alert("Prova ad inserire un numero");
                }
                if ((tentativi -1) == (campoMinato.length - numBombe)) {
                    alert("COMPLIMENTI HAI VINTO");
                }
            } else {
                alert("Non hai scelto un livello")
            }

        }    

        
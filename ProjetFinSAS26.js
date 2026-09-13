const prompt = require('prompt-sync')();
let start = true;
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 49
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 49
    },
   {
    id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 49
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 49
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 49
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 49
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 49
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 49
    },
    {
            id: 9,
            departure: "Casablanca",
            destination: "Kenitra",
            departureTime: "15:00",
            arrivalTime: "16:45",
            price: 55,
            availableSeats: 49
        },
        {
            id: 10,
            departure: "Rabat",
            destination: "Kenitra",
            departureTime: "16:00",
            arrivalTime: "16:45",
            price: 30,
            availableSeats: 49
        },
        {
            id: 11,
            departure: "Rabat",
            destination: "Fes",
            departureTime: "17:00",
            arrivalTime: "19:30",
            price: 95,
            availableSeats: 50
        },
        {
            id: 12,
            departure: "Kenitra",
            destination: "Fes",
            departureTime: "17:30",
            arrivalTime: "20:00",
            price: 85,
            availableSeats: 50
        },
        {
            id: 13,
            departure: "Fes",
            destination: "Meknes",
            departureTime: "08:30",
            arrivalTime: "09:20",
            price: 35,
            availableSeats: 50
        },
        {
            id: 14,
            departure: "Fes",
            destination: "Oujda",
            departureTime: "10:00",
            arrivalTime: "13:30",
            price: 130,
            availableSeats: 50
        },
        {
            id: 15,
            departure: "Meknes",
            destination: "Rabat",
            departureTime: "11:00",
            arrivalTime: "13:30",
            price: 80,
            availableSeats: 50
        },
        {
            id: 16,
            departure: "Meknes",
            destination: "Casablanca",
            departureTime: "12:00",
            arrivalTime: "15:00",
            price: 105,
            availableSeats: 50
        },
        {
            id: 17,
            departure: "Casablanca",
            destination: "El Jadida",
            departureTime: "16:30",
            arrivalTime: "18:00",
            price: 50,
            availableSeats: 50
        },
        {
            id: 18,
            departure: "El Jadida",
            destination: "Safi",
            departureTime: "18:30",
            arrivalTime: "20:30",
            price: 60,
            availableSeats: 50
        },
        {
            id: 19,
            departure: "Marrakech",
            destination: "Agadir",
            departureTime: "15:00",
            arrivalTime: "18:30",
            price: 100,
            availableSeats: 50
        },
        {
            id: 20,
            departure: "Agadir",
            destination: "Safi",
            departureTime: "19:00",
            arrivalTime: "22:00",
            price: 95,
            availableSeats: 50
        }
    ];
const tickets = [
        {  
            id: 1,
            passengerName: "Samir",
            tripId: 1,
            seatNumber: 1,
            price: 90
        },
        { 
            id: 2,
            passengerName: "Halima",
            tripId: 2,
            seatNumber: 1,
            price: 90
            
        },
        {
            id: 3,
            passengerName: "Ali",
            tripId: 3,
            seatNumber: 1,
            price: 90
        },
        {
            id: 4,
            passengerName: "Hanane",
            tripId: 4,
            seatNumber: 1,
            price: 90
        },
        {
            id: 5,
            passengerName: "Taha",
            tripId: 5,
            seatNumber: 1,
            price: 90
        },
        {
            id: 6,
            passengerName: "Sanae",
            tripId: 6,
            seatNumber: 1,
            price: 90
        },
        {
            id: 7,
            passengerName: "Ihessan",
            tripId: 7,
            seatNumber: 1,
            price: 90 
        },
        {
            id: 8,
            passengerName: "Mohammed",
            tripId: 8,
            seatNumber: 1,
            price: 90
        },
        {
            id: 9,
            passengerName: "khadeja",
            tripId: 9,
            seatNumber: 1,
            price: 90
        },
        {
            id: 10,
            passengerName: "Mareyam",
            tripId: 10,
            seatNumber: 1,
            price: 90
        }
    ];
    
//Menu principale
function Afficher_les_trajets(){
        console.log("************** LISTE DE TRAJETS *************")                             
     for(let trip of trips){ 
        console.log("")           //for pour parcourire le taille d'objet afin de vérifier que les trajets existent//
        console.log(`#id: ${trip.id},   ${trip.departure} → ${trip.destination}`)                                                                      
        console.log(`Départ: ${trip.departureTime}`);
        console.log(`Arrivée:  ${trip.arrivalTime}`);
        console.log(`Prix: ${trip.price} DH`);
        console.log(`Places Disponibles: ${trip.availableSeats}`);
        console.log("")
    }
    
}

function Acheter_un_tickets(){
 let Nom = prompt("Nom du passager: ")      
 let Identifiant = Number(prompt('Identifiant du trajet: ')) 
 let trajet = false
     //Apres utilisateur entrer les donneés d'abord il faut de vérifier que ces donneés compatibles avec le data stocker//
    for(let trip of trips){
        if(Identifiant === trip.id){
          if(trip.availableSeats > 0){
            let place = 50-trip.availableSeats+1;     
      //Crée un ticket//
            let ticket = {
                 id: tickets.length+1,
                 passengerName: Nom,
                 tripId: trip.id,
                 seatNumber: place,
                 price: trip.price
                }; 
            tickets.push(ticket);       //stocker le ticket dans le data de tickets//
            console.log(" \n Ticket acheté avec succès. \n ") 
            console.log(`Ticket #${tickets.length} \n`) 
            console.log(`Trajet : ${trip.departure} → ${trip.destination}\n`)  
            console.log(`Passager : ${ticket.passengerName} \n`)   
            console.log(`Place : ${place} \n`) 
            console.log(`Prix : ${trip.price} \n`)  

            trip.availableSeats = trip.availableSeats-1
          }
          else if(trip.availableSeats === 0){
            console.log("Train complet.")
        }
          trajet = true;
        }   
    }
        if(trajet ==false){
            console.log("Trajet introuvable.")
    }
    
}

//Affichage totale du tickets//
function Afficher_les_tickets(){
    for(let ticket of tickets){
        if(tickets.length > 0){
        console.log(`********** Ticket **********` ),
        console.log("")
        console.log(`Ticket #${ticket.id}`),
        console.log(`Passager: ${ticket.passengerName}`),
        console.log(`tripId: ${ticket.tripId}`)
        console.log(`Place : ${ticket.seatNumber}`),
        console.log(`Prix : ${ticket.price}`)
         console.log("")
        } 
    }
    //Si le ticket n'existe pas //
    if(tickets.length === 0){        
    console.log("Aucun ticket enregistré.")
    }
}

// Pour retire l'achat il faut d'abord supprimer le ticket//
function Annuler_un_ticket(){
 let IdTicket = Number(prompt('Identifiant du ticket: '))           
   
    for(let ticket in tickets){
        if(IdTicket === ticket.id ){        // Ticket existe donc retrouver le trajet associé//
            for(let trip of trips){
                if(trip.id === ticket.tripId ){
                    trip.availableSeats+=1;
                } 
            } 
        }
    let i = tickets.findIndex(ticket =>ticket.tripId===IdTicket)   //Rechercher sur l'identifiant assimiler//
    tickets.splice(i,1);
    console.log("Ticket annulé avec succès.")
    break;
    }
}

function   Rechecher_un_ticket(){
 let Name = prompt("Nom passager: ")
 let chercher = false
 
  for(let ticket of tickets){
    if(ticket.passengerName.toUpperCase() === Name.toUpperCase()){
        for(let trip of trips){
            if( ticket.tripId === trip.id){
        console.log(` \n // Voici tous les tickets appartenant à ${Name} . \n`),
        console.log(`Ticket #${ticket.id}`),
        console.log(`Passager : ${ticket.passengerName}`), 
        console.log(`Trajet : ${trip.departure} → ${trip.destination}`),  
        console.log(`Place : ${ticket.seatNumber}`), 
        console.log(`Prix : ${ticket.price} DH`),  
        chercher = true
        }
    }
 }
}
    if(chercher === false){
        console.log("Aucun ticket trouvé.") 
    }
} 

function Filtrer_les_trajets(){
    let départ = prompt("Ville de départ : ")
    let trouve = false
     //Afficher tous les trajets ont meme départ//
    for(let i=0; i<trips.length; i++){
         if(trips[i].departure.toUpperCase() === départ.toUpperCase()){
          trouve = true
         console.log(`${trips[i].departure} → ${trips[i].destination}`)  
      }  
    }
    if( trouve === false){
        console.log("Aucun trajet admis cette ville .")
    }
}

//  Trie les prix de trajets par bubble sort avec un classement croissant//
function Trie_les_trajets(){
    for(let i=0; i < trips.length; i++){
        for (let j = i + 1; j < trips.length; j++) {
            if (trips[i].price > trips[j].price) {
                let temp = trips[i];
                trips[i] = trips[j];
                trips[j] = temp;
            }
        }
    }
     console.log(`\n Classement de trajets selon le prix : \n`)
    for (let i = 0; i < trips.length; i++) {
        console.log(`\n ${trips[i].departure} → ${trips[i].destination} : ${trips[i].price}DH \n`)
    }
}

function Statistique(){
  //Totale de tickets vendu//
  console.log(`Nombre total de tickets: ${tickets.length} \n`)
 //Somme de tickets//  
 let somme = 0;
 for(let i=0; i < tickets.length; i++){
     somme += tickets[i].price;
    }
    console.log(`Chiffre d'affaires total : ${somme} DH \n`)
//Trajet plus vendu//
let Max_Ticket = 0;  
let Trajet_plus_vendu = null;

for(let i=0; i < tickets.length; i++){
    let compteur = 0      

    //Compter combien de tickets associé au trajet//
   for(let j=0; j < tickets.length; j++){
     if (tickets[j].tripId === trips[i].id){
        compteur ++;
      }
      if(compteur > Max_Ticket){
          Max_Ticket = compteur;
          Trajet_plus_vendu = trips[i]
        }
    }
}   
    if(Trajet_plus_vendu !== null){
        console.log(`Trajet le plus vendu :  \n`) 
        console.log(`${Trajet_plus_vendu.departure} → ${Trajet_plus_vendu.destination} \n`)
        console.log(`#${Max_Ticket} vendus \n`)
    }
}



while(start){
    
    console.log(`                  
        =================================
                  RAILWAY MANAGER
        =================================
        
        1- Afficher les trajets
        2- Acheter un ticket
        3- Afficher les tickets
        4- Annuler un ticket
        5- Rechercher un ticket
        6- Filtrer les trajets
        7- Trier les trajets
        8- Statistique
        0- Quitter \n`)
        
let choix = Number(prompt('Votre choix:  '))   
switch (choix){
    case 0:
    let Message = prompt("*************** Au Revoir ***************")
         if(start=false){
          start === Message  
        } else {
            start=true
        }
        break;
    case 1:
        Afficher_les_trajets()
        break; 
    case 2:
        Acheter_un_tickets()
        break;
    case 3:
        Afficher_les_tickets()
        break;
    case 4:
        Annuler_un_ticket()
        break;  
    case 5:
        Rechecher_un_ticket()
        break; 
    case 6:
        Filtrer_les_trajets()
        break;
    case 7:
         Trie_les_trajets()
        break; 
    case 8:
        Statistique()
        break;        
    }
}

















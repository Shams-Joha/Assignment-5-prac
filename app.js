const selectedSeatEl = document.getElementById('selected-seat');

let bookCounter = document.getElementById('total-booked');


// function handleSelectSeat(event) {
//    selectedSeat.innerHTML = `
//    <li class= " text-green-500 font-normal flex justify-between">
//    <span>${event.innerText}</span>
//    <span>Economy</span>
//    <span>550</span>
//    </li>
   
//    `
// }
let selectedSeat = [];
function handleSelectSeat(event){
   event.classList.add('bg-green-400');
   event.classList.add('text-white');

   selectedSeat.push(event.innerText);

   bookCounter.innerText = selectedSeat.length;

   // Available seats Code:
   // const availSeatValue = parseFloat(availableSeatContainer.innerText);
   // const newAvailable = availSeatValue -1;
   // availableSeatContainer.innerText = newAvailable;

   
}




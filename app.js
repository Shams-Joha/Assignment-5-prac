const selectedSeat = document.getElementById('selected-seat');

function handleSelectSeat(event) {
   selectedSeat.innerHTML = `
   <li class= " text-green-500 font-normal flex justify-between">
   <span>${event.innerText}</span>
   <span>Economy</span>
   <span>550</span>
   </li>
   
   `
}


const selectedSeatEl = document.getElementById('selected-seat');

let bookCounter = document.getElementById('total-booked');

let totalPriceEl = document.getElementById('t-price');

const couponContainer = document.getElementById('coupon');

const couponBtnContainer = document.getElementById('coupon-btn');

const couponSection = document.getElementById('coupon-container');


let totalPrice = 0;

let selectedSeat = [];

function handleSelectSeat(event) {
   // handling double clicking

   const value = event.innerText;

   if (selectedSeat.includes(value)) {
      return alert('Seat Already Booked');
   }
   else if (selectedSeat.length < 4) {
      event.classList.add('bg-green-400');
      event.classList.add('text-white');

      selectedSeat.push(event.innerText);
      bookCounter.innerText = selectedSeat.length;

      // Available seats Code:
      // const availSeatValue = parseFloat(availableSeatContainer.innerText);
      // const newAvailable = availSeatValue -1;
      // availableSeatContainer.innerText = newAvailable;

      selectedSeatEl.innerHTML += `
      <li class= " text-green-500 font-normal flex justify-between">
      <span>${event.innerText}</span>
      <span>Economy</span>
      <span>550</span>
      </li>
      
      `
      //No seat heading handling

      document.getElementById('no-seat').classList.add('hidden');


      // Total Price section
      // Update Total Price on every click.

      totalPrice += 550;
      totalPriceEl.innerText = totalPrice.toFixed(2);

      // Coupon Section & Conditions

      if (selectedSeat.length > 3) {

         couponContainer.removeAttribute('disabled');
         couponBtnContainer.removeAttribute('disabled');
      }
   }
   else {
      return alert("maximum seats booked");
   }

}

// Coupon button function

document.getElementById('coupon-btn').addEventListener('click', function () {
   gTotal = document.getElementById('grand-total');
   let couponSave = 0;
   let couponCode = document.getElementById('coupon').value;
   // We can't use || here because if couponCode = Couple 20 at the same time it's also not equal to NEWS50.
   if (couponCode !== "Couple 20" && couponCode !== "NEWS50") {
      alert("Your Provided Coupon is not valid");
      return;
   }
   if (couponCode === "NEWS50") {

      couponSave = totalPrice * .15;

   } else if (couponCode === "Couple 20") {
      couponSave = totalPrice * .20;
   }

   couponSection.innerHTML = `
   <p>Discount</p>
   <p><span>-BDT: </span>
   <span>${couponSave.toFixed(2)}</span></p>
   
   `

   const grandTotal = totalPrice - couponSave;

   gTotal.innerText = grandTotal.toFixed(2);



})





// import { 
//   incrementQty, 
//   decrementQty,
//   recalculateSubtotal
// } from './helpers.js';

import "./helpers.js";
import * as lib from "./helpers.js";


const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const subtotal = document.querySelector('#subtotal');
const priceInput = document.querySelector('#price');
const promoButton = document.querySelector('#confirmButton');
const promoInput = document.querySelector('#code');


function hitung(){
  subtotal.value = lib.recalculateSubtotal(priceInput.value, qtyInput.value);
  document.getElementById("subtotal").textContent =`Rp.${subtotal.value}`; 
}

incrButton.addEventListener('click', () => {
  qtyInput.value = lib.incrementQty(qtyInput.value);
  hitung();
});

decrButton.addEventListener('click', () => {
  //biar dia gabisa pencet <=1
  if(qtyInput.value > 1){
    qtyInput.value = lib.decrementQty(qtyInput.value);
   hitung();
  }
});

qtyInput.addEventListener("focusout", () => {
  document.getElementById("qty").value = lib.angka(
    qtyInput.id,
    qtyInput.value
  );
  hitung();
});

priceInput.addEventListener("focusout", () => {
  document.getElementById("price").value = lib.angka(
    priceInput.id,
    priceInput.value
  );
  hitung();
});

promoButton.addEventListener("click", () => {
  if (promoInput.value == "MILLANCANTIK"){
    subtotal.textContent = subtotal.value - (subtotal.value * 0.50);
    console.log(subtotal.textContent);
  }else{
    subtotal.textContent = recalculateSubtotal(priceInput.value, qtyInput.value);
    console.log(subtotal.textContent);
  }
});



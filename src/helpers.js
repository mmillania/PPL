const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

//fungsi untuk menjumlahkan harga dengan jumlah qty
function recalculateSubtotal(price,qty){
    return price*qty;
}

//fungsi untuk menjumlahkan jika masukin kode promo
// function subtotalPromo(price,qty,promoInput){
// return (price*qty) - (price*qty*0.50);
// }

//fungsi untuk tidak bisa menginputkan angka negatif
function angka(kolomId,kolomValue){
    if(isNaN(kolomValue) || kolomValue < 0){
        if(kolomId == "price"){
            return "0";
        }else if(kolomId == "qty"){
            return "1";
        }else{
            return "0";
        }
    }else{
        return kolomValue;
    }
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    angka,
    // subtotalPromo,
    // promoInput,
    
    
};

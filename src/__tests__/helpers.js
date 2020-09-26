const { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    subtotalPromo,
    qtyInput, 
    priceInput,
    kolomValue,
    promoInput,

 } = require("../helpers");
/*
    Gunakan file ini untuk membuat test case dengan Jest
*/


test('apabila qty 1 ditambah 1 hasilnya 2',() => {
expect(incrementQty(1)).toBe(2);
});

test('apabila qty 2 kurangi 1 hasilnya 1',() => {
    expect(decrementQty(2)).toBe(1);
    });

test('apabila price 50000 dikali 2 hasilnya 100000',() => {
    expect(recalculateSubtotal(50000,2)).toBe(100000);
});


test('apabila price=50000,qty=3 kode promo = MILLANCANTIK maka subtotal=75000',() => {
    expect(subtotalPromo(50000,3)).toBe(75000);
    
});







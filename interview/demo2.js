const totalBill = (currentBill) => {
  let tipToAdd = 0;

  currentBill > 100 && currentBill < 500
    ? (tipToAdd = parseInt(currentBill * 0.15))
    : (tipToAdd = parseInt(currentBill * 0.2));

  return currentBill + tipToAdd;
};

console.log(totalBill(300));

console.log(totalBill(555));

console.log(totalBill(90));

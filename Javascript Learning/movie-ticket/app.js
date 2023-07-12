const seats = document.querySelectorAll(".seats");
const bookTicketButton = document.getElementsByClassName("book-ticket-btn");
const bookedSeat = new Array();

let subTotal = 0;
let st = 0;
let sbc = 0;
let kkc = 0;
let total = 0;

const taxes = {
  st: 0.14,
  sbc: 0.005,
  kkc: 0.005,
};

bookTicketButton[0].addEventListener("click", bookTickets);
seats.forEach((seat) => addEventListener("click", getSeat));

function getSeat(e) {
  const seatElement = e;
  console.log("Show and seat id: ", seatElement);
  toggleSeat(seatElement);
}

function toggleSeat(e) {
  const show_and_seat_id = e.target.id;
  console.log("id: ", show_and_seat_id);
  console.log("element: ", e);
  if (show_and_seat_id.match(/^S\d[A-Z]\d/g)) {
    console.log(e.target.classList);
    if (!e.target.classList.contains("selected-seat")) {
      if (/A\d/.test(show_and_seat_id)) {
        //platinum
        subTotal += 320;
      } else if (/B\d/.test(show_and_seat_id)) {
        //gold
        subTotal += 280;
      } else {
        //silver
        subTotal += 240;
      }

      st = taxes.st * subTotal;
      sbc = taxes.sbc * subTotal;
      kkc = taxes.kkc * subTotal;
      total = subTotal + st + sbc + kkc;

      e.target.classList.add("selected-seat");
      bookedSeat.push(show_and_seat_id);
      console.log(bookedSeat);
    } else {
      if (/A\d/.test(show_and_seat_id)) {
        //platinum
        subTotal -= 320;
      } else if (/B\d/.test(show_and_seat_id)) {
        //gold
        subTotal -= 280;
      } else {
        //silver
        subTotal -= 240;
      }

      st = taxes.st * subTotal;
      sbc = taxes.sbc * subTotal;
      kkc = taxes.kkc * subTotal;
      total = subTotal - st - sbc - kkc;
      e.target.classList.remove("selected-seat");
      let removeIndex = bookedSeat.findIndex(
        (seat) => seat === show_and_seat_id
      );
      delete bookedSeat[removeIndex];
      console.log(bookedSeat);
    }
  }
  showReceipt();
}

function bookTickets(e) {
  bookedSeat.forEach((seat) => {
    let ele = document.getElementById(seat);
    console.log(ele);
    ele.classList.add("disabled");
    ele.removeEventListener("click", getSeat);
  });
  alert("Booking Successful !");
}

function showReceipt() {
  const btv = document.querySelector("#base-total-value");
  const stv = document.querySelector("#service-tax-value");
  const sbcv = document.querySelector("#sbc-value");
  const kkcv = document.querySelector("#kkc-value");
  const tv = document.querySelector("#total-value");

  btv.textContent = subTotal;
  stv.textContent = st;
  sbcv.textContent = sbc;
  kkcv.textContent = kkc;
  tv.textContent = total;

  const btvr = document.querySelector("#base-total-value-r");
  const stvr = document.querySelector("#service-tax-value-r");
  const sbcvr = document.querySelector("#sbc-value-r");
  const kkcvr = document.querySelector("#kkc-value-r");

  btvr.textContent = subTotal;
  stvr.textContent = st;
  sbcvr.textContent = sbc;
  kkcvr.textContent = kkc;
}

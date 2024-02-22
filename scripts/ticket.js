const buttons = document.getElementsByClassName('myButton');
let clickCount = 0;
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        clickCount = clickCount + 1;
        // seat add


        if (clickCount > 4) {
            alert('Lmit over');
            return;
        }
        document.getElementById('seat-count').innerText = clickCount;

        // seat minus
        const currentAvailableSeat = document.getElementById('available-seat');
        const currentSeatText = currentAvailableSeat.innerText;
        const currentSeat = parseInt(currentSeatText);
        const newAvailableSeat = currentSeat - 1;
        currentAvailableSeat.innerText = newAvailableSeat;
        // add bg
        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';

        // button.classList.add('bg-[#1DD100]');
        // button.classList.add('text-white');
        // add td & tr
        const tableBodyContainer = document.getElementById('seat-click-containeer');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = button.innerText;
        const td1 = document.createElement('td');
        td1.innerText = "Economy";
        const td2 = document.createElement('td');
        td2.innerText = "550";
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBodyContainer.appendChild(tr);
        // total price
        updateTotalPrice(clickCount);
        //    grand total
        updateGrandTotal();
    });
};
// function updateGrandTotal(status) {
//     const totalPrice = document.getElementById('total-price').innerText;
//     if (status === undefined) {
//         document.getElementById('grand-total').innerText = totalPrice;
//     }
//     else {
//         const couponCode = document.getElementById('coupon-code').innerText;
//         const couponCode2 = document.getElementById('coupon').innerText;
//         if (couponCode === "NEW15") {
//             const discounted = totalPrice * 0.15;
//             document.getElementById('grand-total').innerText = parseInt(totalPrice) - parseInt(discounted);
//             const inputHidden = document.getElementById('input');
//             inputHidden.classList.add("hidden");
//         }
//         else {

//             if (couponCode2 === "Couple 20"||couponCode === "Couple 20") {
//                 const discounted = totalPrice * 0.20;
//                 document.getElementById('grand-total').innerText = parseInt(totalPrice) - parseInt(discounted);
//             }
//             else {
//                 alert("please give a valid coupon code");
//             }

//         }


//     }
// }
function updateGrandTotal(status) {
    const totalPrice = document.getElementById("total-price").innerText;
    if (status === undefined) {
        document.getElementById('grand-total').innerText = totalPrice;
    } else {
        const couponCode = document.getElementById("coupon-code").innerText;
        // const couponCode2 = document.getElementById('coupon').innerText;
        if (couponCode === "NEW15") {
            const discounted = totalPrice * 0.15;
            document.getElementById("grand-total").innerText = parseInt(totalPrice) - parseInt(discounted);
            const inputHidden = document.getElementById("input");
            inputHidden.classList.add("hidden");
        }else{
            alert('Unvalid');
            return;
        }


    }
}




function updateTotalPrice(value) {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = value * 550;
}



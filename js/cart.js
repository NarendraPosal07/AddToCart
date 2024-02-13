
let favourit = document.getElementById("cardDesign");
let total_price_sum = 0;
let row3 = document.getElementById('row3'); 



let our = () => {
    let ourproduct = JSON.parse(localStorage.getItem("cart"));
    console.log(ourproduct);
    ourproduct.forEach((item) => {

        console.log(item);
        favourit.innerHTML += `
        
            <li class="d-flex border border-2 col-9 align-items-center justify-content-around p-2">
            <div class="img col-3"><img src="${item.thumbnail}" class="object-fit-cover border rounded-circle"
                    style="width: 100px; height: 100px;" alt=""></div>
            <h2 class="col-3">${item.title}</h2>
            <h6 class="col-3">${item.price} $</h6>
            <button class="border border-2 p-2 rounded-circle bg-danger px-3" onclick="return deletes(${item.id})">
                <i class="bi bi-x-lg"></i>
            </button>
            </li>

      `
      
      let total_price = item.price;
        total_price_sum += total_price;

    });

    row3.innerHTML = `<div class="d-flex border border-2 col-9 align-items-center justify-content-around p-2">
    <div class="img col-3">Total</div>
    <h2 class="col-3">${ourproduct.length}</h2>
    <h6 class="col-3">${total_price_sum} $</h6>
   
    </div>`


    console.log(total_price_sum);

};



let deletes = (id) => {

    let deleteCart = JSON.parse(localStorage.getItem("cart"));
    let deleteArr = [];
    deleteCart.filter((cartItem) => {

        if (cartItem.id != id) {
            deleteArr.push(cartItem);
        }
    });

    localStorage.setItem('cart', JSON.stringify(deleteArr));
    favourit.innerHTML = ``;
    total_price_sum = 0;
    ourproduct = JSON.parse(localStorage.getItem("cart"));

our();

};
our();
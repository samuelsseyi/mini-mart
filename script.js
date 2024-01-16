var cart= []
console.log(cart);


function calc(){
  show.innerHTML = cart
  show.innerHTML = ""
      for (j= 0; j < cart.length; j++) {
        show.innerHTML += `
         <p> ${j+1}. ${cart[j]}</p>`
      }
}



    function submitItem() {
    if (input.value === "") {
      alert ("Input Cannot Be Empty")
    }
    else {
      cart.push (input.value)
      document.getElementById("input").value = ""
      calc()
    } 
  } 



function addToFirst()  {
  if (input.value === "") {
   alert("Please Input an Item Before Proceeding To Add It To Cart")
  } else{
    cart.unshift(input.value)
    document.getElementById("input").value = "" 
    calc()
  }
}


function addToLast()  {
  if (input.value === ""){
    alert("Please Input an Item Before Proceeding To Add It To Cart")
  } else {
    cart.push(input.value)
    document.getElementById("input").value = ""
    calc ()
  }
}

function deleteFirst()  {
  if (cart.length === 0){
    alert("You Don't Have Any Item In Your Cart")
  } else{
  cart.shift(input.value)
  document.getElementById("input").value = "" 
  calc ()
  }
}


function deleteLast()  {
  if (cart.length === 0){
    alert("You Don't Have Any Item In Your Cart")
  } else {
  cart.pop(input.value)
  document.getElementById("input").value = "" 
  calc ()
  }
}

function replaceAnItem()  {
  if (cart.length === 0) {
    alert("You Don't Have Any Item In The Cart") }
    else {
      var itemNumber = prompt ("Enter The Number Of The Item You Want To Replace")
      if (itemNumber > cart.length || itemNumber <= 0){
        alert("Invalid Item Number")
      } else {
        var newItemNumber = prompt ("Enter The Name Of The New Item Here")
      cart.splice(itemNumber-1, 1, newItemNumber)
      document.getElementById("input").value = ""
      calc()
      }
    }
  }
  


function deleteAnItem()  {
  if (cart.length === 0) {
    alert("You Don't Have Any Item In The Cart")
  } else {
    var indexToDelete = prompt ("Input Item Number")
    if (indexToDelete > cart.length || indexToDelete <= 0) {
      alert(`Invalid Item Number`)
    } else {
      cart.splice(indexToDelete-1, 1)
    document.getElementById("input").value = ""
    calc()
    }
  }
}
    


function deleteAllItems()  {
  if (cart.length === 0) {
    alert("There is Nothing to Delete")
  } else {
  cart.splice(0, cart.length)
  document.getElementById("input").value = ""
  calc ()
  }
}
//These Are The Items Buttons

function hpEnvy()  {
  cart.push("HP Envy")
  document.getElementById("input").value = ""
  calc ()
}


function samsungGalaxy()  {
  cart.push("Samsung Galaxy")
  document.getElementById("input").value = ""
  calc ()
}


function ipadAir()  {
  cart.push("Ipad Air")
  calc ()
}
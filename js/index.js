let inventory = {
    manTshirt: {
        name: "Man T-shirt"
    },
    manShirt: {
        name: "Man Shirt"
    },
    scart: {
        name: "Woman Scart"
    },
    laptop: {
        name: "Laptop"
    },
    mobile: {
        name: "Mobile"
    },
    computer: {
        name: "Computer"
    }
}

let cart = {}
function toggleCart (){
    
   let cartcont =  document.getElementById("cartItems")
    cartcont.classList.toggle("show-cart")
    renderList()
}

function renderList() {
    let cartcont =  document.getElementById("cartItems")
    cartcont.innerHTML = ''

    if (Object.keys(cart).length === 0) {
        let itemCont = document.createElement("div")
        itemCont.classList.add("item")
        itemCont.innerHTML = 'Cart is empty'
        cartcont.appendChild(itemCont)
    } else  {
        for(let cartItem of Object.entries(cart)) {
            if (cartItem[1] > 0 ) {
                let itemCont = document.createElement("div")
                itemCont.classList.add("item")

                let itemName = document.createElement("span")
                itemName.innerHTML=inventory[cartItem[0]].name
                itemCont.appendChild(itemName)

                let buttonCont=document.createElement("div")

                let minusButton = document.createElement("button")
                minusButton.innerHTML= "-"
                minusButton.classList.add("item-button")
                buttonCont.appendChild(minusButton)
                minusButton.onclick=(event)=>{
                    event.stopPropagation()
                    removeItemFromCart(cartItem[0])
                }

                let itemCount = document.createElement("span")
                itemCount.innerHTML=cartItem[1]
                itemCount.classList.add("item-count")
                buttonCont.appendChild(itemCount)

                let plusButton = document.createElement("button")
                plusButton.innerHTML= "+"
                plusButton.classList.add("item-button")
                buttonCont.appendChild(plusButton)
                plusButton.onclick=(event)=>{
                    event.stopPropagation()
                    addItemToCart(cartItem[0])
                }

                itemCont.appendChild(buttonCont)

                cartcont.appendChild(itemCont)
            }
            
        }
    }
}

let toggle =document.getElementById("toggle")
toggle.onclick = toggleCart

function addItemToCart(item) {
    if(cart[item]){
        cart[item] +=1

    }else {
        cart[item]=1
    }
    renderList()
}

function removeItemFromCart(item) {
    cart[item] -=1
    if(cart[item] === 0) {
        delete cart[item]
    }
    renderList()
}
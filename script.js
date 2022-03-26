const Wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id : 1,  title : "Aston-martin Vantage", price: 480, colors: [{ code:"black", img:"pics/aston_pre 2.png"},{code:"red", img:"pics/aston_pre 1.png"}]
    },
    {
        id : 2,  title : "Ferrari 488", price:220, colors: [{ code:"black", img:"pics/ferrari_pre 1.png"},{code:"red", img:"pics/ferrari_pre 2.png"}]
    },
    {
        id : 3,  title : "Lamborghini", price: 550, colors: [{ code:"red", img:"pics/lamborghini_pre 1.png"},{code:"black", img:"pics/lamborghini_pre 2.png"}]
    },
    {
        id : 4,  title : "Ford Mustang", price: 200, colors: [{ code:"black", img:"pics/ford_pre 1.png"},{code:"red", img:"pics/ford_pre 2.png"}]
    },
    {
        id : 5,  title : "Porsche", price: 290, colors: [{ code:"red", img:"pics/porsche_pre 1.png"},{code:"black", img:"pics/porsche_pre 2.png"}]
    }
]

let choosenProduct = products[0]

const productImg = document.querySelector(".productImg")
const productTitle = document.querySelector(".productTitle")
const productPrice = document.querySelector(".productPrice")
const productColor = document.querySelectorAll(".color")
const productModel = document.querySelectorAll(".model")
menuItems.forEach((item, index)=> {
    item.addEventListener("click" ,() => {
        Wrapper.style.transform = `translateX(${-100 * index}vw)`

        choosenProduct = products[index]

        productTitle.textContent = choosenProduct.title
        productPrice.textContent = "$" + choosenProduct.price + "," + "000"
        productImg.src = choosenProduct.colors[0].img

        productColor.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

productColor.forEach((color, index)=> {
    color.addEventListener("click",()=>{
    productImg.src = choosenProduct.colors[index].img
    })

})
productModel.forEach((model, index)=>{
    model.addEventListener("click",()=>{
        productModel.forEach((model)=>{
        model.style.backgroundColor = "white"
        model.style.color = "black"
            })
            model.style.backgroundColor = "black"
            model.style.color = "white"
        })
        
       
    })

    const payButton = document.getElementById('payButton')
    const payB = document.getElementById('payment')
    const closeButton = document.getElementById('close')

    payButton.addEventListener('click', ()=> {
        payment.style.display = 'flex'
    })
    closeButton.addEventListener('click', ()=> {
        payment.style.display = 'none'
    })
    
    
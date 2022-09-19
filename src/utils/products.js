const Products = [
    {
        id: 1,
        title: "Latte chocolate",
        weight: "50gr",
        price:"90",
        picture:"https://caramelandia.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-03-23-at-1.20.05-PM-3.jpeg",
        description: "Chocolate Latte con mani en version 50gr en cajita con frase.",
    },
    {
        id: 2,
        title: "Pochoclo Dulce Funny Pop",
        weight: "100gr",
        price:"300",
        picture:"https://caramelandia.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-03-23-at-1.20.08-PM.jpeg",
        description: "Pochoclos en bolsa de diferentes sabores",
    },
    {
        id: 3,
        title: "Tableta Latte Chocolate",
        weight: "80gr",
        price:"380",
        picture:"https://caramelandia.com/wp-content/uploads/2022/02/AIL_6451-600x401.jpg",
        description: "Chocolate Con Leche Y Mani, Con Frase. Sin Taac",
    },
    {
        id: 4,
        title: "Paleta Corazon De Caramelo",
        weight: "50gr",
        price:"140",
        picture:"https://caramelandia.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-03-28-at-4.39.59-PM-3.jpeg",
        description: "Paleta Corazon De Caramelo Artesanal",
    },

]
const getList = () =>{
    return new Promise((resolve, reject) => {
    setTimeout (()=>{
            resolve(Products)
        },2000);
    })
}

export default getList;
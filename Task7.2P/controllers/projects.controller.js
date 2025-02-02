const cardList = [
    {
        title:"Orange Tabby Cat",
        image:"images/kitten.jpg",
        link:"About Orange Tabby Cat",
        desciption:"Orange Tabby Cat Near Window"
    },
    {
        title: "Brown Tabby Cat",
        image: "images/kitten-2.jpg",
        link: "About Brown Tabby Cat",
        desciption: "Brown Tabby Cat"
    },
    {
        title: "Black Cat",
        image: "images/kitten-3.jpg",
        link: "About Black Cat",
        desciption: "Close-Up Shot of a Black Cat"
    }
]



function getProjects(req,res){
    return res.json({ statusCode: 200, data: cardList, message: "success" })
}


module.exports = {
    getProjects,
}
const toys = [ 
    {
        id: 1,
        name: "Nerf Gun",
        maker: "Nerf",
        price: 19.99
    },
    {
        id: 2,
        name: "Lawn Darts",
        maker: "someone",
        price: 15
    },
    {
        id: 3,
        name: "Laser Tag",
        maker: "guy who likes lasers",
        price: 30
    }
]

const monopoly = {
    id: 4,
    name: "Monopoly",
    maker: "Hasbro",
    price: 25
}

const legoCastle = {
    id: 5,
    name: "Lego Castle",
    maker: "Lego",
    price: 100
}

toys.push(monopoly, legoCastle)

const toyToFind = 4

const dinosaur = {
    name: "Trex",
    maker: "Lego",
    price: 40
}

const addtoyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addtoyToInventory(dinosaur)

for (const toy of toys){
    // if(toy.id === toyToFind){
    //     toy.price = (toy.price * 0.05) + toy.price
        console.log(`The ${toy.name} made by ${toy.maker} costs $${toy.price}`)
    // }
}
console.log(toys)
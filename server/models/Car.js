import Common from "./Common";

class Car extends Common{

    static collectionName = "cars";

    name = ""
    price = 0
    model = ""
    brand = ""
    userId = ""
    description = ""
    createdAt = new Date()
    updatedAt = new Date()

    constructor(data) {
        super(Car.collectionName)
        this.name = data.name
        this.price = data.price
        this.model = data.model
        this.brand = data.brand
        this.userId = data.userId
        this.description = data.description
    }
}


export default Car;

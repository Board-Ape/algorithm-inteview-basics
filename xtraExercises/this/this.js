/* 

What is the word "this"?

Refers to the current scope of the object you are in.

const house = {
    price: 1,000,000,
    sqft: 3,500,
    const pricePerSqFt = () => {
        return (this.price / this.sqft)
    }
}

house.pricePerSqFt

*/
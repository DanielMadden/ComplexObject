var juice = {
    color: "green",
    temperature: "cold",
    brand: "Trader Joes",
    name: "Cold Pressed Juice",
    ounces: 15.2,
    mL: 450,
    ingredients: {
        kale: "17 leaves",
        spinach: "1 pound",
        apple: "1 whole",
        cucumber: "1/4 whole",
        celery: "1 whole",
        lemon: "1 whole",
        ginger: "2 inches"
    },
    nutrition: {
        fat: 0,
        cholesterol: 0,
        sodium: .47,
        carbohydrate: 17,
        fiber: 0,
        sugar: 12,
        sugarAdded: 0,
        protein: 8,
        vitaminD: 0,
        calcium: .07,
        iron: .003,
        potassium: .61
    }
}

let property = prompt("What property do you want?", "ingredients, nutrition, color, temperature, brand, name, ounces, mL")
if (property == "ingredients") {
    let ingredient = prompt("Which ingredient?", "kale, spinach, apple, cucumber, celery, lemon, ginger")
    let result = juice[property][ingredient]
    document.getElementById("stat").innerHTML = ingredient + ": " + result
    document.getElementById("stat").innerHTML = `${ingredient} : ${result}`
} else if (property == "nutrition") {
    let fact = prompt("Which nutrition fact?", "fat, cholesterol, sodium, carbohydrate, fiber, sugar, sugarAdded, protein, vitaminD, calcium, iron, potassium")
    let result = juice[property][fact]
    document.getElementById("stat").innerHTML = fact + ": " + result + " grams"
    document.getElementById("stat").innerHTML = `${fact} : ${result} grams`
} else {
    let result = juice[property]
    document.getElementById("stat").innerHTML = property + ": " + result
    document.getElementById("stat").innerHTML = `${property} : ${result}`
}

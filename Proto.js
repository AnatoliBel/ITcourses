class Animal {
    constructor (color, weight, speed){
    this.color = color;
    this.weight = weight;
    this.speed = speed;
    }
    move(speed) {
        this.speed = speed;
        console.log(`A ${this.color} animal weighs ${this.weight} kg.`);
    }
}

const little_animal = new Animal("Pink", 10, 15)
little_animal.move()

class Cat extends Animal {
    hunts() {
        console.log(`When a ${this.color} cat hunts, he breaks his fast to ${this.speed} !`);
    }
}

const david_cat = new Cat("Blue", 5 ,12)
david_cat.hunts()
david_cat.move()

import Car from './Car'
import Garage from './Garage'

console.log(
    new Garage([
        new Car('black', 160, 'automatic'),
        new Car('red', 180, 'manual'),
        new Car('white', 170, 'manual'),
    ])
        .toString()
)

// const car = new Car('red', 150, 'manual')
// console.log(car.toString())
// car.changeColor('yellow')
// console.log(car.toString())

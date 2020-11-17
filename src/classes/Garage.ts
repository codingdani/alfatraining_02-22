import Car from './Car'

export default class Garage {
    constructor(private cars: Car[]) {}

    toString(): string {
        return [
            '*** Start of Garage ***',
            '',
            `*** Having ${this.cars.length} Cars ***`,
            '',
            this.cars.map(car => car.toString()).join("\n"),
            '',
            '*** End of Garage ***'
        ].join("\n")
    }
}

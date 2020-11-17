type Gear = 'manual' | 'automatic'

export default class Car {
    constructor(
        public color: string,
        public maxSpeed: number,
        public gear: Gear
    ) {}

    toString(): string {
        return `Car color: ${this.color}, maxSpeed: ${this.maxSpeed}, gear: ${this.gear}`
    }

    changeColor(color: string): void {
        this.color = color
    }
}


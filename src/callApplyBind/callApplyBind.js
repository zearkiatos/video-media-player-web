function greet() {
  console.log(`Hello. I\'m ${this.name} ${this.lastname}`);
}

function walk(meters, address) {
    console.log(`${this.name} walks ${meters} meters to ${address}.`);
}

export default {
  greet,
  walk
};

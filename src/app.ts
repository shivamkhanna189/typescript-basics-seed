console.log('Hello TypeScript!');

const pizzas = [
  { name: "peperroni", toppings: ["peproni"] }
]

const mappedPizzas = pizzas.map(data => data.name.toUpperCase())
console.log(pizzas, mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  getName: () => pizza.name
}

console.log(pizza.getName());



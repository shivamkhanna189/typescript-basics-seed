const pizza = {
  name: "peproni",
  toppings: ["perproni"]
}

function order({ name: pizzaName, toppings: pizzaToppings }: any) {
  return { pizzaName, pizzaToppings }
}

const { pizzaName } = order(pizza)
console.log(pizzaName);

const toppings = ["aaaa", "adfas", "asdfadf", "adsfasdf"];
const [a, b, c] = toppings;

console.log(a, b, c);






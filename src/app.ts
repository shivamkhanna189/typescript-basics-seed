interface Sizes {
  size: string[];
  id?: number
}

interface Pizza extends Sizes {
  name: string;
  [key: number]: string;

}


let pizza: Pizza;

function createPizza(name: string, size: string[]): Pizza {
  return {
    name,
    size
  }
}

pizza = createPizza("Cheese Bust", ["medium", " large"])
pizza[1] = "xyx"
pizza[2] = "asdfasdf";

console.log(pizza);
// console.log(pizza[1]);







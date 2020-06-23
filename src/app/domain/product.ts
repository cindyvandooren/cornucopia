export interface Product {
  id: number;
  brand: string;
  name: string;
  price: Price;
  description: Description;
  type: string;
  audience: {
    age: MinMax,
    numberOfPlayers: MinMax
  }
  images: string[];
  rating: number;
}

export interface Price {
  current: string;
  amount: number;
}

export interface Description {
  short: string;
  extended: string;
}

export interface MinMax {
  min?: number;
  max?: number;
}

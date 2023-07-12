export interface Product {
  id: string;
  fields: {
    name: string;
    price: number;
    description: string;
    category_name: string[];
    quantity: number;
    create_at: string;
    updated_at: string;
  }
}

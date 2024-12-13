export interface Product {
    id: number;
    name: string;
    title: string;
    price: string;
    wronged?: string;
    buttonText: string;
    percentage?: string;
    Hot?: string | null;
    img: string;
  }
  
  export interface CartItem extends Product {
    quantity?: number;
  }
  
  export interface NavbarProps {
    cartCount: number;
  }
  
  export interface CartProps {
    cartItems: CartItem[];
  }
  
  export interface ProductsProps {
    addToCart: (product: Product) => void;
  }
  
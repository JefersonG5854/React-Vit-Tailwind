import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

  // Shopping Cart, counter of products selected
  const [countCart, setCountCart] = useState(0);

  // Product detail, show information
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product detail, show information
  const [productSelected, setProductSelected] = useState({});

  // Carrito de compras con los productos selecionados
  const [cartProducts, setCartProducts] = useState([]);

  // checkout side menu, show information
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider 
      value={{
        countCart,
        setCountCart,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productSelected,
        setProductSelected,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}


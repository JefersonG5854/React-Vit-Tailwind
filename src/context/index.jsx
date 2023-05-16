import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

  const [countCart, setCountCart] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider 
      value={{
        countCart,
        setCountCart,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}


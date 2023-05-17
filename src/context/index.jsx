import { createContext, useState, useEffect, } from 'react';

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

  // Shopping cart - Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  // Search by title
  const [searchByTitle, setSearchByTitle] = useState('');

  // products's Filtered 
  const [filteredItems, setfilteredItems] = useState(null);

  const  filteredItemsByTitle = (items, shearchValue) =>{
    return items?.filter(item => item.title.toLowerCase().includes(shearchValue.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle){
      setfilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle])

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setfilteredItems,
        filteredItemsByTitle
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}


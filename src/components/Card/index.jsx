import { PlusIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Card = (data)=> {
  const context = useContext(ShoppingCartContext);

  // Mostrar producto en prodcut detail
  const showProduct = (productInformation) =>{
    context.openProductDetail()
    context.setProductSelected(productInformation)
    context.closeCheckoutSideMenu()
  }

  // Adicionar producto al carrito de conmpras
  const addProductsToCar = (even, productInformation) =>{
    even.stopPropagation()
    context.setCountCart(context.countCart + 1)
    context.setCartProducts([...context.cartProducts, productInformation])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span 
          className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5' 
        > 
          {data.data.category.name}
        </span>
        <img  
          className='w-full h-full object-cover rounded-lg'
          src={data.data.images[0]} 
          alt={data.data.title} 
        />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          // Enviamos el evento para que no se confunda entre el evento de adicionar y el de la card
          onClick={(event) => addProductsToCar(event,data.data)}
        >
          <PlusIcon 
            className="h-6 w-6 text-black"
          ></PlusIcon>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light' >{data.data.title} </span>
        <span className='text-lg font-medium'>$ {data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
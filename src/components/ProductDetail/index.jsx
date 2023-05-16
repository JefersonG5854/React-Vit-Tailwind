import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

import { ShoppingCartContext } from '../../context';

import './style.css'

const ProductDetail = () =>{
  const context = useContext(ShoppingCartContext);

  return (
    <aside 
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Detail
        </h2>
        <div>
          <XCircleIcon 
            className='className="h-8 w-8 text-black" cursor-pointer '
            onClick={() => context.closeProductDetail()}
          ></XCircleIcon>
        </div>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg'
          src={ context.productSelected.images }
          alt={ context.productSelected.title }
        />
      </figure>
      <p className='flex flex-col p-5'>
        <span className='font-medium text-2xl mb-2'>$ {context.productSelected.price}</span>
        <span className='font-medium text-mg'>{context.productSelected.title}</span>
        <span className='font-light text-sm'>{context.productSelected.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
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
        <div onClick={() => context.closeProductDetail()}>
          <XCircleIcon className='className="h-8 w-8 text-black" '></XCircleIcon>
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
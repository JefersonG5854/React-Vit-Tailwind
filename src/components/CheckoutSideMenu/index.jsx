import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

import { ShoppingCartContext } from '../../context';
import OrderCard from '../OrderCard';

import './style.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          My order
        </h2>
        <div>
          <XCircleIcon
            className='className="h-8 w-8 text-black" cursor-pointer '
            onClick={() => context.closeCheckoutSideMenu()}
          ></XCircleIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
      
    </aside>
  )
}

export default CheckoutSideMenu
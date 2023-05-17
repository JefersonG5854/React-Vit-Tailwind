import { useContext } from 'react'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

function MyOrder() {

  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let indexOrders = currentPath.substring(currentPath.lastIndexOf('/') + 1)


  if (indexOrders === 'last'){
    indexOrders = context.order?.length -1
  }

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-2'>
        <Link to='/my-orders' className='absolute left-0'>
          <ArrowUturnLeftIcon
            className='className="h-4 w-4 text-black" cursor-pointer ' />
        </Link>
        <h1> MyOrder </h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[indexOrders]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder 

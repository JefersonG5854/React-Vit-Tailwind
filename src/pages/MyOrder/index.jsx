import { useContext } from 'react'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

function MyOrder() {

  const context = useContext(ShoppingCartContext)

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
          context.order?.slice(-1)[0].products.map(product => (
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

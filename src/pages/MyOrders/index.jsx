import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard';
import { ShoppingCartContext } from '../../context';

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-4'>
        <h1 className='font-medium text-xl'> My Orders </h1>
      </div>
      {
        context.order.map((order, index)=>(
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice    = { order.totalPrice }
              totalProducts = { order.totalProducts }
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders

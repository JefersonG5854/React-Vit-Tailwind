import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const {totalPrice, totalProducts} = props
  return (
    <div className='flex justify-between items-center m-3  bg-slate-500/5 border border-black rounded-lg p-3'>
      <ShoppingCartIcon className='h-12 w-12 text-black-600' />

      <div className=' flex flex-col font-light px-3 w-full'>
        <p><span>12-02-2023</span></p>
        <p>Products: <span>{totalProducts} </span></p>
      </div>
      <p className='m-3 font-medium'>$<span>{totalPrice} </span></p>
    </div>
  )

}

export default OrdersCard
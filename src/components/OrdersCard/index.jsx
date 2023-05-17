import { TrashIcon } from '@heroicons/react/24/outline'

const OrdersCard = props => {
  const {totalPrice, totalProducts} = props

  return (
    <div className='flex justify-between items-center mb-3 bg-slate-500/5 border border-black'>
      <p>
        <span>01.02.23</span>
        <span>{totalProducts} </span>
        <span>{totalPrice} </span>
      </p>
    </div>
  )

}

export default OrdersCard
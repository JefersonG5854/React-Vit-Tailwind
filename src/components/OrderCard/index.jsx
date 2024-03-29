import { TrashIcon } from '@heroicons/react/24/outline'

const OrderCard = props => {
  const {
    id,
    title,
    imageUrl,
    price,
    handleDelete
  } = props
  let renderTrash

  if (handleDelete){
    renderTrash = 
    <TrashIcon
      onClick={() => handleDelete(id)}
      className='className="h-6 w-6 text-black" cursor-pointer '
    ></TrashIcon>
  }

  return (
    <div className='flex justify-between items-center mb-3 bg-slate-500/5'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img 
            className='w-full h-full rounded-lg object-cover'
            src={imageUrl} 
            alt={title} 
          />
        </figure>
        <p className='text-sm font-light'>{title} </p>
      </div>

      <div className='flex items-center gap-2 px-2'>
        <p className='text-lg font-medium'>{price} </p>
        {renderTrash}
      </div>
    </div>
  )

}

export default OrderCard
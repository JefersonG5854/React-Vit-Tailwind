import { BuildingStorefrontIcon, NoSymbolIcon} from '@heroicons/react/24/outline';

import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length >0){
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }
      else{
        return(
          <div className='flex gap-4'>
            <NoSymbolIcon className="h-5 w-5 text-black/70" ></NoSymbolIcon>
            Search not found a product
          </div>
        )
      }
      
    }
    else
    {
      return(
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4 gap-2'>
        <BuildingStorefrontIcon className="h-5 w-5 text-black/70"></BuildingStorefrontIcon>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>

      <input 
        type="text" 
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>

      <ProductDetail>
      </ProductDetail>
    </Layout>
  )
}

export default Home

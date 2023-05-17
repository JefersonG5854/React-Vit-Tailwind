import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";



const Navbar = ()=>{
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'

  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByClass()}
          >
            ShopStore
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByClass()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Clothes'
            onClick={() => context.setSearchByClass('Clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/Electronics'
            onClick={() => context.setSearchByClass('Electronic')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/Furnitures'
            onClick={() => context.setSearchByClass('Furniture')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Toys'
            onClick={() => context.setSearchByClass('Toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-cyan-500/50'>
          jefersonG5854gmail.com
        </li>

        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-order'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Order
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex justify-center'>
          <ShoppingBagIcon className='h-5 w-5 text-black'> </ShoppingBagIcon> 
          <div className='px-1'>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
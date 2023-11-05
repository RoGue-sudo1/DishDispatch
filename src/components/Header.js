import { Link } from 'react-router-dom';
import Logo from '../Utils/logo.png'
import { useSelector } from 'react-redux';

const Header=()=>{

    const cartItems = useSelector((store)=>store.cart.items)
    return(
        <div className=' flex justify-between bg-teal-100 shadow-lg'>
            <div>
            <Link to='/'><img src={Logo} className='w-60 px-7 py-9'/></Link>
            </div>
            <div className='flex item-center'>
                <ul className='flex m-4 p-4 justify-evenly '>
                    <li className='px-4 text-xl font-bold'><Link to='/'>Home</Link></li>
                    <li className='px-4 text-xl font-bold'><Link to='/cart'>Cart - ({cartItems.length} Items)</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;
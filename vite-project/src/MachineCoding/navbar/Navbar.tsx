import { NAVIGATION_CONFIG } from './navigationConfig'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-1 border-r-1 bg-gray-500 text-white font-semibold'>
      <div className='pl-2'>Explorer</div>
    {NAVIGATION_CONFIG.map((config) => 
        <NavLink key={config.href} to={config.href}>
            <div className='flex gap-2 p-4'>
              <span>{config.icon}</span>
                {config.title}
            </div>
        </NavLink>
      )}
      </div>
  )
}

export default Navbar
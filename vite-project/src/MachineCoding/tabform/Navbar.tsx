import { TABS } from './constant'
import { NavLink } from 'react-router-dom'
import './tabForm.scss'

const Navbar = ({ activeTab, setActiveTab }: { activeTab: number, setActiveTab: (index: number) => void }) => {

    const handleClick = (index: number) => () => {
        setActiveTab(index)
    }

    return (
        <div className="navbar__container flex border-b border-gray-300">
            <div className="navbar ml-auto pr-10 ">
                {
                    TABS.map((tab, index) => {
                        return <NavLink onClick={handleClick(index)} className={activeTab === index ? 'tab tab-active' : 'tab'} key={tab.name} to={tab.href}>
                            {tab.name}
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
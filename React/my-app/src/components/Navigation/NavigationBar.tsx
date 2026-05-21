import { NavLink } from "react-router-dom"
import { getNavigationItems } from "../utils"
import '../styles.scss'

const NavigationBar = () => {

    const items = getNavigationItems().map((navItem) => {
        return (
            <NavLink className="gap-10" to={navItem.href} key={navItem.name}>{navItem.name}</NavLink>
        )
    })

    return (
        <div className="product__navbar flex gap-10">
            {items}
        </div>
    )
}


export default NavigationBar
import { NavigationItemsTypes } from "./types"

export const getNavigationItems = (): NavigationItemsTypes[] => {
    return [
        { name: "Home", href: "/" },
        { name: "Categories", href: "/categories" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
}

import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Setting";
import Logout from "./Logout";

export const TABS = [
    { name: "Profile", href: "/", component: Profile },
    { name: "Interest", href: '/interest', component: Interest },
    { name: "Settings", href: "/settings", component: Settings },
    { name: "Logout", href: "/logout", component: Logout },
]

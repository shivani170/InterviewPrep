import Accordion from "../accordian/Accordion";
import EmiCalculator from "../emiCalculator/EmiCalculator";
import FileExplorerWithAction from "../fileExplorer/FileExplorerWithAction";
import Users from "../pagination/Users";
import Product from "../pagination/Users";
import { ProgressBar } from "../progressBar/ProgressBar";
import { Recipe } from "../search/Recipe";
import TabFormRouter from "../tabform/TabFormRouter";
import TodoList from "../todoList/TodoList";

export const NAVIGATION_CONFIG = [
    {
    title: "Search",
    href: "/search",
    component: Recipe,
    icon: "🔎"
},
{
    title: "File Explorer",
    href: "/",
    component: FileExplorerWithAction,
    icon: "📁"
},
{
    title: "Todo List",
    href: "/todo",
    component: TodoList,
    icon: "📕"

},
{
    title: "Users (Pagination)",
    href: "/users",
    component: Users,
    icon: "👥"

},
{
    title: "Accordion",
    href: "/accordion",
    component: Accordion,
    icon: "⌄"

},

{
    title: "Tab Form",
    href: "/tab-form",
    component: TabFormRouter,
    icon: "📑"

},
{
    title: "Progress",
    href: "/progress",
    component: ProgressBar,
    icon: "📊"

},
{
    title: "EMI Calculator",
    href: "/emi-calculator",
    component: EmiCalculator,
    icon: "🔢"

},
]
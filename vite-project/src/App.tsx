import { BrowserRouter } from 'react-router-dom'
import { Recipe } from './MachineCoding/search/Recipe'

const App = () => {
    return (
        <BrowserRouter>
            {/* <TabFormRouter /> */}
            <Recipe />
        </BrowserRouter>
    )
}

export default App
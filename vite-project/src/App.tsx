import { BrowserRouter } from 'react-router-dom'
import Accordion from './MachineCoding/accordian/Accordion'

const App = () => {
    return (
        <BrowserRouter>
            {/* <TabFormRouter /> */}
            {/* <ProgressBar progress={70} /> */}
            {/* <Recipe /> */}
            {/* <FileExplorer /> */}
            {/* <TodoList /> */}
            <Accordion />

        </BrowserRouter>
    )
}

export default App
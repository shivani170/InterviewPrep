import { BrowserRouter } from 'react-router-dom'
import FileExplorer from './MachineCoding/fileExplorer/FileExplorer'

const App = () => {
    return (
        <BrowserRouter>
            {/* <TabFormRouter /> */}
            {/* <ProgressBar progress={70} /> */}
            {/* <Recipe /> */}
            <FileExplorer />

        </BrowserRouter>
    )
}

export default App
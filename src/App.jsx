import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllCards from "./Components/AllCards"
import CardPage from "./Components/CardPage"
import Edit from "./Components/Edit"
import ViewTask from "./Components/ViewTask"


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="viewtask" element={<ViewTask />} />
          <Route path="cardpage" element={<CardPage />} />
          <Route path="edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

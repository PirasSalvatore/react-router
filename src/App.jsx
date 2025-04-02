import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import ChiSiamo from "./pages/chiSiamo"
import Posts from "./pages/Posts"
import Post from "./pages/Post"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route index Component={Home} />
            <Route path="/chiSiamo" Component={ChiSiamo} />
            <Route path="/posts" Component={Posts} />
            <Route path="/post/:slug" Component={Post} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Hola mundo</h1>} />
    </Routes>
  )
}

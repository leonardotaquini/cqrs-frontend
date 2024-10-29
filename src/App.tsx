
import { useEffect } from 'react'
import './App.css'
import { AppLayout } from './AppLayout'
import { useProductStore } from './products/store/product.store'
import { AppRouter } from './router/AppRouter'

function App() {

  const getProducts = useProductStore((state) => state.getProducts);

  useEffect(() => {
    getProducts()
  }
  , [])

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App

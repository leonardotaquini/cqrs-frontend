import { Button } from "@/components/shadcn/ui/button"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate();

  return (
    <main className="h-full grid place-items-center">
        <section className="flex justify-center items-center flex-col space-y-4">
            <h1 className="text-2xl titulo">Welcome to the ProductApp</h1>
            <Button variant={'default'} onClick={ ()=> navigate('/product') }>Go to Products</Button>
        </section>
    </main>
  )
}

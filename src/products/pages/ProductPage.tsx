import { Button } from "@/components/shadcn/ui/button";
import { Tabla } from "../components/Tabla";

export const ProductPage = () => {
  const handleCreateProduct = () => {
    console.log("handleCreateProduct");
  };
  return (
    <main>
      <Button className="m-4" onClick={handleCreateProduct} variant={"default"}>
        Crear producto
      </Button>
      <Tabla />
    </main>
  );
};

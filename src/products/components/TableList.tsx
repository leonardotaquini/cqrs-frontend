import { Button } from "@/components/shadcn/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/shadcn/ui/table";
import { Trash } from "lucide-react";
import { ButtonForm } from "./ButtonForm";
import { useProductStore } from "../store/product.store";

export const TableList = () => {
  const products = useProductStore((state) => state.products);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  return (
    <>
      <TableBody>
        {products.length > 0 ? (
          products?.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>

              <TableCell>
                <ButtonForm id={product._id} />
                <Button
                  variant={"ghost"}
                  onClick={() => deleteProduct(product._id!)}
                >
                  <Trash className=" text-red-600"></Trash>
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={8}>Inventario Vacio</TableCell>
          </TableRow>
        )}
      </TableBody>
    </>
  );
};

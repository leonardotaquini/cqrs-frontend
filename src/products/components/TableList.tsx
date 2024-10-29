import { TableBody, TableCell, TableRow } from "@/components/shadcn/ui/table";
import { ButtonForm } from "./ButtonForm";
import { useProductStore } from "../store/product.store";
import { AlertDialogDelete } from "@/components/AlerDialogDelete";

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
                <AlertDialogDelete title="Eliminar" handleDelete={()=> deleteProduct(product._id!)}/>
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

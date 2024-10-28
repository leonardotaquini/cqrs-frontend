import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { useProductStore } from "../store/product.store";
import { Button } from "@/components/shadcn/ui/button";
import { Edit2, Trash } from "lucide-react";

export const Tabla = () => {

  const products = useProductStore((state) => state.products);
  
  const productHeader = [
    "Nombre",
    "Descripcion",
    "Precio",
    "Cantidad",
    "Acciones",
  ];

  return (
    <Table>
      <TableCaption>Categorias</TableCaption>
      <TableHeader>
        <TableRow>
          {productHeader.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((prodct) => (
            <TableRow key={prodct.id}>
              <TableCell>{prodct.name}</TableCell>
              <TableCell>{prodct.description}</TableCell>
              <TableCell>{prodct.price}</TableCell>
              <TableCell>{prodct.quantity}</TableCell>

              <TableCell>
                <Button variant={"ghost"}>
                  <Edit2 className=" text-cyan-600"></Edit2>
                </Button>
                <Button variant={"ghost"}>
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
      <TableFooter>
        <TableRow>
          <TableCell colSpan={8}>
            Cantidad de productos: {products.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

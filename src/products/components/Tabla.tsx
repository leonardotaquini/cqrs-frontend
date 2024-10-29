import {
  Table,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { useProductStore } from "../store/product.store";
import { TableList } from "./TableList";

export const Tabla = () => {
  const products = useProductStore((state) => state.products);

  const productHeader = [
    "Nombre",
    "Descripción",
    "Precio",
    "Cantidad",
    "Acciones",
  ];

  return (

      <Table>
        <TableCaption>Productos</TableCaption>
        <TableHeader>
          <TableRow>
            {productHeader.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableList />
        <TableFooter>
          <TableRow>
            <TableCell colSpan={productHeader.length} className="text-indigo-500">
              Cantidad de productos: {products.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  );
};

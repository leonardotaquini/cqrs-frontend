import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { useState } from "react";
import { IProduct } from "../interfaces/product.interface";
import { Formulario } from "./Formulario";
export const ButtonForm = () => {
  const handleCreateProduct = () => {
    console.log("handleCreateProduct");
  };

  const [prodcutForm, setProductForm] = useState<IProduct>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-4" variant="default">
          Crear producto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear producto</DialogTitle>
        </DialogHeader>
        <Formulario />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

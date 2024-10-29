import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";

import { Formulario } from "./Formulario";
import { useState } from "react";
import { Edit2 } from "lucide-react";
export const ButtonForm = ({ id }: { id?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant={id ? "link" : "primary"} className="m-4">
          {id ? <Edit2 className="text-cyan-600" /> : 'Agregar producto' }
        </Button>
      </DialogTrigger>
      <DialogContent className=" sm: max-[700px]">
        <DialogHeader>
          <DialogTitle>
            {id ? "Editar Producto" : "Crear Producto"}
          </DialogTitle>
          <DialogDescription>
            {id
              ? "Edita los campos que desees"
              : "Llena los campos para crear un nuevo Producto"}
          </DialogDescription>
        </DialogHeader>
        <Formulario close={() => setOpen(false)} id={ id } />
      </DialogContent>
    </Dialog>
  );
};

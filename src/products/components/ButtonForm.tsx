import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";

import { Formulario } from "./Formulario";
export const ButtonForm = () => {
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

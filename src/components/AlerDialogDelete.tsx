import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/shadcn/ui/alert-dialog"
import { Button } from "@/components/shadcn/ui/button"
import { Trash } from "lucide-react"

export function AlertDialogDelete({ title, handleDelete }: { title: string, handleDelete: () => void }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={'ghost'}> <Trash className=" text-red-600"></Trash></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        ¿Estás seguro de que deseas eliminar?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                    >Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
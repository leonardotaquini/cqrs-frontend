
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { useProductStore } from "../store/product.store";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  price: z.number({
    coerce: true,
    message: "Price must be a number.",
  }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  quantity: z.number({
    coerce: true,
    message: "Quantity must be a number.",
  }),
});

export function Formulario({ close, id }: { close: () => void, id?: string }) {
  const createProduct = useProductStore((state) => state.createProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const isLoading = useProductStore((state) => state.isLoading);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      quantity: 0,
    },
  });

  useEffect(() => {
    if (id) {
      const product = useProductStore.getState().products.find((product) => product._id === id);
      if (product) {
        form.reset(product);
      }
    }
  }
  , [id]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (id) {
      updateProduct(id, values);
    } else {
      createProduct(values);
    }
    close();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripcion</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={'green'} className="w-full">
          {isLoading ? <Loader className="w-6 h-6 animate-spin"/> : "Guardar"}
        </Button>
      </form>
    </Form>
  );
}

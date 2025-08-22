/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectImageBtn from '@/components/select-image-btn'
import { Badge, type Status } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { productSchema, type ProductSchemaProps } from '../schema'

interface CreateOrUpdateProductFormProps {
  title?: string
  description?: string
  price?: string
  category?: string
  image?: any
  status?: string
}

export default function CreateOrUpdateProductForm({
  title,
  price,
  image,
  status,
  category,
  description,
}: CreateOrUpdateProductFormProps) {
  const form = useForm<ProductSchemaProps>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title,
      price,
      image,
      category,
      description,
    },
  })

  function OnSubmit(data: ProductSchemaProps) {
    console.log(data)
    form.reset()
  }

  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      form.setValue('image', file)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="flex gap-6 mt-10">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="fle-col flex gap-y-2">
                  <div className="relative inline-flex">
                    <SelectImageBtn
                      size="lg"
                      field={field}
                      inputRef={inputRef}
                    />
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={handleImageChange}
                      accept=".jpg, .png, .jpeg, .svg"
                    />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex-1 space-y-6 bg-white p-6 rounded-[20px]">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-secondary font-bold text-gray-300">
              Dados do produto
            </h2>

            <Badge status={status as Status}>{status}</Badge>
          </div>
          <div className="space-y-5">
            <div className="flex items-start gap-5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex-3">
                    <FormLabel className="text-xs">TÍTULO</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nome do produto"
                        className="flex-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex-2">
                    <FormLabel className="text-xs">VALOR</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="0,00"
                          className="flex-1 pl-6"
                        />
                        <span className="absolute bottom-3 text-gray-400">
                          R$
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex-2">
                  <FormLabel className="text-xs">DESCRIÇÃO</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none h-20"
                      placeholder="Escreva detalhes sobre o produto, tamanho, características"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="text-xs">CATEGORIA</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      {field.value && (
                        <Button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            field.onChange('')
                          }}
                          className="bg-shape text-gray-300 size-6 rounded-full absolute right-8 bottom-2 z-50"
                        >
                          <HugeiconsIcon
                            icon={Cancel01Icon}
                            className="size-4 text-gray-300"
                          />
                        </Button>
                      )}
                      <SelectContent>
                        <SelectItem value="brinquedo">Brinquedo</SelectItem>
                        <SelectItem value="moveis">Móvel</SelectItem>
                        <SelectItem value="papelaria">Papelaria</SelectItem>
                        <SelectItem value="saude & beleza">
                          Saúde & Beleza
                        </SelectItem>
                        <SelectItem value="utensilio">Utensílio</SelectItem>
                        <SelectItem value="vestuário">Vestuário</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 items-center gap-3">
              <Button
                size={'lg'}
                variant={'outline'}
                className="justify-center rounded-[10px]"
              >
                Cancelar
              </Button>
              <Button size={'lg'} className="justify-center rounded-[10px]">
                Salvar e publicar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

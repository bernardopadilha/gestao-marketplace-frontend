import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { InputIcon } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AccessIcon,
  ArrowRight02Icon,
  Call02Icon,
  Mail02Icon,
  User03Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import SelectImageBtn from '@/components/select-image-btn'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { signUpSchema, type SignUpSchemaProps } from '../schema'

export function SignUpForm() {
  const form = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
  })

  function OnSubmit(data: SignUpSchemaProps) {
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
      <form
        onSubmit={form.handleSubmit(OnSubmit)}
        className="mt-12 space-y-5 text-base"
      >
        <h1 className="font-secondary font-bold text-lg">Perfil</h1>

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="fle-col flex gap-y-2">
                  <div className="relative inline-flex">
                    <SelectImageBtn field={field} inputRef={inputRef} />
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

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NOME</FormLabel>
              <FormControl>
                <InputIcon
                  {...field}
                  type="text"
                  icon={User03Icon}
                  placeholder="Seu email cadastrado"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TELEFONE</FormLabel>
              <FormControl>
                <InputIcon
                  {...field}
                  type="number"
                  icon={Call02Icon}
                  placeholder="(00) 00000-0000"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h1 className="font-secondary font-bold text-lg mt-12">Acesso</h1>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EMAIL</FormLabel>
              <FormControl>
                <InputIcon
                  {...field}
                  type="email"
                  icon={Mail02Icon}
                  placeholder="Seu email cadastrado"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SENHA</FormLabel>
              <FormControl>
                <InputIcon
                  {...field}
                  type="password"
                  icon={AccessIcon}
                  placeholder="Sua senha de acesso"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CONFIRMAR SENHA</FormLabel>
              <FormControl>
                <InputIcon
                  {...field}
                  type="password"
                  icon={AccessIcon}
                  placeholder="Sua senha de acesso"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size={'lg'} className="mt-12">
          Acessar
          <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
        </Button>
      </form>
    </Form>
  )
}

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
  Mail02Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useForm } from 'react-hook-form'
import { signInSchema, type SignInSchemaProps } from '../schema'

export function SignInForm() {
  const form = useForm<SignInSchemaProps>({
    resolver: zodResolver(signInSchema),
  })

  function OnSubmit(data: SignInSchemaProps) {
    console.log(data)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(OnSubmit)}
        className="mt-12 space-y-5 text-base"
      >
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
        <Button size={'lg'} className="mt-12">
          Acessar
          <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
        </Button>
      </form>
    </Form>
  )
}

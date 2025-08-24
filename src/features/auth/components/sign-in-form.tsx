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
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
  ViewOffIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSignIn } from '../api/use-sign-in'
import { signInSchema, type SignInSchemaProps } from '../schema'

export function SignInForm() {
  const [inputType, setInputType] = useState<'text' | 'password'>('password')

  const form = useForm<SignInSchemaProps>({
    resolver: zodResolver(signInSchema),
  })

  const { mutate, isPending } = useSignIn({ reset: form.reset })

  function OnSubmit({ email, password }: SignInSchemaProps) {
    mutate({
      email,
      password,
    })
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
                <div className="relative">
                  <InputIcon
                    {...field}
                    type={inputType}
                    icon={AccessIcon}
                    placeholder="Sua senha de acesso"
                  />
                  <Button
                    type="button"
                    variant={'ghost'}
                    size={'icon'}
                    className="absolute bottom-2 right-2"
                    onClick={() =>
                      setInputType(inputType === 'text' ? 'password' : 'text')
                    }
                  >
                    <HugeiconsIcon
                      icon={ViewIcon}
                      className={cn(
                        'size-5',
                        inputType === 'password' ? 'block' : 'hidden',
                      )}
                    />
                    <HugeiconsIcon
                      icon={ViewOffIcon}
                      className={cn(
                        'size-5',
                        inputType === 'text' ? 'block' : 'hidden',
                      )}
                    />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={'lg'} className="mt-12">
          {isPending ? (
            <>
              Acessando...
              <Loader2Icon className="size-5  animate-spin" />
            </>
          ) : (
            <>
              Acessar
              <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

import { ImageUpload01Icon } from '@hugeicons/core-free-icons'

import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from './ui/button'

export default function SelectImageBtn({
  field,
  size = 'sm',
  inputRef,
}: {
  size?: 'sm' | 'lg'
  inputRef: React.RefObject<HTMLInputElement | null>
  field: {
    value: File | string | null | undefined
    onChange: (value: File | string | null) => void
  }
}) {
  return (
    <Button
      type="button"
      className={cn(
        'group relative  bg-shape p-0 overflow-hidden',
        size === 'sm'
          ? 'size-[120px]'
          : 'max-w-[415px] min-w-[415px] max-h-[340px] min-h-[340px]',
      )}
      onClick={() => {
        if (inputRef.current?.value) {
          field.onChange(null)
          inputRef.current.value = ''
          return
        }
        inputRef.current?.click()
      }}
    >
      {field.value ? (
        <>
          <div className="absolute inset-0">
            <img
              className="size-full object-cover transition-all duration-150 group-hover:brightness-[60%]"
              src={
                field.value instanceof File
                  ? URL.createObjectURL(field.value)
                  : field.value // aqui funciona se vier URL do S3
              }
              alt="Preview of uploaded image"
            />
          </div>

          <HugeiconsIcon
            icon={ImageUpload01Icon}
            className={cn(
              'text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-500',
              size === 'sm' ? 'size-7' : 'size-9',
            )}
          />
        </>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full h-full justify-center">
          <HugeiconsIcon
            icon={ImageUpload01Icon}
            className={cn('text-primary', size === 'sm' ? 'size-7' : 'size-9')}
          />
          {size === 'lg' && (
            <p className="font-normal text-center">
              Selecione a imagem <br /> do produto
            </p>
          )}
        </div>
      )}
    </Button>
  )
}

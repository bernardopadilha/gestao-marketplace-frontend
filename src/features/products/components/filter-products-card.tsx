import { Button } from '@/components/ui/button'
import { InputIcon } from '@/components/ui/input'
import {
  Cancel01Icon,
  SaleTag02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function FilterProductsCard() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [value, setValue] = useState<string | undefined>(
    searchParams.get('status') || '',
  )
  const [name, setName] = useState<string>(searchParams.get('name') || '')

  return (
    <div className="p-6 flex flex-col gap-6 bg-white rounded-[20px] lg:min-w-xs lg:max-w-xs">
      <h2 className="font-secondary font-bold text-gray-300">Filtrar</h2>

      <div className="space-y-5">
        <InputIcon
          icon={Search01Icon}
          placeholder="Pesquisar"
          value={name}
          onChange={(e) => {
            const val = e.target.value
            setName(val)

            const params = new URLSearchParams(searchParams)
            if (val) {
              params.set('name', val)
            } else {
              params.delete('name')
            }
            setSearchParams(params)
          }}
        />
        <div className="relative">
          <Select
            value={value}
            onValueChange={(val) => {
              setValue(val)

              const params = new URLSearchParams(searchParams)
              if (val) {
                params.set('status', val)
              } else {
                params.delete('status')
              }
              setSearchParams(params)
            }}
          >
            <SelectTrigger className="w-full" icon={SaleTag02Icon}>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            {value && (
              <Button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  const params = new URLSearchParams(searchParams)
                  params.delete('status')
                  setSearchParams(params)
                }}
                className="bg-shape text-gray-300 size-6 rounded-full absolute right-8 top-1.5 z-50"
              >
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  className="size-4 text-gray-300"
                />
              </Button>
            )}
            <SelectContent>
              <SelectItem value="anunciado">Anunciado</SelectItem>
              <SelectItem value="vendido">Vendido</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="h-14 rounded-[10px] font-normal">
        Aplicar filtro
      </Button>
    </div>
  )
}

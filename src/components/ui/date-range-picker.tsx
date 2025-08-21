import { format } from 'date-fns'
import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar04Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ptBR } from 'date-fns/locale'
import { Button } from './button'

export default function DateRangePicker({
  date,
  setDate,
}: {
  date: DateRange | undefined
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}) {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            data-empty={!date}
            className="w-fit justify-start text-left font-normal hover:bg-blue-100 hover:text-blue-300"
          >
            <HugeiconsIcon
              icon={Calendar04Icon}
              className="size-4 text-blue-300"
            />
            {date ? (
              <span className="uppercase text-xs font-medium">
                {date?.from
                  ? format(date.from, "dd 'de' MMMM", {
                      locale: ptBR,
                    })
                  : ''}{' '}
                -{' '}
                {date?.to
                  ? format(date.to, "dd 'de' MMMM", {
                      locale: ptBR,
                    })
                  : ''}
              </span>
            ) : (
              <span>Selecione um período para aplicar</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays={false}
            className="rounded-md border p-2"
            classNames={{
              months: 'gap-8',
              month:
                'relative first-of-type:before:hidden before:absolute max-sm:before:inset-x-2 max-sm:before:h-px max-sm:before:-top-2 sm:before:inset-y-2 sm:before:w-px before:bg-border sm:before:-left-4',
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

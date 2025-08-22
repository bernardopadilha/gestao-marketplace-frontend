import ReactCountUpWrapper from '@/components/react-count-up-wrapper'
import { cn } from '@/lib/utils'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'

export default function StatCard({
  title,
  value,
  icon,
  iconColor = 'text-blue-300',
}: {
  value: number
  title: string
  icon: IconSvgElement
  iconColor?: string
}) {
  return (
    <div className="p-3 w-full flex items-center gap-4 bg-white rounded-[20px] sm:min-w-[230px] lg:min-w-3xs lg:max-w-3xs hover:scale-[.99] transition-all duration-300">
      <div className="h-20 w-[86px] flex items-center justify-center bg-blue-100 rounded-[12px]">
        <HugeiconsIcon icon={icon} className={cn('size-9', iconColor)} />
      </div>
      <div>
        <h1 className="text-gray-400 font-semibold text-[28px]">
          <ReactCountUpWrapper value={value} />
        </h1>
        <p className="text-sm">
          <span className="block">{title.split(' ')[0]}</span>
          <span className="block">{title.split(' ')[1]}</span>
        </p>
      </div>
    </div>
  )
}

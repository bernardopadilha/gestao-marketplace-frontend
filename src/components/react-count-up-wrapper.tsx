import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

export default function ReactCountUpWrapper({ value }: { value: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return '-'
  }

  return (
    <CountUp
      duration={2}
      preserveValue
      end={value}
      decimals={0}
      formattingFn={(val) =>
        new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0 }).format(val)
      }
    />
  )
}

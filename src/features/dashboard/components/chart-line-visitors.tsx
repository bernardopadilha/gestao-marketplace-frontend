/* eslint-disable react-hooks/exhaustive-deps */
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import DateRangePicker from '@/components/ui/date-range-picker'
import { subDays } from 'date-fns'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { chartData } from '../mock/chart-data'

const chartConfig = {
  visitors: {
    label: 'Visitantes',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function LineChartVisitors() {
  const today = new Date()
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(today, 30),
    to: today,
  })

  const [activeChart] = useState<keyof typeof chartConfig>('visitors')

  // const total = React.useMemo(
  //   () => ({
  //     desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
  //     mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
  //   }),
  //   [],
  // )

  const filteredData = useMemo(() => {
    if (!date?.from || !date?.to) return chartData

    return chartData.filter((item) => {
      const itemDate = new Date(item.date)
      return itemDate >= date.from! && itemDate <= date.to!
    })
  }, [date, chartData])

  return (
    <Card className="p-6 max-w-4xl shadow-none border-none hover:scale-[.99] transition-all duration-300">
      <CardHeader className="flex flex-col items-stretch p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle className="font-secondary font-bold text-lg">
            Visitantes
          </CardTitle>
        </div>
        <DateRangePicker date={date} setDate={setDate} />
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={filteredData}
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray={'8 8'}
              stroke={`var(--color-zinc-100)`}
            />
            <YAxis
              dataKey="visitors"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              tickCount={4}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              minTickGap={4}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('pt-BR', {
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] uppercase text-gray-400"
                  nameKey="visitors"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('pt-BR', {
                      month: 'long',
                      day: 'numeric',
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-blue-200)`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

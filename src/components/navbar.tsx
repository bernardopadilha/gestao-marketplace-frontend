import {
  ChartHistogramIcon,
  Menu01Icon,
  Package03Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './logo'
import NewProductBtn from './new-product-btn'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { UserButton } from './user-button'

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  )
}

const items = [
  { label: 'Dashboard', link: '/', icon: ChartHistogramIcon },
  { label: 'Produtos', link: '/produtos', icon: Package03Icon },
]

function MobileNavbar() {
  const [open, setIsOpen] = useState(false)

  return (
    <div className="block border-separate bg-background md:hidden border-b border-shape">
      <nav className="flex items-center justify-between p-4">
        <Sheet open={open} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <HugeiconsIcon icon={Menu01Icon} className="" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] p-5" side="left">
            <Logo size="sm" />
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  icon={item.icon}
                  clickCallBack={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Logo size="sm" />

        <UserButton />
      </nav>
    </div>
  )
}

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b border-shape bg-background md:block p-5">
      <nav className="mx-auto flex items-center justify-between ">
        <Logo size="sm" />
        <div className="flex h-full gap-2">
          {items.map((item) => (
            <NavbarItem
              key={item.label}
              link={item.link}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <NewProductBtn />

          <UserButton />
        </div>
      </nav>
    </div>
  )
}

function NavbarItem({
  link,
  icon,
  label,
  clickCallBack,
}: {
  link: string
  label: string
  icon: IconSvgElement
  clickCallBack?: () => void
}) {
  const { pathname } = useLocation()
  const isActive = pathname === link
  return (
    <Button
      asChild
      variant={isActive ? 'active' : 'ghost'}
      className="relative flex items-center text-sm font-normal px-4 h-10"
    >
      <Link
        to={link}
        onClick={() => {
          if (clickCallBack) clickCallBack()
        }}
      >
        <HugeiconsIcon icon={icon} className="size-5" />
        {label}
      </Link>
    </Button>
  )
}

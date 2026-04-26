
import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { GraduationCap } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Academic", href: "/academic" },
  { title: "Events", href: "/events" },
  { title: "Alumni", href: "/alumni" },
  { title: "Staff", href: "/staff" },
  { title: "Students", href: "/students" },
]

export function Navbar() {
  return (
    <header className="h-20 border-b border-primary/20 px-4 md:px-10 flex items-center justify-between bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex flex-col">
        <Link to="/" className="flex items-center gap-2 group">
          <GraduationCap className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
          <h1 className="text-xl md:text-2xl font-serif italic font-medium bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            Damphu Central School
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <NavigationMenu className="hidden lg:flex mr-2">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-primary/10 hover:text-primary rounded-full border border-transparent hover:border-primary/20 transition-all text-[11px] uppercase tracking-widest font-bold"
                  )}
                  render={<Link to={item.href} />}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />
      </div>
    </header>
  )
}

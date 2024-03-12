'use client'
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { navItems } from "@/utils/constants"



const Navbar = () => {
    return (
        <header className='bg-white hidden lg:block'>
            <div className="container flex py-3">
                <Link href='/' className="my-auto">
                    <Image
                        src="/img/logo.png"
                        width={120}
                        height={80}
                        alt="Leemart"
                    />
                </Link>
                <NavigationMenu className="ms-auto">
                    <NavigationMenuList>
                        {navItems.map((item,index)=>(
                        item.subMenu ? (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger >{item.label}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <div className="relative rounded-md">
                                            <Image
                                                src={`/img/${item.img}`}
                                                width={200}
                                                height={200}
                                                alt="ro-img"
                                                className="rounded-md"
                                            />
                                            <div className="absolute h-full w-full rounded-md bg-blue-500/20 z-10 top-0 left-0"></div>
                                            </div>
                                        </NavigationMenuLink>
                                    </li>
                                        {
                                            item.subMenu.map((subItem,index)=>(
                                                <li key={index} className="border text-center rounded-md bg-blue-200/50 hover:bg-blue-200/80 focus:bg-blue-200/80 focus:outline-1 my-1 py-2">
                                                    <Link href={subItem.href} >{subItem.label}</Link>
                                                </li>
                                            )) 
                                        }
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        ):(
                        <NavigationMenuItem key={index}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        )
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

        </header>
    )
}

export default Navbar



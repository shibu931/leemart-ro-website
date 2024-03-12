import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { navItems } from "@/utils/constants"


const MobileNav = () => {
    return (
        <header className='bg-white lg:hidden flex p-3 justify-between'>
            <Link href='/' className="my-auto">
                <Image
                    src="/img/logo.png"
                    width={120}
                    height={80}
                    alt="Leemart"
                />
            </Link>
            <nav>
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/img/icons/menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer mt-1"
                        />
                    </SheetTrigger>
                    <SheetContent className="bg-blue-100">

                        <ul className='mt-5'>
                            {
                                navItems.map((item,index) => (
                                    item.subMenu ? (
                                        <li key={index} className="my-1 py-2">
                                            <Accordion type="single" collapsible>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger className="py-0 no-underline">{item.label}</AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul>
                                                        {item.subMenu.map((subItem, index) => (
                                                            <li key={index} className="border ps-2 rounded-md bg-blue-200/50 hover:bg-blue-200/80 focus:bg-blue-200/80 focus:outline-1 my-1 py-2">
                                                                <Link href={subItem.href} >{subItem.label}</Link>
                                                            </li>
                                                        ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </li>
                                    ) : (
                                        <li key={index} className="my-1 py-2">
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                ))
                            }
                        </ul>

                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}

export default MobileNav
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FaqAccordion = ({ faqs }) => {
    return (
        <Accordion type="single" collapsible>
            {
                faqs.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {
                                item.content
                            }
                        </AccordionContent>
                    </AccordionItem>
                ))
            }

        </Accordion>

    )
}

export default FaqAccordion
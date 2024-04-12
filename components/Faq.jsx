import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Faq = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="w-full pt-12 mb-6 xl:mb-24">
                    <h2 className="section-title mb-12 text-center mx-auto">
                        Our Studio
                    </h2>

                    <div>
                        {/* Accordion */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                            01. What kind of photography equipment do you use?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                            01. Do I have to come to your studio to view my photos?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                            01. How long have you been in business?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trans } from "@lingui/react/macro";

const ProductInformation = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="md:max-w-[800px] w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Trans>Product Information</Trans>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            <Trans>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </Trans>
          </p>
          <p>
            <Trans>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </Trans>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Trans>Shipping Details</Trans>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            <Trans>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </Trans>
          </p>
          <p>
            <Trans>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </Trans>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <Trans>Return Policy</Trans>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            <Trans>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </Trans>
          </p>
          <p>
            <Trans>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </Trans>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default ProductInformation;

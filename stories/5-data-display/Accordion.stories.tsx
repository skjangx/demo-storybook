import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'E-Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. With type="multiple", you can have multiple items open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          Each accordion item can be opened independently of the others.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is this useful?</AccordionTrigger>
        <AccordionContent>
          Yes, it's perfect for FAQ sections or content where users might want to compare multiple items.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, MasterCard, American Express),
          PayPal, Apple Pay, Google Pay, and bank transfers. All payments are
          processed securely through our encrypted payment gateway.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping typically takes 3-5 business days within the continental US.
          Express shipping (1-2 business days) and overnight shipping options are also available.
          International shipping times vary by destination.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day return policy for most items in their original condition.
          Items must be unused and in original packaging. Return shipping is free for
          defective items, while customer-initiated returns may incur a shipping fee.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>Do you offer customer support?</AccordionTrigger>
        <AccordionContent>
          Yes! Our customer support team is available Monday through Friday,
          9 AM to 6 PM EST. You can reach us via email, live chat, or phone.
          We typically respond to emails within 24 hours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-5">
        <AccordionTrigger>Can I track my order?</AccordionTrigger>
        <AccordionContent>
          Absolutely! Once your order ships, you'll receive a tracking number via email.
          You can also log into your account to view real-time tracking information
          and delivery updates.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Features: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="feature-1">
        <AccordionTrigger>🚀 Performance</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Lightning-fast performance with optimized rendering and minimal bundle size.</p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>Server-side rendering support</li>
              <li>Lazy loading for better performance</li>
              <li>Optimized for Core Web Vitals</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="feature-2">
        <AccordionTrigger>🎨 Customization</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Fully customizable components with flexible theming options.</p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>CSS variables for easy theming</li>
              <li>Dark mode support out of the box</li>
              <li>Custom styling with Tailwind CSS</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="feature-3">
        <AccordionTrigger>♿ Accessibility</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Built with accessibility in mind, following WCAG guidelines.</p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>ARIA attributes and proper semantics</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader friendly</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Nested: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="parent-1">
        <AccordionTrigger>Frontend Development</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="child-1">
              <AccordionTrigger className="text-sm">React</AccordionTrigger>
              <AccordionContent className="text-sm">
                A JavaScript library for building user interfaces, maintained by Meta.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="child-2">
              <AccordionTrigger className="text-sm">Vue</AccordionTrigger>
              <AccordionContent className="text-sm">
                A progressive JavaScript framework for building user interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="child-3">
              <AccordionTrigger className="text-sm">Angular</AccordionTrigger>
              <AccordionContent className="text-sm">
                A platform for building mobile and desktop web applications.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="parent-2">
        <AccordionTrigger>Backend Development</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="child-4">
              <AccordionTrigger className="text-sm">Node.js</AccordionTrigger>
              <AccordionContent className="text-sm">
                A JavaScript runtime built on Chrome's V8 JavaScript engine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="child-5">
              <AccordionTrigger className="text-sm">Python</AccordionTrigger>
              <AccordionContent className="text-sm">
                A versatile programming language great for web development and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
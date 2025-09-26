import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Textarea> = {
  title: 'shadcn/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
};

export const WithButton: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Label htmlFor="message-3">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-3" />
      <Button className="justify-self-end w-fit">Send message</Button>
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Contact Us</h3>
        <p className="text-sm text-muted-foreground">
          Send us a message and we'll get back to you.
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <input
          id="name"
          placeholder="Your name"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          placeholder="What is this about?"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          placeholder="Tell us more details..."
          id="message"
          className="min-h-[100px]"
        />
      </div>

      <Button>Send Message</Button>
    </div>
  ),
};

export const CodeEditor: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Label htmlFor="code">Code</Label>
      <Textarea
        placeholder="function hello() {&#10;  console.log('Hello, World!');&#10;}"
        id="code"
        className="min-h-[200px] font-mono text-sm"
      />
      <p className="text-xs text-muted-foreground">
        Enter your code here. JavaScript syntax supported.
      </p>
    </div>
  ),
};

export const ReviewForm: Story = {
  render: () => (
    <div className="grid w-full max-w-md gap-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Write a Review</h3>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="text-lg hover:text-yellow-500 transition-colors"
            >
              ⭐
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="review">Your review</Label>
        <Textarea
          placeholder="Share your experience with this product..."
          id="review"
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">
          Minimum 10 characters. Be honest and helpful.
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Submit Review</Button>
      </div>
    </div>
  ),
};
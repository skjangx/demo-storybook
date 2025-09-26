import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof RadioGroup> = {
  title: '3-Form Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-medium">Deployment</h3>
        <p className="text-sm text-muted-foreground">
          Choose how you want to deploy your project.
        </p>
      </div>
      <RadioGroup defaultValue="vercel" className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vercel" id="vercel" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="vercel" className="font-medium">
              Vercel
            </Label>
            <p className="text-xs text-muted-foreground">
              Deploy to Vercel with zero configuration.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="netlify" id="netlify" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="netlify" className="font-medium">
              Netlify
            </Label>
            <p className="text-xs text-muted-foreground">
              Deploy to Netlify with continuous deployment.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="github" id="github" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="github" className="font-medium">
              GitHub Pages
            </Label>
            <p className="text-xs text-muted-foreground">
              Deploy to GitHub Pages for free hosting.
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one">Disabled Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" />
        <Label htmlFor="disabled-two">Disabled Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-medium">Payment Method</h3>
        <p className="text-sm text-muted-foreground">
          How would you like to pay for your subscription?
        </p>
      </div>
      <RadioGroup defaultValue="card" className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="card" className="flex items-center gap-2 font-medium">
              💳 Credit Card
            </Label>
            <p className="text-xs text-muted-foreground">
              Pay with your credit or debit card.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="paypal" className="flex items-center gap-2 font-medium">
              🅿️ PayPal
            </Label>
            <p className="text-xs text-muted-foreground">
              Pay securely with your PayPal account.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="apple" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="apple" className="flex items-center gap-2 font-medium">
              🍎 Apple Pay
            </Label>
            <p className="text-xs text-muted-foreground">
              Pay with Touch ID or Face ID.
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-medium">T-Shirt Size</h3>
        <p className="text-sm text-muted-foreground">Select your size.</p>
      </div>
      <RadioGroup defaultValue="m" className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="xs" id="xs" />
          <Label htmlFor="xs">XS</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="s" id="s" />
          <Label htmlFor="s">S</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="m" id="m" />
          <Label htmlFor="m">M</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="l" id="l" />
          <Label htmlFor="l">L</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="xl" id="xl" />
          <Label htmlFor="xl">XL</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};
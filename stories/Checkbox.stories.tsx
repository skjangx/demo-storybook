import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Checkbox> = {
  title: 'shadcn/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
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
    id: 'terms',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">This is checked by default</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">This checkbox is disabled</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked">Disabled and checked</Label>
    </div>
  ),
};

export const MultipleOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="mb-4">
        <h4 className="text-sm font-medium">Notifications</h4>
        <p className="text-sm text-muted-foreground">
          Choose how you want to be notified.
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="email" defaultChecked />
          <Label htmlFor="email">Email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms" />
          <Label htmlFor="sms">SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="push" defaultChecked />
          <Label htmlFor="push">Push notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">Marketing emails</Label>
        </div>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="analytics" />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="analytics"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Enable analytics
          </Label>
          <p className="text-xs text-muted-foreground">
            Help us improve our product by sharing anonymous usage data.
          </p>
        </div>
      </div>
    </div>
  ),
};
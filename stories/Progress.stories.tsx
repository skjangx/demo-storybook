import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'shadcn/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
  },
};

export const Loading: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading...</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
    </div>
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const MultipleSteps: Story = {
  render: () => (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 1: Setup</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 2: Configuration</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 3: Deployment</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
    </div>
  ),
};
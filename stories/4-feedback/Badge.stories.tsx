import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'D-Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge className="bg-green-500 hover:bg-green-600">✅ Active</Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600">⏳ Pending</Badge>
      <Badge variant="destructive">❌ Inactive</Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600">🔄 Processing</Badge>
      <Badge variant="outline">📋 Draft</Badge>
    </div>
  ),
};

export const PriorityLabels: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge variant="destructive">🔥 High</Badge>
      <Badge className="bg-orange-500 hover:bg-orange-600">⚡ Medium</Badge>
      <Badge variant="secondary">📝 Low</Badge>
      <Badge variant="outline">💤 Backlog</Badge>
    </div>
  ),
};

export const Counts: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Messages</span>
        <Badge>12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Notifications</span>
        <Badge variant="destructive">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Updates</span>
        <Badge variant="secondary">99+</Badge>
      </div>
    </div>
  ),
};

export const Categories: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Article Tags</h4>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="outline">Frontend</Badge>
          <Badge>Next.js</Badge>
        </div>
      </div>
    </div>
  ),
};
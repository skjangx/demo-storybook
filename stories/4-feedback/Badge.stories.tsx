import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const meta: Meta<typeof Badge> = {
  title: '4-Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
        <Toaster />
      </TooltipProvider>
    ),
  ],
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
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-green-500 hover:bg-green-600 cursor-pointer">✅ Active</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>System is running normally</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer">⏳ Pending</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Waiting for approval</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="destructive" className="cursor-pointer">❌ Inactive</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>System is offline or disabled</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-blue-500 hover:bg-blue-600 cursor-pointer">🔄 Processing</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Currently being processed</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="cursor-pointer">📋 Draft</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>In draft mode, not published</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const PriorityLabels: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="destructive" className="cursor-pointer">🔥 High</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Urgent - requires immediate attention</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-orange-500 hover:bg-orange-600 cursor-pointer">⚡ Medium</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Important - should be completed soon</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="cursor-pointer">📝 Low</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Normal priority - can wait if needed</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="cursor-pointer">💤 Backlog</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Future consideration - not actively planned</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Counts: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Messages</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="cursor-pointer" onClick={() => toast.info('Opening messages...')}>12</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>12 unread messages - click to view</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-2">
        <span>Notifications</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="destructive" className="cursor-pointer" onClick={() => toast.info('Opening notifications...')}>3</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>3 urgent notifications - click to review</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-2">
        <span>Updates</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="secondary" className="cursor-pointer" onClick={() => toast.info('Opening updates...')}>99+</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>99+ system updates available</p>
          </TooltipContent>
        </Tooltip>
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className="cursor-pointer" onClick={() => toast.info('Filtering by React...')}>React</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to filter by React articles</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className="cursor-pointer" onClick={() => toast.info('Filtering by TypeScript...')}>TypeScript</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to filter by TypeScript articles</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="secondary" className="cursor-pointer" onClick={() => toast.info('Filtering by JavaScript...')}>JavaScript</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to filter by JavaScript articles</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="cursor-pointer" onClick={() => toast.info('Filtering by Frontend...')}>Frontend</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to filter by Frontend articles</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className="cursor-pointer" onClick={() => toast.info('Filtering by Next.js...')}>Next.js</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to filter by Next.js articles</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const WithCards: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">User Profile</CardTitle>
            <Badge className="bg-green-500">Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">shadcn</p>
              <p className="text-sm text-muted-foreground">Senior Developer</p>
            </div>
            <div className="flex gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="cursor-pointer text-xs">React</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Expert level proficiency</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="cursor-pointer text-xs">TS</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>TypeScript specialist</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Project Status</CardTitle>
            <Badge variant="destructive">Overdue</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Frontend Development</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="bg-orange-500 hover:bg-orange-600 cursor-pointer">75%</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>3 of 4 tasks completed</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Testing</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="cursor-pointer">Pending</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Waiting for frontend completion</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => toast.info('Opening project details...')}>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Button variant="ghost" size="icon" onClick={() => toast.info('Opening messages...')}>
          <Avatar className="h-8 w-8">
            <AvatarFallback>📧</AvatarFallback>
          </Avatar>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 cursor-pointer"
                   onClick={() => toast.success('Marked all messages as read')}>3</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>3 unread messages - click to mark as read</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="relative">
        <Button variant="ghost" size="icon" onClick={() => toast.info('Opening notifications...')}>
          <Avatar className="h-8 w-8">
            <AvatarFallback>🔔</AvatarFallback>
          </Avatar>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs cursor-pointer"
                   onClick={() => toast.success('Notifications cleared')}>12</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>12 new notifications - click to clear</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="relative">
        <Button variant="ghost" size="icon" onClick={() => toast.info('Opening updates...')}>
          <Avatar className="h-8 w-8">
            <AvatarFallback>⚡</AvatarFallback>
          </Avatar>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-blue-500 cursor-pointer"
                   onClick={() => toast.info('Viewing latest updates...')}>•</Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>New updates available</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

export const InteractiveBadges: Story = {
  render: () => {
    const handleRemoveBadge = (name: string) => {
      toast.success(`Removed ${name} tag`, {
        description: 'Tag has been removed from the project.',
      });
    };

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Project Technologies</h4>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="cursor-pointer group" onClick={() => handleRemoveBadge('React')}>
              React
              <span className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity">×</span>
            </Badge>
            <Badge className="cursor-pointer group" onClick={() => handleRemoveBadge('TypeScript')}>
              TypeScript
              <span className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity">×</span>
            </Badge>
            <Badge variant="secondary" className="cursor-pointer group" onClick={() => handleRemoveBadge('Tailwind')}>
              Tailwind CSS
              <span className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity">×</span>
            </Badge>
            <Badge variant="outline" className="cursor-pointer" onClick={() => toast.info('Opening technology selector...')}>
              + Add Technology
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Team Members</h4>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm">shadcn</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="text-xs">Owner</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Project owner and maintainer</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <Avatar className="h-6 w-6">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm">John Doe</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="text-xs cursor-pointer"
                         onClick={() => toast.warning('Remove team member?', {
                           action: {
                             label: 'Remove',
                             onClick: () => toast.success('John Doe removed from project'),
                           }
                         })}>Member</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to manage member permissions</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Button variant="outline" size="sm"
                    onClick={() => toast.info('Opening member invitation...')}>
              + Invite Member
            </Button>
          </div>
        </div>
      </div>
    );
  },
};
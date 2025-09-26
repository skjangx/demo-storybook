import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Mail, MessageSquare, UserPlus, MoreHorizontal, Phone, Calendar } from 'lucide-react';

const meta: Meta<typeof Avatar> = {
  title: '5-Data Display/Avatar',
  component: Avatar,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="border-2 border-background cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>shadcn - Project Lead</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="border-2 border-background cursor-pointer">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>John Doe - Developer</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="border-2 border-background cursor-pointer">
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>Mike Kim - Designer</p>
        </TooltipContent>
      </Tooltip>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="border-2 border-background cursor-pointer">
            <AvatarFallback className="text-xs">+5</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-2">
            <h4 className="font-medium">5 more team members</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Sarah Miller - QA Engineer</div>
              <div>Alex Chen - Backend Developer</div>
              <div>Lisa Wang - Product Manager</div>
              <div>Tom Wilson - DevOps Engineer</div>
              <div>Emma Davis - UI Designer</div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="h-6 w-6">
        <AvatarFallback className="text-xs">XS</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-sm">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center space-x-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 bg-green-500"></Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>shadcn - Online</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 bg-yellow-500"></Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>John Doe - Away</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar>
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 bg-gray-400"></Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sarah Miller - Offline</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">shadcn</h4>
              <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Passionate about creating beautiful and accessible user interfaces.</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1" onClick={() => toast.info('Opening direct message...')}>
              <MessageSquare className="mr-2 h-3 w-3" />
              Message
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast.success('Added to contacts!')}>
              <UserPlus className="mr-2 h-3 w-3" />
              Connect
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">shadcn</h4>
          <Badge variant="secondary">Pro</Badge>
        </div>
        <p className="text-sm text-muted-foreground">senior-developer@company.com</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>User Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toast.info('Opening profile...')}>
            View Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.info('Starting call...')}>
            <Phone className="mr-2 h-4 w-4" />
            Call
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.info('Opening email client...')}>
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.info('Opening calendar...')}>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Meeting
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toast.warning('User blocked')}>
            Block User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};

export const TeamDirectory: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <h3 className="font-semibold">Team Directory</h3>
      {[
        { name: 'shadcn', role: 'Project Lead', status: 'online', image: 'https://github.com/shadcn.png' },
        { name: 'John Doe', role: 'Developer', status: 'away' },
        { name: 'Sarah Miller', role: 'Designer', status: 'offline' },
        { name: 'Mike Kim', role: 'Product Manager', status: 'online' },
      ].map((member) => (
        <div key={member.name} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
          <div className="flex items-center space-x-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    {member.image && <AvatarImage src={member.image} />}
                    <AvatarFallback className="text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className={`absolute -top-1 -right-1 h-2 w-2 p-0 ${
                    member.status === 'online' ? 'bg-green-500' :
                    member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{member.name} - {member.status}</p>
              </TooltipContent>
            </Tooltip>
            <div>
              <div className="text-sm font-medium">{member.name}</div>
              <div className="text-xs text-muted-foreground">{member.role}</div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toast.info(`Messaging ${member.name}...`)}>
                <MessageSquare className="mr-2 h-3 w-3" />
                Message
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info(`Calling ${member.name}...`)}>
                <Phone className="mr-2 h-3 w-3" />
                Call
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info(`Emailing ${member.name}...`)}>
                <Mail className="mr-2 h-3 w-3" />
                Email
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  ),
};
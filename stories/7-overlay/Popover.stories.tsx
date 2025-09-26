import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Settings, HelpCircle, User, Bell, Search, Filter, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Popover> = {
  title: 'G-Overlay/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              The React framework for production
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm" className="flex-1">Follow</Button>
          <Button size="sm" variant="outline" className="flex-1">Message</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const NotificationCenter: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
            3
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" align="end">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Notifications</h4>
            <Button variant="ghost" size="sm" className="text-xs">
              Mark all as read
            </Button>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">John Doe mentioned you</p>
                <p className="text-xs text-muted-foreground">in "Project Alpha"</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-blue-500 mt-1"></div>
            </div>
            <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-green-100 text-green-600">SM</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Sarah Miller assigned you a task</p>
                <p className="text-xs text-muted-foreground">"Review design mockups"</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 mt-1"></div>
            </div>
            <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 opacity-60">
              <Avatar className="h-8 w-8">
                <AvatarFallback>SY</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">System notification</p>
                <p className="text-xs text-muted-foreground">Your subscription expires in 7 days</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const QuickSearch: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-64 justify-start text-sm text-muted-foreground">
          <Search className="mr-2 h-4 w-4" />
          Search...
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="p-2">
          <Input placeholder="Search..." className="border-0 focus-visible:ring-0" />
        </div>
        <div className="border-t">
          <div className="p-2 space-y-1">
            <div className="text-xs font-medium text-muted-foreground px-2 py-1">Recent</div>
            <div className="flex items-center gap-2 px-2 py-2 text-sm rounded hover:bg-muted cursor-pointer">
              <Search className="h-4 w-4 text-muted-foreground" />
              Project Alpha Documentation
            </div>
            <div className="flex items-center gap-2 px-2 py-2 text-sm rounded hover:bg-muted cursor-pointer">
              <Search className="h-4 w-4 text-muted-foreground" />
              Team Meeting Notes
            </div>
            <div className="flex items-center gap-2 px-2 py-2 text-sm rounded hover:bg-muted cursor-pointer">
              <Search className="h-4 w-4 text-muted-foreground" />
              Design System Guidelines
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const FilterMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filters</h4>
            <p className="text-sm text-muted-foreground">
              Refine your search results
            </p>
          </div>
          <div className="grid gap-3">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Status</Label>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="active" defaultChecked />
                  <Label htmlFor="active" className="text-sm font-normal">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="pending" />
                  <Label htmlFor="pending" className="text-sm font-normal">Pending</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="completed" />
                  <Label htmlFor="completed" className="text-sm font-normal">Completed</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Priority</Label>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="high" />
                  <Label htmlFor="high" className="text-sm font-normal">High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="medium" defaultChecked />
                  <Label htmlFor="medium" className="text-sm font-normal">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="low" />
                  <Label htmlFor="low" className="text-sm font-normal">Low</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">Apply</Button>
            <Button variant="outline" size="sm" className="flex-1">Reset</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const SettingsMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="grid gap-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <User className="mr-2 h-4 w-4" />
              Profile Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </Button>
          </div>
          <div className="border-t pt-2">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const ActionMenu: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-medium">John Doe</p>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48" align="end">
          <div className="grid gap-1">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              View Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              Send Message
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              Add to Project
            </Button>
            <div className="border-t my-1"></div>
            <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
              Remove User
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-8">
      {/* Top */}
      <div></div>
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64">
            <p className="text-sm">This popover appears above the trigger.</p>
          </PopoverContent>
        </Popover>
      </div>
      <div></div>

      {/* Left and Right */}
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-64">
            <p className="text-sm">This popover appears to the left of the trigger.</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Center</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <p className="text-sm">This popover uses default positioning.</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right" className="w-64">
            <p className="text-sm">This popover appears to the right of the trigger.</p>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bottom */}
      <div></div>
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" className="w-64">
            <p className="text-sm">This popover appears below the trigger.</p>
          </PopoverContent>
        </Popover>
      </div>
      <div></div>
    </div>
  ),
};
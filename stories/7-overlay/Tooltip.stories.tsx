import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HelpCircle,
  Info,
  AlertTriangle,
  CheckCircle,
  Settings,
  User,
  Heart,
  Star,
  Download,
  Upload,
  Copy,
  Share,
  Edit,
  Trash2
} from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'G-Overlay/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help and support</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View profile</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const StatusTooltips: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Online</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>System is operating normally</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span>Warning</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>System experiencing minor issues</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Info className="h-5 w-5 text-blue-500" />
            <span>Info</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Additional information available</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const ActionTooltips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Rate this item</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download file</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Upload className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Upload new file</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Copy className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Share with others</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit item</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete item</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const UserTooltip: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-semibold">shadcn</p>
            <p className="text-xs text-muted-foreground">Frontend Developer</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-muted-foreground">Product Manager</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-semibold">Sarah Miller</p>
            <p className="text-xs text-muted-foreground">UI/UX Designer</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const BadgeTooltips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="cursor-pointer">
            React
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>JavaScript library for building user interfaces</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="cursor-pointer">
            TypeScript
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Typed superset of JavaScript</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="cursor-pointer">
            Next.js
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>React framework for production applications</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="destructive" className="cursor-pointer">
            Deprecated
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>This feature will be removed in the next major version</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Product Info</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold">MacBook Pro 14"</p>
            <p className="text-sm">Apple M2 Pro chip with 10‑core CPU</p>
            <p className="text-sm text-muted-foreground">Starting at $1,999</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Server Status</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Operational</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Response time: 120ms</p>
              <p>• Uptime: 99.9%</p>
              <p>• Last checked: 2 minutes ago</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Team Member</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="font-semibold text-sm">Alex Morgan</p>
              <p className="text-xs text-muted-foreground">Senior Engineer</p>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs px-1">React</Badge>
                <Badge variant="secondary" className="text-xs px-1">Node.js</Badge>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Top */}
      <div></div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip positioned above</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div></div>

      {/* Left and Right */}
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip positioned to the left</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Default positioning</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip positioned to the right</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Bottom */}
      <div></div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip positioned below</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div></div>
    </div>
  ),
};

export const DelayVariations: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="outline">Fast (100ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Quick tooltip appearance</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <Button variant="outline">Default (700ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Standard tooltip delay</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1500}>
        <TooltipTrigger asChild>
          <Button variant="outline">Slow (1500ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Deliberate tooltip delay</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
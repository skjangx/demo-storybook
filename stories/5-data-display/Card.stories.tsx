import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
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
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { MoreHorizontal, Heart, Share, Edit, Trash2, Eye, Calendar, Clock, Users } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: '5-Data Display/Card',
  component: Card,
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">Alex Chen</p>
            <p className="text-sm text-muted-foreground">alex.chen@example.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Project Status</CardTitle>
          <Badge className="bg-green-500">Active</Badge>
        </div>
        <CardDescription>
          Current development progress and team information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">Lead Developer</p>
          </div>
          <Badge variant="secondary">Frontend</Badge>
        </div>
        <div className="flex gap-2">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge variant="outline">Storybook</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Project</Button>
      </CardFooter>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            Project Alpha
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">Beta</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>This project is currently in beta phase</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
          <CardDescription>
            Advanced web application with modern features
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => toast.info('Opening project details...')}>
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.info('Opening editor...')}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Project
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.info('Sharing project...')}>
              <Share className="mr-2 h-4 w-4" />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => toast.error('Project deletion cancelled')}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">Project Owner</p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <Users className="mr-2 h-4 w-4" />
                Team (5)
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-3">
                <h4 className="font-medium leading-none">Team Members</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">John Doe (Owner)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">SM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Sarah Miller</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">AM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Alex Morgan</span>
                  </div>
                  <div className="text-xs text-muted-foreground">+2 more</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge variant="outline">Next.js</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to favorites</p>
          </TooltipContent>
        </Tooltip>
        <Button
          className="flex-1"
          onClick={() => toast.success('Project opened successfully!')}
        >
          Open Project
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithDialog: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Deploy Application</CardTitle>
        <CardDescription>
          Ready to deploy your application to production?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Environment:</span>
            <Badge>Production</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>Last Deploy:</span>
            <span className="text-muted-foreground">2 hours ago</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Status:</span>
            <Badge variant="secondary">Ready</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Deploy Now</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deployment</DialogTitle>
              <DialogDescription>
                This will deploy your application to the production environment.
                This action cannot be undone and will replace the current version.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Environment:</span>
                  <Badge>Production</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Branch:</span>
                  <code className="text-xs bg-muted px-1 rounded">main</code>
                </div>
                <div className="flex justify-between">
                  <span>Commit:</span>
                  <code className="text-xs bg-muted px-1 rounded">a1b2c3d</code>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button onClick={() => {
                const deployToast = toast.loading('Deploying application...', {
                  description: 'This may take a few minutes.',
                });

                setTimeout(() => {
                  toast.success('Deployment successful!', {
                    id: deployToast,
                    description: 'Your application is now live in production.',
                    action: {
                      label: 'View Live',
                      onClick: () => toast.info('Opening live application...'),
                    },
                  });
                }, 3000);
              }}>
                Deploy Application
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Recent Activity</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="secondary" className="text-xs">
                Live
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Real-time activity updates</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <CardDescription className="text-sm">
          Latest updates from your team
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
             onClick={() => toast.info('Opening comment...')}>
          <Avatar className="h-6 w-6 mt-0.5">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Sarah commented on your design</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              2 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
             onClick={() => toast.info('Opening task...')}>
          <Avatar className="h-6 w-6 mt-0.5">
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">John assigned you a task</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              5 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
             onClick={() => toast.info('Opening project...')}>
          <Avatar className="h-6 w-6 mt-0.5">
            <AvatarFallback className="text-xs bg-green-100 text-green-600">✓</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Project Alpha deployed</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              1 hour ago
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => toast.info('Opening full activity log...')}
        >
          View All Activity
        </Button>
      </CardFooter>
    </Card>
  ),
};
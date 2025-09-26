import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { HelpCircle, CheckSquare, Save, Mail } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: '3-Form Components/Checkbox',
  component: Checkbox,
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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Notification Preferences
        </CardTitle>
        <CardDescription>
          Choose how you want to be notified about updates and activities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
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
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => toast.success('Notification preferences saved!')}
          className="w-full"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="analytics" />
        <div className="grid gap-1.5 leading-none">
          <div className="flex items-center gap-2">
            <Label
              htmlFor="analytics"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enable analytics
            </Label>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Data is anonymized and helps us improve the product</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-muted-foreground">
            Help us improve our product by sharing anonymous usage data.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const PermissionsCard: Story = {
  render: () => {
    const [permissions, setPermissions] = useState({
      camera: false,
      microphone: false,
      location: false,
      notifications: true,
      contacts: false,
    });

    const handleSubmit = () => {
      const enabledPermissions = Object.entries(permissions)
        .filter(([_, enabled]) => enabled)
        .map(([permission]) => permission);

      if (enabledPermissions.length === 0) {
        toast.warning('No permissions selected', {
          description: 'Please select at least one permission to continue.',
        });
        return;
      }

      toast.success('Permissions updated!', {
        description: `Enabled: ${enabledPermissions.join(', ')}`,
      });
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            App Permissions
            <Badge variant="outline">Required</Badge>
          </CardTitle>
          <CardDescription>
            Grant permissions for the app to function properly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="camera"
              checked={permissions.camera}
              onCheckedChange={(checked) =>
                setPermissions(prev => ({ ...prev, camera: checked as boolean }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <div className="flex items-center gap-2">
                <Label htmlFor="camera" className="text-sm font-medium">
                  📷 Camera Access
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Required for taking photos and video calls</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-xs text-muted-foreground">
                Allow the app to use your camera for photos and video.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="microphone"
              checked={permissions.microphone}
              onCheckedChange={(checked) =>
                setPermissions(prev => ({ ...prev, microphone: checked as boolean }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="microphone" className="text-sm font-medium">
                🎤 Microphone Access
              </Label>
              <p className="text-xs text-muted-foreground">
                Enable audio recording and voice calls.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="location"
              checked={permissions.location}
              onCheckedChange={(checked) =>
                setPermissions(prev => ({ ...prev, location: checked as boolean }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="location" className="text-sm font-medium">
                📍 Location Services
              </Label>
              <p className="text-xs text-muted-foreground">
                Share your location for location-based features.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="notifications"
              checked={permissions.notifications}
              onCheckedChange={(checked) =>
                setPermissions(prev => ({ ...prev, notifications: checked as boolean }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="notifications" className="text-sm font-medium">
                🔔 Push Notifications
              </Label>
              <p className="text-xs text-muted-foreground">
                Receive important updates and alerts.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="contacts"
              checked={permissions.contacts}
              onCheckedChange={(checked) =>
                setPermissions(prev => ({ ...prev, contacts: checked as boolean }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="contacts" className="text-sm font-medium">
                📱 Contacts Access
              </Label>
              <p className="text-xs text-muted-foreground">
                Access your contacts to find friends and family.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setPermissions({ camera: false, microphone: false, location: false, notifications: true, contacts: false });
              toast.info('Permissions reset to default');
            }}
          >
            Reset
          </Button>
          <Button onClick={handleSubmit} className="flex-1">
            Save Permissions
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const TaskList: Story = {
  render: () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Review user feedback', completed: false, priority: 'high' },
      { id: 2, text: 'Update documentation', completed: true, priority: 'medium' },
      { id: 3, text: 'Fix bug in authentication', completed: false, priority: 'urgent' },
      { id: 4, text: 'Prepare for demo', completed: false, priority: 'low' },
    ]);

    const toggleTask = (id: number) => {
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };

    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case 'urgent': return 'destructive';
        case 'high': return 'default';
        case 'medium': return 'secondary';
        case 'low': return 'outline';
        default: return 'outline';
      }
    };

    const completedCount = tasks.filter(task => task.completed).length;

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Today's Tasks
            <Badge variant="secondary">
              {completedCount}/{tasks.length}
            </Badge>
          </CardTitle>
          <CardDescription>
            Keep track of your daily tasks and priorities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <div className="flex-1 grid gap-1">
                <Label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium cursor-pointer ${
                    task.completed ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {task.text}
                </Label>
              </div>
              <Badge variant={getPriorityColor(task.priority) as any} className="text-xs">
                {task.priority}
              </Badge>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => toast.success(`Great work! ${completedCount} tasks completed.`)}
            className="w-full"
            variant={completedCount === tasks.length ? 'default' : 'outline'}
          >
            {completedCount === tasks.length ? '🎉 All Done!' : `${tasks.length - completedCount} tasks remaining`}
          </Button>
        </CardFooter>
      </Card>
    );
  },
};
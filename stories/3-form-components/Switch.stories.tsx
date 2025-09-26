import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
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
import { HelpCircle, Shield, Bell, Moon, Save } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'C-Form Components/Switch',
  component: Switch,
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
  args: {},
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked-switch" defaultChecked />
      <Label htmlFor="checked-switch">This is checked by default</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch">This switch is disabled</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked-switch" disabled defaultChecked />
      <Label htmlFor="disabled-checked-switch">Disabled and checked</Label>
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
        <CardDescription>
          Manage your notification preferences and stay informed.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="email-notifications" className="font-medium">
                Email notifications
              </Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Get notified about important account activities via email</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-muted-foreground">
              Receive emails about your account activity.
            </p>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notifications" className="font-medium">
              Push notifications
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications on your devices.
            </p>
          </div>
          <Switch id="push-notifications" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="sms-notifications" className="font-medium">
              SMS notifications
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive text messages for urgent updates.
            </p>
          </div>
          <Switch id="sms-notifications" />
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

export const Privacy: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Privacy Settings
        </CardTitle>
        <CardDescription>
          Control your privacy and data preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="analytics" className="font-medium">
                🔍 Analytics
              </Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Help us improve by sharing anonymous usage data</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-muted-foreground">
              Share anonymous usage data to help us improve.
            </p>
          </div>
          <Switch id="analytics" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing" className="font-medium">
              📧 Marketing emails
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive promotional emails and product updates.
            </p>
          </div>
          <Switch id="marketing" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="profile-public" className="font-medium">
              👤 Public profile
            </Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to other users.
            </p>
          </div>
          <Switch id="profile-public" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="two-factor" className="font-medium">
              🔐 Two-factor authentication
            </Label>
            <p className="text-sm text-muted-foreground">
              Add an extra layer of security to your account.
            </p>
          </div>
          <Switch id="two-factor" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => toast.success('Privacy settings updated!')}
          className="w-full"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Privacy Settings
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const AppSettings: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="h-5 w-5" />
          App Preferences
        </CardTitle>
        <CardDescription>
          Customize your app experience and interface.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode" className="font-medium">
              🌙 Dark mode
            </Label>
            <p className="text-sm text-muted-foreground">
              Use dark theme across the app.
            </p>
          </div>
          <Switch id="dark-mode" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="auto-save" className="font-medium">
                💾 Auto-save
              </Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Automatically save your work every few seconds</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically save your work as you type.
            </p>
          </div>
          <Switch id="auto-save" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="sound-effects" className="font-medium">
              🔊 Sound effects
            </Label>
            <p className="text-sm text-muted-foreground">
              Play sounds for interactions and notifications.
            </p>
          </div>
          <Switch id="sound-effects" defaultChecked />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => toast.success('App preferences saved!')}
          className="w-full"
        >
          <Save className="mr-2 h-4 w-4" />
          Save App Settings
        </Button>
      </CardFooter>
    </Card>
  ),
};
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Switch> = {
  title: 'shadcn/Switch',
  component: Switch,
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
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Manage your notification preferences.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications" className="font-medium">
              Email notifications
            </Label>
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
      </div>
    </div>
  ),
};

export const Privacy: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-medium">Privacy Settings</h3>
        <p className="text-sm text-muted-foreground">
          Control your privacy and data preferences.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="analytics" className="font-medium">
              🔍 Analytics
            </Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing anonymous usage data.
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
      </div>
    </div>
  ),
};

export const AppSettings: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-medium">App Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your app experience.
        </p>
      </div>

      <div className="space-y-4">
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
            <Label htmlFor="auto-save" className="font-medium">
              💾 Auto-save
            </Label>
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
      </div>
    </div>
  ),
};
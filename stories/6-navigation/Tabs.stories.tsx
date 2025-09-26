import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { User, Key, Settings as SettingsIcon, Bell, Download, Save, Eye, Shield, HelpCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: '6-Navigation/Tabs',
  component: Tabs,
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
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                toast.success('Account settings saved!', {
                  description: 'Your changes have been applied successfully.',
                });
              }}
            >
              <Save className="mr-2 h-4 w-4" />
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                toast.success('Password updated successfully!', {
                  description: 'You will be logged out in 5 seconds for security.',
                });
              }}
            >
              <Key className="mr-2 h-4 w-4" />
              Save password
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const MultipleTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              View detailed analytics and insights.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analytics data would be displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download reports.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Reports functionality would be displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage your notification preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Notification settings would be displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="account" className="w-[600px] flex gap-4">
      <TabsList className="flex-col h-auto w-[150px]">
        <TabsTrigger value="account" className="w-full justify-start">Account</TabsTrigger>
        <TabsTrigger value="password" className="w-full justify-start">Password</TabsTrigger>
        <TabsTrigger value="settings" className="w-full justify-start">Settings</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Account content goes here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password & Security</CardTitle>
              <CardDescription>
                Update your password and security settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Password content goes here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure general application settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Settings content goes here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const UserProfile: Story = {
  render: () => {
    const [profile, setProfile] = useState({
      name: 'John Doe',
      email: 'john@example.com',
      bio: 'Software developer with 5 years of experience',
    });
    const [notifications, setNotifications] = useState({
      email: true,
      push: false,
      marketing: true,
    });
    const [privacy, setPrivacy] = useState({
      profilePublic: false,
      showEmail: true,
      allowMessages: true,
    });

    return (
      <Tabs defaultValue="profile" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
                <Badge variant="outline">Public</Badge>
              </CardTitle>
              <CardDescription>
                Update your profile information that will be visible to others.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Full Name</Label>
                <Input
                  id="profile-name"
                  value={profile.name}
                  onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="profile-email">Email Address</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your email is used for account recovery and notifications</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="profile-email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-bio">Bio</Label>
                <Input
                  id="profile-bio"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell others about yourself..."
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('Profile updated!', {
                    description: 'Your changes have been saved successfully.',
                  });
                }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.info('Profile preview opened');
                }}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Manage how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="email-notifications">Email notifications</Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Receive important updates via email</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get notified about account activity and updates.
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications(prev => ({ ...prev, email: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive real-time notifications on your device.
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications(prev => ({ ...prev, push: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-notifications">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional content and product updates.
                  </p>
                </div>
                <Switch
                  id="marketing-notifications"
                  checked={notifications.marketing}
                  onCheckedChange={(checked) =>
                    setNotifications(prev => ({ ...prev, marketing: checked }))
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  const enabledCount = Object.values(notifications).filter(Boolean).length;
                  toast.success('Notification preferences saved!', {
                    description: `${enabledCount} notification types enabled.`,
                  });
                }}
              >
                Save Preferences
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.info('Sending test notification...');
                }}
              >
                Send Test
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
                <Badge variant="secondary">Protected</Badge>
              </CardTitle>
              <CardDescription>
                Control your privacy settings and data visibility.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="public-profile">Public profile</Label>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to other users.
                  </p>
                </div>
                <Switch
                  id="public-profile"
                  checked={privacy.profilePublic}
                  onCheckedChange={(checked) =>
                    setPrivacy(prev => ({ ...prev, profilePublic: checked }))
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="show-email"
                  checked={privacy.showEmail}
                  onCheckedChange={(checked) =>
                    setPrivacy(prev => ({ ...prev, showEmail: checked as boolean }))
                  }
                />
                <Label htmlFor="show-email" className="text-sm font-medium">
                  Show email address on profile
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allow-messages"
                  checked={privacy.allowMessages}
                  onCheckedChange={(checked) =>
                    setPrivacy(prev => ({ ...prev, allowMessages: checked as boolean }))
                  }
                />
                <Label htmlFor="allow-messages" className="text-sm font-medium">
                  Allow others to message me
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('Privacy settings updated!', {
                    description: 'Your privacy preferences have been saved.',
                  });
                }}
              >
                <Shield className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.info('Downloading privacy report...');
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};

export const ProjectManagement: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = (section: string) => {
      setRefreshing(true);
      toast.loading(`Refreshing ${section}...`);

      setTimeout(() => {
        setRefreshing(false);
        toast.success(`${section} updated!`, {
          description: 'Latest data has been loaded.',
        });
      }, 2000);
    };

    return (
      <Tabs defaultValue="overview" className="w-[700px]">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger value="tasks">
            Tasks
            <Badge variant="secondary" className="ml-2">
              12
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="team">
            Team
            <Badge variant="outline" className="ml-2">
              8
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="settings">
            <SettingsIcon className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Project Overview
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRefresh('overview')}
                  disabled={refreshing}
                >
                  {refreshing ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                </Button>
              </CardTitle>
              <CardDescription>
                Monitor your project's progress and key metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('Generated project report', {
                    description: 'Report has been downloaded to your device.',
                  });
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.info('Sharing project overview...');
                }}
              >
                Share Overview
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                View and manage project tasks and assignments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Task management interface would be displayed here.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('New task created!');
                }}
              >
                Add New Task
              </Button>
              <Button
                variant="outline"
                onClick={() => handleRefresh('tasks')}
              >
                Refresh Tasks
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Management</CardTitle>
              <CardDescription>
                Manage team members and their permissions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Team management interface would be displayed here.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('Invitation sent!', {
                    description: 'Team member will receive an email invitation.',
                  });
                }}
              >
                Invite Member
              </Button>
              <Button
                variant="outline"
                onClick={() => handleRefresh('team')}
              >
                Sync Team
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                Project Settings
              </CardTitle>
              <CardDescription>
                Configure project preferences and integrations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Project settings interface would be displayed here.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                onClick={() => {
                  toast.success('Settings saved!', {
                    description: 'Project configuration has been updated.',
                  });
                }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Configuration
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast.info('Resetting to defaults...');
                }}
              >
                Reset to Defaults
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};
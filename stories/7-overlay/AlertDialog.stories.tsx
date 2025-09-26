import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  AlertTriangle,
  Trash2,
  Download,
  LogOut,
  Settings,
  Shield,
  UserX,
  FileX,
  Database,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof AlertDialog> = {
  title: '7-Overlay/Alert Dialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Alert Dialog Component

A modal dialog that interrupts the user with important content and expects a response. Built on top of Radix UI Alert Dialog primitives.

## Features

- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible styling with Tailwind CSS
- **Composable**: Built with multiple sub-components for flexibility
- **Controlled**: Can be controlled or uncontrolled
- **Portal Support**: Renders outside the normal DOM tree

## Usage

Alert dialogs should be used for critical actions that require user confirmation, such as:
- Deleting data
- Logging out
- Confirming destructive actions
- Important system notifications
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px] w-full max-w-4xl">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Alert Dialog
export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Destructive Alert Dialog
export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <AlertDialogTitle className="text-red-900">
                Delete Account
              </AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            This will permanently delete your account and all associated data.
            This action cannot be undone and you will lose access to:
            <ul className="mt-2 ml-4 list-disc text-sm">
              <li>All your projects and files</li>
              <li>Account settings and preferences</li>
              <li>Subscription and billing history</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Account</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700"
            onClick={() => toast.success("Account deletion process initiated")}
          >
            Delete Forever
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Confirmation with Input
export const WithConfirmation: Story = {
  render: () => {
    const [confirmText, setConfirmText] = useState('');
    const isConfirmed = confirmText === 'DELETE';

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            <FileX className="h-4 w-4 mr-2" />
            Delete Project
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Delete Project "MyApp"?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the project and all its contents.
              Type <Badge variant="secondary" className="mx-1">DELETE</Badge> to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Label htmlFor="confirm-input" className="text-sm font-medium">
              Confirm deletion
            </Label>
            <Input
              id="confirm-input"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="mt-2"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setConfirmText('')}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={!isConfirmed}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
              onClick={() => {
                if (isConfirmed) {
                  toast.success("Project deleted successfully");
                  setConfirmText('');
                }
              }}
            >
              Delete Project
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

// Logout Confirmation
export const LogoutConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <LogOut className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            You will need to sign in again to access your account and data.
            Any unsaved changes will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
          <AlertDialogAction onClick={() => toast.success("Signed out successfully")}>
            Sign Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// System Maintenance Alert
export const SystemAlert: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          System Maintenance
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Settings className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <AlertDialogTitle>Scheduled Maintenance</AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            System maintenance is scheduled for tonight at 2:00 AM UTC.
            The service will be unavailable for approximately 30 minutes.
            <div className="mt-4 p-3 bg-orange-50 rounded-md">
              <p className="text-sm font-medium text-orange-900">What to expect:</p>
              <ul className="mt-1 text-sm text-orange-700 list-disc ml-4">
                <li>Temporary service interruption</li>
                <li>Improved performance after update</li>
                <li>New security features</li>
              </ul>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => toast.success("Maintenance reminder set")}>
            Got it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Data Export Confirmation
export const DataExport: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Database className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <AlertDialogTitle>Export Your Data</AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            This will create a comprehensive export of your account data including:
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm">Profile information</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm">Project files and settings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm">Activity history</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The export will be sent to your registered email address within 24 hours.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => toast.success("Data export requested. You'll receive an email shortly.")}
          >
            Start Export
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Security Warning
export const SecurityWarning: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Shield className="h-4 w-4 mr-2" />
          Suspicious Activity Detected
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <Shield className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <AlertDialogTitle className="text-red-900">
                Security Alert
              </AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            We've detected unusual activity on your account:
            <div className="mt-3 p-3 bg-red-50 rounded-md space-y-2">
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-900">Login from new location (London, UK)</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-600" />
                <span className="text-sm">IP Address: 192.168.1.100</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Time: Today at 3:45 PM</span>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-red-900">
              If this wasn't you, secure your account immediately.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>This Was Me</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700"
            onClick={() => toast.success("Account secured. Please change your password.")}
          >
            Secure Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Multi-Action Dialog
export const MultipleActions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <UserX className="h-4 w-4 mr-2" />
            Manage User
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>User Management</AlertDialogTitle>
            <AlertDialogDescription>
              What would you like to do with user "john.doe@example.com"?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-2 py-4">
            <Button variant="outline" onClick={() => toast.success("User suspended")}>
              <UserX className="h-4 w-4 mr-2" />
              Suspend User
            </Button>
            <Button variant="outline" onClick={() => toast.success("Password reset email sent")}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Password
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.success("User account deleted")}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};

// Information Dialog
export const Information: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4 mr-2" />
          About This Feature
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Info className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <AlertDialogTitle>About Data Sync</AlertDialogTitle>
            </div>
          </div>
          <AlertDialogDescription className="mt-4">
            <p className="mb-3">
              Data Sync keeps your information up to date across all your devices automatically.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">FEATURE</Badge>
                <span className="text-sm">Real-time synchronization</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">FEATURE</Badge>
                <span className="text-sm">End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">FEATURE</Badge>
                <span className="text-sm">Offline support</span>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Integration Demo - Card with Alert Dialog
export const IntegratedCard: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
        <CardDescription>
          Manage your project configuration and data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Project Status</p>
            <p className="text-sm text-muted-foreground">Active since Jan 2024</p>
          </div>
          <Badge variant="secondary">Active</Badge>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Project
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Export Project Data</AlertDialogTitle>
                <AlertDialogDescription>
                  This will create a backup of your entire project including all files,
                  settings, and configuration. The export will be available for download.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => toast.success("Export started successfully")}>
                  Export
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Project
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Project</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the project and all its data.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep Project</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => toast.success("Project deleted successfully")}
                >
                  Delete Forever
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  ),
};
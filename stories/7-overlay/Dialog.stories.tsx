import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Save, Edit3, Trash2, Plus, AlertTriangle, User, Settings, HelpCircle, Upload, Eye } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'G-Overlay/Dialog',
  component: Dialog,
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
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description that provides context about what this dialog does or asks for.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">Dialog content goes here.</p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                toast.success('Action confirmed!', {
                  description: 'The operation was completed successfully.',
                });
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const EditProfile: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" defaultValue="pedro@example.com" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                toast.success('Profile updated!', {
                  description: 'Your profile changes have been saved successfully.',
                });
              }}
            >
              <Save className="mr-2 h-4 w-4" />
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
                toast.info('Account deletion cancelled', {
                  description: 'Your account is safe and no changes were made.',
                });
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setOpen(false);
                toast.error('Account deletion initiated', {
                  description: 'This is a destructive action that cannot be undone.',
                  action: {
                    label: 'Contact Support',
                    onClick: () => toast.info('Support contacted for account recovery options.'),
                  },
                });
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const CreateTask: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
              Add a new task to your project. Fill in the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="task-title">Task Title</Label>
              <Input id="task-title" placeholder="Enter task title..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="task-description">Description</Label>
              <Textarea
                id="task-description"
                placeholder="Describe the task..."
                className="resize-none"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <div className="flex gap-2">
                  <Badge variant="outline">Low</Badge>
                  <Badge>Medium</Badge>
                  <Badge variant="outline">High</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Assignee</Label>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">John Doe</span>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                toast.success('Task created successfully!', {
                  description: 'The new task has been added to your project.',
                });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const NestedContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Application Settings</DialogTitle>
          <DialogDescription>
            Configure your application preferences and settings.
          </DialogDescription>
        </DialogHeader>
        <div className="py-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Account</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-sm font-normal">
                    Email notifications
                  </Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notifications" defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing" className="text-sm font-normal">
                    Marketing emails
                  </Label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="marketing" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Appearance</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-normal">Theme</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Light</Button>
                    <Button variant="default" size="sm">Dark</Button>
                    <Button variant="outline" size="sm">Auto</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Privacy</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics" className="text-sm font-normal">
                    Share analytics data
                  </Label>
                  <input type="checkbox" id="analytics" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="crash-reports" className="text-sm font-normal">
                    Send crash reports
                  </Label>
                  <input type="checkbox" id="crash-reports" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Reset</Button>
          <Button>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[300px]">
          <DialogHeader>
            <DialogTitle>Small</DialogTitle>
            <DialogDescription>
              A compact dialog for simple interactions.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">This is a small dialog.</p>
          </div>
          <DialogFooter>
            <Button size="sm">OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Medium Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Medium</DialogTitle>
            <DialogDescription>
              A standard dialog for most use cases.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">This is a medium-sized dialog with more content space.</p>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Large Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Large</DialogTitle>
            <DialogDescription>
              A large dialog for complex forms and detailed content.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <div className="space-y-4">
              <p className="text-sm">This is a large dialog with plenty of space for complex content.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" rows={4} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save Profile</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);

    const handleNext = () => {
      if (step < 3) {
        setStep(step + 1);
        toast.info(`Moving to step ${step + 1}`, {
          description: 'Continue filling out your information.',
        });
      } else {
        toast.loading('Setting up your account...', {
          description: 'Please wait while we configure your settings.',
        });

        setTimeout(() => {
          setIsOpen(false);
          setStep(1);
          toast.success('Setup completed successfully!', {
            description: 'Your account has been configured and is ready to use.',
            action: {
              label: 'Open Dashboard',
              onClick: () => toast.info('Redirecting to dashboard...'),
            },
          });
        }, 2000);
      }
    };

    const handleBack = () => {
      if (step > 1) {
        setStep(step - 1);
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Start Setup Wizard</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Setup Wizard - Step {step} of 3
              <Badge variant="outline">{Math.round((step / 3) * 100)}%</Badge>
            </DialogTitle>
            <DialogDescription>
              {step === 1 && "Let's start by setting up your basic information."}
              {step === 2 && "Configure your preferences and settings."}
              {step === 3 && "Review and confirm your setup."}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">👨‍💻 Developer</SelectItem>
                      <SelectItem value="designer">🎨 Designer</SelectItem>
                      <SelectItem value="manager">👔 Manager</SelectItem>
                      <SelectItem value="analyst">📊 Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Notification Preferences</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="email-notif" className="text-sm font-normal">Email notifications</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Receive important updates via email</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-xs text-muted-foreground">Get notified about account activity</p>
                      </div>
                      <Switch id="email-notif" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-notif" className="text-sm font-normal">Push notifications</Label>
                        <p className="text-xs text-muted-foreground">Real-time notifications on your device</p>
                      </div>
                      <Switch id="push-notif" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="rounded-lg border p-4 space-y-3">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Setup Summary
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Company:</span>
                      <span>Acme Corp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Role:</span>
                      <Badge variant="secondary">Developer</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Email notifications:</span>
                      <Badge variant="outline">Enabled</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Push notifications:</span>
                      <Badge variant="outline">Disabled</Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="flex justify-between">
            <div>
              {step > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
            </div>
            <Button onClick={handleNext}>
              {step === 3 ? (
                <>
                  <Settings className="mr-2 h-4 w-4" />
                  Complete Setup
                </>
              ) : (
                'Next'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const TeamInvitation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      role: '',
      message: '',
      sendWelcome: true,
      accessLevel: 'member'
    });

    const handleInvite = () => {
      if (!formData.email || !formData.role) {
        toast.error('Please fill in all required fields', {
          description: 'Email and role are required to send an invitation.',
        });
        return;
      }

      toast.loading('Sending invitation...', {
        description: 'Please wait while we process the team invitation.',
      });

      setTimeout(() => {
        setOpen(false);
        toast.success('Invitation sent successfully!', {
          description: `${formData.email} has been invited as a ${formData.role}.`,
          action: {
            label: 'View Team',
            onClick: () => toast.info('Opening team management page...'),
          },
        });
      }, 1500);
    };

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Invite Team Member
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Invite Team Member
              <Badge variant="secondary">New</Badge>
            </DialogTitle>
            <DialogDescription>
              Send an invitation to join your team. They'll receive an email with setup instructions.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="invite-email">Email Address *</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The person will receive an invitation email at this address</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id="invite-email"
                type="email"
                placeholder="colleague@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-role">Role *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">👑 Admin - Full access</SelectItem>
                  <SelectItem value="editor">✏️ Editor - Can edit content</SelectItem>
                  <SelectItem value="viewer">👁️ Viewer - View only</SelectItem>
                  <SelectItem value="contributor">🤝 Contributor - Can contribute</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-message">Personal Message</Label>
              <Textarea
                id="invite-message"
                placeholder="Add a personal welcome message (optional)"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="send-welcome"
                  checked={formData.sendWelcome}
                  onCheckedChange={(checked) =>
                    setFormData(prev => ({ ...prev, sendWelcome: checked as boolean }))
                  }
                />
                <Label htmlFor="send-welcome" className="text-sm">
                  Send welcome email with team guidelines
                </Label>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Access Level</Label>
                  <p className="text-xs text-muted-foreground">
                    Controls what projects this person can access
                  </p>
                </div>
                <Select
                  value={formData.accessLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, accessLevel: value }))}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    <SelectItem value="selected">Selected</SelectItem>
                    <SelectItem value="member">Member Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleInvite}>
              <User className="mr-2 h-4 w-4" />
              Send Invitation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
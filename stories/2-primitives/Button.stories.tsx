/**
 * Button component stories showcasing all variants, sizes, and interactive patterns.
 *
 * The Button component is built on Radix UI primitives and provides consistent
 * styling across different states and contexts. It supports multiple variants,
 * sizes, and can be composed with other components like Tooltips and Dialogs.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
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
import {
  Download,
  Settings,
  Share,
  Heart,
  ChevronDown,
  MoreHorizontal,
  Plus,
  Save,
  Edit,
  Trash2,
  Copy,
  HelpCircle,
  Star,
  Upload
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: '2-Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a versatile interactive element built on Radix UI primitives.
It provides consistent styling, accessibility features, and supports multiple variants
and sizes for different use cases.

## Features
- **Accessibility**: Built-in keyboard navigation and screen reader support
- **Variants**: Multiple visual styles (default, destructive, outline, secondary, ghost, link)
- **Sizes**: Different size options (sm, default, lg, icon)
- **Composable**: Works seamlessly with Tooltips, Dialogs, and DropdownMenus
- **Interactive**: Supports disabled states and custom event handlers

## Usage
\`\`\`tsx
import { Button } from '@/components/ui/button'

<Button variant="default" size="default">
  Click me
</Button>
\`\`\`
        `,
      },
    },
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
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual variant of the button',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size variant of the button',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display inside the button',
      table: { category: 'Content' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'When true, the button is disabled and cannot be interacted with',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    onClick: {
      action: 'clicked',
      description: 'Called when the button is clicked',
      table: { category: 'Events' },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
      table: { category: 'Styling' },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Change the default rendered element for the one passed as a child',
      table: { category: 'Advanced', defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button variant with standard styling
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default button style with primary action styling. Use for the most important actions in your interface.',
      },
    },
  },
};

/**
 * Secondary button variant for less prominent actions
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary styling for supporting actions that should be less prominent than primary actions. Use for actions like "Cancel" or "View Details".',
      },
    },
  },
};

/**
 * Destructive button variant for dangerous actions
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Used for destructive actions like deleting content. Should be used sparingly and with confirmation dialogs for safety.',
      },
    },
  },
};

/**
 * Outline button variant for secondary actions with borders
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons have a border but no background fill. Perfect for secondary actions that need more visual weight than ghost buttons.',
      },
    },
  },
};

/**
 * Ghost button variant for subtle actions
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons have minimal visual styling and are perfect for subtle actions like navigation or toolbar buttons.',
      },
    },
  },
};

/**
 * Link button variant styled like a text link
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link buttons look like text links but maintain button behavior. Use when you need button functionality with link appearance.',
      },
    },
  },
};

/**
 * Small button size for compact interfaces
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small buttons are perfect for compact interfaces, toolbars, or when you need multiple actions in limited space.',
      },
    },
  },
};

/**
 * Large button size for prominent actions
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large buttons are ideal for prominent call-to-action buttons, especially on landing pages or when you need to draw attention.',
      },
    },
  },
};

/**
 * Disabled state prevents interaction and shows inactive styling
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  parameters: {
    docs: {
      description: {
        story: `Disabled buttons cannot be interacted with and show visual indication of their inactive state.

**Accessibility Notes:**
- Screen readers will announce the disabled state
- Keyboard navigation will skip disabled buttons
- Click events are prevented when disabled`,
      },
    },
  },
};

/**
 * Buttons integrated with Tooltips for enhanced UX
 */
export const WithTooltips: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download file</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Share with others</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Heart className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help and support</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Buttons that trigger dropdown menus for complex actions
 */
export const WithDropdownMenu: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Actions
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Duplicate</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Create</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Document</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Folder</span>
            <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Project</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Copy Link</DropdownMenuItem>
          <DropdownMenuItem>Export</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};

/**
 * Buttons that open dialogs for confirmations and forms
 */
export const WithDialog: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Changes</DialogTitle>
            <DialogDescription>
              Are you sure you want to save these changes? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button onClick={() => toast.success('Changes saved successfully!')}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Item
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the item and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => toast.success('Item deleted successfully')}
            >
              Delete Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <DialogDescription>
              Select a file to upload to your workspace. Supported formats: PDF, DOC, IMG.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button onClick={() => {
              const loadingToast = toast.loading('Uploading file...', {
                description: 'Please wait while we process your file.',
              });

              setTimeout(() => {
                toast.success('File uploaded successfully!', {
                  id: loadingToast,
                  description: 'Your file has been uploaded and processed.',
                });
              }, 2000);
            }}>
              Upload File
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

/**
 * Buttons with toast notifications for user feedback
 */
export const WithToastFeedback: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() => toast.success('Operation completed successfully!')}
      >
        Success Action
      </Button>

      <Button
        variant="destructive"
        onClick={() => toast.error('Failed to complete operation', {
          description: 'Please try again later.',
          action: {
            label: 'Retry',
            onClick: () => toast.info('Retrying operation...'),
          },
        })}
      >
        Error Action
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.warning('This action requires confirmation', {
          description: 'Please verify your identity before proceeding.',
        })}
      >
        Warning Action
      </Button>

      <Button
        variant="secondary"
        onClick={() => toast.info('Information updated', {
          description: 'Your profile information has been updated.',
        })}
      >
        Info Action
      </Button>

      <Button
        onClick={() => {
          const loadingToast = toast.loading('Processing...', {
            description: 'This may take a few moments.',
          });

          setTimeout(() => {
            toast.success('Processing complete!', {
              id: loadingToast,
              description: 'Your request has been processed successfully.',
            });
          }, 3000);
        }}
      >
        Loading Action
      </Button>
    </div>
  ),
};

/**
 * Advanced button compositions combining multiple interaction patterns
 */
export const ComplexInteractions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <Star className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Rating</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => toast.success('Rated 1 star')}>
                ⭐ 1 Star
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Rated 2 stars')}>
                ⭐⭐ 2 Stars
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Rated 3 stars')}>
                ⭐⭐⭐ 3 Stars
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Rated 4 stars')}>
                ⭐⭐⭐⭐ 4 Stars
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success('Rated 5 stars')}>
                ⭐⭐⭐⭐⭐ 5 Stars
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>
          <p>Rate this item</p>
        </TooltipContent>
      </Tooltip>

      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Advanced settings</p>
          </TooltipContent>
        </Tooltip>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Advanced Settings</DialogTitle>
            <DialogDescription>
              Configure advanced options for your account.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Enable notifications</span>
              <Button size="sm" variant="outline" onClick={() => toast.info('Notifications enabled')}>
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Auto-save changes</span>
              <Button size="sm" variant="outline" onClick={() => toast.info('Auto-save enabled')}>
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Two-factor authentication</span>
              <Button size="sm" onClick={() => toast.success('2FA setup initiated')}>
                Setup
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button onClick={() => toast.success('Settings saved!')}>Save Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
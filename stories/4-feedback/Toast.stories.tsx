import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Info as InfoIcon,
  Heart,
  Download,
  Mail,
  Settings,
  User,
  Calendar,
  Clock
} from 'lucide-react';

// Since Toaster is the provider component, we'll create a wrapper for stories
const ToastDemo = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
    <Toaster />
  </div>
);

const meta: Meta = {
  title: '4-Feedback/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastDemo>
        <Story />
      </ToastDemo>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() =>
          toast.success('Account created successfully!', {
            description: 'Welcome to our platform. You can now start using all features.',
          })
        }
      >
        Success Toast
      </Button>

      <Button
        onClick={() =>
          toast.success('Profile updated', {
            description: 'Your changes have been saved.',
            action: {
              label: 'View Profile',
              onClick: () => console.log('View Profile'),
            },
          })
        }
      >
        Success with Action
      </Button>

      <Button
        onClick={() =>
          toast.success('File uploaded successfully', {
            description: 'document.pdf has been uploaded to your workspace.',
            icon: <CheckCircle className="h-4 w-4" />,
          })
        }
      >
        Success with Icon
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        variant="destructive"
        onClick={() =>
          toast.error('Failed to save changes', {
            description: 'Please check your internet connection and try again.',
          })
        }
      >
        Error Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast.error('Authentication failed', {
            description: 'Invalid username or password. Please try again.',
            action: {
              label: 'Reset Password',
              onClick: () => console.log('Reset Password'),
            },
          })
        }
      >
        Error with Action
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast.error('Upload failed', {
            description: 'The file size exceeds the maximum limit of 10MB.',
            icon: <AlertCircle className="h-4 w-4" />,
          })
        }
      >
        Error with Icon
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Storage space running low', {
            description: 'You have used 90% of your available storage.',
          })
        }
      >
        Warning Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Session will expire soon', {
            description: 'Your session will expire in 5 minutes.',
            action: {
              label: 'Extend Session',
              onClick: () => console.log('Extend Session'),
            },
          })
        }
      >
        Warning with Action
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Unsaved changes', {
            description: 'You have unsaved changes that will be lost.',
            icon: <AlertTriangle className="h-4 w-4" />,
          })
        }
      >
        Warning with Icon
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        variant="secondary"
        onClick={() =>
          toast.info('New feature available', {
            description: 'Check out the new dark mode in your settings.',
          })
        }
      >
        Info Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          toast.info('Scheduled maintenance', {
            description: 'System maintenance scheduled for tonight at 2 AM UTC.',
            action: {
              label: 'Learn More',
              onClick: () => console.log('Learn More'),
            },
          })
        }
      >
        Info with Action
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          toast.info('Welcome to the beta', {
            description: 'You are now part of our exclusive beta program.',
            icon: <InfoIcon className="h-4 w-4" />,
          })
        }
      >
        Info with Icon
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() => {
          const loadingToast = toast.loading('Uploading file...', {
            description: 'Please wait while we process your file.',
          });

          // Simulate async operation
          setTimeout(() => {
            toast.success('File uploaded successfully!', {
              id: loadingToast,
              description: 'Your file has been uploaded and processed.',
            });
          }, 3000);
        }}
      >
        Loading Toast
      </Button>

      <Button
        onClick={() => {
          const loadingToast = toast.loading('Creating account...', {
            description: 'Setting up your new account.',
          });

          // Simulate async operation with error
          setTimeout(() => {
            toast.error('Failed to create account', {
              id: loadingToast,
              description: 'Username already exists. Please choose a different one.',
            });
          }, 2000);
        }}
      >
        Loading to Error
      </Button>

      <Button
        onClick={() => {
          let progress = 0;
          const loadingToast = toast.loading('Downloading...', {
            description: `${progress}% complete`,
          });

          const interval = setInterval(() => {
            progress += 10;
            toast.loading('Downloading...', {
              id: loadingToast,
              description: `${progress}% complete`,
            });

            if (progress >= 100) {
              clearInterval(interval);
              toast.success('Download complete!', {
                id: loadingToast,
                description: 'Your file has been downloaded successfully.',
              });
            }
          }, 200);
        }}
      >
        Progress Loading
      </Button>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() =>
          toast('New message received', {
            description: 'You have a new message from Sarah Miller.',
            action: {
              label: 'Reply',
              onClick: () => console.log('Reply clicked'),
            },
            cancel: {
              label: 'Dismiss',
              onClick: () => console.log('Dismissed'),
            },
          })
        }
      >
        Message with Actions
      </Button>

      <Button
        onClick={() =>
          toast('Friend request', {
            description: 'John Doe wants to connect with you.',
            action: {
              label: 'Accept',
              onClick: () => {
                toast.success('Friend request accepted!');
              },
            },
            cancel: {
              label: 'Decline',
              onClick: () => {
                toast('Friend request declined');
              },
            },
          })
        }
      >
        Friend Request
      </Button>

      <Button
        onClick={() =>
          toast('Delete confirmation', {
            description: 'Are you sure you want to delete this item?',
            action: {
              label: 'Delete',
              onClick: () => {
                toast.success('Item deleted successfully');
              },
            },
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancelled'),
            },
          })
        }
      >
        Delete Confirmation
      </Button>
    </div>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() =>
          toast('Added to favorites', {
            description: 'This item has been added to your favorites.',
            icon: <Heart className="h-4 w-4 text-red-500" />,
          })
        }
      >
        Favorite
      </Button>

      <Button
        onClick={() =>
          toast('Download started', {
            description: 'Your file download has begun.',
            icon: <Download className="h-4 w-4 text-blue-500" />,
          })
        }
      >
        Download
      </Button>

      <Button
        onClick={() =>
          toast('Email sent', {
            description: 'Your message has been delivered.',
            icon: <Mail className="h-4 w-4 text-green-500" />,
          })
        }
      >
        Email
      </Button>

      <Button
        onClick={() =>
          toast('Settings updated', {
            description: 'Your preferences have been saved.',
            icon: <Settings className="h-4 w-4 text-gray-500" />,
          })
        }
      >
        Settings
      </Button>

      <Button
        onClick={() =>
          toast('Profile viewed', {
            description: 'Someone viewed your profile.',
            icon: <User className="h-4 w-4 text-purple-500" />,
          })
        }
      >
        Profile
      </Button>

      <Button
        onClick={() =>
          toast('Event reminder', {
            description: 'Meeting with the design team in 15 minutes.',
            icon: <Calendar className="h-4 w-4 text-orange-500" />,
          })
        }
      >
        Calendar
      </Button>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() => {
          toast('Top Center', {
            description: 'This toast appears at the top center.',
            position: 'top-center',
          });
        }}
      >
        Top Center
      </Button>

      <Button
        onClick={() => {
          toast('Top Right', {
            description: 'This toast appears at the top right.',
            position: 'top-right',
          });
        }}
      >
        Top Right
      </Button>

      <Button
        onClick={() => {
          toast('Bottom Left', {
            description: 'This toast appears at the bottom left.',
            position: 'bottom-left',
          });
        }}
      >
        Bottom Left
      </Button>

      <Button
        onClick={() => {
          toast('Bottom Right', {
            description: 'This toast appears at the bottom right.',
            position: 'bottom-right',
          });
        }}
      >
        Bottom Right
      </Button>
    </div>
  ),
};

export const Duration: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() =>
          toast('Quick message', {
            description: 'This disappears in 2 seconds.',
            duration: 2000,
          })
        }
      >
        2 Seconds
      </Button>

      <Button
        onClick={() =>
          toast('Standard message', {
            description: 'This uses the default duration.',
          })
        }
      >
        Default (4s)
      </Button>

      <Button
        onClick={() =>
          toast('Important message', {
            description: 'This stays visible for 10 seconds.',
            duration: 10000,
          })
        }
      >
        10 Seconds
      </Button>

      <Button
        onClick={() =>
          toast('Persistent message', {
            description: 'This stays until manually dismissed.',
            duration: Infinity,
            cancel: {
              label: 'Dismiss',
              onClick: () => console.log('Dismissed'),
            },
          })
        }
      >
        Persistent
      </Button>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() => {
          const saveToast = toast.loading('Saving draft...', {
            description: 'Your changes are being saved.',
          });

          setTimeout(() => {
            toast.success('Draft saved', {
              id: saveToast,
              description: 'Your document has been automatically saved.',
              action: {
                label: 'View',
                onClick: () => console.log('View draft'),
              },
            });
          }, 2000);
        }}
      >
        Auto Save
      </Button>

      <Button
        onClick={() => {
          toast('New comment', {
            description: 'Alex commented on your post "Design System Updates"',
            action: {
              label: 'Reply',
              onClick: () => toast.info('Opening reply dialog...'),
            },
            cancel: {
              label: 'Mark as read',
              onClick: () => console.log('Marked as read'),
            },
          });
        }}
      >
        Comment Notification
      </Button>

      <Button
        onClick={() => {
          const uploadToast = toast.loading('Uploading images...', {
            description: '0 of 5 files uploaded',
          });

          let uploaded = 0;
          const total = 5;
          const interval = setInterval(() => {
            uploaded++;
            if (uploaded < total) {
              toast.loading('Uploading images...', {
                id: uploadToast,
                description: `${uploaded} of ${total} files uploaded`,
              });
            } else {
              clearInterval(interval);
              toast.success('Upload complete!', {
                id: uploadToast,
                description: 'All 5 images have been uploaded successfully.',
                action: {
                  label: 'View Gallery',
                  onClick: () => console.log('View Gallery'),
                },
              });
            }
          }, 800);
        }}
      >
        File Upload
      </Button>

      <Button
        onClick={() => {
          toast.warning('Low battery', {
            description: 'Your device battery is below 20%. Consider charging soon.',
            icon: <Clock className="h-4 w-4" />,
            duration: 8000,
          });
        }}
      >
        System Warning
      </Button>

      <Button
        onClick={() => {
          toast('Payment successful', {
            description: 'Your subscription has been renewed for another month.',
            icon: <CheckCircle className="h-4 w-4 text-green-500" />,
            action: {
              label: 'View Receipt',
              onClick: () => console.log('View Receipt'),
            },
          });
        }}
      >
        Payment Success
      </Button>

      <Button
        onClick={() => {
          toast.error('Connection lost', {
            description: 'Unable to sync your data. Retrying in 30 seconds...',
            action: {
              label: 'Retry Now',
              onClick: () => {
                toast.loading('Reconnecting...', {
                  description: 'Attempting to restore connection.',
                });
                setTimeout(() => {
                  toast.success('Connection restored!');
                }, 2000);
              },
            },
            duration: Infinity,
          });
        }}
      >
        Connection Error
      </Button>
    </div>
  ),
};
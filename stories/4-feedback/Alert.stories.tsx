import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { Terminal, AlertCircle, CheckCircle, Info as InfoIcon, X, RefreshCw, Download, Settings, HelpCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
  title: '4-Feedback/Alert',
  component: Alert,
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
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="border-green-200 bg-green-50 text-green-800">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your account has been created successfully. Welcome aboard!
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert className="border-blue-200 bg-blue-50 text-blue-800">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Maintenance is scheduled for tomorrow from 2:00 AM to 4:00 AM UTC.
      </AlertDescription>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert>
      <AlertDescription>
        A simple alert without a title or icon.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon, just title and description.
      </AlertDescription>
    </Alert>
  ),
};

export const WithActions: Story = {
  render: () => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) {
      return (
        <div className="text-center text-muted-foreground p-4">
          Alert has been dismissed.
          <Button
            variant="link"
            onClick={() => setDismissed(false)}
            className="ml-1 p-0 h-auto"
          >
            Show again
          </Button>
        </div>
      );
    }

    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>System Update Available</AlertTitle>
        <AlertDescription className="mb-3">
          A new version of the system is available. Update now to get the latest features and security improvements.
        </AlertDescription>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => {
              toast.loading('Downloading update...', {
                description: 'Please wait while the system updates.',
              });
              setTimeout(() => {
                toast.success('Update completed successfully!', {
                  description: 'The system has been updated to the latest version.',
                });
              }, 2000);
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Update Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              toast.info('Update postponed', {
                description: 'You can update later from the settings.',
              });
              setDismissed(true);
            }}
          >
            Later
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Learn more about system updates</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Alert>
    );
  },
};

export const ErrorWithRetry: Story = {
  render: () => {
    const [retryCount, setRetryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleRetry = () => {
      setIsLoading(true);
      setRetryCount(prev => prev + 1);

      toast.loading('Retrying connection...', {
        description: `Attempt ${retryCount + 1}`,
      });

      setTimeout(() => {
        setIsLoading(false);
        if (retryCount < 2) {
          toast.error('Connection failed again', {
            description: 'Please check your network and try again.',
          });
        } else {
          toast.success('Connection restored!', {
            description: 'Successfully connected to the server.',
          });
        }
      }, 2000);
    };

    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="flex items-center gap-2">
          Connection Failed
          {retryCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              Attempt {retryCount}
            </Badge>
          )}
        </AlertTitle>
        <AlertDescription className="mb-3">
          Unable to connect to the server. Please check your internet connection and try again.
        </AlertDescription>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleRetry}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Retrying...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry Connection
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              toast.info('Opened network settings');
            }}
          >
            <Settings className="mr-2 h-4 w-4" />
            Network Settings
          </Button>
        </div>
      </Alert>
    );
  },
};

export const SuccessWithNavigation: Story = {
  render: () => (
    <Alert className="border-green-200 bg-green-50 text-green-800">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Account Created Successfully!</AlertTitle>
      <AlertDescription className="mb-3">
        Your account has been created and verified. You can now access all features of the platform.
      </AlertDescription>
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            toast.success('Redirecting to dashboard...', {
              description: 'Welcome to your new account!',
            });
          }}
        >
          Go to Dashboard
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            toast.info('Opening profile setup');
          }}
        >
          Complete Profile
        </Button>
      </div>
    </Alert>
  ),
};

export const InfoWithLinks: Story = {
  render: () => (
    <Alert className="border-blue-200 bg-blue-50 text-blue-800">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Scheduled Maintenance</AlertTitle>
      <AlertDescription className="mb-3">
        System maintenance is scheduled for tomorrow from 2:00 AM to 4:00 AM UTC. Some services may be unavailable during this time.
      </AlertDescription>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            toast.info('Opening maintenance schedule');
          }}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Schedule
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            toast.success('Subscribed to maintenance notifications');
          }}
        >
          Get Notifications
        </Button>
      </div>
    </Alert>
  ),
};

export const NotificationCenter: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      {
        id: 1,
        type: 'info' as const,
        title: 'New Feature Available',
        message: 'Dark mode is now available in your settings.',
        dismissed: false,
      },
      {
        id: 2,
        type: 'warning' as const,
        title: 'Storage Almost Full',
        message: 'You\'ve used 90% of your storage space.',
        dismissed: false,
      },
      {
        id: 3,
        type: 'success' as const,
        title: 'Backup Completed',
        message: 'Your data has been successfully backed up.',
        dismissed: false,
      },
    ]);

    const dismissAlert = (id: number) => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
      toast.info('Alert dismissed');
    };

    const getAlertVariant = (type: string) => {
      return type === 'warning' ? 'destructive' : undefined;
    };

    const getAlertIcon = (type: string) => {
      switch (type) {
        case 'info': return InfoIcon;
        case 'warning': return AlertCircle;
        case 'success': return CheckCircle;
        default: return InfoIcon;
      }
    };

    const getAlertClassName = (type: string) => {
      switch (type) {
        case 'success': return 'border-green-200 bg-green-50 text-green-800';
        case 'info': return 'border-blue-200 bg-blue-50 text-blue-800';
        default: return '';
      }
    };

    const activeAlerts = alerts.filter(alert => !alert.dismissed);

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Notifications
            <Badge variant="secondary">
              {activeAlerts.length}
            </Badge>
          </CardTitle>
          <CardDescription>
            Stay updated with the latest system notifications and alerts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeAlerts.length === 0 ? (
            <div className="text-center text-muted-foreground py-4">
              <CheckCircle className="h-8 w-8 mx-auto mb-2" />
              <p>All caught up!</p>
              <p className="text-sm">No new notifications at this time.</p>
            </div>
          ) : (
            activeAlerts.map((alert) => {
              const IconComponent = getAlertIcon(alert.type);
              return (
                <Alert
                  key={alert.id}
                  variant={getAlertVariant(alert.type)}
                  className={getAlertClassName(alert.type)}
                >
                  <IconComponent className="h-4 w-4" />
                  <div className="flex justify-between items-start w-full">
                    <div className="flex-1">
                      <AlertTitle>{alert.title}</AlertTitle>
                      <AlertDescription>
                        {alert.message}
                      </AlertDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dismissAlert(alert.id)}
                      className="ml-2 h-6 w-6 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </Alert>
              );
            })
          )}
        </CardContent>
        {activeAlerts.length > 0 && (
          <CardFooter>
            <Button
              variant="outline"
              onClick={() => {
                setAlerts(prev => prev.map(alert => ({ ...alert, dismissed: true })));
                toast.success('All notifications cleared');
              }}
              className="w-full"
            >
              Clear All
            </Button>
          </CardFooter>
        )}
      </Card>
    );
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
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
import { Eye, EyeOff, Check, X, HelpCircle, AlertCircle, Upload } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'B-Primitives/Input',
  component: Input,
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
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  ),
};

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      setIsValid(value === '' || emailRegex.test(value));
    };

    const handleSubmit = () => {
      if (email && isValid) {
        toast.success('Email validated successfully!', {
          description: `${email} is a valid email address.`,
        });
      } else {
        toast.error('Please enter a valid email address', {
          description: 'The email format is incorrect.',
        });
      }
    };

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="validated-email">Email</Label>
        <div className="relative">
          <Input
            type="email"
            id="validated-email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            className={!isValid ? "border-red-500 pr-10" : "pr-10"}
          />
          {email && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {isValid ? (
                <Tooltip>
                  <TooltipTrigger>
                    <Check className="h-4 w-4 text-green-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Valid email address</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger>
                    <X className="h-4 w-4 text-red-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Invalid email format</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}
        </div>
        {!isValid && (
          <p className="text-sm text-red-500">Please enter a valid email address.</p>
        )}
        <Button onClick={handleSubmit} className="mt-2">
          Validate & Submit
        </Button>
      </div>
    );
  },
};

export const PasswordWithToggle: Story = {
  render: () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);

    const calculateStrength = (pwd: string) => {
      let score = 0;
      if (pwd.length >= 8) score++;
      if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
      if (/\d/.test(pwd)) score++;
      if (/[^a-zA-Z0-9]/.test(pwd)) score++;
      return score;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPassword(value);
      setStrength(calculateStrength(value));
    };

    const getStrengthColor = () => {
      if (strength === 0) return 'bg-gray-200';
      if (strength <= 2) return 'bg-red-500';
      if (strength === 3) return 'bg-orange-500';
      return 'bg-green-500';
    };

    const getStrengthText = () => {
      if (strength === 0) return 'Enter password';
      if (strength <= 2) return 'Weak';
      if (strength === 3) return 'Medium';
      return 'Strong';
    };

    const handleSubmit = () => {
      if (strength >= 3) {
        toast.success('Password accepted!', {
          description: 'Your password meets security requirements.',
        });
      } else {
        toast.warning('Password too weak', {
          description: 'Please use a stronger password with mixed case, numbers, and symbols.',
        });
      }
    };

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="flex items-center gap-2">
          <Label htmlFor="password-toggle">Password</Label>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Password should be at least 8 characters with mixed case, numbers, and symbols</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password-toggle"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-y-0 right-0 h-full px-3 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
        {password && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getStrengthColor()}`}
                  style={{ width: `${(strength / 4) * 100}%` }}
                />
              </div>
              <Badge
                variant={strength >= 3 ? 'default' : strength >= 2 ? 'secondary' : 'destructive'}
                className="text-xs"
              >
                {getStrengthText()}
              </Badge>
            </div>
          </div>
        )}
        <Button onClick={handleSubmit} className="mt-2" disabled={strength < 3}>
          Create Account
        </Button>
      </div>
    );
  },
};

export const FormCard: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
      const requiredFields = ['name', 'email', 'message'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingFields.length > 0) {
        toast.error('Please fill in all required fields', {
          description: `Missing: ${missingFields.join(', ')}`,
        });
        return;
      }

      const loadingToast = toast.loading('Submitting form...', {
        description: 'Please wait while we process your request.',
      });

      setTimeout(() => {
        toast.success('Form submitted successfully!', {
          id: loadingToast,
          description: 'Thank you for your message. We\'ll get back to you soon.',
          action: {
            label: 'View Confirmation',
            onClick: () => toast.info('Confirmation email sent to ' + formData.email),
          },
        });
      }, 2000);
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Contact Form
            <Badge variant="outline">Required</Badge>
          </CardTitle>
          <CardDescription>
            Get in touch with our team. All fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="form-name">Full Name *</Label>
            </div>
            <Input
              type="text"
              id="form-name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="form-email">Email *</Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>We'll use this email to send you updates and responses</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              type="email"
              id="form-email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="form-company">Company</Label>
            <Input
              type="text"
              id="form-company"
              placeholder="Acme Inc. (optional)"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="form-message">Message *</Label>
            <Input
              type="text"
              id="form-message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setFormData({ name: '', email: '', company: '', message: '' });
              toast.info('Form cleared');
            }}
          >
            Clear
          </Button>
          <Button onClick={handleSubmit} className="flex-1">
            Send Message
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const WithDialog: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedResult, setSelectedResult] = useState<string | null>(null);

    const mockResults = [
      'React Documentation',
      'TypeScript Handbook',
      'Next.js Guide',
      'Tailwind CSS',
      'shadcn/ui Components'
    ].filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = () => {
      if (!searchTerm.trim()) {
        toast.warning('Please enter a search term');
        return;
      }

      toast.info(`Searching for "${searchTerm}"...`, {
        description: `Found ${mockResults.length} results`,
      });
    };

    return (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {mockResults.length > 0 && searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
              {mockResults.map((result, index) => (
                <div
                  key={index}
                  className="px-3 py-2 hover:bg-muted cursor-pointer text-sm"
                  onClick={() => {
                    setSelectedResult(result);
                    setSearchTerm(result);
                  }}
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Advanced</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Advanced Search</DialogTitle>
              <DialogDescription>
                Configure detailed search parameters and filters.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="advanced-search">Search Query</Label>
                <Input
                  id="advanced-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter detailed search terms..."
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">Documentation</Badge>
                <Badge variant="outline" className="cursor-pointer">Tutorials</Badge>
                <Badge variant="outline" className="cursor-pointer">Examples</Badge>
              </div>
              {selectedResult && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Selected Result:</p>
                  <p className="text-sm text-muted-foreground">{selectedResult}</p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline">Reset</Button>
              <Button onClick={() => {
                toast.success('Advanced search executed!', {
                  description: `Searching for: ${searchTerm}`,
                });
              }}>
                Search
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
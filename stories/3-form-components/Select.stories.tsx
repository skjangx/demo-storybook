import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { HelpCircle, Settings, User, Globe } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'C-Form Components/Select',
  component: Select,
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
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDescriptiveText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="team">Team</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your team" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engineering">🛠️ Engineering</SelectItem>
          <SelectItem value="design">🎨 Design</SelectItem>
          <SelectItem value="marketing">📢 Marketing</SelectItem>
          <SelectItem value="sales">💰 Sales</SelectItem>
          <SelectItem value="support">🎧 Support</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Choose the team you belong to.
      </p>
    </div>
  ),
};

export const LongList: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="country">Country</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">🇺🇸 United States</SelectItem>
          <SelectItem value="ca">🇨🇦 Canada</SelectItem>
          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
          <SelectItem value="de">🇩🇪 Germany</SelectItem>
          <SelectItem value="fr">🇫🇷 France</SelectItem>
          <SelectItem value="jp">🇯🇵 Japan</SelectItem>
          <SelectItem value="au">🇦🇺 Australia</SelectItem>
          <SelectItem value="br">🇧🇷 Brazil</SelectItem>
          <SelectItem value="in">🇮🇳 India</SelectItem>
          <SelectItem value="cn">🇨🇳 China</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithTooltips: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center gap-2">
        <Label htmlFor="priority">Task Priority</Label>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Choose the priority level for this task</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="urgent">🔥 Urgent - Needs immediate attention</SelectItem>
          <SelectItem value="high">⚡ High - Important but not urgent</SelectItem>
          <SelectItem value="medium">📋 Medium - Normal priority</SelectItem>
          <SelectItem value="low">💤 Low - Can wait if needed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const ProfileSettings: Story = {
  render: () => {
    const [profile, setProfile] = useState({
      role: '',
      department: '',
      location: '',
    });

    const handleSave = () => {
      const missingFields = Object.entries(profile)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

      if (missingFields.length > 0) {
        toast.error('Please fill in all fields', {
          description: `Missing: ${missingFields.join(', ')}`,
        });
        return;
      }

      const loadingToast = toast.loading('Saving profile...', {
        description: 'Updating your profile settings.',
      });

      setTimeout(() => {
        toast.success('Profile updated successfully!', {
          id: loadingToast,
          description: 'Your changes have been saved.',
        });
      }, 1500);
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Settings
            <Badge variant="outline">Required</Badge>
          </CardTitle>
          <CardDescription>
            Update your professional information and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="role">Role</Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your current job title or position</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select
              onValueChange={(value) => {
                setProfile(prev => ({ ...prev, role: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">👨‍💻 Software Developer</SelectItem>
                <SelectItem value="designer">🎨 UI/UX Designer</SelectItem>
                <SelectItem value="manager">👔 Project Manager</SelectItem>
                <SelectItem value="analyst">📊 Data Analyst</SelectItem>
                <SelectItem value="marketing">📢 Marketing Specialist</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="department">Department</Label>
            <Select
              onValueChange={(value) => {
                setProfile(prev => ({ ...prev, department: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">🛠️ Engineering</SelectItem>
                <SelectItem value="design">🎨 Design</SelectItem>
                <SelectItem value="product">📱 Product</SelectItem>
                <SelectItem value="marketing">📢 Marketing</SelectItem>
                <SelectItem value="sales">💰 Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="location">Location</Label>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </div>
            <Select
              onValueChange={(value) => {
                setProfile(prev => ({ ...prev, location: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">🏠 Remote</SelectItem>
                <SelectItem value="office">🏢 Office</SelectItem>
                <SelectItem value="hybrid">🔄 Hybrid</SelectItem>
                <SelectItem value="travel">✈️ Frequent Travel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setProfile({ role: '', department: '', location: '' });
              toast.info('Form cleared');
            }}
          >
            Clear
          </Button>
          <Button onClick={handleSave} className="flex-1">
            Save Profile
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const PreferencesCard: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      theme: '',
      language: '',
      timezone: '',
    });

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            App Preferences
          </CardTitle>
          <CardDescription>
            Customize your application experience and settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="theme">Theme</Label>
            <Select
              onValueChange={(value) => {
                setPreferences(prev => ({ ...prev, theme: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">☀️ Light Mode</SelectItem>
                <SelectItem value="dark">🌙 Dark Mode</SelectItem>
                <SelectItem value="auto">🌓 Auto (System)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="language">Language</Label>
            <Select
              onValueChange={(value) => {
                setPreferences(prev => ({ ...prev, language: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
                <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                <SelectItem value="ja">🇯🇵 日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="timezone">Timezone</Label>
            <Select
              onValueChange={(value) => {
                setPreferences(prev => ({ ...prev, timezone: value }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">🌊 PST (UTC-8)</SelectItem>
                <SelectItem value="mst">🏔️ MST (UTC-7)</SelectItem>
                <SelectItem value="cst">🌾 CST (UTC-6)</SelectItem>
                <SelectItem value="est">🏙️ EST (UTC-5)</SelectItem>
                <SelectItem value="utc">🌍 UTC (UTC+0)</SelectItem>
                <SelectItem value="cet">🇪🇺 CET (UTC+1)</SelectItem>
                <SelectItem value="jst">🇯🇵 JST (UTC+9)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              toast.success('Preferences saved!', {
                description: 'Your application preferences have been updated.',
              });
            }}
            className="w-full"
          >
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    );
  },
};
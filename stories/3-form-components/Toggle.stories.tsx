import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
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
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Grid3X3,
  Filter,
  Moon,
  Sun,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Heart,
  Star,
  Bookmark,
  ThumbsUp,
  Settings,
  HelpCircle,
  Save
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Toggle> = {
  title: '3-Form Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Toggle component provides a way to create interactive toggle buttons that can be switched on/off.
It supports different variants (default, outline), sizes (sm, default, lg), and can be used individually
or grouped together with ToggleGroup.

## Key Features
- **Single Toggles**: Individual toggle buttons for binary states
- **Toggle Groups**: Multiple toggles that can work in single or multiple selection modes
- **Variants**: Default and outline styling options
- **Sizes**: Small, default, and large sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Integration**: Works well with forms, toolbars, and settings panels

## Common Use Cases
- Text formatting controls (bold, italic, underline)
- View mode switches (list vs grid)
- Feature toggles in settings
- Filter selections
- Theme switching
- Tool selection in editors
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
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    pressed: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Toggle Examples
export const Default: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Toggle bold',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <Italic className="h-4 w-4" />,
    'aria-label': 'Toggle italic',
  },
};

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
      Italic
    </Toggle>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Small toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle aria-label="Normal toggle">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Label>Normal</Label>
      </div>

      <div className="flex items-center gap-4">
        <Toggle defaultPressed aria-label="Pressed toggle">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Label>Pressed</Label>
      </div>

      <div className="flex items-center gap-4">
        <Toggle disabled aria-label="Disabled toggle">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Label>Disabled</Label>
      </div>

      <div className="flex items-center gap-4">
        <Toggle disabled defaultPressed aria-label="Disabled pressed toggle">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Label>Disabled & Pressed</Label>
      </div>
    </div>
  ),
};

// Text Formatting Toggle Group
export const TextFormattingToolbar: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Card className="w-fit">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Text Formatting</CardTitle>
          <CardDescription>
            Choose formatting options for your text
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup
            type="multiple"
            value={value}
            onValueChange={setValue}
            variant="outline"
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
              <Strikethrough className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <Separator />

          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">Selected:</Label>
            <div className="flex gap-1">
              {value.length === 0 ? (
                <Badge variant="outline">None</Badge>
              ) : (
                value.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Alignment Toggle Group (Single Selection)
export const AlignmentControls: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');

    return (
      <Card className="w-fit">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Text Alignment</CardTitle>
          <CardDescription>
            Choose how text should be aligned
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup
            type="single"
            value={alignment}
            onValueChange={(value) => value && setAlignment(value)}
            variant="outline"
          >
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">Current:</Label>
            <Badge variant="default">{alignment}</Badge>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// View Mode Toggle
export const ViewModeToggle: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState('grid');

    return (
      <Card className="w-fit">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">View Mode</CardTitle>
          <CardDescription>
            Switch between list and grid views
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(value) => value && setViewMode(value)}
          >
            <ToggleGroupItem value="list" aria-label="List view">
              <List className="h-4 w-4" />
              <span className="ml-2">List</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <Grid3X3 className="h-4 w-4" />
              <span className="ml-2">Grid</span>
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="p-3 border rounded-md bg-muted/50">
            <p className="text-sm text-muted-foreground">
              Current view: <strong>{viewMode}</strong>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {viewMode === 'list'
                ? 'Items displayed in a vertical list'
                : 'Items displayed in a grid layout'}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Filter Toggles
export const FilterToggles: Story = {
  render: () => {
    const [activeFilters, setActiveFilters] = useState<string[]>(['starred']);

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Content Filters
          </CardTitle>
          <CardDescription>
            Filter content based on your preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <Label>Liked items</Label>
              </div>
              <Toggle
                pressed={activeFilters.includes('liked')}
                onPressedChange={(pressed) => {
                  if (pressed) {
                    setActiveFilters([...activeFilters, 'liked']);
                  } else {
                    setActiveFilters(activeFilters.filter(f => f !== 'liked'));
                  }
                }}
                aria-label="Filter liked items"
              >
                <Heart className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <Label>Starred items</Label>
              </div>
              <Toggle
                pressed={activeFilters.includes('starred')}
                onPressedChange={(pressed) => {
                  if (pressed) {
                    setActiveFilters([...activeFilters, 'starred']);
                  } else {
                    setActiveFilters(activeFilters.filter(f => f !== 'starred'));
                  }
                }}
                aria-label="Filter starred items"
              >
                <Star className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="h-4 w-4 text-blue-500" />
                <Label>Bookmarked</Label>
              </div>
              <Toggle
                pressed={activeFilters.includes('bookmarked')}
                onPressedChange={(pressed) => {
                  if (pressed) {
                    setActiveFilters([...activeFilters, 'bookmarked']);
                  } else {
                    setActiveFilters(activeFilters.filter(f => f !== 'bookmarked'));
                  }
                }}
                aria-label="Filter bookmarked items"
              >
                <Bookmark className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-green-500" />
                <Label>Upvoted</Label>
              </div>
              <Toggle
                pressed={activeFilters.includes('upvoted')}
                onPressedChange={(pressed) => {
                  if (pressed) {
                    setActiveFilters([...activeFilters, 'upvoted']);
                  } else {
                    setActiveFilters(activeFilters.filter(f => f !== 'upvoted'));
                  }
                }}
                aria-label="Filter upvoted items"
              >
                <ThumbsUp className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label className="text-sm font-medium">Active Filters:</Label>
            <div className="flex flex-wrap gap-1">
              {activeFilters.length === 0 ? (
                <Badge variant="outline">None</Badge>
              ) : (
                activeFilters.map((filter) => (
                  <Badge key={filter} variant="secondary">
                    {filter}
                  </Badge>
                ))
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            onClick={() => {
              setActiveFilters([]);
              toast.success('All filters cleared!');
            }}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

// Theme Toggle
export const ThemeToggle: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);

    return (
      <Card className="w-fit">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Theme Preference</CardTitle>
          <CardDescription>
            Switch between light and dark themes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <Label>Light</Label>
            </div>

            <Toggle
              pressed={isDark}
              onPressedChange={setIsDark}
              aria-label="Toggle theme"
              variant="outline"
            >
              {isDark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Toggle>

            <div className="flex items-center gap-2">
              <Label>Dark</Label>
              <Moon className="h-4 w-4 text-blue-400" />
            </div>
          </div>

          <div className="p-3 border rounded-md bg-muted/50">
            <p className="text-sm">
              Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Settings Panel with Multiple Toggles
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      soundEffects: true,
      autoSave: true,
      showHidden: false,
      wifi: true,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            App Settings
          </CardTitle>
          <CardDescription>
            Customize your app experience with these toggles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label className="font-medium">Notifications</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Receive app notifications and alerts</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get notified about important updates
                </p>
              </div>
              <Toggle
                pressed={settings.notifications}
                onPressedChange={() => updateSetting('notifications')}
                aria-label="Toggle notifications"
              >
                <Volume2 className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Use dark theme throughout the app
                </p>
              </div>
              <Toggle
                pressed={settings.darkMode}
                onPressedChange={() => updateSetting('darkMode')}
                aria-label="Toggle dark mode"
                variant="outline"
              >
                {settings.darkMode ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-medium">Sound Effects</Label>
                <p className="text-sm text-muted-foreground">
                  Play audio feedback for interactions
                </p>
              </div>
              <Toggle
                pressed={settings.soundEffects}
                onPressedChange={() => updateSetting('soundEffects')}
                aria-label="Toggle sound effects"
              >
                {settings.soundEffects ? (
                  <Volume2 className="h-4 w-4" />
                ) : (
                  <VolumeX className="h-4 w-4" />
                )}
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-medium">Auto Save</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save changes as you work
                </p>
              </div>
              <Toggle
                pressed={settings.autoSave}
                onPressedChange={() => updateSetting('autoSave')}
                aria-label="Toggle auto save"
              >
                <Save className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-medium">Show Hidden Files</Label>
                <p className="text-sm text-muted-foreground">
                  Display hidden files and folders
                </p>
              </div>
              <Toggle
                pressed={settings.showHidden}
                onPressedChange={() => updateSetting('showHidden')}
                aria-label="Toggle hidden files visibility"
              >
                {settings.showHidden ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Toggle>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="font-medium">WiFi</Label>
                <p className="text-sm text-muted-foreground">
                  Connect to available WiFi networks
                </p>
              </div>
              <Toggle
                pressed={settings.wifi}
                onPressedChange={() => updateSetting('wifi')}
                aria-label="Toggle WiFi"
                variant="outline"
              >
                {settings.wifi ? (
                  <Wifi className="h-4 w-4" />
                ) : (
                  <WifiOff className="h-4 w-4" />
                )}
              </Toggle>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => toast.success('Settings saved successfully!')}
            className="w-full"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

// Large Toggle Groups with Multiple Sizes
export const ToggleGroupSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Small Size</Label>
        <ToggleGroup type="multiple" size="sm" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Default Size</Label>
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Large Size</Label>
        <ToggleGroup type="multiple" size="lg" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

// Interactive Demo Story
export const InteractiveDemo: Story = {
  render: () => {
    const [singleValue, setSingleValue] = useState('center');
    const [multipleValue, setMultipleValue] = useState<string[]>(['bold']);
    const [togglePressed, setTogglePressed] = useState(false);

    return (
      <div className="space-y-8 p-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Interactive Toggle Demo</h3>
          <p className="text-sm text-muted-foreground">
            Try out different toggle patterns and see their state changes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Single Toggle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Toggle
                pressed={togglePressed}
                onPressedChange={setTogglePressed}
                aria-label="Demo toggle"
                variant="outline"
              >
                <Heart className={`h-4 w-4 ${togglePressed ? 'text-red-500' : ''}`} />
                {togglePressed ? 'Liked' : 'Like'}
              </Toggle>
              <p className="text-xs text-muted-foreground">
                Status: {togglePressed ? 'Pressed' : 'Not pressed'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Single Selection Group</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ToggleGroup
                type="single"
                value={singleValue}
                onValueChange={(value) => value && setSingleValue(value)}
                variant="outline"
              >
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-xs text-muted-foreground">
                Selected: {singleValue}
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Multiple Selection Group</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ToggleGroup
                type="multiple"
                value={multipleValue}
                onValueChange={setMultipleValue}
              >
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                  Bold
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                  Italic
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                  Underline
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                  <Strikethrough className="h-4 w-4" />
                  Strike
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Selected ({multipleValue.length}): {multipleValue.join(', ') || 'None'}
                </p>
                <div className="flex gap-1">
                  {multipleValue.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};
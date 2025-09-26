import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Volume2,
  VolumeX,
  Sun,
  DollarSign,
  Home,
  Car,
  Zap,
  Thermometer,
  Music,
  Users,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  BarChart3,
  Settings,
  Sliders,
  Filter,
  Palette,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: '3-Form Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Slider Component

Interactive range slider component for numeric input and value selection.

## Features

- **Single Value** - Select individual values within a range
- **Range Selection** - Select minimum and maximum values
- **Step Control** - Define granular step intervals
- **Custom Styling** - Themed appearance with visual feedback
- **Disabled State** - Handle non-interactive scenarios
- **Accessibility** - Full keyboard and screen reader support

## Integration Patterns

- **Form Integration** - Seamless integration with form validation
- **Real-time Feedback** - Live value updates and visual indicators
- **Card Layout** - Organized slider controls in card containers
- **Badge Display** - Show current values with formatted badges
- **Tooltip Information** - Helpful context for slider controls
- **Settings Panels** - Control application preferences and configurations
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex items-center justify-center min-h-[400px] w-full">
          <Story />
        </div>
        <Toaster />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Basic Slider</CardTitle>
          <CardDescription>
            Simple slider for numeric value selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Value</Label>
              <Badge variant="outline">{value[0]}</Badge>
            </div>
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([75]);
    const [isMuted, setIsMuted] = useState(false);

    const getVolumeIcon = () => {
      if (isMuted || volume[0] === 0) return VolumeX;
      return Volume2;
    };

    const VolumeIcon = getVolumeIcon();

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <VolumeIcon className="h-5 w-5" />
            Volume Control
          </CardTitle>
          <CardDescription>
            Adjust system volume with mute functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className="shrink-0"
            >
              <VolumeIcon className="h-4 w-4" />
            </Button>
            <div className="flex-1 space-y-2">
              <Slider
                value={isMuted ? [0] : volume}
                onValueChange={(newValue) => {
                  setVolume(newValue);
                  if (newValue[0] > 0) setIsMuted(false);
                }}
                max={100}
                step={1}
                className="w-full"
                disabled={isMuted}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span className="font-medium">{isMuted ? 'Muted' : `${volume[0]}%`}</span>
                <span>100</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([250, 750]);
    const [budget, setBudget] = useState(1000);

    const formatPrice = (value: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(value);
    };

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Price Range Filter
          </CardTitle>
          <CardDescription>
            Set your budget range for property search
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Price Range</Label>
              <div className="flex gap-2">
                <Badge variant="outline">{formatPrice(priceRange[0])}</Badge>
                <span className="text-muted-foreground">-</span>
                <Badge variant="outline">{formatPrice(priceRange[1])}</Badge>
              </div>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={budget}
              min={0}
              step={25}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatPrice(0)}</span>
              <span>{formatPrice(budget)}</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="budget">Maximum Budget</Label>
              <Input
                id="budget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-32"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPriceRange([0, budget])}
            >
              Any Price
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPriceRange([0, 500])}
            >
              Under $500
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPriceRange([500, 1000])}
            >
              $500-$1000
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [brightness, setBrightness] = useState([80]);
    const [volume, setVolume] = useState([65]);
    const [temperature, setTemperature] = useState([72]);
    const [performance, setPerformance] = useState([75]);

    const settings = [
      {
        id: 'brightness',
        label: 'Screen Brightness',
        value: brightness,
        onChange: setBrightness,
        max: 100,
        unit: '%',
        icon: Sun,
        color: 'text-yellow-500',
      },
      {
        id: 'volume',
        label: 'System Volume',
        value: volume,
        onChange: setVolume,
        max: 100,
        unit: '%',
        icon: Volume2,
        color: 'text-blue-500',
      },
      {
        id: 'temperature',
        label: 'Room Temperature',
        value: temperature,
        onChange: setTemperature,
        max: 85,
        min: 60,
        unit: '°F',
        icon: Thermometer,
        color: 'text-red-500',
      },
      {
        id: 'performance',
        label: 'CPU Performance',
        value: performance,
        onChange: setPerformance,
        max: 100,
        unit: '%',
        icon: Zap,
        color: 'text-green-500',
      },
    ];

    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            System Settings
          </CardTitle>
          <CardDescription>
            Adjust your system preferences and controls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {settings.map((setting) => {
            const IconComponent = setting.icon;
            return (
              <div key={setting.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`h-4 w-4 ${setting.color}`} />
                    <Label>{setting.label}</Label>
                  </div>
                  <Badge variant="outline">
                    {setting.value[0]}{setting.unit}
                  </Badge>
                </div>
                <Slider
                  value={setting.value}
                  onValueChange={setting.onChange}
                  max={setting.max}
                  min={setting.min || 0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{setting.min || 0}{setting.unit}</span>
                  <span>{setting.max}{setting.unit}</span>
                </div>
              </div>
            );
          })}

          <Separator />

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBrightness([100]);
                setVolume([75]);
                setTemperature([70]);
                setPerformance([100]);
                toast.success('Settings reset to optimal values');
              }}
            >
              Optimal
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBrightness([50]);
                setVolume([25]);
                setTemperature([68]);
                setPerformance([50]);
                toast.success('Settings set to power saving mode');
              }}
            >
              Power Save
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const MusicPlayer: Story = {
  render: () => {
    const [volume, setVolume] = useState([70]);
    const [bass, setBass] = useState([50]);
    const [treble, setTreble] = useState([50]);
    const [balance, setBalance] = useState([50]);

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Audio Equalizer
          </CardTitle>
          <CardDescription>
            Fine-tune your audio experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                <Label>Master Volume</Label>
              </div>
              <Badge variant="outline">{volume[0]}%</Badge>
            </div>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Equalizer</h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Bass</Label>
                <Badge variant="outline" className="text-xs">
                  {bass[0] - 50 > 0 ? '+' : ''}{bass[0] - 50} dB
                </Badge>
              </div>
              <Slider
                value={bass}
                onValueChange={setBass}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Treble</Label>
                <Badge variant="outline" className="text-xs">
                  {treble[0] - 50 > 0 ? '+' : ''}{treble[0] - 50} dB
                </Badge>
              </div>
              <Slider
                value={treble}
                onValueChange={setTreble}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Balance</Label>
                <Badge variant="outline" className="text-xs">
                  {balance[0] < 50 ? 'L' : balance[0] > 50 ? 'R' : 'Center'}
                  {balance[0] !== 50 && ` ${Math.abs(balance[0] - 50)}`}
                </Badge>
              </div>
              <Slider
                value={balance}
                onValueChange={setBalance}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>L</span>
                <span>Center</span>
                <span>R</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBass([50]);
                setTreble([50]);
                setBalance([50]);
                toast.info('Equalizer reset to flat');
              }}
            >
              Flat
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBass([70]);
                setTreble([40]);
                setBalance([50]);
                toast.info('Bass boost preset applied');
              }}
            >
              Bass Boost
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBass([40]);
                setTreble([70]);
                setBalance([50]);
                toast.info('Vocal preset applied');
              }}
            >
              Vocal
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const FiltersPanel: Story = {
  render: () => {
    const [ageRange, setAgeRange] = useState([25, 45]);
    const [salaryRange, setSalaryRange] = useState([40000, 80000]);
    const [experience, setExperience] = useState([3]);
    const [teamSize, setTeamSize] = useState([5, 15]);

    const formatSalary = (value: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    };

    const appliedFilters = [
      ageRange[0] !== 18 || ageRange[1] !== 65,
      salaryRange[0] !== 20000 || salaryRange[1] !== 200000,
      experience[0] !== 0,
      teamSize[0] !== 1 || teamSize[1] !== 50,
    ].filter(Boolean).length;

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Job Search Filters
            </div>
            {appliedFilters > 0 && (
              <Badge>{appliedFilters} active</Badge>
            )}
          </CardTitle>
          <CardDescription>
            Refine your job search with detailed filters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Age Range</Label>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">{ageRange[0]}</Badge>
                <span className="text-xs text-muted-foreground">-</span>
                <Badge variant="outline" className="text-xs">{ageRange[1]}</Badge>
              </div>
            </div>
            <Slider
              value={ageRange}
              onValueChange={setAgeRange}
              max={65}
              min={18}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Salary Range</Label>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">
                  {formatSalary(salaryRange[0])}
                </Badge>
                <span className="text-xs text-muted-foreground">-</span>
                <Badge variant="outline" className="text-xs">
                  {formatSalary(salaryRange[1])}
                </Badge>
              </div>
            </div>
            <Slider
              value={salaryRange}
              onValueChange={setSalaryRange}
              max={200000}
              min={20000}
              step={5000}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Min. Experience</Label>
              <Badge variant="outline">
                {experience[0]} {experience[0] === 1 ? 'year' : 'years'}
              </Badge>
            </div>
            <Slider
              value={experience}
              onValueChange={setExperience}
              max={20}
              min={0}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Team Size</Label>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">{teamSize[0]}</Badge>
                <span className="text-xs text-muted-foreground">-</span>
                <Badge variant="outline" className="text-xs">{teamSize[1]}</Badge>
              </div>
            </div>
            <Slider
              value={teamSize}
              onValueChange={setTeamSize}
              max={50}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <Separator />

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setAgeRange([18, 65]);
                setSalaryRange([20000, 200000]);
                setExperience([0]);
                setTeamSize([1, 50]);
                toast.info('All filters cleared');
              }}
            >
              Clear All
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                toast.success('Filters applied!', {
                  description: `Found jobs matching your ${appliedFilters} filter criteria.`,
                });
              }}
            >
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ImageEditor: Story = {
  render: () => {
    const [brightness, setBrightness] = useState([0]);
    const [contrast, setContrast] = useState([0]);
    const [saturation, setSaturation] = useState([0]);
    const [blur, setBlur] = useState([0]);

    const filters = [
      {
        label: 'Brightness',
        value: brightness,
        onChange: setBrightness,
        min: -100,
        max: 100,
        icon: Sun,
      },
      {
        label: 'Contrast',
        value: contrast,
        onChange: setContrast,
        min: -100,
        max: 100,
        icon: Monitor,
      },
      {
        label: 'Saturation',
        value: saturation,
        onChange: setSaturation,
        min: -100,
        max: 100,
        icon: Palette,
      },
      {
        label: 'Blur',
        value: blur,
        onChange: setBlur,
        min: 0,
        max: 20,
        icon: Sliders,
      },
    ];

    const getFilterStyle = () => {
      return {
        filter: [
          `brightness(${100 + brightness[0]}%)`,
          `contrast(${100 + contrast[0]}%)`,
          `saturate(${100 + saturation[0]}%)`,
          `blur(${blur[0]}px)`,
        ].join(' '),
      };
    };

    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Image Editor
          </CardTitle>
          <CardDescription>
            Adjust image properties with real-time preview
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image Preview */}
          <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-lg overflow-hidden">
            <div
              className="w-full h-full flex items-center justify-center text-white font-semibold text-lg"
              style={getFilterStyle()}
            >
              Sample Image
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <div key={filter.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      <Label className="text-sm">{filter.label}</Label>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {filter.value[0]}
                      {filter.label === 'Blur' ? 'px' : ''}
                    </Badge>
                  </div>
                  <Slider
                    value={filter.value}
                    onValueChange={filter.onChange}
                    max={filter.max}
                    min={filter.min}
                    step={1}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>

          <Separator />

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBrightness([0]);
                setContrast([0]);
                setSaturation([0]);
                setBlur([0]);
                toast.info('Filters reset to original');
              }}
            >
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBrightness([20]);
                setContrast([15]);
                setSaturation([25]);
                setBlur([0]);
                toast.info('Vintage filter applied');
              }}
            >
              Vintage
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBrightness([0]);
                setContrast([0]);
                setSaturation([-100]);
                setBlur([0]);
                toast.info('Black & white filter applied');
              }}
            >
              B&W
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                toast.success('Changes applied!', {
                  description: 'Image has been processed with your settings.',
                });
              }}
            >
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};
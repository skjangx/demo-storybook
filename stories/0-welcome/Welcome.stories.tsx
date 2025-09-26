import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Palette,
  Component,
  Layers,
  Zap,
  Heart,
  Star,
  ArrowRight,
  Search,
  Moon,
  Sun,
  Code2,
  Sparkles,
  CheckCircle,
  Users,
  Activity
} from 'lucide-react';
import { useState } from 'react';

// Mock component for the welcome display
const WelcomeDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(75);

  const componentCategories = [
    {
      title: 'Foundations',
      description: 'Colors, Typography, Spacing',
      icon: Palette,
      count: 8,
      color: 'bg-blue-500',
    },
    {
      title: 'Primitives',
      description: 'Basic UI components',
      icon: Component,
      count: 12,
      color: 'bg-green-500',
    },
    {
      title: 'Form Components',
      description: 'Input, Select, Checkbox',
      icon: Layers,
      count: 15,
      color: 'bg-purple-500',
    },
    {
      title: 'Feedback',
      description: 'Alerts, Toast, Progress',
      icon: Zap,
      count: 8,
      color: 'bg-orange-500',
    },
    {
      title: 'Data Display',
      description: 'Tables, Cards, Avatars',
      icon: Activity,
      count: 10,
      color: 'bg-pink-500',
    },
    {
      title: 'Navigation',
      description: 'Tabs, Breadcrumbs',
      icon: ArrowRight,
      count: 6,
      color: 'bg-cyan-500',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Component Integration',
      description: 'All components naturally work together with consistent patterns',
    },
    {
      icon: Sparkles,
      title: 'Real-world Examples',
      description: 'Complex workflows and multi-step user interactions',
    },
    {
      icon: Code2,
      title: 'Production Ready',
      description: 'TypeScript, accessibility, and performance optimized',
    },
    {
      icon: Users,
      title: 'Design System',
      description: 'Comprehensive documentation and usage guidelines',
    },
  ];

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
            <Sparkles className="h-4 w-4" />
            <span>shadcn/ui Design System</span>
            <Badge variant="secondary" className="text-xs">
              v1.0
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Beautiful Components
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built to Work Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of reusable components built with Radix UI and Tailwind CSS.
              Copy, paste, and customize to build your next project.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                toast.success('Welcome to our design system!', {
                  description: 'Explore the components and see how they work together.',
                });
              }}
            >
              <Component className="mr-2 h-4 w-4" />
              Explore Components
            </Button>
            <Button variant="outline" size="lg">
              <Code2 className="mr-2 h-4 w-4" />
              View Source
            </Button>
          </div>
        </div>

        {/* Live Demo Section */}
        <Card className="overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5" />
              Interactive Demo
            </CardTitle>
            <CardDescription>
              See our components in action with live interactions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Demo */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Progress Demo */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Design System Progress</span>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
              </div>
            </div>

            {/* Switch Demo */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium">Enable notifications</div>
                <div className="text-sm text-muted-foreground">
                  Get notified about component updates
                </div>
              </div>
              <Switch />
            </div>

            {/* Avatar Group Demo */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Team Members:</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Avatar className="border-2 border-background cursor-pointer">
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Team Member {i}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
                <Avatar className="border-2 border-background">
                  <AvatarFallback>+5</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Categories Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Component Categories</h2>
            <p className="text-muted-foreground mt-2">
              Organized into logical groups for easy discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.title}
                  className="group hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    toast.info(`Opening ${category.title}`, {
                      description: `${category.count} components available`,
                    });
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${category.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why This Design System?</h2>
            <p className="text-muted-foreground mt-2">
              Built with best practices and real-world usage in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Start Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
            <CardDescription>
              Get started with our component library in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="installation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
              </TabsList>
              <TabsContent value="installation" className="space-y-4 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    npx shadcn@latest init
                    <br />
                    npx shadcn@latest add button card input
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Install the CLI and add your first components
                </p>
              </TabsContent>
              <TabsContent value="usage" className="space-y-4 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    import &#123; Button &#125; from '@/components/ui/button'
                    <br />
                    <br />
                    &lt;Button&gt;Click me&lt;/Button&gt;
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Import and use components in your React application
                </p>
              </TabsContent>
              <TabsContent value="customization" className="space-y-4 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    // tailwind.config.js
                    <br />
                    theme: &#123;
                    <br />
                    &nbsp;&nbsp;extend: &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;colors: &#123; primary: '#your-color' &#125;
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &#125;
                  </code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Customize colors, spacing, and other design tokens
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start exploring our component library and see how easy it is to build beautiful,
              accessible interfaces with our integrated design system.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                toast.success('Let\'s get started!', {
                  description: 'Browse the component categories to find what you need.',
                  action: {
                    label: 'View All',
                    onClick: () => toast.info('Opening component library...'),
                  },
                });
              }}
            >
              <Heart className="mr-2 h-4 w-4" />
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Star className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  );
};

const meta: Meta<typeof WelcomeDisplay> = {
  title: '0-Welcome/Design System',
  component: WelcomeDisplay,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Welcome to our comprehensive shadcn/ui Design System

This Storybook showcases a complete collection of reusable components built with:
- **shadcn/ui** - Beautiful component primitives
- **Radix UI** - Accessible, unstyled UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## What Makes This Special?

Our design system goes beyond individual components to show **real integration patterns**. Every component naturally works with others, creating cohesive user experiences.

## Component Categories

- **🎨 Foundations** - Colors, typography, spacing, and design tokens
- **🧱 Primitives** - Basic building blocks like buttons, inputs, and labels
- **📝 Form Components** - Complete form patterns with validation
- **💬 Feedback** - Alerts, toasts, progress indicators, and badges
- **📊 Data Display** - Tables, cards, avatars, and data visualization
- **🧭 Navigation** - Tabs, breadcrumbs, menus, and navigation patterns
- **🎭 Overlays** - Dialogs, popovers, tooltips, and modals

## Key Features

- ✅ **Component Integration** - All components work together seamlessly
- ✅ **Real-world Examples** - Complex workflows and multi-step interactions
- ✅ **Production Ready** - TypeScript, accessibility, and performance optimized
- ✅ **Comprehensive Documentation** - Every pattern explained and demonstrated

Start exploring to see how our components create beautiful, functional interfaces!
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  name: '🏠 Welcome & Overview',
};
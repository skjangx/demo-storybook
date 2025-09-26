import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Search,
  Filter,
  Star,
  Heart,
  MessageCircle,
  Share2,
  User,
  Calendar,
  Clock,
  MapPin,
  Tag,
  File,
  Folder,
  Image,
  Video,
  Music,
  Code,
  Archive,
  Download,
  Eye,
  ChevronRight,
  Activity,
  TrendingUp,
  Users,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  AlertCircle,
  XCircle,
  Info,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof ScrollArea> = {
  title: '8-Layout/Scroll Area',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Scroll Area Component

A customizable scroll area component that provides consistent scrolling behavior across different platforms. Built on top of Radix UI Scroll Area primitives.

## Features

- **Cross-platform Consistency**: Uniform scrolling behavior across all browsers and OS
- **Customizable Scrollbars**: Styled scrollbars that match your design system
- **Horizontal and Vertical**: Support for both scrolling directions
- **Accessible**: Full keyboard navigation and screen reader support
- **Performance**: Optimized for large lists and content areas
- **Responsive**: Adapts to container size changes

## Usage

Scroll areas are perfect for:
- Long lists and data tables
- Content areas with overflow
- Horizontal galleries and carousels
- Chat messages and feeds
- File explorers and trees
- Code editors and text areas
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[600px] w-full max-w-6xl p-8">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate sample data
const tags = Array.from({ length: 50 }, (_, i) => `v1.2.0-beta.${50 - i}`);

const sampleMessages = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  user: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'][i % 5],
  message: [
    'Hey everyone! How\'s it going?',
    'Just finished the new feature implementation.',
    'The weather is beautiful today!',
    'Anyone up for a code review?',
    'Coffee break time! ☕',
    'Great work on the presentation!',
    'Let\'s schedule a meeting for next week.',
    'The deployment went smoothly.',
    'Thanks for the feedback!',
    'Looking forward to the weekend.',
  ][i % 10],
  time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
  avatar: ['A', 'B', 'C', 'D', 'E'][i % 5],
}));

const sampleFiles = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: [
    'package.json', 'README.md', 'index.html', 'styles.css', 'script.js',
    'config.yaml', 'docker-compose.yml', 'migration.sql', 'component.tsx',
    'utils.ts', 'types.d.ts', 'test.spec.js', 'build.sh', 'deploy.md',
    'requirements.txt', 'Dockerfile', 'nginx.conf', 'database.db',
    'backup.tar.gz', 'logs.txt', 'certificates.pem', 'keys.env',
    'analytics.json', 'manifest.xml', 'sitemap.xml'
  ][i],
  type: [
    'JSON', 'Markdown', 'HTML', 'CSS', 'JavaScript',
    'YAML', 'Docker', 'SQL', 'TypeScript',
    'TypeScript', 'TypeScript', 'JavaScript', 'Shell', 'Markdown',
    'Python', 'Docker', 'Config', 'Database',
    'Archive', 'Text', 'Certificate', 'Environment',
    'JSON', 'XML', 'XML'
  ][i],
  size: `${Math.floor(Math.random() * 1000) + 1}KB`,
  modified: `${Math.floor(Math.random() * 30) + 1} days ago`,
  icon: [File, File, Code, Code, Code, File, Package, File, Code, Code, Code, Code, File, File, File, Package, File, Archive, Archive, File, File, File, File, File, File][i],
}));

// Basic Scroll Area
export const Default: Story = {
  render: () => (
    <div className="flex justify-center">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm py-1 cursor-pointer hover:text-blue-600 transition-colors">
                {tag}
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

// Chat Messages
export const ChatMessages: Story = {
  render: () => (
    <div className="flex justify-center">
      <Card className="w-80">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Team Chat</CardTitle>
          <CardDescription>Latest messages from your team</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-96 px-4">
            <div className="space-y-4">
              {sampleMessages.map((msg) => (
                <div key={msg.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{msg.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// File Explorer
export const FileExplorer: Story = {
  render: () => (
    <div className="flex justify-center">
      <Card className="w-96">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Project Files</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>Browse your project structure</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80">
            <div className="p-4 space-y-2">
              {sampleFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => toast.success(`Opening ${file.name}`)}
                >
                  <file.icon className="h-4 w-4 text-gray-500" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium truncate">{file.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {file.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{file.size}</span>
                      <span>{file.modified}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  ),
};

// Horizontal Scroll Gallery
export const HorizontalGallery: Story = {
  render: () => {
    const artworks = [
      { artist: 'Nature Collection', color: 'from-green-400 to-blue-500', emoji: '🌿' },
      { artist: 'Urban Landscapes', color: 'from-gray-400 to-gray-600', emoji: '🏙️' },
      { artist: 'Abstract Art', color: 'from-purple-400 to-pink-500', emoji: '🎨' },
      { artist: 'Ocean Views', color: 'from-blue-400 to-cyan-500', emoji: '🌊' },
      { artist: 'Mountain Peaks', color: 'from-orange-400 to-red-500', emoji: '⛰️' },
      { artist: 'Desert Scenes', color: 'from-yellow-400 to-orange-500', emoji: '🏜️' },
      { artist: 'Forest Paths', color: 'from-green-500 to-teal-600', emoji: '🌲' },
      { artist: 'City Nights', color: 'from-indigo-500 to-purple-600', emoji: '🌃' },
    ];

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Art Gallery</h3>
          <p className="text-sm text-muted-foreground">Scroll horizontally to explore</p>
        </div>
        <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {artworks.map((artwork, index) => (
              <figure key={index} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <div className={`aspect-[3/4] w-48 bg-gradient-to-br ${artwork.color} flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform`}>
                    {artwork.emoji}
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    );
  },
};

// Dashboard Metrics
export const DashboardMetrics: Story = {
  render: () => {
    const metrics = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: [
        'Total Revenue', 'Active Users', 'Conversion Rate', 'Bounce Rate',
        'Page Views', 'Session Duration', 'New Signups', 'Churn Rate',
        'Customer Satisfaction', 'Server Uptime', 'API Response Time', 'Error Rate',
        'Monthly Growth', 'Support Tickets', 'Feature Adoption', 'Mobile Usage',
        'Email Open Rate', 'Social Media Reach', 'Content Engagement', 'Sales Pipeline'
      ][i],
      value: Math.floor(Math.random() * 10000),
      change: Math.floor(Math.random() * 40) - 20,
      icon: [
        TrendingUp, Users, Activity, Activity, Eye, Clock, User, TrendingUp,
        Star, Activity, Activity, AlertCircle, TrendingUp, MessageCircle, CheckCircle,
        ShoppingCart, MessageCircle, Share2, Heart, Package
      ][i],
    }));

    return (
      <div className="flex justify-center">
        <Card className="w-80">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
            <CardDescription>Key performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96 px-4">
              <div className="space-y-3">
                {metrics.map((metric) => (
                  <Card key={metric.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <metric.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{metric.title}</p>
                          <p className="text-2xl font-bold">{metric.value.toLocaleString()}</p>
                        </div>
                      </div>
                      <Badge
                        variant={metric.change > 0 ? 'default' : 'secondary'}
                        className={metric.change > 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}
                      >
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Code Editor
export const CodeEditor: Story = {
  render: () => {
    const codeLines = [
      'import React from \'react\';',
      'import { useState, useEffect } from \'react\';',
      '',
      'interface Props {',
      '  title: string;',
      '  description?: string;',
      '  onClick: () => void;',
      '}',
      '',
      'export const MyComponent: React.FC<Props> = ({',
      '  title,',
      '  description,',
      '  onClick',
      '}) => {',
      '  const [isLoading, setIsLoading] = useState(false);',
      '  const [data, setData] = useState<string[]>([]);',
      '',
      '  useEffect(() => {',
      '    fetchData();',
      '  }, []);',
      '',
      '  const fetchData = async () => {',
      '    setIsLoading(true);',
      '    try {',
      '      const response = await fetch(\'/api/data\');',
      '      const result = await response.json();',
      '      setData(result);',
      '    } catch (error) {',
      '      console.error(\'Error fetching data:\', error);',
      '    } finally {',
      '      setIsLoading(false);',
      '    }',
      '  };',
      '',
      '  if (isLoading) {',
      '    return <div>Loading...</div>;',
      '  }',
      '',
      '  return (',
      '    <div className="component-wrapper">',
      '      <h2>{title}</h2>',
      '      {description && <p>{description}</p>}',
      '      <button onClick={onClick}>',
      '        Click me',
      '      </button>',
      '      <ul>',
      '        {data.map((item, index) => (',
      '          <li key={index}>{item}</li>',
      '        ))}',
      '      </ul>',
      '    </div>',
      '  );',
      '};',
    ];

    return (
      <div className="flex justify-center">
        <Card className="w-[500px]">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Code Editor</CardTitle>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80">
              <div className="p-4 bg-gray-900 text-gray-100 font-mono text-sm">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 w-8 text-right mr-4 select-none">
                      {line.trim() ? index + 1 : ''}
                    </span>
                    <span className="whitespace-pre">{line || ' '}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Activity Feed
export const ActivityFeed: Story = {
  render: () => {
    const activities = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      type: ['commit', 'issue', 'pr', 'deploy', 'comment'][i % 5],
      user: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'][i % 5],
      action: [
        'pushed 3 commits to main branch',
        'opened issue #123: Bug in login form',
        'created pull request #456: Add dark mode',
        'deployed version 1.2.3 to production',
        'commented on issue #789: Great suggestion!'
      ][i % 5],
      time: `${Math.floor(Math.random() * 24)} hours ago`,
      icon: [Code, AlertCircle, CheckCircle, Truck, MessageCircle][i % 5],
      color: ['text-green-600', 'text-red-600', 'text-blue-600', 'text-purple-600', 'text-orange-600'][i % 5],
    }));

    return (
      <div className="flex justify-center">
        <Card className="w-96">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Activity Feed</CardTitle>
            <CardDescription>Recent team activities</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80 px-4">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                      <activity.icon className="h-3 w-3" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Dual Scroll Areas
export const DualScrollAreas: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="flex gap-4">
        <Card className="w-64">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-60 px-4">
              <div className="space-y-2">
                {[
                  'Technology', 'Design', 'Business', 'Marketing', 'Development',
                  'Photography', 'Writing', 'Music', 'Art', 'Science',
                  'Health', 'Travel', 'Food', 'Sports', 'Education'
                ].map((category, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <span className="text-sm">{category}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="w-80">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Items</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-60 px-4">
              <div className="space-y-3">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Item {i + 1}</h4>
                      <p className="text-xs text-muted-foreground">Description for item {i + 1}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};
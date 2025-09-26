import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Calendar,
  MapPin,
  Link,
  ExternalLink,
  User,
  Users,
  Star,
  GitFork,
  Eye,
  Download,
  Heart,
  MessageCircle,
  Share2,
  Building,
  Mail,
  Phone,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Activity,
  BookOpen,
  Code,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof HoverCard> = {
  title: '7-Overlay/Hover Card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Hover Card Component

A hover card component that displays rich information when hovering over a trigger element. Built on top of Radix UI Hover Card primitives.

## Features

- **Hover Activation**: Shows content on mouse hover with customizable delay
- **Rich Content**: Support for complex layouts with images, text, and actions
- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible positioning and styling options
- **Touch Friendly**: Alternative activation methods for touch devices

## Usage

Hover cards are perfect for:
- User profile previews
- Product information
- Link previews
- Contextual help
- Additional details without navigation
- Social media cards
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px] w-full max-w-4xl p-8">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Hover Card
export const Default: Story = {
  render: () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

// User Profile Card
export const UserProfile: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Hover over the user mention below
        </p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-600">@sarah_dev</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Sarah Johnson</h4>
                    <Badge variant="secondary" className="text-xs">Pro</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">@sarah_dev</p>
                  <p className="text-sm">
                    Full-stack developer passionate about React and TypeScript.
                    Building the future of web development.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold">127</div>
                  <div className="text-xs text-muted-foreground">Following</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">2.3k</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">89</div>
                  <div className="text-xs text-muted-foreground">Repos</div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <Link className="h-3 w-3" />
                  sarah.dev
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Joined 2019
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

// Repository Card
export const RepositoryInfo: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Hover over the repository link
        </p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-600">
              <Github className="h-4 w-4 mr-1" />
              shadcn/ui
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-96">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">shadcn/ui</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautifully designed components that you can copy and paste into your apps.
                    Accessible. Customizable. Open Source.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  TypeScript
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  45.2k
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  3.1k
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  234
                </div>
              </div>

              <Separator />

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Star className="h-3 w-3 mr-1" />
                  Star
                </Button>
                <Button size="sm" variant="outline">
                  <GitFork className="h-3 w-3 mr-1" />
                  Fork
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-3 w-3 mr-1" />
                  Clone
                </Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

// Product Card
export const ProductPreview: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Hover over the product name
        </p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-600 text-lg">
              MacBook Pro 16"
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-96">
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-4xl">💻</div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">MacBook Pro 16"</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold">$2,399</div>
                  <Badge variant="secondary">In Stock</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-muted-foreground">(2.1k)</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

// Company Card
export const CompanyInfo: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Hover over the company name
        </p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-600">
              <Building className="h-4 w-4 mr-1" />
              Vercel Inc.
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold">V</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Vercel</h4>
                  <p className="text-xs text-muted-foreground">Cloud Platform</p>
                  <p className="text-sm mt-1">
                    Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Founded</div>
                  <div>2015</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Employees</div>
                  <div>500+</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Location</div>
                  <div>San Francisco, CA</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Industry</div>
                  <div>Cloud Computing</div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Globe className="h-3 w-3 mr-1" />
                    Website
                  </Button>
                  <Button size="sm" variant="outline">
                    <Users className="h-3 w-3 mr-1" />
                    Careers
                  </Button>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost">
                    <Twitter className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Linkedin className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

// Stats Card
export const StatsPreview: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Hover over the metrics below
        </p>
        <div className="flex gap-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex flex-col items-center p-4 h-auto">
                <div className="text-2xl font-bold">2.4M</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <h4 className="text-sm font-semibold">Total Users</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Users</span>
                    <span className="font-medium">1.8M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New This Month</span>
                    <span className="font-medium text-green-600">+124K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth Rate</span>
                    <span className="font-medium text-green-600">+12.4%</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">75% of target reached</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex flex-col items-center p-4 h-auto">
                <div className="text-2xl font-bold">$127K</div>
                <div className="text-sm text-muted-foreground">Revenue</div>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-semibold">Monthly Revenue</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Last Month</span>
                    <span className="font-medium">$114K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth</span>
                    <span className="font-medium text-green-600">+$13K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth Rate</span>
                    <span className="font-medium text-green-600">+11.4%</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-green-700 bg-green-100">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Above Target
                  </Badge>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  ),
};

// Help Tooltip
export const HelpTooltip: Story = {
  render: () => (
    <div className="flex justify-center">
      <Card className="w-96 p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Account Settings
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="sm" className="h-4 w-4 p-0 rounded-full">
                  ?
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Account Settings Help</h4>
                  <p className="text-sm text-muted-foreground">
                    Configure your account preferences, privacy settings, and notification options.
                    Changes are automatically saved.
                  </p>
                  <div className="pt-2">
                    <Button size="sm" variant="outline">
                      <BookOpen className="h-3 w-3 mr-1" />
                      View Documentation
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardTitle>
          <CardDescription>
            Manage your account preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Email Notifications</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0 rounded-full text-xs">
                    i
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive email updates about your account activity, security alerts, and feature announcements.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <Badge variant="secondary">Enabled</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Two-Factor Authentication</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0 rounded-full text-xs">
                    i
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-green-600" />
                      <h4 className="text-sm font-semibold">Two-Factor Authentication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account with SMS or authenticator app verification.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <Badge variant="outline">Not Set Up</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Multiple Triggers
export const MultipleTriggers: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="text-center space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Team Members</h3>
          <div className="flex gap-4 justify-center">
            {[
              { name: 'Alex Smith', role: 'Frontend Dev', avatar: 'AS', initials: 'AS' },
              { name: 'Emma Wilson', role: 'Designer', avatar: 'EW', initials: 'EW' },
              { name: 'Mike Chen', role: 'Backend Dev', avatar: 'MC', initials: 'MC' },
            ].map((member, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" className="h-auto p-2">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="text-sm font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
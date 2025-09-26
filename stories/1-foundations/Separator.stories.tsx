import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  Settings,
  Bell,
  CreditCard,
  Shield,
  Globe,
  Download,
  Upload,
  Share,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Heart,
  MessageSquare,
  ThumbsUp,
  Eye,
  Bookmark,
  Tag,
  Folder,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Package,
  Truck,
  BarChart3,
  PieChart,
  Activity,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Separator> = {
  title: '1-Foundations/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Separator Component

Divider elements for organizing content sections and improving visual hierarchy.

## Features

- **Horizontal & Vertical** - Flexible orientation for different layout needs
- **Content Organization** - Clear section boundaries in cards, forms, and lists
- **Visual Hierarchy** - Subtle separation without overwhelming the design
- **Layout Structure** - Professional spacing in complex interfaces
- **Responsive Design** - Adapts to different screen sizes and containers

## Integration Patterns

- **Card Sections** - Organize related content within cards
- **Form Groups** - Separate form sections logically
- **Navigation Menus** - Divide menu groups and actions
- **Content Lists** - Separate different types of information
- **Sidebar Layouts** - Organize vertical navigation and tools
- **Dashboard Sections** - Create clear boundaries between widgets
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="w-full max-w-4xl">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const UserProfileCard: Story = {
  render: () => (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto">
          <Avatar className="h-16 w-16 mx-auto mb-4">
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>Product Manager</CardDescription>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>john@example.com</span>
          </div>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <Separator />

        <div className="flex items-center justify-center gap-4 pt-2">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const SettingsPanel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [privacy, setPrivacy] = useState(true);

    return (
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Account Settings
          </CardTitle>
          <CardDescription>
            Manage your account preferences and privacy settings
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notifications" className="text-sm">
                    Push Notifications
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Receive notifications about your account activity
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-updates" className="text-sm">
                    Email Updates
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Get weekly updates via email
                  </p>
                </div>
                <Switch
                  id="email-updates"
                  checked={emailUpdates}
                  onCheckedChange={setEmailUpdates}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy & Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="privacy" className="text-sm">
                    Profile Visibility
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Make your profile visible to other users
                  </p>
                </div>
                <Switch
                  id="privacy"
                  checked={privacy}
                  onCheckedChange={setPrivacy}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Data Export</Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Download a copy of your data
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Billing
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Current Plan</span>
                <Badge>Pro Plan</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Next Billing</span>
                <span className="text-sm">Dec 15, 2024</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Manage Subscription
              </Button>
            </div>
          </div>

          <Separator />

          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ArticleContent: Story = {
  render: () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-4">
          <div>
            <Badge variant="outline" className="mb-2">Technology</Badge>
            <CardTitle className="text-2xl">The Future of Web Development</CardTitle>
            <CardDescription className="text-base">
              Exploring the latest trends and technologies shaping modern web development
            </CardDescription>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">SA</AvatarFallback>
              </Avatar>
              <span>Sarah Anderson</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Dec 15, 2024</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="p-6 space-y-6">
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            The landscape of web development continues to evolve at a rapid pace, with new frameworks,
            tools, and methodologies emerging regularly. As we look toward the future, several key trends
            are shaping how we build and deploy web applications.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-3">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>Modern frameworks are becoming more performant and developer-friendly</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>AI-powered development tools are revolutionizing the coding experience</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>Edge computing is enabling faster, more responsive web applications</span>
            </li>
          </ul>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  42
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like this article</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  8
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View comments</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save for later</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Button variant="outline" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium mb-3">Related Articles</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-medium">Getting Started with React 18</h5>
                <p className="text-xs text-muted-foreground">Learn the new features and improvements</p>
              </div>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-medium">TypeScript Best Practices</h5>
                <p className="text-xs text-muted-foreground">Write better, type-safe code</p>
              </div>
              <Badge variant="outline" className="text-xs">7 min</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const DashboardSidebar: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const navigationSections = [
      {
        title: 'Overview',
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
          { id: 'analytics', label: 'Analytics', icon: PieChart, badge: 'New' },
          { id: 'reports', label: 'Reports', icon: FileText, badge: null },
        ],
      },
      {
        title: 'Management',
        items: [
          { id: 'users', label: 'Users', icon: User, badge: '12' },
          { id: 'products', label: 'Products', icon: Package, badge: null },
          { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '3' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { id: 'media', label: 'Media Library', icon: Image, badge: null },
          { id: 'files', label: 'File Manager', icon: Folder, badge: null },
          { id: 'settings', label: 'Settings', icon: Settings, badge: null },
        ],
      },
    ];

    return (
      <Card className="max-w-64 h-96">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <div>
              <CardTitle className="text-sm">Admin Panel</CardTitle>
              <CardDescription className="text-xs">Dashboard v2.1</CardDescription>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-4 space-y-4">
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveSection(item.id)}
                    >
                      <IconComponent className="mr-2 h-4 w-4" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge variant="outline" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </div>

              {sectionIndex < navigationSections.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}

          <Separator />

          <div className="pt-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <Badge variant="destructive" className="ml-auto text-xs">2</Badge>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ProductCard: Story = {
  render: () => (
    <Card className="max-w-sm mx-auto">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
          <Package className="h-16 w-16 text-muted-foreground" />
        </div>

        <div className="p-4 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">Electronics</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">4.8 (124)</span>
              </div>
            </div>

            <h3 className="font-semibold text-lg">Wireless Headphones Pro</h3>
            <p className="text-sm text-muted-foreground">
              Premium noise-cancelling headphones with 40-hour battery life
            </p>

            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-xl font-bold">$299.99</span>
              <span className="text-sm text-muted-foreground line-through">$399.99</span>
              <Badge variant="destructive" className="text-xs">25% OFF</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-2">Key Features</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                Active Noise Cancellation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                40-hour Battery Life
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                Premium Leather Cushions
              </li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <div className="flex items-center gap-1">
                <Truck className="h-3 w-3" />
                <span>Free 2-day delivery</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Stock</span>
              <Badge variant="default" className="text-xs">In Stock</Badge>
            </div>
          </div>

          <Separator />

          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to wishlist</p>
              </TooltipContent>
            </Tooltip>

            <Button size="sm" className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const CommentThread: Story = {
  render: () => {
    const comments = [
      {
        id: 1,
        author: 'Sarah Chen',
        initials: 'SC',
        content: 'This is exactly what I was looking for! The integration patterns are really well thought out.',
        timestamp: '2 hours ago',
        likes: 12,
        replies: [
          {
            id: 2,
            author: 'Mike Johnson',
            initials: 'MJ',
            content: 'Totally agree! The consistency across components is impressive.',
            timestamp: '1 hour ago',
            likes: 5,
          },
        ],
      },
      {
        id: 3,
        author: 'Alex Rodriguez',
        initials: 'AR',
        content: 'Great work on the accessibility features. The keyboard navigation works perfectly.',
        timestamp: '4 hours ago',
        likes: 8,
        replies: [],
      },
    ];

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comments
            <Badge variant="outline">{comments.length + comments[0].replies.length}</Badge>
          </CardTitle>
          <CardDescription>
            Join the discussion about this component library
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="p-6">
          <div className="space-y-6">
            {comments.map((comment, commentIndex) => (
              <div key={comment.id}>
                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="text-sm">{comment.initials}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                    </div>

                    <p className="text-sm leading-relaxed">{comment.content}</p>

                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {comment.likes}
                      </Button>

                      <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                        Reply
                      </Button>

                      <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                        <Share className="mr-1 h-3 w-3" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>

                {comment.replies.length > 0 && (
                  <div className="ml-12 mt-4 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-7 w-7 shrink-0">
                          <AvatarFallback className="text-xs">{reply.initials}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{reply.author}</span>
                            <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                          </div>

                          <p className="text-sm leading-relaxed">{reply.content}</p>

                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                              <ThumbsUp className="mr-1 h-3 w-3" />
                              {reply.likes}
                            </Button>

                            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {commentIndex < comments.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium text-sm">Add a comment</h4>
              <div className="flex gap-4">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="text-sm">YU</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Share your thoughts..."
                    className="min-h-[80px] resize-none"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Image className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add image</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Tag className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add mention</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                      <Button size="sm">
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const PricingTiers: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-muted-foreground">
          Select the perfect plan for your needs. Upgrade or downgrade at any time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: 'Starter',
            price: '$9',
            period: '/month',
            description: 'Perfect for individuals and small projects',
            features: [
              '5 Projects',
              '10GB Storage',
              'Basic Support',
              'Standard Templates',
              'Mobile Apps',
            ],
            popular: false,
          },
          {
            name: 'Professional',
            price: '$29',
            period: '/month',
            description: 'Best for growing businesses and teams',
            features: [
              'Unlimited Projects',
              '100GB Storage',
              'Priority Support',
              'Premium Templates',
              'Advanced Analytics',
              'Team Collaboration',
              'Custom Branding',
            ],
            popular: true,
          },
          {
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            description: 'For large organizations with advanced needs',
            features: [
              'Everything in Pro',
              '1TB Storage',
              '24/7 Dedicated Support',
              'White-label Solution',
              'Advanced Security',
              'API Access',
              'Custom Integrations',
              'SLA Guarantee',
            ],
            popular: false,
          },
        ].map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="px-3 py-1">Most Popular</Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="flex items-baseline justify-center gap-1 mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="p-6">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
};

export const OrderSummary: Story = {
  render: () => (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Order Summary
        </CardTitle>
        <CardDescription>
          Review your order before checkout
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
              <Package className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Wireless Headphones</h4>
              <p className="text-xs text-muted-foreground">Midnight Black</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm">Qty: 1</span>
                <Badge variant="outline" className="text-xs">In Stock</Badge>
              </div>
            </div>
            <span className="font-medium">$299.99</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
              <Package className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Phone Case</h4>
              <p className="text-xs text-muted-foreground">Clear Protective</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm">Qty: 2</span>
                <Badge variant="outline" className="text-xs">In Stock</Badge>
              </div>
            </div>
            <span className="font-medium">$39.98</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$339.97</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$27.20</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Discount (SAVE10)</span>
            <span>-$33.40</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$333.77</span>
        </div>

        <Separator />

        <div className="space-y-3">
          <div>
            <Label className="text-sm font-medium">Delivery Address</Label>
            <p className="text-sm text-muted-foreground mt-1">
              123 Main Street<br />
              San Francisco, CA 94102
            </p>
            <Button variant="link" size="sm" className="p-0 h-auto text-xs">
              Change address
            </Button>
          </div>

          <div>
            <Label className="text-sm font-medium">Payment Method</Label>
            <div className="flex items-center gap-2 mt-1">
              <CreditCard className="h-4 w-4" />
              <span className="text-sm">•••• •••• •••• 4242</span>
              <Button variant="link" size="sm" className="p-0 h-auto text-xs ml-auto">
                Change
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <Button className="w-full">
          Place Order
        </Button>
      </CardContent>
    </Card>
  ),
};
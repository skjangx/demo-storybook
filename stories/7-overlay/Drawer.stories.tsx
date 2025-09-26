import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Menu,
  Settings,
  User,
  Bell,
  CreditCard,
  Share,
  Download,
  Filter,
  Search,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  MessageCircle,
  ShoppingCart as ShoppingCartIcon,
  Minus,
  Plus,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
} from 'lucide-react';
import { useState, useCallback } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart as RechartsPieChart, Cell } from 'recharts';

const meta: Meta<typeof Drawer> = {
  title: '7-Overlay/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Drawer Component

A drawer component built on top of Vaul, providing a slide-up mobile-friendly dialog experience.

## Features

- **Mobile Optimized**: Perfect for mobile interfaces with natural swipe gestures
- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible styling with Tailwind CSS
- **Touch Friendly**: Support for drag-to-close gestures
- **Responsive**: Works well on desktop and mobile devices

## Usage

Drawers are ideal for:
- Mobile navigation menus
- Settings panels
- Action sheets
- Form inputs
- Content previews
- Filter interfaces
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[500px] w-full max-w-4xl">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for charts
const goalData = [
  { name: 'Mon', goal: 400 },
  { name: 'Tue', goal: 300 },
  { name: 'Wed', goal: 200 },
  { name: 'Thu', goal: 300 },
  { name: 'Fri', goal: 200 },
  { name: 'Sat', goal: 278 },
  { name: 'Sun', goal: 189 },
];

const expenseData = [
  { name: 'Food', value: 400, color: '#8884d8' },
  { name: 'Transport', value: 300, color: '#82ca9d' },
  { name: 'Shopping', value: 200, color: '#ffc658' },
  { name: 'Entertainment', value: 150, color: '#ff7c7c' },
];

// Basic Drawer
export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Menu className="h-4 w-4 mr-2" />
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a simple drawer component that slides up from the bottom.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground">
              Drawers are perfect for mobile interfaces and provide a natural way to
              present additional content or actions to users.
            </p>
          </div>
          <DrawerFooter>
            <Button onClick={() => toast.success("Action completed!")}>
              Continue
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// Goal Setting Drawer with Chart
export const GoalSetting: Story = {
  render: () => {
    const [goal, setGoal] = useState(350);

    const adjustGoal = useCallback((adjustment: number) => {
      setGoal(prev => Math.max(100, Math.min(500, prev + adjustment)));
    }, []);

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <Activity className="h-4 w-4 mr-2" />
            Set Daily Goal
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => adjustGoal(-10)}
                  disabled={goal <= 100}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => adjustGoal(10)}
                  disabled={goal >= 500}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={goalData}>
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar
                      dataKey="goal"
                      fill="hsl(var(--primary))"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => toast.success(`Daily goal set to ${goal} calories!`)}>
                Save Goal
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

// User Profile Drawer
export const UserProfile: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <DrawerTitle>John Doe</DrawerTitle>
                <DrawerDescription>john.doe@example.com</DrawerDescription>
              </div>
            </div>
          </DrawerHeader>
          <div className="px-4 pb-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Member since</span>
                <span className="text-sm text-muted-foreground">Jan 2024</span>
              </div>
              <Separator />
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </Button>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button
              variant="outline"
              onClick={() => toast.success("Signed out successfully")}
            >
              Sign Out
            </Button>
            <DrawerClose asChild>
              <Button variant="ghost">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// Settings Panel
export const SettingsPanel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Settings</DrawerTitle>
              <DrawerDescription>
                Customize your app experience
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle dark theme appearance
                    </p>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto Save</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save your work
                    </p>
                  </div>
                  <Switch
                    checked={autoSave}
                    onCheckedChange={setAutoSave}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => toast.success("Settings saved successfully!")}>
                Save Changes
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

// Share Options Drawer
export const ShareOptions: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Share this item</DrawerTitle>
            <DrawerDescription>
              Choose how you'd like to share this content
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
                onClick={() => toast.success("Copied to clipboard!")}
              >
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Share className="h-4 w-4 text-blue-600" />
                </div>
                Copy Link
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
                onClick={() => toast.success("Opening email client...")}
              >
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                Email
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
                onClick={() => toast.success("Downloading...")}
              >
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Download className="h-4 w-4 text-purple-600" />
                </div>
                Download
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
                onClick={() => toast.success("Added to favorites!")}
              >
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-red-600" />
                </div>
                Save
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// Contact Form Drawer
export const ContactForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const handleSubmit = () => {
      if (formData.name && formData.email && formData.message) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Please fill in all required fields");
      }
    };

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Us
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Get in Touch</DrawerTitle>
              <DrawerDescription>
                Send us a message and we'll get back to you
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us more..."
                  rows={4}
                />
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={handleSubmit}>
                Send Message
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

// Expense Breakdown with Pie Chart
export const ExpenseBreakdown: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <PieChart className="h-4 w-4 mr-2" />
          View Expenses
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Monthly Expenses</DrawerTitle>
            <DrawerDescription>
              Breakdown of your spending this month
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Tooltip />
                  <RechartsPieChart data={expenseData} cx="50%" cy="50%" outerRadius={80}>
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {expenseData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ${item.value}
                  </span>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>${expenseData.reduce((sum, item) => sum + item.value, 0)}</span>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => toast.success("Report generated successfully!")}>
              Generate Report
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

// Shopping Cart Drawer
export const ShoppingCartDrawer: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1 },
      { id: 2, name: 'Phone Case', price: 24.99, quantity: 2 },
      { id: 3, name: 'Charging Cable', price: 19.99, quantity: 1 },
    ]);

    const updateQuantity = (id: number, change: number) => {
      setItems(prev => prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0));
    };

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            <ShoppingCartIcon className="h-4 w-4 mr-2" />
            Cart ({items.length})
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Shopping Cart</DrawerTitle>
              <DrawerDescription>
                {items.length} items in your cart
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => toast.success("Checkout process started!")}>
                Checkout
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Continue Shopping</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

// Filter Options Drawer
export const FilterOptions: Story = {
  render: () => {
    const [filters, setFilters] = useState({
      category: '',
      priceRange: '',
      rating: '',
      inStock: false,
    });

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Filter Products</DrawerTitle>
              <DrawerDescription>
                Narrow down your search results
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-6">
              <div className="space-y-3">
                <Label>Category</Label>
                <Select
                  value={filters.category}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Price Range</Label>
                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-25">$0 - $25</SelectItem>
                    <SelectItem value="25-50">$25 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100+">$100+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Minimum Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <Button
                      key={rating}
                      variant={filters.rating === rating.toString() ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        rating: prev.rating === rating.toString() ? '' : rating.toString()
                      }))}
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {rating}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>In Stock Only</Label>
                  <p className="text-sm text-muted-foreground">
                    Show only available items
                  </p>
                </div>
                <Switch
                  checked={filters.inStock}
                  onCheckedChange={(checked) => setFilters(prev => ({ ...prev, inStock: checked }))}
                />
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => toast.success("Filters applied successfully!")}>
                Apply Filters
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setFilters({ category: '', priceRange: '', rating: '', inStock: false });
                  toast.success("Filters cleared");
                }}
              >
                Clear All
              </Button>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};
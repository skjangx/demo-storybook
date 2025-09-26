import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import {
  Menu,
  X,
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Package,
  ShoppingCart as ShoppingCartIcon,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Filter,
  Search,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Tag,
  Users,
  FileText,
  Image,
  Video,
  Music,
  Archive,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const meta: Meta<typeof Sheet> = {
  title: '7-Overlay/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Sheet Component

Side panel overlays for forms, navigation, settings, and detailed content display.

## Features

- **Multiple Positions** - Left, right, top, and bottom panel positioning
- **Form Integration** - Complete form patterns with validation and submission
- **Navigation Menus** - Mobile-friendly navigation with nested sections
- **Content Display** - Product details, user profiles, and data panels
- **Settings Panels** - Configuration interfaces with organized sections
- **Shopping Features** - Cart sidebars and product quick-view panels

## Integration Patterns

- **Card Structure** - Organized content with headers and sections
- **Badge Status** - Visual indicators for states and categories
- **Avatar Components** - User profiles and team member displays
- **Tooltip Guidance** - Helpful information for complex actions
- **Table Data** - Structured information display within panels
- **Switch Controls** - Toggle settings and preferences
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex items-center justify-center min-h-[400px]">
          <Story />
        </div>
        <Toaster />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Form</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="john@example.com"
              type="email"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <Button
            type="submit"
            onClick={() => {
              toast.success('Profile updated successfully!');
            }}
          >
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const MobileNavigation: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const navigationItems = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Settings,
        badge: null,
      },
      {
        id: 'users',
        label: 'Users',
        icon: Users,
        badge: '12',
      },
      {
        id: 'products',
        label: 'Products',
        icon: Package,
        badge: 'New',
      },
      {
        id: 'orders',
        label: 'Orders',
        icon: ShoppingCartIcon,
        badge: '3',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        badge: null,
      },
    ];

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              Admin Panel
            </SheetTitle>
            <SheetDescription>
              Navigate through the administration interface
            </SheetDescription>
          </SheetHeader>

          <div className="py-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveSection(item.id);
                    toast.info(`Navigated to ${item.label}`);
                  }}
                >
                  <IconComponent className="mr-3 h-4 w-4" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge
                      variant={isActive ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-3 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-3 h-4 w-4" />
              Notifications
              <Badge variant="destructive" className="ml-auto text-xs">
                2
              </Badge>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const UserProfile: Story = {
  render: () => {
    const [isEditing, setIsEditing] = useState(false);

    const userInfo = {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'Product Manager',
      department: 'Engineering',
      location: 'San Francisco, CA',
      phone: '+1 (555) 123-4567',
      joinDate: 'January 2022',
      projects: ['Project Alpha', 'Dashboard Redesign', 'API Integration'],
      skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis'],
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </SheetTrigger>
        <SheetContent className="w-96">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg">SJ</AvatarFallback>
                </Avatar>
                <div>
                  <SheetTitle>{userInfo.name}</SheetTitle>
                  <SheetDescription>{userInfo.role}</SheetDescription>
                </div>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit profile</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </SheetHeader>

          <div className="py-6 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userInfo.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Work Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Department</span>
                  <Badge variant="outline">{userInfo.department}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Join Date</span>
                  <span className="text-sm">{userInfo.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Current Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {userInfo.projects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{project}</span>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userInfo.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {isEditing && (
            <SheetFooter>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setIsEditing(false);
                  toast.success('Profile updated successfully!');
                }}
              >
                Save Changes
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    );
  },
};

export const ShoppingCart: Story = {
  render: () => {
    const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: '' },
      { id: 2, name: 'Smart Watch', price: 299.99, quantity: 1, image: '' },
      { id: 3, name: 'Phone Case', price: 19.99, quantity: 2, image: '' },
    ]);

    const updateQuantity = (id: number, newQuantity: number) => {
      if (newQuantity === 0) {
        setCartItems(items => items.filter(item => item.id !== id));
        toast.info('Item removed from cart');
      } else {
        setCartItems(items =>
          items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            Cart ({cartItems.length})
          </Button>
        </SheetTrigger>
        <SheetContent className="w-96">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              Shopping Cart
              <Badge variant="outline">{cartItems.length} items</Badge>
            </SheetTitle>
            <SheetDescription>
              Review your items before checkout
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 py-6 space-y-4 overflow-y-auto">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, 0)}
                              className="ml-2"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Remove from cart</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <SheetFooter className="pt-6">
            <Button
              className="w-full"
              onClick={() => {
                toast.success('Proceeding to checkout!');
              }}
            >
              Checkout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      emailUpdates: false,
      darkMode: false,
      autoSave: true,
      analytics: true,
      location: true,
    });

    const updateSetting = (key: string, value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }));
      toast.info(`${key} ${value ? 'enabled' : 'disabled'}`);
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </SheetTrigger>
        <SheetContent className="w-96">
          <SheetHeader>
            <SheetTitle>Application Settings</SheetTitle>
            <SheetDescription>
              Customize your application preferences and privacy settings
            </SheetDescription>
          </SheetHeader>

          <div className="py-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Manage your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="flex flex-col gap-1">
                    <span>Push Notifications</span>
                    <span className="text-xs text-muted-foreground">
                      Receive notifications in the app
                    </span>
                  </Label>
                  <Switch
                    id="notifications"
                    checked={settings.notifications}
                    onCheckedChange={(checked) => updateSetting('notifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email" className="flex flex-col gap-1">
                    <span>Email Updates</span>
                    <span className="text-xs text-muted-foreground">
                      Get updates via email
                    </span>
                  </Label>
                  <Switch
                    id="email"
                    checked={settings.emailUpdates}
                    onCheckedChange={(checked) => updateSetting('emailUpdates', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Appearance
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of the application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkMode" className="flex flex-col gap-1">
                    <span>Dark Mode</span>
                    <span className="text-xs text-muted-foreground">
                      Use dark theme
                    </span>
                  </Label>
                  <Switch
                    id="darkMode"
                    checked={settings.darkMode}
                    onCheckedChange={(checked) => updateSetting('darkMode', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>
                  Control your privacy and data sharing preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics" className="flex flex-col gap-1">
                    <span>Analytics</span>
                    <span className="text-xs text-muted-foreground">
                      Help improve the app
                    </span>
                  </Label>
                  <Switch
                    id="analytics"
                    checked={settings.analytics}
                    onCheckedChange={(checked) => updateSetting('analytics', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="location" className="flex flex-col gap-1">
                    <span>Location Services</span>
                    <span className="text-xs text-muted-foreground">
                      Allow location access
                    </span>
                  </Label>
                  <Switch
                    id="location"
                    checked={settings.location}
                    onCheckedChange={(checked) => updateSetting('location', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  General
                </CardTitle>
                <CardDescription>
                  General application settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoSave" className="flex flex-col gap-1">
                    <span>Auto Save</span>
                    <span className="text-xs text-muted-foreground">
                      Automatically save changes
                    </span>
                  </Label>
                  <Switch
                    id="autoSave"
                    checked={settings.autoSave}
                    onCheckedChange={(checked) => updateSetting('autoSave', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <SheetFooter>
            <Button
              variant="outline"
              onClick={() => {
                setSettings({
                  notifications: true,
                  emailUpdates: false,
                  darkMode: false,
                  autoSave: true,
                  analytics: true,
                  location: true,
                });
                toast.info('Settings reset to defaults');
              }}
            >
              Reset Defaults
            </Button>
            <Button
              onClick={() => {
                toast.success('Settings saved successfully!');
              }}
            >
              Save Settings
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const ProductDetails: Story = {
  render: () => {
    const product = {
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      category: 'Electronics',
      brand: 'AudioTech',
      sku: 'AT-WH-001',
      features: [
        'Active Noise Cancellation',
        '40-hour Battery Life',
        'Premium Leather Cushions',
        'Wireless Charging Case',
        'Hi-Res Audio Certified',
      ],
      specifications: [
        { label: 'Frequency Response', value: '20Hz - 40kHz' },
        { label: 'Driver Size', value: '40mm Dynamic' },
        { label: 'Battery Life', value: '40 hours (ANC off)' },
        { label: 'Weight', value: '250g' },
        { label: 'Connectivity', value: 'Bluetooth 5.0, USB-C' },
      ],
    };

    const [selectedVariant, setSelectedVariant] = useState('black');
    const [quantity, setQuantity] = useState(1);

    const variants = [
      { id: 'black', name: 'Midnight Black', color: '#000000' },
      { id: 'white', name: 'Pearl White', color: '#ffffff' },
      { id: 'blue', name: 'Ocean Blue', color: '#0ea5e9' },
    ];

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            View Product Details
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <div className="flex items-start justify-between">
              <div>
                <SheetTitle className="text-xl">{product.name}</SheetTitle>
                <SheetDescription className="mt-1">
                  <Badge variant="outline" className="mr-2">
                    {product.brand}
                  </Badge>
                  <Badge variant="secondary">
                    {product.category}
                  </Badge>
                </SheetDescription>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Star className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to wishlist</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </SheetHeader>

          <div className="py-6 space-y-6">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <Package className="h-16 w-16 text-muted-foreground" />
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    25% OFF
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={product.inStock ? 'default' : 'destructive'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    SKU: {product.sku}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Color Variant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  {variants.map((variant) => (
                    <Button
                      key={variant.id}
                      variant={selectedVariant === variant.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedVariant(variant.id)}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-3 h-3 rounded-full border"
                        style={{ backgroundColor: variant.color }}
                      />
                      {variant.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <SheetFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => {
                toast.success('Added to cart!', {
                  description: `${quantity}x ${product.name} (${variants.find(v => v.id === selectedVariant)?.name})`,
                });
              }}
            >
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              onClick={() => {
                toast.success('Proceeding to checkout!');
              }}
            >
              Buy Now
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const FileManager: Story = {
  render: () => {
    const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
    const [currentFolder, setCurrentFolder] = useState('Documents');

    const files = [
      { id: 1, name: 'Project Proposal.pdf', type: 'pdf', size: '2.4 MB', modified: '2 hours ago' },
      { id: 2, name: 'Budget 2024.xlsx', type: 'excel', size: '890 KB', modified: '1 day ago' },
      { id: 3, name: 'Team Photo.jpg', type: 'image', size: '1.2 MB', modified: '3 days ago' },
      { id: 4, name: 'Meeting Recording.mp4', type: 'video', size: '45.2 MB', modified: '1 week ago' },
      { id: 5, name: 'Notes.txt', type: 'text', size: '12 KB', modified: '2 weeks ago' },
    ];

    const folders = ['Documents', 'Images', 'Videos', 'Archives'];

    const getFileIcon = (type: string) => {
      switch (type) {
        case 'pdf':
        case 'text':
          return FileText;
        case 'image':
          return Image;
        case 'video':
          return Video;
        case 'excel':
          return FileText;
        default:
          return FileText;
      }
    };

    const toggleFileSelection = (id: number) => {
      setSelectedFiles(prev =>
        prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      );
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Archive className="mr-2 h-4 w-4" />
            File Manager
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-2xl">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              File Manager
              {selectedFiles.length > 0 && (
                <Badge variant="outline">
                  {selectedFiles.length} selected
                </Badge>
              )}
            </SheetTitle>
            <SheetDescription>
              Browse and manage your files and folders
            </SheetDescription>
          </SheetHeader>

          <div className="py-6 space-y-4">
            <div className="flex items-center justify-between">
              <Select value={currentFolder} onValueChange={setCurrentFolder}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {folders.map((folder) => (
                    <SelectItem key={folder} value={folder}>
                      {folder}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                {selectedFiles.length > 0 ? (
                  <>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Download selected</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete selected</p>
                      </TooltipContent>
                    </Tooltip>
                  </>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Upload new files</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedFiles.length === files.length}
                        onCheckedChange={(checked) => {
                          setSelectedFiles(checked ? files.map(f => f.id) : []);
                        }}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files.map((file) => {
                    const IconComponent = getFileIcon(file.type);
                    const isSelected = selectedFiles.includes(file.id);

                    return (
                      <TableRow key={file.id} className={isSelected ? 'bg-muted/50' : ''}>
                        <TableCell>
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => toggleFileSelection(file.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{file.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {file.size}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {file.modified}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Download file</p>
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Rename file</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </div>

          <SheetFooter>
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-muted-foreground">
                {files.length} files in {currentFolder}
              </span>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  New Folder
                </Button>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Files
                </Button>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const FilterPanel: Story = {
  render: () => {
    const [filters, setFilters] = useState({
      category: 'all',
      priceRange: [0, 1000],
      inStock: true,
      rating: 0,
      brands: [] as string[],
      tags: [] as string[],
    });

    const categories = [
      { value: 'all', label: 'All Categories' },
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
      { value: 'books', label: 'Books' },
      { value: 'home', label: 'Home & Garden' },
    ];

    const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas'];
    const tags = ['Popular', 'Sale', 'New', 'Premium', 'Eco-friendly'];

    const toggleBrand = (brand: string) => {
      setFilters(prev => ({
        ...prev,
        brands: prev.brands.includes(brand)
          ? prev.brands.filter(b => b !== brand)
          : [...prev.brands, brand]
      }));
    };

    const toggleTag = (tag: string) => {
      setFilters(prev => ({
        ...prev,
        tags: prev.tags.includes(tag)
          ? prev.tags.filter(t => t !== tag)
          : [...prev.tags, tag]
      }));
    };

    const clearFilters = () => {
      setFilters({
        category: 'all',
        priceRange: [0, 1000],
        inStock: true,
        rating: 0,
        brands: [],
        tags: [],
      });
      toast.info('Filters cleared');
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {(filters.brands.length > 0 || filters.tags.length > 0 || filters.category !== 'all') && (
              <Badge variant="secondary" className="ml-2 text-xs">
                Active
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              Filters
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </SheetTitle>
            <SheetDescription>
              Refine your search with advanced filters
            </SheetDescription>
          </SheetHeader>

          <div className="py-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={filters.category} onValueChange={(value) =>
                  setFilters(prev => ({ ...prev, category: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Brands</CardTitle>
                <CardDescription>
                  {filters.brands.length} selected
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label htmlFor={brand} className="text-sm font-normal">
                      {brand}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tags</CardTitle>
                <CardDescription>
                  {filters.tags.length} selected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Button
                      key={tag}
                      variant={filters.tags.includes(tag) ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => toggleTag(tag)}
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={filters.inStock}
                    onCheckedChange={(checked) =>
                      setFilters(prev => ({ ...prev, inStock: checked as boolean }))
                    }
                  />
                  <Label htmlFor="inStock" className="text-sm font-normal">
                    In stock only
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Minimum Rating</CardTitle>
                <CardDescription>
                  {filters.rating > 0 ? `${filters.rating} stars and up` : 'Any rating'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <Button
                      key={rating}
                      variant={filters.rating === rating ? 'default' : 'ghost'}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() =>
                        setFilters(prev => ({ ...prev, rating: rating === prev.rating ? 0 : rating }))
                      }
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-1">& up</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <SheetFooter>
            <div className="flex flex-col gap-2 w-full">
              <Button
                onClick={() => {
                  toast.success('Filters applied successfully!', {
                    description: `Found results with your selected criteria.`,
                  });
                }}
                className="w-full"
              >
                Apply Filters
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                {filters.brands.length + filters.tags.length + (filters.category !== 'all' ? 1 : 0)} filters active
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
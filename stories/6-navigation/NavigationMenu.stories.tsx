import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Home,
  User,
  Settings,
  HelpCircle,
  ShoppingCart,
  Search,
  Bell,
  Menu,
  ChevronRight,
  Layout,
  Palette,
  Database,
  Code2,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Star,
  MessageCircle,
  FileText,
  Users,
  TrendingUp,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Building2,
  Briefcase,
  GraduationCap,
  Award,
  Camera,
  Music,
  Video,
  Book,
  Gamepad2,
  Coffee,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const meta: Meta<typeof NavigationMenu> = {
  title: '6-Navigation/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for consistent list items
const ListItem = ({ href, title, children, icon: Icon, ...props }: {
  href: string;
  title: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
} & React.ComponentPropsWithoutRef<'li'>) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={href}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
};

// Basic horizontal navigation
export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#home">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#about">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#services">Services</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Dropdown/mega menu navigation
export const DropdownMegaMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Home className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Welcome Home
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover amazing features and get started with our platform.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/dashboard" title="Dashboard" icon={Layout}>
                Overview of your account and recent activity.
              </ListItem>
              <ListItem href="/profile" title="Profile" icon={User}>
                Manage your personal information and preferences.
              </ListItem>
              <ListItem href="/settings" title="Settings" icon={Settings}>
                Configure application settings and preferences.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/web-design" title="Web Design" icon={Palette}>
                Beautiful, responsive websites that convert visitors into customers.
              </ListItem>
              <ListItem href="/web-development" title="Web Development" icon={Code2}>
                Custom web applications built with modern technologies.
              </ListItem>
              <ListItem href="/mobile-apps" title="Mobile Apps" icon={Smartphone}>
                Native and cross-platform mobile applications.
              </ListItem>
              <ListItem href="/api-development" title="API Development" icon={Database}>
                Robust APIs and backend services for your applications.
              </ListItem>
              <ListItem href="/seo-services" title="SEO Services" icon={TrendingUp}>
                Improve your search engine rankings and visibility.
              </ListItem>
              <ListItem href="/analytics" title="Analytics" icon={BarChart3}>
                Comprehensive analytics and performance tracking.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <ListItem href="/about" title="About Us" icon={Building2}>
                Learn about our mission, vision, and team.
              </ListItem>
              <ListItem href="/careers" title="Careers" icon={Briefcase}>
                Join our team and grow your career with us.
              </ListItem>
              <ListItem href="/blog" title="Blog" icon={FileText}>
                Read our latest insights and industry news.
              </ListItem>
              <ListItem href="/contact" title="Contact" icon={Mail}>
                Get in touch with our team for support.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#pricing">Pricing</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Mobile-responsive navigation
export const MobileResponsive: Story = {
  render: () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <div className="w-full max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="/enterprise" title="Enterprise" icon={Building2}>
                      Solutions for large organizations.
                    </ListItem>
                    <ListItem href="/startup" title="Startup" icon={Zap}>
                      Perfect for growing businesses.
                    </ListItem>
                    <ListItem href="/personal" title="Personal" icon={User}>
                      Individual plans and pricing.
                    </ListItem>
                    <ListItem href="/education" title="Education" icon={GraduationCap}>
                      Special pricing for students and educators.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px]">
                    <ListItem href="/docs" title="Documentation" icon={Book}>
                      Complete guides and API reference.
                    </ListItem>
                    <ListItem href="/support" title="Support Center" icon={HelpCircle}>
                      Get help and find answers to common questions.
                    </ListItem>
                    <ListItem href="/community" title="Community" icon={Users}>
                      Connect with other users and share experiences.
                    </ListItem>
                    <ListItem href="/status" title="System Status" icon={Shield}>
                      Check our current system status and uptime.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="#pricing">Pricing</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="#contact">Contact</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="font-semibold text-lg">Brand</div>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Solutions</h4>
                    <div className="space-y-1">
                      <a href="/enterprise" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Enterprise Solutions
                      </a>
                      <a href="/startup" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Startup Plans
                      </a>
                      <a href="/personal" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Personal Use
                      </a>
                      <a href="/education" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Education Discount
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Resources</h4>
                    <div className="space-y-1">
                      <a href="/docs" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Documentation
                      </a>
                      <a href="/support" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Support Center
                      </a>
                      <a href="/community" className="block p-2 text-sm hover:bg-accent rounded-md">
                        Community
                      </a>
                      <a href="/status" className="block p-2 text-sm hover:bg-accent rounded-md">
                        System Status
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-1">
                    <a href="/pricing" className="block p-2 text-sm hover:bg-accent rounded-md">
                      Pricing
                    </a>
                    <a href="/contact" className="block p-2 text-sm hover:bg-accent rounded-md">
                      Contact
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    );
  },
};

// Breadcrumb-style navigation
export const BreadcrumbStyle: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Navigation Breadcrumbs</h3>
        <p className="text-sm text-muted-foreground">
          Breadcrumbs help users understand their current location and navigate back to parent pages.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Breadcrumb</CardTitle>
          <CardDescription>Simple hierarchical navigation path</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Smartphones</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Complex Breadcrumb</CardTitle>
          <CardDescription>Multi-level navigation with context</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  Company
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/departments" className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Departments
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/departments/engineering">Engineering</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/departments/engineering/frontend">Frontend Team</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Project Alpha</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardContent>
      </Card>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Navigate to Section</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                <ListItem href="/home" title="Home" icon={Home}>
                  Return to the main dashboard.
                </ListItem>
                <ListItem href="/products" title="Products" icon={ShoppingCart}>
                  Browse our product catalog.
                </ListItem>
                <ListItem href="/departments" title="Departments" icon={Users}>
                  View organizational structure.
                </ListItem>
                <ListItem href="/settings" title="Settings" icon={Settings}>
                  Configure your preferences.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

// Sidebar navigation
export const SidebarNavigation: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    return (
      <div className="flex w-full max-w-5xl h-[500px] border rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-muted/30 p-4 space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold px-2">Main</h4>
            <nav className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Layout },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'tasks', label: 'Tasks', icon: Calendar },
                { id: 'team', label: 'Team', icon: Users },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    toast.info(`Navigated to ${label}`);
                  }}
                  className={`w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ${
                    activeSection === id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-semibold px-2">Analytics</h4>
            <nav className="space-y-1">
              {[
                { id: 'reports', label: 'Reports', icon: BarChart3 },
                { id: 'insights', label: 'Insights', icon: TrendingUp },
                { id: 'metrics', label: 'Metrics', icon: Star },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    toast.info(`Navigated to ${label}`);
                  }}
                  className={`w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ${
                    activeSection === id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-semibold px-2">Settings</h4>
            <nav className="space-y-1">
              {[
                { id: 'preferences', label: 'Preferences', icon: Settings },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'help', label: 'Help & Support', icon: HelpCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    toast.info(`Navigated to ${label}`);
                  }}
                  className={`w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md transition-colors ${
                    activeSection === id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  {id === 'notifications' && (
                    <Badge variant="secondary" className="ml-auto">3</Badge>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="capitalize">{activeSection}</CardTitle>
              <CardDescription>
                Content for the {activeSection} section would be displayed here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This demonstrates how sidebar navigation can provide organized access to different sections
                of an application while maintaining context and visual hierarchy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

// Tab-style navigation (using NavigationMenu as tabs)
export const TabStyleNavigation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
      <div className="w-full max-w-4xl space-y-4">
        <NavigationMenu>
          <NavigationMenuList className="h-10 p-1 bg-muted rounded-md">
            {[
              { id: 'overview', label: 'Overview', icon: Layout },
              { id: 'performance', label: 'Performance', icon: TrendingUp },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'integrations', label: 'Integrations', icon: Globe },
            ].map(({ id, label, icon: Icon }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => {
                      setActiveTab(id);
                      toast.info(`Switched to ${label} tab`);
                    }}
                    className={`${navigationMenuTriggerStyle()} ${
                      activeTab === id
                        ? 'bg-background shadow-sm text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {activeTab === 'overview' && <Layout className="h-5 w-5" />}
              {activeTab === 'performance' && <TrendingUp className="h-5 w-5" />}
              {activeTab === 'security' && <Shield className="h-5 w-5" />}
              {activeTab === 'integrations' && <Globe className="h-5 w-5" />}
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </CardTitle>
            <CardDescription>
              {activeTab === 'overview' && 'Get a high-level view of your application status and key metrics.'}
              {activeTab === 'performance' && 'Monitor application performance and identify optimization opportunities.'}
              {activeTab === 'security' && 'Review security settings and monitor potential threats.'}
              {activeTab === 'integrations' && 'Manage third-party integrations and API connections.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeTab === 'overview' && (
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">98.2%</div>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1.2k</div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">45ms</div>
                    <p className="text-sm text-muted-foreground">Avg Response</p>
                  </div>
                </div>
              )}

              {activeTab === 'performance' && (
                <div>
                  <p className="text-muted-foreground mb-4">
                    Performance monitoring helps you identify bottlenecks and optimize your application.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Page Load Time</span>
                      <Badge variant="outline">Good</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Memory Usage</span>
                      <Badge variant="secondary">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Database Queries</span>
                      <Badge variant="outline">Efficient</Badge>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <p className="text-muted-foreground mb-4">
                    Security dashboard shows your application's security posture and recent events.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium">SSL Certificate</div>
                        <div className="text-xs text-muted-foreground">Valid until Dec 2025</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium">Firewall Status</div>
                        <div className="text-xs text-muted-foreground">All systems protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'integrations' && (
                <div>
                  <p className="text-muted-foreground mb-4">
                    Manage your third-party integrations and API connections.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { name: 'Stripe', status: 'Connected', color: 'green' },
                      { name: 'SendGrid', status: 'Connected', color: 'green' },
                      { name: 'AWS S3', status: 'Pending', color: 'yellow' },
                      { name: 'Google Analytics', status: 'Disconnected', color: 'red' },
                    ].map((integration, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm font-medium">{integration.name}</span>
                        <Badge
                          variant={integration.color === 'green' ? 'default' : 'secondary'}
                          className={
                            integration.color === 'green' ? 'bg-green-100 text-green-800' :
                            integration.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }
                        >
                          {integration.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Multi-level nested menus
export const MultiLevelNested: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Technology</h4>
                <ul className="space-y-1">
                  <ListItem href="/tech/software" title="Software Development" icon={Code2}>
                    Custom software solutions and applications.
                  </ListItem>
                  <ListItem href="/tech/ai" title="Artificial Intelligence" icon={Zap}>
                    AI and machine learning implementations.
                  </ListItem>
                  <ListItem href="/tech/cybersecurity" title="Cybersecurity" icon={Shield}>
                    Comprehensive security solutions and consulting.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Healthcare</h4>
                <ul className="space-y-1">
                  <ListItem href="/healthcare/hospitals" title="Hospitals & Clinics" icon={Building2}>
                    Healthcare management systems.
                  </ListItem>
                  <ListItem href="/healthcare/telemedicine" title="Telemedicine" icon={Video}>
                    Remote healthcare delivery platforms.
                  </ListItem>
                  <ListItem href="/healthcare/research" title="Medical Research" icon={Search}>
                    Research data management solutions.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Finance</h4>
                <ul className="space-y-1">
                  <ListItem href="/finance/banking" title="Banking & Credit" icon={Building2}>
                    Digital banking and credit solutions.
                  </ListItem>
                  <ListItem href="/finance/insurance" title="Insurance" icon={Shield}>
                    Insurance management platforms.
                  </ListItem>
                  <ListItem href="/finance/investment" title="Investment Management" icon={TrendingUp}>
                    Portfolio and investment tracking.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Education</h4>
                <ul className="space-y-1">
                  <ListItem href="/education/k12" title="K-12 Schools" icon={GraduationCap}>
                    Student information and learning management.
                  </ListItem>
                  <ListItem href="/education/higher-ed" title="Higher Education" icon={Book}>
                    University and college administration.
                  </ListItem>
                  <ListItem href="/education/corporate" title="Corporate Training" icon={Award}>
                    Employee development and training platforms.
                  </ListItem>
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Development</h4>
                <ul className="space-y-1">
                  <ListItem href="/services/web-dev" title="Web Development" icon={Globe}>
                    Full-stack web application development.
                  </ListItem>
                  <ListItem href="/services/mobile-dev" title="Mobile Development" icon={Smartphone}>
                    iOS and Android app development.
                  </ListItem>
                  <ListItem href="/services/api-dev" title="API Development" icon={Database}>
                    RESTful and GraphQL API development.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Design</h4>
                <ul className="space-y-1">
                  <ListItem href="/services/ui-design" title="UI/UX Design" icon={Palette}>
                    User interface and experience design.
                  </ListItem>
                  <ListItem href="/services/branding" title="Brand Design" icon={Star}>
                    Logo and brand identity creation.
                  </ListItem>
                  <ListItem href="/services/graphics" title="Graphic Design" icon={Camera}>
                    Marketing materials and visual content.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Consulting</h4>
                <ul className="space-y-1">
                  <ListItem href="/services/strategy" title="Digital Strategy" icon={TrendingUp}>
                    Digital transformation consulting.
                  </ListItem>
                  <ListItem href="/services/optimization" title="Performance Optimization" icon={Zap}>
                    Application and infrastructure optimization.
                  </ListItem>
                  <ListItem href="/services/training" title="Team Training" icon={Users}>
                    Technical training and skill development.
                  </ListItem>
                </ul>
              </li>

              <li className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground px-2">Support</h4>
                <ul className="space-y-1">
                  <ListItem href="/services/maintenance" title="Maintenance & Support" icon={Settings}>
                    Ongoing support and system maintenance.
                  </ListItem>
                  <ListItem href="/services/monitoring" title="System Monitoring" icon={BarChart3}>
                    24/7 system monitoring and alerts.
                  </ListItem>
                  <ListItem href="/services/backup" title="Backup & Recovery" icon={Shield}>
                    Data backup and disaster recovery.
                  </ListItem>
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#portfolio">Portfolio</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Navigation with icons and badges
export const WithIconsAndBadges: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-5xl">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <Home className="h-4 w-4" />
              Dashboard
              <Badge variant="secondary" className="ml-1">New</Badge>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Layout className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Analytics Dashboard
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Get insights into your business performance with comprehensive analytics and reporting tools.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/overview" title="Overview" icon={BarChart3}>
                  High-level metrics and KPIs for quick insights.
                </ListItem>
                <ListItem href="/revenue" title="Revenue Tracking" icon={TrendingUp}>
                  Monitor revenue streams and financial performance.
                </ListItem>
                <ListItem href="/users" title="User Analytics" icon={Users}>
                  Understand user behavior and engagement patterns.
                </ListItem>
                <ListItem href="/reports" title="Custom Reports" icon={FileText}>
                  Generate and schedule custom analytical reports.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Messages
              <Badge variant="destructive" className="ml-1">5</Badge>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                <ListItem href="/inbox" title="Inbox" icon={Mail}>
                  <div className="flex items-center justify-between">
                    <span>View all your messages</span>
                    <Badge variant="destructive">5</Badge>
                  </div>
                </ListItem>
                <ListItem href="/sent" title="Sent Messages" icon={Mail}>
                  Review your sent message history.
                </ListItem>
                <ListItem href="/drafts" title="Drafts" icon={FileText}>
                  <div className="flex items-center justify-between">
                    <span>Continue writing unsent messages</span>
                    <Badge variant="secondary">2</Badge>
                  </div>
                </ListItem>
                <ListItem href="/templates" title="Message Templates" icon={FileText}>
                  Create and manage reusable message templates.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
              <Badge variant="outline" className="ml-1">12</Badge>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4">
                <li className="space-y-2">
                  <h4 className="text-sm font-semibold">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1 text-sm">
                        <div>New user registration</div>
                        <div className="text-xs text-muted-foreground">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1 text-sm">
                        <div>Payment processed successfully</div>
                        <div className="text-xs text-muted-foreground">5 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1 text-sm">
                        <div>System update available</div>
                        <div className="text-xs text-muted-foreground">1 hour ago</div>
                      </div>
                    </div>
                  </div>
                </li>
                <Separator />
                <ListItem href="/notifications" title="View All Notifications" icon={Bell}>
                  See complete notification history.
                </ListItem>
                <ListItem href="/notification-settings" title="Notification Settings" icon={Settings}>
                  Configure your notification preferences.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Store
              <Badge variant="default" className="ml-1 bg-green-600">Sale</Badge>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                <ListItem href="/products" title="All Products" icon={ShoppingCart}>
                  Browse our complete product catalog.
                </ListItem>
                <ListItem href="/categories" title="Categories" icon={Layout}>
                  <div className="flex items-center justify-between">
                    <span>Shop by product category</span>
                    <Badge variant="outline">New</Badge>
                  </div>
                </ListItem>
                <ListItem href="/deals" title="Special Deals" icon={Star}>
                  <div className="flex items-center justify-between">
                    <span>Limited time offers and discounts</span>
                    <Badge variant="destructive">Hot</Badge>
                  </div>
                </ListItem>
                <ListItem href="/cart" title="Shopping Cart" icon={ShoppingCart}>
                  <div className="flex items-center justify-between">
                    <span>Review items in your cart</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} gap-2`}>
              <a href="#profile">
                <User className="h-4 w-4" />
                Profile
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Card>
        <CardHeader>
          <CardTitle>Navigation UX Insights</CardTitle>
          <CardDescription>
            Best practices for navigation design with icons and badges
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Star className="h-4 w-4" />
                Icon Usage
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use consistent icon styles throughout</li>
                <li>• Ensure icons are recognizable and meaningful</li>
                <li>• Maintain proper icon-to-text size ratios</li>
                <li>• Consider color contrast and accessibility</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Badge variant="outline" className="h-4 w-4 p-0">!</Badge>
                Badge Guidelines
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use badges to indicate status or quantity</li>
                <li>• Keep badge text concise (numbers or short words)</li>
                <li>• Use appropriate colors for different badge types</li>
                <li>• Ensure badges don't overwhelm the navigation</li>
              </ul>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Accessibility Considerations
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Provide proper ARIA labels for icons</li>
              <li>• Ensure sufficient color contrast for badges</li>
              <li>• Use semantic HTML for screen readers</li>
              <li>• Test with keyboard navigation</li>
              <li>• Consider high contrast mode compatibility</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};
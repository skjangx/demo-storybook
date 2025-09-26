import type { Meta, StoryObj } from '@storybook/react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Home,
  Folder,
  FileText,
  Settings,
  User,
  ShoppingCart,
  Package,
  Building,
  Calendar,
  ChevronRight,
  Slash,
  Dot
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Breadcrumb> = {
  title: '6-Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="w-full max-w-2xl">
          <Story />
          <Toaster />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Home'); }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Documents'); }}>
            Documents
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => { e.preventDefault(); toast.info('Navigating to Home'); }}
          >
            <Home className="h-4 w-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => { e.preventDefault(); toast.info('Navigating to Projects'); }}
          >
            <Folder className="h-4 w-4" />
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => { e.preventDefault(); toast.info('Navigating to Website'); }}
          >
            <Package className="h-4 w-4" />
            Website
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            README.md
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Home'); }}>
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onClick={() => toast.info('Navigating to Documents')}
                className="flex items-center gap-2"
              >
                <Folder className="h-4 w-4" />
                Documents
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => toast.info('Navigating to Downloads')}
                className="flex items-center gap-2"
              >
                <Package className="h-4 w-4" />
                Downloads
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => toast.info('Navigating to Settings')}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Projects'); }}>
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Project</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const CustomSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Slash Separator:</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Home'); }}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Category'); }}>
                Category
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Product</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Dot Separator:</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Dashboard'); }}>
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Dot className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Analytics'); }}>
                Analytics
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Dot className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Text Separator:</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Users'); }}>
                Users
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="text-muted-foreground">•</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); toast.info('Navigating to Profile'); }}>
                Profile
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="text-muted-foreground">•</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const EcommerceBreadcrumb: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState([
      { label: 'Home', href: '/', icon: Home },
      { label: 'Electronics', href: '/electronics', icon: Package },
      { label: 'Laptops', href: '/electronics/laptops', icon: null },
      { label: 'MacBook Pro 16"', href: null, icon: null },
    ]);

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Product Navigation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              {currentPath.map((item, index) => {
                const IconComponent = item.icon;
                const isLast = index === currentPath.length - 1;

                return (
                  <div key={index} className="contents">
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="flex items-center gap-2">
                          {IconComponent && <IconComponent className="h-4 w-4" />}
                          {item.label}
                        </BreadcrumbPage>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <BreadcrumbLink
                              href={item.href}
                              className="flex items-center gap-2"
                              onClick={(e) => {
                                e.preventDefault();
                                toast.info(`Navigating to ${item.label}`);
                              }}
                            >
                              {IconComponent && <IconComponent className="h-4 w-4" />}
                              {item.label}
                            </BreadcrumbLink>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Go to {item.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.info('Going back to Laptops category');
              }}
            >
              ← Back to Category
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.info('Browsing similar products');
              }}
            >
              Similar Products
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AdminPanelBreadcrumb: Story = {
  render: () => {
    const sections = [
      {
        title: 'User Management',
        breadcrumbs: [
          { label: 'Dashboard', icon: Home, href: '/dashboard' },
          { label: 'Users', icon: User, href: '/users' },
          { label: 'John Doe', icon: null, href: null },
        ],
        badge: 'Active',
        badgeVariant: 'default' as const,
      },
      {
        title: 'System Settings',
        breadcrumbs: [
          { label: 'Dashboard', icon: Home, href: '/dashboard' },
          { label: 'Settings', icon: Settings, href: '/settings' },
          { label: 'Security', icon: null, href: null },
        ],
        badge: 'Admin Only',
        badgeVariant: 'destructive' as const,
      },
      {
        title: 'Company Profile',
        breadcrumbs: [
          { label: 'Dashboard', icon: Home, href: '/dashboard' },
          { label: 'Company', icon: Building, href: '/company' },
          { label: 'Profile', icon: null, href: null },
        ],
        badge: 'Public',
        badgeVariant: 'secondary' as const,
      },
    ];

    return (
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <Card key={sectionIndex}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <Badge variant={section.badgeVariant}>{section.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  {section.breadcrumbs.map((item, index) => {
                    const IconComponent = item.icon;
                    const isLast = index === section.breadcrumbs.length - 1;

                    return (
                      <div key={index} className="contents">
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage className="flex items-center gap-2">
                              {IconComponent && <IconComponent className="h-4 w-4" />}
                              {item.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink
                              href={item.href}
                              className="flex items-center gap-2"
                              onClick={(e) => {
                                e.preventDefault();
                                toast.info(`Navigating to ${item.label}`);
                              }}
                            >
                              {IconComponent && <IconComponent className="h-4 w-4" />}
                              {item.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </div>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  },
};

export const ResponsiveBreadcrumb: Story = {
  render: () => {
    const fullPath = [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Projects', href: '/projects' },
      { label: 'Web Development', href: '/projects/web' },
      { label: 'E-commerce Site', href: '/projects/web/ecommerce' },
      { label: 'User Interface', href: '/projects/web/ecommerce/ui' },
      { label: 'Shopping Cart Component', href: null },
    ];

    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-4">Desktop View (Full Path):</p>
          <div className="border rounded-lg p-4 bg-muted/20">
            <Breadcrumb>
              <BreadcrumbList>
                {fullPath.map((item, index) => {
                  const isLast = index === fullPath.length - 1;

                  return (
                    <div key={index} className="contents">
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              toast.info(`Navigating to ${item.label}`);
                            }}
                          >
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}
                    </div>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Mobile View (Collapsed with Dropdown):</p>
          <div className="border rounded-lg p-4 bg-muted/20 max-w-sm">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/dashboard"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info('Navigating to Dashboard');
                    }}
                  >
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground">
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => toast.info('Navigating to Projects')}>
                        Projects
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info('Navigating to Web Development')}>
                        Web Development
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info('Navigating to E-commerce Site')}>
                        E-commerce Site
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/projects/web/ecommerce/ui"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info('Navigating to User Interface');
                    }}
                  >
                    User Interface
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Shopping Cart Component</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            💡 <strong>Responsive Pattern:</strong> On smaller screens, intermediate breadcrumb items
            are collapsed into a dropdown menu to save space while maintaining navigation context.
          </p>
        </div>
      </div>
    );
  },
};

export const CalendarBreadcrumb: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentYear = selectedDate.getFullYear();
    const currentMonth = months[selectedDate.getMonth()];
    const currentDay = selectedDate.getDate();

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Calendar Navigation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info('Navigating to Calendar Overview');
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Calendar
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <span>{currentYear}</span>
                    <ChevronRight className="h-3 w-3 shrink-0" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {[currentYear - 1, currentYear, currentYear + 1].map(year => (
                      <DropdownMenuItem
                        key={year}
                        onClick={() => {
                          const newDate = new Date(selectedDate);
                          newDate.setFullYear(year);
                          setSelectedDate(newDate);
                          toast.info(`Selected year ${year}`);
                        }}
                      >
                        {year}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <span>{currentMonth}</span>
                    <ChevronRight className="h-3 w-3 shrink-0" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {months.map((month, index) => (
                      <DropdownMenuItem
                        key={month}
                        onClick={() => {
                          const newDate = new Date(selectedDate);
                          newDate.setMonth(index);
                          setSelectedDate(newDate);
                          toast.info(`Selected ${month}`);
                        }}
                      >
                        {month}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Day {currentDay}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-sm text-muted-foreground">
            <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const today = new Date();
                setSelectedDate(today);
                toast.info('Jumped to today');
              }}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() - 1);
                setSelectedDate(newDate);
                toast.info('Previous day');
              }}
            >
              Previous Day
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() + 1);
                setSelectedDate(newDate);
                toast.info('Next day');
              }}
            >
              Next Day
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};
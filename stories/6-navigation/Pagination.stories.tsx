import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Filter,
  Download,
  Users,
  Package,
  Activity,
} from 'lucide-react';
import { useState } from 'react';

// Mock data for tables
const generateUsers = (count: number, startId = 1) => {
  const statuses = ['active', 'inactive', 'pending'];
  const roles = ['Admin', 'User', 'Manager', 'Developer'];

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    name: `User ${startId + i}`,
    email: `user${startId + i}@example.com`,
    role: roles[Math.floor(Math.random() * roles.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    joinDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
  }));
};

const generateProducts = (count: number, startId = 1) => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden'];
  const statuses = ['in-stock', 'low-stock', 'out-of-stock'];

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    name: `Product ${startId + i}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * 500) + 10,
    stock: Math.floor(Math.random() * 100),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    sales: Math.floor(Math.random() * 1000),
  }));
};

const generateOrders = (count: number, startId = 1) => {
  const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  return Array.from({ length: count }, (_, i) => ({
    id: `ORD-${(startId + i).toString().padStart(4, '0')}`,
    customer: `Customer ${startId + i}`,
    total: Math.floor(Math.random() * 500) + 20,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    items: Math.floor(Math.random() * 5) + 1,
  }));
};

// Pagination component
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}) => {
  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      )}

      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {getVisiblePages().map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

// Page size selector component
const PageSizeSelector = ({
  pageSize,
  onPageSizeChange,
  options = [10, 25, 50, 100],
}: {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  options?: number[];
}) => (
  <div className="flex items-center space-x-2">
    <span className="text-sm text-muted-foreground">Show</span>
    <Select value={pageSize.toString()} onValueChange={(value) => onPageSizeChange(Number(value))}>
      <SelectTrigger className="w-20">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option.toString()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <span className="text-sm text-muted-foreground">per page</span>
  </div>
);

// Pagination info component
const PaginationInfo = ({ currentPage, pageSize, totalItems }: {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}) => {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="text-sm text-muted-foreground">
      Showing {start} to {end} of {totalItems} results
    </div>
  );
};

const meta: Meta = {
  title: '6-Navigation/Pagination',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Pagination Components

Pagination components for navigating through large datasets with seamless table integration.

## Features

- **Table Integration** - Works naturally with table components and data display
- **Page Size Control** - Users can adjust how many items to show per page
- **Navigation Options** - First/last, previous/next, and direct page selection
- **Status Information** - Clear display of current position and total items
- **Responsive Design** - Adapts to different screen sizes and contexts

## Integration Patterns

- **Card Containers** - Structured layout with headers and controls
- **Badge Status** - Visual status indicators for table data
- **Tooltip Guidance** - Helpful information for complex actions
- **Select Components** - Page size and filter controls
- **Button Actions** - Export, filter, and navigation controls
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="space-y-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Simple Pagination</CardTitle>
          <CardDescription>
            Basic pagination with previous, next, and page numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showFirstLast={false}
            maxVisiblePages={3}
          />
        </CardContent>
      </Card>
    );
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Full Pagination Controls</CardTitle>
          <CardDescription>
            Complete pagination with first, last, previous, and next buttons
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showFirstLast={true}
            maxVisiblePages={5}
          />
        </CardContent>
      </Card>
    );
  },
};

export const WithPageSize: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const totalItems = 250;
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePageSizeChange = (newSize: number) => {
      setPageSize(newSize);
      setCurrentPage(1); // Reset to first page when changing page size
    };

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Pagination with Page Size Control
          </CardTitle>
          <CardDescription>
            Users can adjust how many items to display per page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <PaginationInfo
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalItems}
            />
            <PageSizeSelector
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>

          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const UserTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    const totalUsers = 150;
    const totalPages = Math.ceil(totalUsers / pageSize);
    const users = generateUsers(pageSize, (currentPage - 1) * pageSize + 1);

    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active': return 'default';
        case 'inactive': return 'secondary';
        case 'pending': return 'outline';
        default: return 'secondary';
      }
    };

    const handlePageSizeChange = (newSize: number) => {
      setPageSize(newSize);
      setCurrentPage(1);
    };

    return (
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>
                Manage users with searchable, paginated table interface
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filter users</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export user list</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <PageSizeSelector
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.joinDate}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit user details</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-4 border-t">
            <PaginationInfo
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalUsers}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ProductCatalog: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [category, setCategory] = useState('all');

    const totalProducts = 200;
    const totalPages = Math.ceil(totalProducts / pageSize);
    const products = generateProducts(pageSize, (currentPage - 1) * pageSize + 1);

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'in-stock': return 'text-green-600';
        case 'low-stock': return 'text-yellow-600';
        case 'out-of-stock': return 'text-red-600';
        default: return 'text-muted-foreground';
      }
    };

    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'in-stock': return 'default';
        case 'low-stock': return 'secondary';
        case 'out-of-stock': return 'destructive';
        default: return 'secondary';
      }
    };

    const handlePageSizeChange = (newSize: number) => {
      setPageSize(newSize);
      setCurrentPage(1);
    };

    return (
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Product Catalog
              </CardTitle>
              <CardDescription>
                Browse and manage product inventory with category filters
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm">
              {totalProducts} products
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Category:</span>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <PageSizeSelector
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
              options={[8, 16, 24, 32]}
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">${product.price}</TableCell>
                  <TableCell>
                    <span className={getStatusColor(product.status)}>
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(product.status)}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {product.sales} sold
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit product details</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-4 border-t">
            <PaginationInfo
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalProducts}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const OrderHistory: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [statusFilter, setStatusFilter] = useState('all');

    const totalOrders = 500;
    const totalPages = Math.ceil(totalOrders / pageSize);
    const orders = generateOrders(pageSize, (currentPage - 1) * pageSize + 1);

    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'pending': return 'secondary';
        case 'processing': return 'outline';
        case 'shipped': return 'default';
        case 'delivered': return 'default';
        case 'cancelled': return 'destructive';
        default: return 'secondary';
      }
    };

    const handlePageSizeChange = (newSize: number) => {
      setPageSize(newSize);
      setCurrentPage(1);
    };

    return (
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Order History
              </CardTitle>
              <CardDescription>
                Track and manage customer orders with status filtering
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {totalOrders} total orders
              </Badge>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export order history</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <PageSizeSelector
              pageSize={pageSize}
              onPageSizeChange={handlePageSizeChange}
              options={[15, 25, 50]}
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {order.items} items
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">${order.total}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {order.date}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View order details</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-4 border-t">
            <PaginationInfo
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalOrders}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const CompactPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 25;

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Compact Pagination</CardTitle>
          <CardDescription>
            Space-efficient pagination for mobile or sidebar use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showFirstLast={false}
              maxVisiblePages={3}
            />
          </div>

          <div className="text-center">
            <span className="text-xs text-muted-foreground">
              Jump to page:
            </span>
            <div className="mt-1">
              <Select
                value={currentPage.toString()}
                onValueChange={(value) => setCurrentPage(Number(value))}
              >
                <SelectTrigger className="w-20 mx-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <SelectItem key={page} value={page.toString()}>
                      {page}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const InfiniteScrollAlternative: Story = {
  render: () => {
    const [loadedItems, setLoadedItems] = useState(20);
    const [isLoading, setIsLoading] = useState(false);
    const totalAvailableItems = 200;
    const hasMore = loadedItems < totalAvailableItems;

    const loadMore = () => {
      setIsLoading(true);
      setTimeout(() => {
        setLoadedItems(prev => Math.min(prev + 20, totalAvailableItems));
        setIsLoading(false);
      }, 1000);
    };

    const reset = () => {
      setLoadedItems(20);
    };

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Load More Pattern
          </CardTitle>
          <CardDescription>
            Alternative to pagination using progressive loading
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {loadedItems} of {totalAvailableItems} items</span>
            <Badge variant="outline">
              {Math.round((loadedItems / totalAvailableItems) * 100)}% loaded
            </Badge>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto border rounded-lg p-4">
            {Array.from({ length: loadedItems }, (_, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-muted rounded">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>U{i + 1}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Item {i + 1}</div>
                    <div className="text-sm text-muted-foreground">
                      Description for item {i + 1}
                    </div>
                  </div>
                </div>
                <Badge variant="outline">Active</Badge>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {hasMore && (
              <Button onClick={loadMore} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Activity className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Load More'
                )}
              </Button>
            )}

            {loadedItems > 20 && (
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            )}
          </div>

          {!hasMore && (
            <div className="text-center text-sm text-muted-foreground py-4">
              <Badge variant="outline">All items loaded</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};
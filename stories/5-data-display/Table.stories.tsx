import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { MoreHorizontal, Edit, Trash2, Eye, Copy, Mail, Phone, Download } from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'E-Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
        <Toaster />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices with status badges.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant={
                      invoice.paymentStatus === 'Paid'
                        ? 'default'
                        : invoice.paymentStatus === 'Pending'
                        ? 'secondary'
                        : 'destructive'
                    }
                    className="cursor-pointer"
                  >
                    {invoice.paymentStatus}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {invoice.paymentStatus === 'Paid'
                      ? 'Payment received and processed'
                      : invoice.paymentStatus === 'Pending'
                      ? 'Payment is being processed'
                      : 'Payment overdue or failed'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Simple: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Moderator</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableCaption>A striped table example.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { product: "Laptop", category: "Electronics", price: "$999", stock: "15" },
          { product: "Smartphone", category: "Electronics", price: "$699", stock: "32" },
          { product: "Headphones", category: "Audio", price: "$199", stock: "8" },
          { product: "Keyboard", category: "Accessories", price: "$79", stock: "25" },
          { product: "Mouse", category: "Accessories", price: "$39", stock: "42" },
        ].map((item, index) => (
          <TableRow key={item.product} className={index % 2 === 1 ? "bg-muted/50" : ""}>
            <TableCell className="font-medium">{item.product}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithActions: Story = {
  render: () => {
    const users = [
      { id: 1, name: 'shadcn', email: 'shadcn@example.com', role: 'Admin', status: 'Active', avatar: 'https://github.com/shadcn.png' },
      { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Editor', status: 'Active' },
      { id: 3, name: 'Sarah Miller', email: 'sarah@example.com', role: 'Viewer', status: 'Inactive' },
      { id: 4, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'Pending' },
    ];

    return (
      <Table>
        <TableCaption>User management table with integrated actions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    {user.avatar && <AvatarImage src={user.avatar} />}
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {user.role === 'Admin'
                        ? 'Full system access and user management'
                        : user.role === 'Editor'
                        ? 'Can create and edit content'
                        : 'Read-only access to content'}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant={
                        user.status === 'Active'
                          ? 'default'
                          : user.status === 'Pending'
                          ? 'secondary'
                          : 'destructive'
                      }
                      className="cursor-pointer"
                    >
                      {user.status}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {user.status === 'Active'
                        ? 'User account is active and accessible'
                        : user.status === 'Pending'
                        ? 'Account pending activation'
                        : 'Account has been deactivated'}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => toast.info(`Viewing ${user.name}'s profile...`)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Editing ${user.name}...`)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit User
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Copying ${user.email} to clipboard`)}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Email
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Sending email to ${user.name}...`)}>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => toast.warning(`Delete ${user.name}?`, {
                        action: {
                          label: 'Delete',
                          onClick: () => toast.success(`${user.name} has been deleted`),
                        }
                      })}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithDialogs: Story = {
  render: () => {
    const projects = [
      { id: 1, name: 'E-Commerce Platform', lead: 'shadcn', progress: 85, status: 'In Progress', priority: 'High' },
      { id: 2, name: 'Mobile App Redesign', lead: 'John Doe', progress: 42, status: 'In Progress', priority: 'Medium' },
      { id: 3, name: 'API Documentation', lead: 'Sarah Miller', progress: 100, status: 'Completed', priority: 'Low' },
      { id: 4, name: 'Security Audit', lead: 'Mike Johnson', progress: 15, status: 'Planning', priority: 'High' },
    ];

    return (
      <Table>
        <TableCaption>Project management with detailed dialogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Lead</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{project.name}</div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant={
                          project.priority === 'High'
                            ? 'destructive'
                            : project.priority === 'Medium'
                            ? 'secondary'
                            : 'outline'
                        }
                        className="mt-1 text-xs"
                      >
                        {project.priority} Priority
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.priority} priority project</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    {project.lead === 'shadcn' && <AvatarImage src="https://github.com/shadcn.png" />}
                    <AvatarFallback className="text-xs">
                      {project.lead.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.lead}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === 'Completed'
                      ? 'default'
                      : project.status === 'In Progress'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex gap-1 justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>
                          Detailed project information and current status.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Project Lead</label>
                            <div className="flex items-center gap-2 mt-1">
                              <Avatar className="h-6 w-6">
                                {project.lead === 'shadcn' && <AvatarImage src="https://github.com/shadcn.png" />}
                                <AvatarFallback className="text-xs">
                                  {project.lead.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{project.lead}</span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Priority</label>
                            <div className="mt-1">
                              <Badge
                                variant={
                                  project.priority === 'High'
                                    ? 'destructive'
                                    : project.priority === 'Medium'
                                    ? 'secondary'
                                    : 'outline'
                                }
                              >
                                {project.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Progress: {project.progress}%</label>
                          <div className="w-full bg-muted rounded-full h-3 mt-2">
                            <div
                              className="bg-primary h-3 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Status</label>
                          <div className="mt-1">
                            <Badge
                              variant={
                                project.status === 'Completed'
                                  ? 'default'
                                  : project.status === 'In Progress'
                                  ? 'secondary'
                                  : 'outline'
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Close</Button>
                        <Button onClick={() => toast.success(`${project.name} updated successfully!`)}>
                          Update Project
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                        <DialogDescription>
                          Make changes to your project here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Editing: {project.name}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Update Status</span>
                            <Button size="sm" onClick={() => toast.info('Status updated')}>
                              Mark as {project.status === 'Completed' ? 'In Progress' : 'Completed'}
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Send Update</span>
                            <Button size="sm" variant="outline" onClick={() => toast.success('Team notified of changes')}>
                              <Mail className="mr-2 h-4 w-4" />
                              Notify Team
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Export Data</span>
                            <Button size="sm" variant="outline" onClick={() => toast.info('Downloading project data...')}>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button onClick={() => toast.success('Project saved successfully!')}>
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
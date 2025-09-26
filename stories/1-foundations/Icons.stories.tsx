import type { Meta, StoryObj } from '@storybook/react';
import {
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Calendar,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Heart,
  Star,
  Share,
  BookOpen,
  FileText,
  Image,
  Video,
  Music,
  MapPin,
  Clock,
  Bell,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Info,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Filter,
  SortAsc,
  Maximize,
  Minimize,
} from 'lucide-react';

const meta: Meta = {
  title: 'A-Foundations/Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const IconExample = ({
  icon: IconComponent,
  name,
  usage,
  size = 24
}: {
  icon: React.ComponentType<any>;
  name: string;
  usage: string;
  size?: number;
}) => (
  <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
    <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-md">
      <IconComponent size={size} className="text-foreground" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-muted-foreground">{usage}</div>
    </div>
  </div>
);

export const IconSizes: Story = {
  render: () => {
    const sizes = [
      { size: 16, label: 'Small', usage: 'Inline with text, compact interfaces' },
      { size: 20, label: 'Medium', usage: 'Standard UI elements, buttons' },
      { size: 24, label: 'Large', usage: 'Primary actions, navigation' },
      { size: 32, label: 'Extra Large', usage: 'Feature highlights, headers' },
      { size: 48, label: 'Hero', usage: 'Empty states, feature showcases' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Icon Sizes</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Consistent icon sizing creates visual harmony. Choose sizes based on context and hierarchy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizes.map(({ size, label, usage }) => (
            <div key={size} className="text-center space-y-3">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-lg">
                  <Settings size={size} className="text-foreground" />
                </div>
              </div>
              <div>
                <div className="font-medium text-sm">{label}</div>
                <div className="text-xs text-muted-foreground">{size}px</div>
                <div className="text-xs text-muted-foreground mt-1">{usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ActionIcons: Story = {
  render: () => {
    const actionIcons = [
      { icon: Plus, name: 'Plus', usage: 'Add, create, new item' },
      { icon: Edit, name: 'Edit', usage: 'Modify, update, change' },
      { icon: Trash2, name: 'Trash', usage: 'Delete, remove, destroy' },
      { icon: Download, name: 'Download', usage: 'Save locally, export' },
      { icon: Upload, name: 'Upload', usage: 'Import, add file' },
      { icon: Search, name: 'Search', usage: 'Find, filter, lookup' },
      { icon: Share, name: 'Share', usage: 'Send, distribute, publish' },
      { icon: Check, name: 'Check', usage: 'Confirm, approve, complete' },
      { icon: X, name: 'X', usage: 'Close, cancel, dismiss' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Action Icons</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Icons that represent user actions and interactive elements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {actionIcons.map((item) => (
            <IconExample key={item.name} {...item} />
          ))}
        </div>
      </div>
    );
  },
};

export const NavigationIcons: Story = {
  render: () => {
    const navIcons = [
      { icon: Home, name: 'Home', usage: 'Main page, dashboard' },
      { icon: User, name: 'User', usage: 'Profile, account, person' },
      { icon: Settings, name: 'Settings', usage: 'Configuration, preferences' },
      { icon: Mail, name: 'Mail', usage: 'Email, messages, inbox' },
      { icon: Calendar, name: 'Calendar', usage: 'Schedule, events, dates' },
      { icon: BookOpen, name: 'Book', usage: 'Documentation, guides, learn' },
      { icon: ArrowLeft, name: 'Arrow Left', usage: 'Back, previous, return' },
      { icon: ArrowRight, name: 'Arrow Right', usage: 'Forward, next, continue' },
      { icon: Menu, name: 'Menu', usage: 'Navigation, hamburger menu' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation Icons</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Icons used for navigation, wayfinding, and site structure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {navIcons.map((item) => (
            <IconExample key={item.name} {...item} />
          ))}
        </div>
      </div>
    );
  },
};

export const StatusIcons: Story = {
  render: () => {
    const statusIcons = [
      { icon: Check, name: 'Success', usage: 'Completed, approved, valid' },
      { icon: X, name: 'Error', usage: 'Failed, invalid, denied' },
      { icon: AlertTriangle, name: 'Warning', usage: 'Caution, attention needed' },
      { icon: Info, name: 'Info', usage: 'Information, details, help' },
      { icon: HelpCircle, name: 'Help', usage: 'Questions, support, guidance' },
      { icon: Bell, name: 'Notification', usage: 'Alerts, updates, messages' },
      { icon: Shield, name: 'Security', usage: 'Protection, safety, verified' },
      { icon: Lock, name: 'Locked', usage: 'Private, secure, restricted' },
      { icon: Eye, name: 'Visible', usage: 'Show, view, public' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Status & Communication Icons</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Icons that communicate status, state, and system feedback to users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {statusIcons.map((item) => (
            <IconExample key={item.name} {...item} />
          ))}
        </div>
      </div>
    );
  },
};

export const DirectionalIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Directional Icons</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Icons that indicate direction, expansion, and navigation flow.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Arrows</h4>
          <div className="flex gap-6 items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ArrowUp size={24} />
              </div>
              <div className="text-xs">Up</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ArrowRight size={24} />
              </div>
              <div className="text-xs">Right</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ArrowDown size={24} />
              </div>
              <div className="text-xs">Down</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ArrowLeft size={24} />
              </div>
              <div className="text-xs">Left</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Chevrons</h4>
          <div className="flex gap-6 items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ChevronUp size={24} />
              </div>
              <div className="text-xs">Expand Up</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ChevronRight size={24} />
              </div>
              <div className="text-xs">Expand Right</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ChevronDown size={24} />
              </div>
              <div className="text-xs">Expand Down</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-2">
                <ChevronLeft size={24} />
              </div>
              <div className="text-xs">Expand Left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const IconUsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Usage Examples</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Real-world applications showing how icons integrate with components.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Buttons with Icons</h4>
          <div className="flex gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
              <Plus size={16} />
              Create New
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm">
              <Download size={16} />
              Download
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm">
              <Settings size={16} />
              Settings
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-md text-sm">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Navigation Menu</h4>
          <div className="bg-card border rounded-lg p-2 max-w-xs">
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-sm">
                <Home size={16} />
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
                <User size={16} />
                Profile
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
                <Mail size={16} />
                Messages
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
                <Settings size={16} />
                Settings
              </a>
            </nav>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Status Indicators</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 border border-green-200 bg-green-50 rounded-lg text-green-800">
              <Check size={16} />
              <span className="text-sm">Operation completed successfully</span>
            </div>
            <div className="flex items-center gap-2 p-3 border border-yellow-200 bg-yellow-50 rounded-lg text-yellow-800">
              <AlertTriangle size={16} />
              <span className="text-sm">Please review your settings</span>
            </div>
            <div className="flex items-center gap-2 p-3 border border-red-200 bg-red-50 rounded-lg text-red-800">
              <X size={16} />
              <span className="text-sm">Unable to process request</span>
            </div>
            <div className="flex items-center gap-2 p-3 border border-blue-200 bg-blue-50 rounded-lg text-blue-800">
              <Info size={16} />
              <span className="text-sm">New features are now available</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Icon-only Actions</h4>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-muted">
              <Heart size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-muted">
              <Star size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-muted">
              <Share size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-muted">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const IconGuidelines: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">Icon Guidelines</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Best practices for using icons effectively in your interface.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 bg-muted/30">
          <h4 className="text-base font-medium mb-3">Icon Library: Lucide React</h4>
          <p className="text-sm text-muted-foreground mb-3">
            We use Lucide React as our primary icon library for its consistency, accessibility, and comprehensive coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium mb-2">Advantages</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 1000+ consistent icons</li>
                <li>• SVG-based, infinitely scalable</li>
                <li>• Tree-shakeable imports</li>
                <li>• Active development</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Usage</div>
              <div className="bg-muted rounded p-2 text-xs font-mono">
                import {'{ Settings }'} from 'lucide-react'
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-medium text-green-700 dark:text-green-400">✓ Best Practices</h4>
            <div className="space-y-3">
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Use consistent sizing</div>
                <div className="text-xs text-muted-foreground">16px for inline, 20px for buttons, 24px for navigation</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Align with text baseline</div>
                <div className="text-xs text-muted-foreground">Icons next to text should align to the text baseline</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Provide adequate touch targets</div>
                <div className="text-xs text-muted-foreground">Icon buttons should be at least 44px × 44px</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium text-red-700 dark:text-red-400">✗ Avoid</h4>
            <div className="space-y-3">
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Mixing icon libraries</div>
                <div className="text-xs text-muted-foreground">Stick to one icon family for visual consistency</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Using icons without context</div>
                <div className="text-xs text-muted-foreground">Always provide labels or tooltips for icon-only actions</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Overwhelming the interface</div>
                <div className="text-xs text-muted-foreground">Too many icons can make interfaces cluttered and confusing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">a11y</div>
            <div>
              <div className="text-sm font-medium mb-1">Accessibility</div>
              <div className="text-xs text-muted-foreground">
                Icons should be treated as decorative elements. Important information should never be conveyed through icons alone.
                Always provide text alternatives or labels for screen readers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
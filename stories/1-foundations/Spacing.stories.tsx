import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'A-Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SpacingExample = ({
  size,
  className,
  label,
  pixels
}: {
  size: string;
  className: string;
  label: string;
  pixels: string;
}) => (
  <div className="flex items-center gap-4 p-3 border rounded-lg">
    <div className="w-16 text-xs text-muted-foreground font-mono">{label}</div>
    <div className="flex items-center gap-2">
      <div className={`bg-primary ${className}`} />
      <div className="text-xs text-muted-foreground">{size}</div>
    </div>
    <div className="ml-auto text-xs text-muted-foreground font-mono">{pixels}</div>
  </div>
);

const PaddingExample = ({
  className,
  label,
  size
}: {
  className: string;
  label: string;
  size: string;
}) => (
  <div className="flex items-center gap-4 p-3 border rounded-lg">
    <div className="w-16 text-xs text-muted-foreground font-mono">{label}</div>
    <div className="bg-muted border rounded">
      <div className={`bg-primary/20 border border-dashed border-primary ${className}`}>
        <div className="bg-background border border-primary text-xs text-center py-1">
          content
        </div>
      </div>
    </div>
    <div className="ml-auto text-xs text-muted-foreground font-mono">{size}</div>
  </div>
);

export const SpacingScale: Story = {
  render: () => {
    const spaces = [
      { label: 'px', size: '1px', className: 'w-px h-4', pixels: '1px' },
      { label: '0.5', size: '0.125rem', className: 'w-0.5 h-4', pixels: '2px' },
      { label: '1', size: '0.25rem', className: 'w-1 h-4', pixels: '4px' },
      { label: '1.5', size: '0.375rem', className: 'w-1.5 h-4', pixels: '6px' },
      { label: '2', size: '0.5rem', className: 'w-2 h-4', pixels: '8px' },
      { label: '2.5', size: '0.625rem', className: 'w-2.5 h-4', pixels: '10px' },
      { label: '3', size: '0.75rem', className: 'w-3 h-4', pixels: '12px' },
      { label: '3.5', size: '0.875rem', className: 'w-3.5 h-4', pixels: '14px' },
      { label: '4', size: '1rem', className: 'w-4 h-4', pixels: '16px' },
      { label: '5', size: '1.25rem', className: 'w-5 h-4', pixels: '20px' },
      { label: '6', size: '1.5rem', className: 'w-6 h-4', pixels: '24px' },
      { label: '8', size: '2rem', className: 'w-8 h-4', pixels: '32px' },
      { label: '10', size: '2.5rem', className: 'w-10 h-4', pixels: '40px' },
      { label: '12', size: '3rem', className: 'w-12 h-4', pixels: '48px' },
      { label: '16', size: '4rem', className: 'w-16 h-4', pixels: '64px' },
      { label: '20', size: '5rem', className: 'w-20 h-4', pixels: '80px' },
      { label: '24', size: '6rem', className: 'w-24 h-4', pixels: '96px' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Spacing Scale</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Base spacing units used for margins, padding, gaps, and positioning throughout the design system.
          </p>
        </div>
        <div className="space-y-2">
          {spaces.map((space) => (
            <SpacingExample key={space.label} {...space} />
          ))}
        </div>
      </div>
    );
  },
};

export const Padding: Story = {
  render: () => {
    const paddings = [
      { label: 'p-1', className: 'p-1', size: '0.25rem' },
      { label: 'p-2', className: 'p-2', size: '0.5rem' },
      { label: 'p-3', className: 'p-3', size: '0.75rem' },
      { label: 'p-4', className: 'p-4', size: '1rem' },
      { label: 'p-6', className: 'p-6', size: '1.5rem' },
      { label: 'p-8', className: 'p-8', size: '2rem' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Padding Examples</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Common padding utilities shown with visual examples.
          </p>
        </div>
        <div className="space-y-4">
          {paddings.map((padding) => (
            <PaddingExample key={padding.label} {...padding} />
          ))}
        </div>
      </div>
    );
  },
};

export const Margins: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Margin Examples</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Visual demonstration of margin utilities and their effects on layout.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-3">Vertical Margins</h4>
          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="bg-background border rounded p-2 text-sm">Block 1</div>
            <div className="bg-background border rounded p-2 text-sm mt-2">Block 2 (mt-2)</div>
            <div className="bg-background border rounded p-2 text-sm mt-4">Block 3 (mt-4)</div>
            <div className="bg-background border rounded p-2 text-sm mt-8">Block 4 (mt-8)</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Horizontal Margins</h4>
          <div className="border rounded-lg p-4 bg-muted/30 flex flex-wrap items-center gap-y-2">
            <div className="bg-background border rounded p-2 text-sm">Block 1</div>
            <div className="bg-background border rounded p-2 text-sm ml-2">Block 2 (ml-2)</div>
            <div className="bg-background border rounded p-2 text-sm ml-4">Block 3 (ml-4)</div>
            <div className="bg-background border rounded p-2 text-sm ml-8">Block 4 (ml-8)</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Gaps: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Gap Utilities</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Gap utilities for flexbox and grid layouts.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-3">Flex Gap</h4>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-muted-foreground mb-2">gap-2</div>
              <div className="flex gap-2 p-3 border rounded-lg bg-muted/30">
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-2">gap-4</div>
              <div className="flex gap-4 p-3 border rounded-lg bg-muted/30">
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-2">gap-8</div>
              <div className="flex gap-8 p-3 border rounded-lg bg-muted/30">
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
                <div className="bg-background border rounded p-2 text-sm">Item</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Grid Gap</h4>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-muted-foreground mb-2">gap-3</div>
              <div className="grid grid-cols-3 gap-3 p-3 border rounded-lg bg-muted/30">
                <div className="bg-background border rounded p-2 text-sm text-center">1</div>
                <div className="bg-background border rounded p-2 text-sm text-center">2</div>
                <div className="bg-background border rounded p-2 text-sm text-center">3</div>
                <div className="bg-background border rounded p-2 text-sm text-center">4</div>
                <div className="bg-background border rounded p-2 text-sm text-center">5</div>
                <div className="bg-background border rounded p-2 text-sm text-center">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Common Spacing Patterns</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Real-world examples of how spacing is used in common UI patterns.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-3">Card Content</h4>
          <div className="border rounded-lg bg-card text-card-foreground shadow-sm max-w-sm">
            <div className="p-6">
              <h3 className="font-semibold leading-none tracking-tight mb-1.5">Card Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Card description with proper spacing.</p>
              <div className="flex gap-2">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                  Action
                </button>
                <button className="border border-input px-4 py-2 rounded-md text-sm font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Form Layout</h4>
          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Password</label>
              <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="pt-2">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium w-full">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
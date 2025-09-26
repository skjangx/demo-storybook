import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'A-Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value, description }: { name: string; value: string; description?: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg border">
    <div
      className="w-12 h-12 rounded-md border shadow-sm"
      style={{ backgroundColor: value }}
    />
    <div>
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-muted-foreground font-mono">{value}</div>
      {description && <div className="text-xs text-muted-foreground mt-1">{description}</div>}
    </div>
  </div>
);

const ColorGrid = ({ colors }: { colors: Array<{ name: string; value: string; description?: string }> }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {colors.map((color) => (
      <ColorSwatch key={color.name} {...color} />
    ))}
  </div>
);

export const Primary: Story = {
  render: () => {
    const colors = [
      { name: 'Background', value: 'hsl(var(--background))', description: 'Main page background' },
      { name: 'Foreground', value: 'hsl(var(--foreground))', description: 'Primary text color' },
      { name: 'Primary', value: 'hsl(var(--primary))', description: 'Main brand color' },
      { name: 'Primary Foreground', value: 'hsl(var(--primary-foreground))', description: 'Text on primary' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Primary Colors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Core colors that define your brand identity and primary interface elements.
          </p>
        </div>
        <ColorGrid colors={colors} />
      </div>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const colors = [
      { name: 'Secondary', value: 'hsl(var(--secondary))', description: 'Secondary actions and elements' },
      { name: 'Secondary Foreground', value: 'hsl(var(--secondary-foreground))', description: 'Text on secondary' },
      { name: 'Muted', value: 'hsl(var(--muted))', description: 'Subtle backgrounds' },
      { name: 'Muted Foreground', value: 'hsl(var(--muted-foreground))', description: 'Secondary text' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Secondary Colors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Supporting colors for secondary actions, muted content, and subtle backgrounds.
          </p>
        </div>
        <ColorGrid colors={colors} />
      </div>
    );
  },
};

export const Accent: Story = {
  render: () => {
    const colors = [
      { name: 'Accent', value: 'hsl(var(--accent))', description: 'Highlight color for emphasis' },
      { name: 'Accent Foreground', value: 'hsl(var(--accent-foreground))', description: 'Text on accent' },
      { name: 'Destructive', value: 'hsl(var(--destructive))', description: 'Error and danger states' },
      { name: 'Destructive Foreground', value: 'hsl(var(--destructive-foreground))', description: 'Text on destructive' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Accent Colors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Colors used for emphasis, highlighting, and state communication.
          </p>
        </div>
        <ColorGrid colors={colors} />
      </div>
    );
  },
};

export const Interface: Story = {
  render: () => {
    const colors = [
      { name: 'Border', value: 'hsl(var(--border))', description: 'Default borders' },
      { name: 'Input', value: 'hsl(var(--input))', description: 'Input field borders' },
      { name: 'Ring', value: 'hsl(var(--ring))', description: 'Focus rings and outlines' },
      { name: 'Card', value: 'hsl(var(--card))', description: 'Card backgrounds' },
      { name: 'Card Foreground', value: 'hsl(var(--card-foreground))', description: 'Text on cards' },
      { name: 'Popover', value: 'hsl(var(--popover))', description: 'Popover backgrounds' },
      { name: 'Popover Foreground', value: 'hsl(var(--popover-foreground))', description: 'Text in popovers' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Interface Colors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Structural colors for borders, inputs, cards, and other interface elements.
          </p>
        </div>
        <ColorGrid colors={colors} />
      </div>
    );
  },
};

export const Gradients: Story = {
  render: () => {
    const gradients = [
      { name: 'Primary Gradient', class: 'bg-gradient-to-r from-primary to-primary/80', description: 'Brand gradient for hero sections' },
      { name: 'Secondary Gradient', class: 'bg-gradient-to-r from-secondary to-secondary/80', description: 'Subtle gradient for backgrounds' },
      { name: 'Accent Gradient', class: 'bg-gradient-to-r from-accent to-accent/80', description: 'Highlight gradient for features' },
      { name: 'Destructive Gradient', class: 'bg-gradient-to-r from-destructive to-destructive/80', description: 'Warning gradient for alerts' },
      { name: 'Muted Gradient', class: 'bg-gradient-to-r from-muted to-muted/80', description: 'Neutral gradient for subtle backgrounds' },
      { name: 'Rainbow Gradient', class: 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500', description: 'Multi-color gradient for special effects' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Gradient Combinations</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Pre-defined gradient combinations for backgrounds, buttons, and decorative elements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="space-y-3">
              <div className={`h-24 rounded-lg ${gradient.class} flex items-center justify-center`}>
                <div className="text-white font-medium text-sm">{gradient.name}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{gradient.description}</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">{gradient.class}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ContrastDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Color Contrast & Accessibility</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Demonstration of proper color contrast ratios for accessibility compliance.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Text on Backgrounds</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-background border rounded-lg">
              <div className="text-foreground font-medium">Primary Text</div>
              <div className="text-muted-foreground text-sm">Secondary text</div>
              <div className="text-xs text-muted-foreground mt-1">WCAG AA ✓</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-muted-foreground font-medium">Muted Background</div>
              <div className="text-muted-foreground/80 text-sm">Subtle text</div>
              <div className="text-xs text-muted-foreground mt-1">WCAG AA ✓</div>
            </div>
            <div className="p-4 bg-primary text-primary-foreground rounded-lg">
              <div className="font-medium">Primary Background</div>
              <div className="text-primary-foreground/90 text-sm">Light text</div>
              <div className="text-xs text-primary-foreground/80 mt-1">WCAG AAA ✓</div>
            </div>
            <div className="p-4 bg-destructive text-destructive-foreground rounded-lg">
              <div className="font-medium">Destructive Background</div>
              <div className="text-destructive-foreground/90 text-sm">Error text</div>
              <div className="text-xs text-destructive-foreground/80 mt-1">WCAG AAA ✓</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Button States</h4>
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">
              Secondary Button
            </button>
            <button className="px-4 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground">
              Outline Button
            </button>
            <button className="px-4 py-2 text-muted-foreground">
              Ghost Button
            </button>
            <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md">
              Destructive Button
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Semantic Color Usage</h3>
        <p className="text-sm text-muted-foreground mb-4">
          How colors communicate meaning and status in the interface.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Status Colors</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-green-200 bg-green-50 rounded-lg text-green-800">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Success</div>
                  <div className="text-xs">Completed actions, confirmations</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-yellow-200 bg-yellow-50 rounded-lg text-yellow-800">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Warning</div>
                  <div className="text-xs">Caution, requires attention</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-red-200 bg-red-50 rounded-lg text-red-800">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Error</div>
                  <div className="text-xs">Failed actions, validation errors</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-blue-200 bg-blue-50 rounded-lg text-blue-800">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Info</div>
                  <div className="text-xs">Helpful information, tips</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Action Colors</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Primary Actions</div>
                  <div className="text-xs text-muted-foreground">Save, Submit, Continue</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-border rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-foreground rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Secondary Actions</div>
                  <div className="text-xs text-muted-foreground">Cancel, Back, Skip</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-destructive rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Destructive Actions</div>
                  <div className="text-xs text-muted-foreground">Delete, Remove, Reset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => {
    const allColors = [
      { name: 'Background', value: 'hsl(var(--background))', description: 'Main page background' },
      { name: 'Foreground', value: 'hsl(var(--foreground))', description: 'Primary text color' },
      { name: 'Primary', value: 'hsl(var(--primary))', description: 'Main brand color' },
      { name: 'Primary Foreground', value: 'hsl(var(--primary-foreground))', description: 'Text on primary' },
      { name: 'Secondary', value: 'hsl(var(--secondary))', description: 'Secondary actions and elements' },
      { name: 'Secondary Foreground', value: 'hsl(var(--secondary-foreground))', description: 'Text on secondary' },
      { name: 'Muted', value: 'hsl(var(--muted))', description: 'Subtle backgrounds' },
      { name: 'Muted Foreground', value: 'hsl(var(--muted-foreground))', description: 'Secondary text' },
      { name: 'Accent', value: 'hsl(var(--accent))', description: 'Highlight color for emphasis' },
      { name: 'Accent Foreground', value: 'hsl(var(--accent-foreground))', description: 'Text on accent' },
      { name: 'Destructive', value: 'hsl(var(--destructive))', description: 'Error and danger states' },
      { name: 'Destructive Foreground', value: 'hsl(var(--destructive-foreground))', description: 'Text on destructive' },
      { name: 'Border', value: 'hsl(var(--border))', description: 'Default borders' },
      { name: 'Input', value: 'hsl(var(--input))', description: 'Input field borders' },
      { name: 'Ring', value: 'hsl(var(--ring))', description: 'Focus rings and outlines' },
      { name: 'Card', value: 'hsl(var(--card))', description: 'Card backgrounds' },
      { name: 'Card Foreground', value: 'hsl(var(--card-foreground))', description: 'Text on cards' },
      { name: 'Popover', value: 'hsl(var(--popover))', description: 'Popover backgrounds' },
      { name: 'Popover Foreground', value: 'hsl(var(--popover-foreground))', description: 'Text in popovers' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Complete Color Palette</h3>
          <p className="text-sm text-muted-foreground mb-4">
            All available colors in the design system. These are semantic colors that automatically adapt to light/dark themes.
          </p>
        </div>
        <ColorGrid colors={allColors} />

        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">💡</div>
            <div>
              <div className="text-sm font-medium mb-1">CSS Variables</div>
              <div className="text-xs text-muted-foreground">
                All colors use CSS variables that automatically adapt to light and dark themes.
                Use these semantic names rather than hardcoded color values for consistent theming.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
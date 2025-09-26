import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: '1-Foundations/Grid',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const GridCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-primary/10 border border-primary/20 rounded p-3 text-center text-sm font-medium ${className}`}>
    {children}
  </div>
);

const ContainerExample = ({ children, title, className = "" }: { children: React.ReactNode; title: string; className?: string }) => (
  <div className="space-y-4 p-6">
    <h4 className="text-sm font-medium">{title}</h4>
    <div className={`border border-dashed border-primary/30 ${className}`}>
      {children}
    </div>
  </div>
);

export const ResponsiveBreakpoints: Story = {
  render: () => {
    const breakpoints = [
      { name: 'sm', minWidth: '640px', description: 'Small devices (phones)', example: 'min-width: 640px' },
      { name: 'md', minWidth: '768px', description: 'Medium devices (tablets)', example: 'min-width: 768px' },
      { name: 'lg', minWidth: '1024px', description: 'Large devices (laptops)', example: 'min-width: 1024px' },
      { name: 'xl', minWidth: '1280px', description: 'Extra large devices (desktops)', example: 'min-width: 1280px' },
      { name: '2xl', minWidth: '1536px', description: 'Extra extra large devices', example: 'min-width: 1536px' },
    ];

    return (
      <div className="space-y-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Responsive Breakpoints</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Tailwind's breakpoint system provides consistent responsive behavior across all screen sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakpoints.map((bp) => (
            <div key={bp.name} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">{bp.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{bp.minWidth}</div>
              </div>
              <div className="text-xs text-muted-foreground">{bp.description}</div>
              <div className="bg-muted rounded p-2 text-xs font-mono">{bp.example}</div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 bg-muted/30">
          <h4 className="text-base font-medium mb-3">Mobile-First Approach</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Tailwind uses a mobile-first breakpoint system. Classes without prefixes apply to all screen sizes,
            while prefixed classes apply at their breakpoint and above.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium mb-2">Example Usage</div>
              <div className="bg-muted rounded p-3 text-xs font-mono space-y-1">
                <div>w-full</div>
                <div>md:w-1/2</div>
                <div>lg:w-1/3</div>
              </div>
            </div>
            <div>
              <div className="font-medium mb-2">Behavior</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Mobile: full width</li>
                <li>• Tablet: half width</li>
                <li>• Desktop: one-third width</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const GridColumns: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Grid Column System</h3>
        <p className="text-sm text-muted-foreground mb-6">
          CSS Grid and Flexbox utilities for creating flexible layouts.
        </p>
      </div>

      <div className="space-y-8">
        <ContainerExample title="12-Column Grid" className="p-4">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <GridCell key={i}>{i + 1}</GridCell>
            ))}
          </div>
        </ContainerExample>

        <ContainerExample title="Common Grid Layouts" className="space-y-4 p-4">
          <div>
            <div className="text-xs text-muted-foreground mb-2">Two Columns (grid-cols-2)</div>
            <div className="grid grid-cols-2 gap-4">
              <GridCell>Column 1</GridCell>
              <GridCell>Column 2</GridCell>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">Three Columns (grid-cols-3)</div>
            <div className="grid grid-cols-3 gap-4">
              <GridCell>Column 1</GridCell>
              <GridCell>Column 2</GridCell>
              <GridCell>Column 3</GridCell>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">Four Columns (grid-cols-4)</div>
            <div className="grid grid-cols-4 gap-4">
              <GridCell>Column 1</GridCell>
              <GridCell>Column 2</GridCell>
              <GridCell>Column 3</GridCell>
              <GridCell>Column 4</GridCell>
            </div>
          </div>
        </ContainerExample>

        <ContainerExample title="Column Spanning" className="p-4">
          <div className="grid grid-cols-6 gap-4">
            <GridCell className="col-span-2">col-span-2</GridCell>
            <GridCell className="col-span-4">col-span-4</GridCell>
            <GridCell className="col-span-3">col-span-3</GridCell>
            <GridCell className="col-span-3">col-span-3</GridCell>
            <GridCell className="col-span-1">1</GridCell>
            <GridCell className="col-span-5">col-span-5</GridCell>
          </div>
        </ContainerExample>
      </div>
    </div>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Grid Layouts</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Grid layouts that adapt to different screen sizes using responsive prefixes.
        </p>
      </div>

      <div className="space-y-8">
        <ContainerExample title="Responsive Card Grid" className="p-4">
          <div className="text-xs text-muted-foreground mb-4">
            1 column on mobile → 2 columns on tablet → 3 columns on desktop → 4 columns on xl
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="p-4 bg-card border rounded-lg">
                <div className="font-medium text-sm mb-2">Card {i + 1}</div>
                <div className="text-xs text-muted-foreground">Responsive card content that adapts to grid.</div>
              </div>
            ))}
          </div>
        </ContainerExample>

        <ContainerExample title="Responsive Column Spans" className="p-4">
          <div className="text-xs text-muted-foreground mb-4">
            Spans adjust based on screen size for optimal content display
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            <GridCell className="md:col-span-6 lg:col-span-8">Main Content</GridCell>
            <GridCell className="md:col-span-6 lg:col-span-4">Sidebar</GridCell>
            <GridCell className="md:col-span-2 lg:col-span-4">Item 1</GridCell>
            <GridCell className="md:col-span-2 lg:col-span-4">Item 2</GridCell>
            <GridCell className="md:col-span-2 lg:col-span-4">Item 3</GridCell>
          </div>
        </ContainerExample>

        <ContainerExample title="Auto-Fit Grid" className="p-4">
          <div className="text-xs text-muted-foreground mb-4">
            Grid auto-fills available space with minimum column width
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <GridCell key={i}>Auto Item {i + 1}</GridCell>
            ))}
          </div>
        </ContainerExample>
      </div>
    </div>
  ),
};

export const FlexboxLayouts: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Flexbox Layouts</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Flexible layouts for navigation, forms, and component arrangements.
        </p>
      </div>

      <div className="space-y-8">
        <ContainerExample title="Horizontal Layout (flex-row)" className="p-4">
          <div className="flex gap-4">
            <GridCell className="flex-1">Flexible Item 1</GridCell>
            <GridCell className="flex-1">Flexible Item 2</GridCell>
            <GridCell className="flex-1">Flexible Item 3</GridCell>
          </div>
        </ContainerExample>

        <ContainerExample title="Vertical Layout (flex-col)" className="p-4">
          <div className="flex flex-col gap-4 max-w-xs">
            <GridCell>Top Item</GridCell>
            <GridCell>Middle Item</GridCell>
            <GridCell>Bottom Item</GridCell>
          </div>
        </ContainerExample>

        <ContainerExample title="Space Distribution" className="space-y-4 p-4">
          <div>
            <div className="text-xs text-muted-foreground mb-2">justify-between</div>
            <div className="flex justify-between gap-4">
              <GridCell>Start</GridCell>
              <GridCell>Center</GridCell>
              <GridCell>End</GridCell>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">justify-center</div>
            <div className="flex justify-center gap-4">
              <GridCell>Centered</GridCell>
              <GridCell>Items</GridCell>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">justify-around</div>
            <div className="flex justify-around gap-4">
              <GridCell>Around</GridCell>
              <GridCell>Spacing</GridCell>
              <GridCell>Applied</GridCell>
            </div>
          </div>
        </ContainerExample>

        <ContainerExample title="Alignment" className="space-y-4 p-4">
          <div>
            <div className="text-xs text-muted-foreground mb-2">items-center</div>
            <div className="flex items-center gap-4 h-20 bg-muted/50 rounded">
              <GridCell>Small</GridCell>
              <GridCell className="py-6">Taller Item</GridCell>
              <GridCell>Small</GridCell>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">items-start</div>
            <div className="flex items-start gap-4 h-20 bg-muted/50 rounded p-2">
              <GridCell>Top</GridCell>
              <GridCell className="py-6">Aligned</GridCell>
              <GridCell>Items</GridCell>
            </div>
          </div>
        </ContainerExample>
      </div>
    </div>
  ),
};

export const LayoutPatterns: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Common Layout Patterns</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Practical layout patterns for typical web application interfaces.
        </p>
      </div>

      <div className="space-y-8">
        <ContainerExample title="Header + Main + Footer" className="p-4">
          <div className="min-h-[300px] flex flex-col">
            <div className="bg-primary/10 border border-primary/20 p-4 rounded">
              <div className="text-sm font-medium">Header</div>
              <div className="text-xs text-muted-foreground">Navigation, logo, user menu</div>
            </div>
            <div className="flex-1 bg-muted/30 border-x border-primary/20 p-4 my-0">
              <div className="text-sm font-medium">Main Content</div>
              <div className="text-xs text-muted-foreground">Primary content area that grows to fill available space</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded">
              <div className="text-sm font-medium">Footer</div>
              <div className="text-xs text-muted-foreground">Links, copyright, additional info</div>
            </div>
          </div>
        </ContainerExample>

        <ContainerExample title="Sidebar Layout" className="p-4">
          <div className="flex gap-4 min-h-[200px]">
            <div className="w-64 bg-primary/10 border border-primary/20 rounded p-4">
              <div className="text-sm font-medium mb-2">Sidebar</div>
              <div className="text-xs text-muted-foreground">Navigation, filters, secondary actions</div>
            </div>
            <div className="flex-1 bg-muted/30 border border-primary/20 rounded p-4">
              <div className="text-sm font-medium mb-2">Main Content</div>
              <div className="text-xs text-muted-foreground">Primary content that takes remaining space</div>
            </div>
          </div>
        </ContainerExample>

        <ContainerExample title="Card Grid with Sidebar" className="p-4">
          <div className="flex gap-6">
            <div className="w-56 bg-primary/10 border border-primary/20 rounded p-4">
              <div className="text-sm font-medium mb-2">Filters</div>
              <div className="space-y-2">
                <div className="text-xs p-2 bg-background rounded border">Category</div>
                <div className="text-xs p-2 bg-background rounded border">Price Range</div>
                <div className="text-xs p-2 bg-background rounded border">Brand</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="p-4 bg-card border rounded-lg">
                    <div className="w-full h-20 bg-muted rounded mb-3"></div>
                    <div className="font-medium text-sm">Product {i + 1}</div>
                    <div className="text-xs text-muted-foreground">Product description</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerExample>

        <ContainerExample title="Dashboard Layout" className="p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['Users', 'Revenue', 'Orders', 'Growth'].map((metric) => (
                <div key={metric} className="p-4 bg-card border rounded-lg">
                  <div className="text-xs text-muted-foreground">{metric}</div>
                  <div className="text-lg font-bold">1,234</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 p-4 bg-card border rounded-lg">
                <div className="text-sm font-medium mb-2">Chart</div>
                <div className="h-32 bg-muted/50 rounded"></div>
              </div>
              <div className="p-4 bg-card border rounded-lg">
                <div className="text-sm font-medium mb-2">Recent Activity</div>
                <div className="space-y-2">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="text-xs p-2 bg-muted/50 rounded">
                      Activity item {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerExample>
      </div>
    </div>
  ),
};

export const GridGuidelines: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl p-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Grid System Guidelines</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Best practices for creating consistent, responsive layouts.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 bg-muted/30">
          <h4 className="text-base font-medium mb-3">When to Use Grid vs Flexbox</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-medium text-sm mb-3 text-blue-700 dark:text-blue-400">Use CSS Grid for:</div>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• Two-dimensional layouts (rows and columns)</li>
                <li>• Complex layout patterns</li>
                <li>• Card grids and dashboards</li>
                <li>• When you need precise control over placement</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-sm mb-3 text-purple-700 dark:text-purple-400">Use Flexbox for:</div>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• One-dimensional layouts (row or column)</li>
                <li>• Navigation bars and menus</li>
                <li>• Centering content</li>
                <li>• Distributing space between items</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-medium text-green-700 dark:text-green-400">✓ Best Practices</h4>
            <div className="space-y-3">
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Start mobile-first</div>
                <div className="text-xs text-muted-foreground">Design for small screens first, then scale up</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Use consistent gaps</div>
                <div className="text-xs text-muted-foreground">Maintain uniform spacing between grid items</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Consider content hierarchy</div>
                <div className="text-xs text-muted-foreground">Use grid spans to emphasize important content</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium text-red-700 dark:text-red-400">✗ Avoid</h4>
            <div className="space-y-3">
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Too many breakpoints</div>
                <div className="text-xs text-muted-foreground">Keep responsive behavior simple and predictable</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Fixed pixel widths</div>
                <div className="text-xs text-muted-foreground">Use relative units for responsive design</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Ignoring content flow</div>
                <div className="text-xs text-muted-foreground">Ensure logical reading order on all screen sizes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">💡</div>
            <div>
              <div className="text-sm font-medium mb-1">Performance Tip</div>
              <div className="text-xs text-muted-foreground">
                CSS Grid and Flexbox are highly optimized by modern browsers. Use them freely for layout
                without worrying about performance impact on typical web applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
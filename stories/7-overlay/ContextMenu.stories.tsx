import type { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Copy,
  Scissors,
  Clipboard,
  Edit,
  Trash2,
  Share,
  Download,
  Bookmark,
  Star,
  Heart,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Move,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Settings,
  Info,
  HelpCircle,
  ExternalLink,
  RefreshCw,
  Archive,
  Folder,
  File,
  Image,
  Video,
  Music,
  FileText,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof ContextMenu> = {
  title: '7-Overlay/Context Menu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Context Menu Component

A context menu component that appears on right-click, providing contextual actions for elements. Built on top of Radix UI Context Menu primitives.

## Features

- **Right-Click Activation**: Triggered by right-clicking on the target element
- **Keyboard Navigation**: Full keyboard support with arrow keys and shortcuts
- **Nested Menus**: Support for sub-menus and complex menu structures
- **Rich Content**: Support for icons, shortcuts, checkboxes, and radio buttons
- **Accessible**: Full screen reader support and ARIA compliance
- **Customizable**: Flexible styling and positioning options

## Usage

Context menus are perfect for:
- File and folder operations
- Text editing actions
- Image and media controls
- Application-specific actions
- Quick access to common tasks
- Power user features
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[500px] w-full max-w-4xl p-8">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Context Menu
export const Default: Story = {
  render: () => (
    <div className="flex justify-center">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm cursor-pointer hover:bg-gray-50 transition-colors">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuItem onClick={() => toast.success("Back action triggered")}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            <RotateCw className="h-4 w-4 mr-2" />
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => toast.success("Page reloaded")}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Settings className="h-4 w-4 mr-2" />
              More Tools
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuItem onClick={() => toast.success("Page saved")}>
                Save Page...
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success("Shortcut created")}>
                Create Shortcut...
              </ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success("Developer tools opened")}>
                Developer Tools
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            <Bookmark className="h-4 w-4 mr-2" />
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>
            <ExternalLink className="h-4 w-4 mr-2" />
            Show Full URLs
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

// File Context Menu
export const FileOperations: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: 'Document.pdf', icon: FileText, type: 'PDF' },
          { name: 'Image.jpg', icon: Image, type: 'Image' },
          { name: 'Video.mp4', icon: Video, type: 'Video' },
        ].map((file, index) => (
          <ContextMenu key={index}>
            <ContextMenuTrigger asChild>
              <Card className="w-32 h-32 cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <file.icon className="h-8 w-8 mb-2 text-gray-600" />
                  <p className="text-xs text-center truncate w-full">{file.name}</p>
                  <Badge variant="secondary" className="text-xs mt-1">{file.type}</Badge>
                </CardContent>
              </Card>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem onClick={() => toast.success(`Opening ${file.name}`)}>
                <Eye className="h-4 w-4 mr-2" />
                Open
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Opened ${file.name} with default app`)}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Open with...
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Copied ${file.name}`)}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Cut ${file.name}`)}>
                <Scissors className="h-4 w-4 mr-2" />
                Cut
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Renamed ${file.name}`)}>
                <Edit className="h-4 w-4 mr-2" />
                Rename
                <ContextMenuShortcut>F2</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Downloaded ${file.name}`)}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Shared ${file.name}`)}>
                <Share className="h-4 w-4 mr-2" />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Moved ${file.name} to trash`)}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
                <ContextMenuShortcut>Del</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
    </div>
  ),
};

// Text Editor Context Menu
export const TextEditor: Story = {
  render: () => (
    <div className="flex justify-center">
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="w-96 h-48 border rounded-lg p-4 bg-white cursor-text">
            <p className="text-sm text-gray-600 mb-2">Right-click in this text area</p>
            <p className="text-sm">
              This is some sample text that you can select and perform various editing operations on.
              The context menu will provide standard text editing actions like copy, paste, and formatting options.
            </p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem onClick={() => toast.success("Undoing last action")}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Undo
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => toast.success("Redoing last action")}>
            <RotateCw className="h-4 w-4 mr-2" />
            Redo
            <ContextMenuShortcut>⌘⇧Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem onClick={() => toast.success("Copied text")}>
            <Copy className="h-4 w-4 mr-2" />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => toast.success("Cut text")}>
            <Scissors className="h-4 w-4 mr-2" />
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => toast.success("Pasted text")}>
            <Clipboard className="h-4 w-4 mr-2" />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Edit className="h-4 w-4 mr-2" />
              Format
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuItem onClick={() => toast.success("Applied bold formatting")}>
                <strong>Bold</strong>
                <ContextMenuShortcut>⌘B</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success("Applied italic formatting")}>
                <em>Italic</em>
                <ContextMenuShortcut>⌘I</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success("Applied underline formatting")}>
                <u>Underline</u>
                <ContextMenuShortcut>⌘U</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

// Image Context Menu
export const ImageViewer: Story = {
  render: () => {
    const [imageSettings, setImageSettings] = useState({
      showMetadata: true,
      fitToScreen: false,
      highQuality: true,
    });

    return (
      <div className="flex justify-center">
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="relative">
              <div className="w-80 h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                <div className="text-white text-6xl">🖼️</div>
              </div>
              <Badge className="absolute top-2 right-2">Sample Image</Badge>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuItem onClick={() => toast.success("Zooming in")}>
              <ZoomIn className="h-4 w-4 mr-2" />
              Zoom In
              <ContextMenuShortcut>⌘+</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem onClick={() => toast.success("Zooming out")}>
              <ZoomOut className="h-4 w-4 mr-2" />
              Zoom Out
              <ContextMenuShortcut>⌘-</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem onClick={() => toast.success("Reset zoom to 100%")}>
              <Maximize className="h-4 w-4 mr-2" />
              Actual Size
              <ContextMenuShortcut>⌘0</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => toast.success("Rotating image left")}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Rotate Left
            </ContextMenuItem>
            <ContextMenuItem onClick={() => toast.success("Rotating image right")}>
              <RotateCw className="h-4 w-4 mr-2" />
              Rotate Right
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={imageSettings.showMetadata}
              onCheckedChange={(checked) => {
                setImageSettings(prev => ({ ...prev, showMetadata: checked }));
                toast.success(checked ? "Metadata shown" : "Metadata hidden");
              }}
            >
              <Info className="h-4 w-4 mr-2" />
              Show Metadata
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={imageSettings.fitToScreen}
              onCheckedChange={(checked) => {
                setImageSettings(prev => ({ ...prev, fitToScreen: checked }));
                toast.success(checked ? "Fit to screen enabled" : "Fit to screen disabled");
              }}
            >
              <Maximize className="h-4 w-4 mr-2" />
              Fit to Screen
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup
              value={imageSettings.highQuality ? "high" : "low"}
              onValueChange={(value) => {
                setImageSettings(prev => ({ ...prev, highQuality: value === "high" }));
                toast.success(`Quality set to ${value}`);
              }}
            >
              <ContextMenuLabel>Quality</ContextMenuLabel>
              <ContextMenuRadioItem value="high">High Quality</ContextMenuRadioItem>
              <ContextMenuRadioItem value="low">Fast Loading</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => toast.success("Copied image")}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Image
            </ContextMenuItem>
            <ContextMenuItem onClick={() => toast.success("Saved image")}>
              <Download className="h-4 w-4 mr-2" />
              Save Image As...
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
};

// Media Player Context Menu
export const MediaPlayer: Story = {
  render: () => {
    const [playerState, setPlayerState] = useState({
      playing: false,
      volume: 0.8,
      muted: false,
      subtitles: true,
    });

    return (
      <div className="flex justify-center">
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Card className="w-96 h-56 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full p-6">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-lg font-semibold">Sample Video</h3>
                <p className="text-sm text-muted-foreground">Right-click for player controls</p>
              </CardContent>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem
              onClick={() => {
                setPlayerState(prev => ({ ...prev, playing: !prev.playing }));
                toast.success(playerState.playing ? "Paused" : "Playing");
              }}
            >
              {playerState.playing ? (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Play
                </>
              )}
              <ContextMenuShortcut>Space</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => toast.success("Skipped backward")}>
              <SkipBack className="h-4 w-4 mr-2" />
              Skip Backward
              <ContextMenuShortcut>←</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem onClick={() => toast.success("Skipped forward")}>
              <SkipForward className="h-4 w-4 mr-2" />
              Skip Forward
              <ContextMenuShortcut>→</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              onClick={() => {
                setPlayerState(prev => ({ ...prev, muted: !prev.muted }));
                toast.success(playerState.muted ? "Unmuted" : "Muted");
              }}
            >
              {playerState.muted ? (
                <>
                  <VolumeX className="h-4 w-4 mr-2" />
                  Unmute
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 mr-2" />
                  Mute
                </>
              )}
              <ContextMenuShortcut>M</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <Settings className="h-4 w-4 mr-2" />
                Playback Speed
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-32">
                <ContextMenuRadioGroup value="1">
                  <ContextMenuRadioItem value="0.5">0.5x</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="0.75">0.75x</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="1">Normal</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="1.25">1.25x</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="1.5">1.5x</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="2">2x</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuCheckboxItem
              checked={playerState.subtitles}
              onCheckedChange={(checked) => {
                setPlayerState(prev => ({ ...prev, subtitles: checked }));
                toast.success(checked ? "Subtitles enabled" : "Subtitles disabled");
              }}
            >
              Subtitles
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => toast.success("Entered fullscreen")}>
              <Maximize className="h-4 w-4 mr-2" />
              Fullscreen
              <ContextMenuShortcut>F</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
};

// Card Actions Context Menu
export const CardActions: Story = {
  render: () => (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: 'Project Alpha', status: 'Active', progress: 75 },
          { title: 'Project Beta', status: 'Pending', progress: 30 },
        ].map((project, index) => (
          <ContextMenu key={index}>
            <ContextMenuTrigger asChild>
              <Card className="w-56 cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem onClick={() => toast.success(`Opened ${project.title}`)}>
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Editing ${project.title}`)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Project
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Duplicated ${project.title}`)}>
                <Copy className="h-4 w-4 mr-2" />
                Duplicate
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Archived ${project.title}`)}>
                <Archive className="h-4 w-4 mr-2" />
                Archive
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Added ${project.title} to favorites`)}>
                <Star className="h-4 w-4 mr-2" />
                Add to Favorites
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Shared ${project.title}`)}>
                <Share className="h-4 w-4 mr-2" />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem
                onClick={() => toast.success(`Deleted ${project.title}`)}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
    </div>
  ),
};

// Multi-selection Context Menu
export const MultiSelection: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState(new Set([1, 3]));

    const items = [
      { id: 1, name: 'Document 1.pdf', icon: FileText },
      { id: 2, name: 'Image 1.jpg', icon: Image },
      { id: 3, name: 'Video 1.mp4', icon: Video },
      { id: 4, name: 'Audio 1.mp3', icon: Music },
    ];

    return (
      <div className="flex justify-center">
        <div className="w-96">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Items {Array.from(selectedItems).join(', ')} are selected. Right-click for bulk actions.
          </p>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div className="space-y-2 p-4 border rounded-lg cursor-pointer">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-2 rounded ${
                      selectedItems.has(item.id) ? 'bg-blue-50 border-blue-200 border' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setSelectedItems(prev => {
                        const newSet = new Set(prev);
                        if (newSet.has(item.id)) {
                          newSet.delete(item.id);
                        } else {
                          newSet.add(item.id);
                        }
                        return newSet;
                      });
                    }}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.name}</span>
                    {selectedItems.has(item.id) && (
                      <Badge variant="secondary" className="ml-auto text-xs">Selected</Badge>
                    )}
                  </div>
                ))}
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuLabel>
                Bulk Actions ({selectedItems.size} selected)
              </ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Downloaded ${selectedItems.size} items`)}>
                <Download className="h-4 w-4 mr-2" />
                Download Selected
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Moved ${selectedItems.size} items`)}>
                <Move className="h-4 w-4 mr-2" />
                Move to Folder...
              </ContextMenuItem>
              <ContextMenuItem onClick={() => toast.success(`Copied ${selectedItems.size} items`)}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Selected
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem onClick={() => toast.success(`Archived ${selectedItems.size} items`)}>
                <Archive className="h-4 w-4 mr-2" />
                Archive Selected
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => {
                  toast.success(`Deleted ${selectedItems.size} items`);
                  setSelectedItems(new Set());
                }}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
                <ContextMenuShortcut>Del</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    );
  },
};
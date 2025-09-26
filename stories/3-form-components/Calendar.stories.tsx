import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CalendarRange,
  CalendarClock,
  AlertCircle,
  Check,
  X,
  Plus,
  Plane,
  Hotel,
  Car,
  MapPin,
  Users,
  Star,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { format, addDays, addMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWeekend, isSameDay } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: '3-Form Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Calendar Component

Comprehensive date selection component with various picker patterns and use cases.

## Features

- **Single Date Selection** - Pick individual dates
- **Date Range Selection** - Select start and end dates
- **Multiple Dates** - Select multiple individual dates
- **Disabled Dates** - Block out unavailable dates
- **Date Presets** - Quick selection for common date ranges
- **Month/Year Navigation** - Jump to specific months/years
- **Internationalization** - Support for different locales
- **Mobile Friendly** - Touch-optimized date selection

## Integration Patterns

- **Popover Integration** - Date pickers in popover overlays
- **Form Integration** - Date inputs with validation
- **Badge Status** - Visual indicators for special dates
- **Card Layout** - Organized date selection interfaces
- **Tooltip Guidance** - Helpful information for date constraints
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex items-center justify-center min-h-[400px] w-full">
          <Story />
        </div>
        <Toaster />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Basic Calendar</CardTitle>
          <CardDescription>
            Select a single date from the calendar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          {date && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                Selected date: <strong>{format(date, 'PPP')}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const DatePicker: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Date Picker
          </CardTitle>
          <CardDescription>
            Click the button to select a date from the calendar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Event Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {date && (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm">
                Event scheduled for {format(date, 'PPPP')}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const DateRangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });

    const getDayCount = () => {
      if (dateRange?.from && dateRange?.to) {
        const days = Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return days;
      }
      return 0;
    };

    return (
      <Card className="w-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarRange className="h-5 w-5" />
            Date Range Picker
          </CardTitle>
          <CardDescription>
            Select a start and end date for your trip
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, 'LLL dd, y')} -{' '}
                      {format(dateRange.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(dateRange.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Select date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          {dateRange?.from && dateRange?.to && (
            <div className="space-y-3">
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Check-in</p>
                  <p className="text-sm font-medium">
                    {format(dateRange.from, 'PPP')}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Check-out</p>
                  <p className="text-sm font-medium">
                    {format(dateRange.to, 'PPP')}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Duration</span>
                <Badge>{getDayCount()} nights</Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    const presets = [
      {
        label: 'Today',
        value: new Date(),
        icon: CalendarIcon,
      },
      {
        label: 'Tomorrow',
        value: addDays(new Date(), 1),
        icon: CalendarIcon,
      },
      {
        label: 'In a week',
        value: addDays(new Date(), 7),
        icon: CalendarDays,
      },
      {
        label: 'In a month',
        value: addMonths(new Date(), 1),
        icon: CalendarDays,
      },
    ];

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Date Selection with Presets</CardTitle>
          <CardDescription>
            Quick date selection for common time periods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto p-0" align="start">
              <div className="p-3 border-r">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    QUICK SELECT
                  </p>
                  {presets.map((preset) => {
                    const IconComponent = preset.icon;
                    const isSelected = date && isSameDay(date, preset.value);

                    return (
                      <Button
                        key={preset.label}
                        variant={isSelected ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setDate(preset.value)}
                      >
                        <IconComponent className="mr-2 h-4 w-4" />
                        {preset.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
              </div>
            </PopoverContent>
          </Popover>

          {date && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                Selected: <strong>{format(date, 'PPPP')}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    // Disable weekends and specific dates
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Weekends
      new Date(2024, 11, 25), // Christmas
      new Date(2024, 11, 31), // New Year's Eve
      { from: new Date(2024, 11, 20), to: new Date(2024, 11, 24) }, // Holiday period
    ];

    const isDateDisabled = (date: Date) => {
      return isWeekend(date) ||
        (date.getMonth() === 11 && date.getDate() === 25) ||
        (date.getMonth() === 11 && date.getDate() === 31) ||
        (date.getMonth() === 11 && date.getDate() >= 20 && date.getDate() <= 24);
    };

    return (
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Business Days Only</CardTitle>
          <CardDescription>
            Weekends and holidays are disabled for selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 text-sm">
            <Badge variant="outline">
              <X className="mr-1 h-3 w-3" />
              Weekends disabled
            </Badge>
            <Badge variant="outline">
              <X className="mr-1 h-3 w-3" />
              Holidays blocked
            </Badge>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={disabledDays}
            className="rounded-md border"
            modifiersStyles={{
              disabled: {
                color: 'hsl(var(--muted-foreground))',
                opacity: 0.5,
              },
            }}
          />

          {date && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">
                Appointment scheduled: <strong>{format(date, 'PPPP')}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    const handleSelect = (dates: Date[] | undefined) => {
      if (dates) {
        setSelectedDates(dates);
      }
    };

    return (
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Multiple Date Selection</CardTitle>
          <CardDescription>
            Select multiple dates for recurring events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar
            mode="multiple"
            selected={selectedDates}
            onSelect={handleSelect}
            className="rounded-md border"
          />

          {selectedDates.length > 0 && (
            <div className="space-y-3">
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Selected Dates</h4>
                  <Badge>{selectedDates.length} dates</Badge>
                </div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {selectedDates
                    .sort((a, b) => a.getTime() - b.getTime())
                    .map((date, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 text-sm bg-muted rounded"
                      >
                        <span>{format(date, 'PPP')}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedDates(selectedDates.filter((d) => !isSameDay(d, date)));
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const TravelBooking: Story = {
  render: () => {
    const [tripType, setTripType] = useState<'flight' | 'hotel' | 'car'>('flight');
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [guests, setGuests] = useState(1);

    const bookedDates = [
      { from: new Date(2024, 11, 15), to: new Date(2024, 11, 18) },
      { from: new Date(2024, 11, 23), to: new Date(2024, 11, 26) },
    ];

    const tripIcons = {
      flight: Plane,
      hotel: Hotel,
      car: Car,
    };

    const getDayCount = () => {
      if (dateRange?.from && dateRange?.to) {
        return Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      }
      return 0;
    };

    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Travel Booking Calendar
          </CardTitle>
          <CardDescription>
            Plan your trip with our integrated booking calendar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Trip Type Selector */}
          <div className="flex gap-2">
            {(['flight', 'hotel', 'car'] as const).map((type) => {
              const IconComponent = tripIcons[type];
              return (
                <Button
                  key={type}
                  variant={tripType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTripType(type)}
                  className="flex-1"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              );
            })}
          </div>

          <Separator />

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Travel Dates</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'LLL dd, y')} -{' '}
                        {format(dateRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(dateRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Select your travel dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={new Date()}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                  modifiers={{
                    booked: bookedDates.flatMap((range) => {
                      const dates = [];
                      const current = new Date(range.from);
                      while (current <= range.to) {
                        dates.push(new Date(current));
                        current.setDate(current.getDate() + 1);
                      }
                      return dates;
                    }),
                  }}
                  modifiersStyles={{
                    booked: {
                      textDecoration: 'line-through',
                      opacity: 0.5,
                    },
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests Selector */}
          <div className="space-y-2">
            <Label>Number of Guests</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                -
              </Button>
              <div className="flex items-center gap-2 px-4">
                <Users className="h-4 w-4" />
                <span className="font-medium">{guests}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setGuests(Math.min(10, guests + 1))}
              >
                +
              </Button>
            </div>
          </div>

          {/* Summary */}
          {dateRange?.from && dateRange?.to && (
            <div className="space-y-3">
              <Separator />
              <div className="space-y-2 p-4 bg-muted rounded-lg">
                <h4 className="font-medium">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium capitalize">{tripType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{getDayCount()} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="font-medium">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <Button
                  className="w-full"
                  onClick={() => {
                    toast.success('Booking confirmed!', {
                      description: `Your ${tripType} booking for ${getDayCount()} days has been confirmed.`,
                    });
                  }}
                >
                  Search {tripType === 'flight' ? 'Flights' : tripType === 'hotel' ? 'Hotels' : 'Cars'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const AppointmentScheduler: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectedTime, setSelectedTime] = useState<string>();

    const availableSlots = [
      '09:00 AM',
      '09:30 AM',
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '02:00 PM',
      '02:30 PM',
      '03:00 PM',
      '03:30 PM',
      '04:00 PM',
      '04:30 PM',
    ];

    const bookedSlots = ['10:00 AM', '11:30 AM', '03:00 PM'];

    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5" />
            Appointment Scheduler
          </CardTitle>
          <CardDescription>
            Schedule your appointment by selecting a date and time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today || isWeekend(date);
              }}
              className="rounded-md border"
            />
          </div>

          {/* Time Slot Selection */}
          {selectedDate && (
            <div className="space-y-2">
              <Label>Available Time Slots</Label>
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => {
                  const isBooked = bookedSlots.includes(slot);
                  const isSelected = selectedTime === slot;

                  return (
                    <Tooltip key={slot}>
                      <TooltipTrigger asChild>
                        <Button
                          variant={isSelected ? 'default' : 'outline'}
                          size="sm"
                          disabled={isBooked}
                          onClick={() => !isBooked && setSelectedTime(slot)}
                          className="relative"
                        >
                          <Clock className="mr-1 h-3 w-3" />
                          {slot}
                          {isBooked && (
                            <span className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-md">
                              <X className="h-4 w-4 text-muted-foreground" />
                            </span>
                          )}
                        </Button>
                      </TooltipTrigger>
                      {isBooked && (
                        <TooltipContent>
                          <p>This slot is already booked</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          )}

          {/* Confirmation */}
          {selectedDate && selectedTime && (
            <div className="space-y-3">
              <Separator />
              <div className="p-4 bg-muted rounded-lg space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Appointment Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{format(selectedDate, 'PPPP')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedTime}</span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    toast.success('Appointment booked!', {
                      description: `Your appointment is confirmed for ${format(selectedDate, 'PPP')} at ${selectedTime}.`,
                    });
                  }}
                >
                  Confirm Appointment
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const EventCalendar: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    const events = {
      [format(new Date(2024, 11, 15), 'yyyy-MM-dd')]: [
        { title: 'Team Meeting', time: '10:00 AM', type: 'work' },
        { title: 'Lunch with Client', time: '12:30 PM', type: 'meeting' },
      ],
      [format(new Date(2024, 11, 20), 'yyyy-MM-dd')]: [
        { title: 'Product Launch', time: 'All Day', type: 'important' },
      ],
      [format(new Date(2024, 11, 25), 'yyyy-MM-dd')]: [
        { title: 'Christmas', time: 'All Day', type: 'holiday' },
      ],
      [format(addDays(new Date(), 1), 'yyyy-MM-dd')]: [
        { title: 'Doctor Appointment', time: '3:00 PM', type: 'personal' },
      ],
    };

    const getEventType = (type: string) => {
      const types = {
        work: { color: 'bg-blue-500', label: 'Work' },
        meeting: { color: 'bg-green-500', label: 'Meeting' },
        important: { color: 'bg-red-500', label: 'Important' },
        holiday: { color: 'bg-purple-500', label: 'Holiday' },
        personal: { color: 'bg-orange-500', label: 'Personal' },
      };
      return types[type as keyof typeof types] || { color: 'bg-gray-500', label: 'Other' };
    };

    const selectedDateEvents = selectedDate
      ? events[format(selectedDate, 'yyyy-MM-dd')] || []
      : [];

    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Event Calendar
          </CardTitle>
          <CardDescription>
            View and manage your upcoming events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Legend */}
          <div className="flex flex-wrap gap-2">
            {Object.entries({
              work: 'Work',
              meeting: 'Meeting',
              important: 'Important',
              holiday: 'Holiday',
              personal: 'Personal',
            }).map(([type, label]) => {
              const eventType = getEventType(type);
              return (
                <div key={type} className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full ${eventType.color}`} />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              );
            })}
          </div>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            components={{
              DayContent: ({ date }) => {
                const dateStr = format(date, 'yyyy-MM-dd');
                const dayEvents = events[dateStr];
                return (
                  <div className="relative w-full h-full">
                    <div>{date.getDate()}</div>
                    {dayEvents && dayEvents.length > 0 && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                        {dayEvents.slice(0, 3).map((event, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${getEventType(event.type).color}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              },
            }}
          />

          {/* Selected Date Events */}
          {selectedDate && (
            <div className="space-y-3">
              <Separator />
              <div className="space-y-2">
                <h4 className="font-medium flex items-center justify-between">
                  <span>{format(selectedDate, 'PPPP')}</span>
                  {selectedDateEvents.length > 0 && (
                    <Badge>{selectedDateEvents.length} events</Badge>
                  )}
                </h4>

                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-2">
                    {selectedDateEvents.map((event, index) => {
                      const eventType = getEventType(event.type);
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                        >
                          <div className={`w-2 h-2 rounded-full ${eventType.color}`} />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.time}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {eventType.label}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-4 text-sm text-muted-foreground">
                    No events scheduled for this date
                  </div>
                )}

                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    toast.info('Add Event clicked', {
                      description: `Adding event for ${format(selectedDate, 'PPP')}`,
                    });
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};
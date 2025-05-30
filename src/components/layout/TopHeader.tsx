import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  MessageCircle,
  Bell,
  Users,
  Settings,
  LogOut,
  HelpCircle,
  User as UserIcon // For Avatar fallback
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const currentUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://source.unsplash.com/random/40x40/?woman,profile', // Placeholder avatar
  email: 'olenna.mason@example.com'
};

export const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <header
      className={cn(
        'fixed top-0 h-16 bg-card text-card-foreground shadow-sm flex items-center justify-between px-4 z-30',
        'left-64 right-60', // These classes assume w-64 left sidebar and w-60 right sidebar
        className
      )}
    >
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <a href="#/" aria-label="Homepage">
          <Facebook className="h-10 w-10 text-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-2 py-2 h-9 w-full sm:w-52 md:w-64 rounded-full bg-background border-input focus:bg-card"
          />
        </div>
      </div>

      {/* Middle Section (Optional): Nav links like Home, Friends - simplified for this version */} 
      {/* As per requirements, keeping it compact. If needed, add: */}
      {/* <nav className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" className="text-sm font-medium px-3 py-2">Home</Button>
        <Button variant="ghost" className="text-sm font-medium px-3 py-2">Find Friends</Button>
      </nav> */}

      {/* Right Section: Action Icons and User Avatar */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted hover:bg-muted/80">
          <Users className="h-5 w-5" />
          <span className="sr-only">Friend Requests</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted hover:bg-muted/80 relative">
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">Messages</span>
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-muted hover:bg-muted/80 relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
           <span className="absolute top-1.5 right-1.5 text-xs bg-red-500 text-white rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center">
            8
          </span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback><UserIcon className="h-5 w-5"/></AvatarFallback>
              </Avatar>
              <span className="sr-only">User Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {currentUser.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;

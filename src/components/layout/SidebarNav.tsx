import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  List as ListIcon, // Renamed to avoid conflict with HTML List
  HandHeart,
  ChevronDown,
  User as UserIcon, // For Avatar fallback
  Settings2,
  LogOut,
  ShieldQuestion
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ElementType;
  isCurrentUser?: boolean;
  avatarUrl?: string;
  subItems?: NavItem[]; // For items under 'See More'
  isHeading?: boolean;
  onClick?: () => void;
}

const currentUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://source.unsplash.com/random/40x40/?woman,face',
};

const mainNavItems: NavItem[] = [
  {
    id: 'user-profile',
    label: currentUser.name,
    href: '#/profile',
    icon: UserIcon, // Placeholder, Avatar will be used
    isCurrentUser: true,
    avatarUrl: currentUser.avatarUrl,
  },
  { id: 'news-feed', label: 'News Feed', href: '#/feed', icon: Newspaper },
  { id: 'messenger', label: 'Messenger', href: '#/messenger', icon: MessageCircle },
  { id: 'watch', label: 'Watch', href: '#/watch', icon: PlaySquare },
  { id: 'marketplace', label: 'Marketplace', href: '#/marketplace', icon: Store },
];

const shortcutsNavItems: NavItem[] = [
  { id: 's-heading', label: 'Shortcuts', href: '#', isHeading: true },
  { id: 'farmville', label: 'FarmVille 2', href: '#/games/farmville', icon: Gamepad2 },
  // Add more shortcuts here
];

const exploreNavItemsInitial: NavItem[] = [
  { id: 'e-heading', label: 'Explore', href: '#', isHeading: true },
  { id: 'events', label: 'Events', href: '#/events', icon: CalendarDays },
  { id: 'pages', label: 'Pages', href: '#/pages', icon: Flag },
  { id: 'groups', label: 'Groups', href: '#/groups', icon: Users },
  { id: 'friend-lists', label: 'Friend Lists', href: '#/friends/lists', icon: ListIcon },
];

const exploreNavItemsMore: NavItem[] = [
  { id: 'fundraisers', label: 'Fundraisers', href: '#/fundraisers', icon: HandHeart },
  // Add more explore items here like Weather, Games, Jobs etc.
  { id: 'settings-privacy', label: 'Settings & Privacy', href: '#/settings', icon: Settings2 },
  { id: 'help-support', label: 'Help & Support', href: '#/help', icon: ShieldQuestion },
  { id: 'logout', label: 'Logout', href: '#/logout', icon: LogOut, onClick: () => console.log('Logout clicked') },
];

const createNavItems: NavItem[] = [
  { id: 'c-heading', label: 'Create', href: '#', isHeading: true },
  { id: 'ad', label: 'Ad', href: '#/create/ad' },
  { id: 'page', label: 'Page', href: '#/create/page' },
  { id: 'group', label: 'Group', href: '#/create/group' },
  { id: 'event', label: 'Event', href: '#/create/event' },
  { id: 'fundraiser-post', label: 'Fundraiser', href: '#/create/fundraiser' },
];

interface SidebarNavItemProps {
  item: NavItem;
  isActive?: boolean;
  isSubItem?: boolean;
  onClick?: () => void;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ item, isActive, isSubItem, onClick }) => {
  if (item.isHeading) {
    return (
      <h3 className={cn(
        "px-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider",
        item.id === 's-heading' || item.id === 'e-heading' || item.id === 'c-heading' ? "mt-3 mb-1" : "mb-1"
      )}>
        {item.label}
      </h3>
    );
  }

  const commonClasses = cn(
    "flex items-center space-x-3 rounded-md text-sm font-medium w-full text-left",
    "hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10",
    isActive ? "bg-primary/10 text-primary font-semibold" : "text-sidebar-foreground",
    isSubItem ? "py-1.5 px-3 pl-11" : "py-2 px-3"
  );

  const content = (
    <>
      {item.isCurrentUser && item.avatarUrl && (
        <Avatar className="h-7 w-7">
          <AvatarImage src={item.avatarUrl} alt={item.label} />
          <AvatarFallback><UserIcon className="h-4 w-4" /></AvatarFallback>
        </Avatar>
      )}
      {item.icon && !item.isCurrentUser && <item.icon className="h-5 w-5 shrink-0" />}
      <span className="truncate flex-1">{item.label}</span>
    </>
  );

  if (item.onClick) {
    return (
      <button onClick={item.onClick || onClick} className={commonClasses}>
        {content}
      </button>
    );
  }

  return (
    <a href={item.href} onClick={onClick} className={commonClasses}>
      {content}
    </a>
  );
};

export const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('news-feed');
  const [showMoreExplore, setShowMoreExplore] = React.useState<boolean>(false);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  const allNavItems = [
    ...mainNavItems,
    ...shortcutsNavItems,
    ...exploreNavItemsInitial,
    ...(showMoreExplore ? exploreNavItemsMore : []),
    ...createNavItems,
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-border">
      {/* Optional: Logo or fixed header element if needed, but not in this design's sidebar */}
      {/* Example: <div className="p-4 border-b border-border">Logo</div> */} 
      <ScrollArea className="flex-1 px-2 py-2">
        <div className="space-y-0.5">
          {allNavItems.map((item) => (
            <SidebarNavItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={() => {
                if (item.onClick) item.onClick();
                handleItemClick(item.id);
              }}
            />
          ))}
          {!showMoreExplore && (
            <button
              onClick={() => setShowMoreExplore(true)}
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-sm font-medium w-full text-left text-sidebar-foreground hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10"
            >
              <ChevronDown className="h-5 w-5" />
              <span>See More</span>
            </button>
          )}
        </div>
      </ScrollArea>
      {/* Optional: Fixed footer element if needed */}
      {/* Example: <div className="p-4 border-t border-border">Footer Content</div> */} 
    </nav>
  );
};

export default SidebarNav;

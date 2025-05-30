import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Users, Plus } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  members: number;
  imageUrl?: string;
  bannerUrl?: string; 
}

const suggestionsData: GroupSuggestion[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    bannerUrl: 'https://source.unsplash.com/random/300x100/?tvshow,retro',
    imageUrl: 'https://source.unsplash.com/random/40x40/?group,community,1',
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans', // Changed to reflect different series
    members: 6984,
    bannerUrl: 'https://source.unsplash.com/random/300x100/?tvshow,crime',
    imageUrl: 'https://source.unsplash.com/random/40x40/?group,community,2',
  },
  {
    id: '3',
    name: 'Tech Innovators Hub',
    members: 12030,
    bannerUrl: 'https://source.unsplash.com/random/300x100/?technology,innovation',
    imageUrl: 'https://source.unsplash.com/random/40x40/?group,community,3',
  },
];

interface SuggestionWidgetProps {
  className?: string;
}

const SuggestionWidget: React.FC<SuggestionWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 pt-4">
        <CardTitle className="text-md font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" className="text-sm text-primary p-0 h-auto">See All</Button>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <ul className="space-y-3">
          {suggestionsData.map((suggestion, index) => (
            <li key={suggestion.id}>
              {suggestion.bannerUrl && (
                 <img src={suggestion.bannerUrl} alt={`${suggestion.name} banner`} className="w-full h-20 object-cover rounded-t-md" />
              )}
              <div className={cn("flex items-center space-x-3 p-3", suggestion.bannerUrl ? "border border-t-0 rounded-b-md" : "border rounded-md")}>
                <Avatar className="h-10 w-10">
                    <AvatarImage src={suggestion.imageUrl} alt={suggestion.name} />
                    <AvatarFallback>
                        <Users className="h-5 w-5 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{suggestion.name}</p>
                  <p className="text-xs text-muted-foreground">{suggestion.members.toLocaleString()} members</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto shrink-0">
                  <Plus className="h-4 w-4 mr-1" />
                  Join
                </Button>
              </div>
              {/* No separator needed here because of distinct items with borders */}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SuggestionWidget;

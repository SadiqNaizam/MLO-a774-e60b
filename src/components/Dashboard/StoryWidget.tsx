import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Plus, Archive, Settings } from 'lucide-react';

interface StoryWidgetProps {
  className?: string;
}

const StoryWidget: React.FC<StoryWidgetProps> = ({ className }) => {
  const handleAddStory = React.useCallback(() => {
    console.log('Add to Story clicked');
    // Logic to open story creation modal or navigate
  }, []);

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 pt-4">
        <CardTitle className="text-md font-semibold">Stories</CardTitle>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            <Archive className="h-3.5 w-3.5 mr-1" />
            Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            <Settings className="h-3.5 w-3.5 mr-1" />
            Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <button
          onClick={handleAddStory}
          className="flex items-center w-full p-3 space-x-3 rounded-lg hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <Plus className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">Add to Your Story</p>
            <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
          </div>
        </button>
        {/* Placeholder for displaying actual stories if needed in the future */}
        {/* <div className="mt-4 space-y-2"> 
            <p className="text-xs text-center text-muted-foreground">No active stories.</p>
           </div> */}
      </CardContent>
    </Card>
  );
};

export default StoryWidget;

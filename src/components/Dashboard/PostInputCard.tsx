import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { UserRound, Video, Image as ImageIcon, Users, Smile } from 'lucide-react';

interface PostInputCardProps {
  currentUser: {
    name: string;
    avatarUrl?: string;
  };
  className?: string;
}

const PostInputCard: React.FC<PostInputCardProps> = ({ currentUser, className }) => {
  const [postText, setPostText] = useState<string>('');

  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  }, []);

  const handleActionClick = useCallback((action: string) => {
    console.log(`${action} clicked`);
    // Placeholder for action logic
  }, []);

  return (
    <div className={cn('bg-card p-4 rounded-lg shadow', className)}>
      <div className="flex items-start space-x-3 mb-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
          <AvatarFallback>
            <UserRound className="h-5 w-5 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <Textarea
          placeholder={`What's on your mind, ${currentUser.name}?`}
          value={postText}
          onChange={handleTextChange}
          className="flex-1 resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[60px] bg-background rounded-md p-2"
        />
      </div>
      <Separator className="my-3" />
      <div className="flex justify-around items-center">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground flex-1" onClick={() => handleActionClick('Live Video')}>
          <Video className="h-5 w-5 mr-2 text-red-500" />
          Live Video
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground flex-1" onClick={() => handleActionClick('Photo/Video')}>
          <ImageIcon className="h-5 w-5 mr-2 text-green-500" />
          Photo/Video
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground flex-1" onClick={() => handleActionClick('Feeling/Activity')}>
          <Smile className="h-5 w-5 mr-2 text-yellow-500" />
          Feeling/Activity
        </Button>
      </div>
    </div>
  );
};

export default PostInputCard;

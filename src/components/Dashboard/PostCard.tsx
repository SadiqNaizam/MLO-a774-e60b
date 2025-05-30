import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  UserRound,
  MoreHorizontal,
  MapPin,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
} from 'lucide-react';

interface PostUserData {
  name: string;
  avatarUrl?: string;
}

interface PostData {
  id: string;
  user: PostUserData;
  timeAgo: string;
  contentText?: string;
  contentImageUrl?: string;
  location?: string;
  likes: number;
  comments: number;
  shares: number;
  isSaved?: boolean;
}

interface PostCardProps {
  post: PostData;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const [isSaved, setIsSaved] = React.useState<boolean>(post.isSaved || false);

  const handleSaveToggle = React.useCallback(() => {
    setIsSaved(prev => !prev);
    // API call to save/unsave post would go here
  }, []);

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
              <AvatarFallback>
                <UserRound className="h-5 w-5 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.user.name}</p>
              <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Post</DropdownMenuItem>
              <DropdownMenuItem>Edit Post</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {post.contentText && <p className="text-sm text-foreground mb-3 whitespace-pre-wrap">{post.contentText}</p>}
        {post.contentImageUrl && (
          <div className="aspect-video rounded-lg overflow-hidden mb-3 border border-border">
            <img src={post.contentImageUrl} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}
        {post.location && (
          <div className="flex items-center text-xs text-muted-foreground mb-3">
            <MapPin className="h-3 w-3 mr-1" />
            {post.location}
          </div>
        )}
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
          <span>{post.likes} Likes</span>
          <span>{post.comments} Comments &middot; {post.shares} Shares</span>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-2">
        <div className="flex justify-around w-full">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1">
            <ThumbsUp className="h-4 w-4 mr-2" /> Like
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1">
            <MessageCircle className="h-4 w-4 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1">
            <Share2 className="h-4 w-4 mr-2" /> Share
          </Button>
          <Button variant="ghost" className={cn("hover:text-primary flex-1", isSaved ? "text-primary" : "text-muted-foreground")} onClick={handleSaveToggle}>
            <Bookmark className="h-4 w-4 mr-2" /> {isSaved ? 'Saved' : 'Save'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

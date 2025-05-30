import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostInputCard from '../components/Dashboard/PostInputCard';
import PostCard from '../components/Dashboard/PostCard';
import StoryWidget from '../components/Dashboard/StoryWidget';
import SuggestionWidget from '../components/Dashboard/SuggestionWidget';

// TypeScript interfaces for data structures
interface CurrentUser {
  name: string;
  avatarUrl?: string;
}

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

// Dummy data defined directly in the page file
const currentUserData: CurrentUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://source.unsplash.com/random/40x40/?woman,profile,focused', // Using a more specific query for consistency
};

const postsData: PostData[] = [
  {
    id: 'post1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://source.unsplash.com/random/40x40/?woman,face,1',
    },
    timeAgo: '2 hrs ago',
    contentText: 'Checking out some new stores downtown! Excited to see what the city has to offer. Found a great coffee shop already. ☕️',
    contentImageUrl: 'https://source.unsplash.com/random/600x400/?city,street,daytime',
    location: 'Raleigh, North Carolina',
    likes: 125,
    comments: 18,
    shares: 7,
    isSaved: false,
  },
  {
    id: 'post2',
    user: {
      name: 'Alex Chen',
      avatarUrl: 'https://source.unsplash.com/random/40x40/?man,face,2,asian',
    },
    timeAgo: '5 hrs ago',
    contentText: 'Just finished a great hike! The views were absolutely breathtaking. Highly recommend this trail to anyone looking for a good challenge and stunning scenery. #nature #hiking #adventure #mountains',
    contentImageUrl: 'https://source.unsplash.com/random/600x400/?nature,mountains,sunny',
    likes: 230,
    comments: 45,
    shares: 12,
    isSaved: true,
  },
  {
    id: 'post3',
    user: {
      name: 'Maria Rodriguez',
      avatarUrl: 'https://source.unsplash.com/random/40x40/?woman,face,3,latina',
    },
    timeAgo: '1 day ago',
    contentText: 'Spent the afternoon coding and working on a new side project. It\'s challenging but so rewarding to see it come together! What are you all working on? Any cool projects to share? Would love to hear about them!\n\n#coding #developer #sideproject #tech',
    likes: 88,
    comments: 22,
    shares: 3,
    isSaved: false,
  },
  {
    id: 'post4',
    user: {
      name: 'David Kim',
      avatarUrl: 'https://source.unsplash.com/random/40x40/?man,face,4,korean',
    },
    timeAgo: '2 days ago',
    contentText: 'Amazing dinner last night at The Gourmet Spot. The food was exquisite and the ambiance was perfect. Definitely a 5-star experience! ⭐⭐⭐⭐⭐',
    location: 'New York, New York',
    likes: 150,
    comments: 30,
    shares: 5,
  },
];

const IndexPage: React.FC = () => {
  const rightSidebarContent = (
    <>
      <StoryWidget />
      <SuggestionWidget />
    </>
  );

  return (
    <MainAppLayout rightSidebar={rightSidebarContent}>
      <div className="flex flex-col gap-6">
        <PostInputCard currentUser={currentUserData} />
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;

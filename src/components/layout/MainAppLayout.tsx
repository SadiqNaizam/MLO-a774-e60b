import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from './TopHeader';
import SidebarNav from './SidebarNav';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode; // To accept components like SuggestionWidget, StoryWidget
  className?: string;
}

export const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, rightSidebar, className }) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      {/* TopHeader is fixed and spans above main content and right sidebar (partially) */}
      <TopHeader />

      {/* SidebarNav is fixed to the left */}
      <SidebarNav />

      {/* Main content area */}
      {/* Needs left margin for SidebarNav, right margin for RightSidebar, top padding for TopHeader */}
      <main className="ml-64 mr-60 pt-16 h-screen overflow-y-auto">
        {/* Layout requirements: mainContent.layout: "p-6 mt-16 overflow-y-auto" */}
        {/* mt-16 is handled by pt-16 on main. So children wrapper needs p-6. */}
        {/* Layout requirements: mainContent.container: "flex flex-col gap-6" */}
        {/* This container style should be applied by the page content itself or a wrapper within children */}
        <div className="p-6">
          {children}
        </div>
      </main>

      {/* Right sidebar area */}
      {/* Fixed to the right, below the header */}
      {rightSidebar && (
        <aside className="fixed top-0 right-0 w-60 h-screen pt-16 bg-background border-l border-border overflow-y-auto z-20">
          {/* Content inside right sidebar also needs padding */}
          <div className="p-6 flex flex-col gap-6">
             {rightSidebar}
          </div>
        </aside>
      )}
    </div>
  );
};

export default MainAppLayout;


import React from 'react';
import { Card, CardContent } from '@/components/layout/Card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ChevronRight } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  return (
    <Card gradient className="relative mb-8">
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-axelari-navy rounded-full flex items-center justify-center text-2xl font-bold border-2 border-axelari-teal light:bg-gray-100">
            A
          </div>
          <div>
            <h2 className="text-2xl font-bold">Alex Johnson</h2>
            <p className="text-improved-visibility">Data Science Enthusiast</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center mb-1">
            <div className="text-sm font-medium text-improved-visibility">Profile Completeness</div>
            <div className="text-sm font-medium">68%</div>
          </div>
          <ProgressBar value={68} />
        </div>

        <div className="flex gap-4 mt-5">
          <div className="bg-axelari-navy-light/50 px-3 py-1 rounded-full text-sm flex items-center gap-2 text-axelari-teal border border-axelari-teal/30 light:bg-gray-100/50 light:border-axelari-teal/30">
            <span className="font-medium">12</span>
            <span className="text-improved-visibility">Courses</span>
          </div>
          <div className="bg-axelari-navy-light/50 px-3 py-1 rounded-full text-sm flex items-center gap-2 text-axelari-purple border border-axelari-purple/30 light:bg-gray-100/50 light:border-axelari-purple/30">
            <span className="font-medium">3</span>
            <span className="text-improved-visibility">Certifications</span>
          </div>
          <div className="bg-axelari-navy-light/50 px-3 py-1 rounded-full text-sm flex items-center gap-2 text-blue-400 border border-blue-400/30 light:bg-gray-100/50 light:border-blue-400/30">
            <span className="font-medium">8</span>
            <span className="text-improved-visibility">Badges</span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <button className="flex items-center gap-1 text-sm text-axelari-teal hover:text-axelari-teal/80 transition-colors">
            View Profile
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute -top-2 -right-2 flex items-center gap-2 bg-gradient-to-r from-axelari-teal to-axelari-purple px-3 py-1 rounded text-xs font-medium text-white">
          <span className="bg-white rounded-full h-2 w-2"></span>
          Next Milestone
        </div>
      </CardContent>
    </Card>
  );
};

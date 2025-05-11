
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/layout/Card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { LearningProfileType } from '@/types/psychometrics';
import { useNavigate } from 'react-router-dom';

interface PathRecommendationsProps {
  learningProfile: LearningProfileType;
}

export const PathRecommendations: React.FC<PathRecommendationsProps> = ({
  learningProfile
}) => {
  const navigate = useNavigate();
  
  // Handler to navigate to the learning paths page with path ID
  const handleViewPath = (pathId: number) => {
    // Navigate to learning paths page with a flag that can be used to highlight the path
    navigate(`/learning-paths?recommended=${pathId}`);
  };
  
  // If there are no compatible learning paths, show a message
  if (!learningProfile.compatibleLearningPaths || learningProfile.compatibleLearningPaths.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Personalized Learning Path Recommendations</CardTitle>
          <CardDescription>Complete more assessments to get tailored recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 text-center">
            <BarChart3 className="h-12 w-12 text-axelari-teal mx-auto mb-3" />
            <p className="text-white">We need more data to generate personalized recommendations for you.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Learning Path Recommendations</CardTitle>
        <CardDescription>Paths tailored to your {learningProfile.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {learningProfile.compatibleLearningPaths?.map((path, idx) => (
            <div key={idx} className="flex flex-col md:flex-row p-4 border border-axelari-navy-light rounded-lg">
              <div className="md:w-3/4">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-axelari-teal flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{path.name}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-sm mr-2 text-white">Profile Match:</span>
                  <span className="font-semibold text-axelari-teal">{path.score}%</span>
                </div>
                <p className="text-white mb-4">
                  This learning path is highly aligned with your {learningProfile.type} profile and cognitive strengths.
                </p>
              </div>
              <div className="md:w-1/4 md:border-l md:border-axelari-navy-light md:pl-4 flex md:flex-col justify-between items-center md:items-center mt-4 md:mt-0">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-400 mb-1">Estimated time</span>
                  <span className="text-white font-medium">{8 + idx * 4} weeks</span>
                </div>
                <Button 
                  onClick={() => handleViewPath(path.id)}
                  className="mt-4 w-full md:w-auto flex items-center justify-center"
                >
                  View Path <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

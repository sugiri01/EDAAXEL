
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/layout/Card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Badge } from '@/components/ui/badge';
import { Brain, Award, Star, ChartBar, BookOpen, PuzzleIcon } from 'lucide-react';

// Sample skill categories and skills for demonstration
const skillCategories = [
  {
    id: 1,
    name: 'Data Science',
    color: 'bg-axelari-teal',
    skills: [
      { name: 'Machine Learning', progress: 65, level: 'Intermediate' },
      { name: 'Data Visualization', progress: 45, level: 'Beginner' },
      { name: 'Statistical Analysis', progress: 70, level: 'Intermediate' },
      { name: 'Big Data', progress: 30, level: 'Beginner' },
    ]
  },
  {
    id: 2,
    name: 'Programming',
    color: 'bg-axelari-purple',
    skills: [
      { name: 'Python', progress: 80, level: 'Advanced' },
      { name: 'SQL', progress: 60, level: 'Intermediate' },
      { name: 'R', progress: 40, level: 'Beginner' },
      { name: 'JavaScript', progress: 25, level: 'Beginner' },
    ]
  },
  {
    id: 3,
    name: 'Domain Knowledge',
    color: 'bg-blue-400',
    skills: [
      { name: 'Finance', progress: 50, level: 'Intermediate' },
      { name: 'Healthcare', progress: 20, level: 'Beginner' },
      { name: 'Marketing', progress: 35, level: 'Beginner' },
    ]
  }
];

// Career paths based on current skills
const careerPaths = [
  {
    title: 'Data Scientist',
    match: 75,
    skills: ['Machine Learning', 'Python', 'Statistical Analysis'],
    icon: Brain
  },
  {
    title: 'Data Analyst',
    match: 82,
    skills: ['Data Visualization', 'SQL', 'Statistical Analysis'],
    icon: ChartBar
  },
  {
    title: 'ML Engineer',
    match: 68,
    skills: ['Machine Learning', 'Python', 'Big Data'],
    icon: PuzzleIcon
  }
];

// Recommended skills to develop next
const recommendedSkills = [
  {
    name: 'Deep Learning',
    reason: 'Complements your Machine Learning skills',
    difficulty: 'Advanced',
    time: '3-4 months'
  },
  {
    name: 'Cloud Computing',
    reason: 'Essential for Big Data implementations',
    difficulty: 'Intermediate',
    time: '2-3 months'
  },
  {
    name: 'Natural Language Processing',
    reason: 'Growing field with many applications',
    difficulty: 'Advanced',
    time: '4-5 months'
  }
];

const SkillsMap: React.FC = () => {
  return (
    <PageContainer
      title="Skills Map"
      description="Visualize your skills, track progress, and plan your learning journey."
    >
      {/* Skill Overview */}
      <div className="mb-10 relative">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Skill Overview</CardTitle>
            <CardDescription>Your current skill proficiency across different domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <h3 className="text-lg font-medium">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium text-white">{skill.name}</div>
                          <Badge variant="outline" className="text-xs">{skill.level}</Badge>
                        </div>
                        <ProgressBar 
                          value={skill.progress} 
                          showPercentage 
                          color={category.id === 1 ? "default" : category.id === 2 ? "success" : "warning"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Path Matching & Skill Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Career Path Matching</CardTitle>
              <CardDescription>How your current skills align with different career paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {careerPaths.map((path, index) => (
                  <div key={index} className="relative rounded-lg border border-axelari-navy-light p-4 overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-axelari-navy-light">
                        <path.icon className="h-5 w-5 text-axelari-teal" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{path.title}</h3>
                      <div className="ml-auto text-right">
                        <div className="text-lg font-bold text-axelari-teal">{path.match}%</div>
                        <div className="text-xs text-gray-400">Match</div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-sm text-gray-400 mb-1">Matching Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, idx) => (
                          <span key={idx} className="bg-axelari-navy-light px-3 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ProgressBar value={path.match} height="sm" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recommended Skills</CardTitle>
              <CardDescription>Skills to develop next based on your current profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {recommendedSkills.map((skill, index) => (
                  <div key={index} className="p-4 rounded-lg border border-axelari-navy-light relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{skill.name}</h4>
                      <Badge variant="outline" className="bg-axelari-navy-light text-xs">
                        {skill.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{skill.reason}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>Est. time: {skill.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skill Relationships Network */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Network</CardTitle>
          <CardDescription>How your skills interconnect and support each other</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <p className="text-gray-400">This is a placeholder for a skill network graph visualization</p>
            <p className="text-gray-400 text-sm mt-2">In a production environment, this would be an interactive network visualization showing interconnections between skills</p>
          </div>
          <div className="w-full h-64 bg-axelari-navy-light/50 rounded-lg flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <PuzzleIcon className="h-10 w-10 text-gray-500 mb-3" />
              <span className="text-gray-400">Skill Network Visualization</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default SkillsMap;

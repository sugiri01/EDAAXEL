
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Book, Clock, Layers, ArrowLeft, Play } from 'lucide-react';
import { learningPaths } from './LearningPaths';

interface Chapter {
  id: string;
  title: string;
  hasPreview?: boolean;
}

interface Section {
  id: string;
  title: string;
  chapters: Chapter[];
  lessonsCount: number;
}

// Placeholder course curriculum data
const courseCurriculum: Record<string, Section[]> = {
  'ds-fundamentals': [
    {
      id: 'basics',
      title: 'FUNDAMENTALS',
      lessonsCount: 6,
      chapters: [
        { id: 'ch1', title: 'Introduction to Data Science', hasPreview: true },
        { id: 'ch2', title: 'Data Collection and Processing', hasPreview: true },
        { id: 'ch3', title: 'Exploratory Data Analysis' },
        { id: 'ch4', title: 'Data Visualization Basics' },
        { id: 'ch5', title: 'Statistics for Data Science' },
        { id: 'ch6', title: 'Introduction to Machine Learning' },
      ]
    },
    {
      id: 'intermediate',
      title: 'INTERMEDIATE',
      lessonsCount: 9,
      chapters: [
        { id: 'ch7', title: 'Advanced Data Structures' },
        { id: 'ch8', title: 'Data Cleaning and Preprocessing' },
        { id: 'ch9', title: 'Feature Engineering' },
        { id: 'ch10', title: 'Supervised Learning Algorithms' },
        { id: 'ch11', title: 'Unsupervised Learning' },
        { id: 'ch12', title: 'Model Evaluation and Validation' },
      ]
    }
  ],
  'python-ai': [
    {
      id: 'basics',
      title: 'FUNDAMENTALS',
      lessonsCount: 6,
      chapters: [
        { id: 'ch1', title: 'Development Environment & Basic Python Syntax', hasPreview: true },
        { id: 'ch2', title: 'Getting Started with Python', hasPreview: true },
        { id: 'ch3', title: 'Python Basics', hasPreview: true },
        { id: 'ch4', title: 'Control Flow' },
        { id: 'ch5', title: 'Functions and Modules' },
        { id: 'ch6', title: 'Working with Data' },
      ]
    },
    {
      id: 'intermediate',
      title: 'INTERMEDIATE',
      lessonsCount: 9,
      chapters: [
        { id: 'ch7', title: 'Advanced Data Structures' },
        { id: 'ch8', title: 'File Handling and I/O' },
        { id: 'ch9', title: 'Object-Oriented Programming (OOP)' },
        { id: 'ch10', title: 'Error and Exception Handling' },
        { id: 'ch11', title: 'Functional Programming' },
        { id: 'ch12', title: 'Modules and Packages & Working with Databases' },
      ]
    },
    {
      id: 'expert',
      title: 'EXPERT',
      lessonsCount: 3,
      chapters: [
        { id: 'ch13', title: 'Metaclasses' },
        { id: 'ch14', title: 'Decorators' },
        { id: 'ch15', title: 'Coroutines and Asyncio' },
      ]
    }
  ],
  'deep-learning': [
    {
      id: 'basics',
      title: 'FUNDAMENTALS',
      lessonsCount: 5,
      chapters: [
        { id: 'ch1', title: 'Neural Networks Fundamentals' },
        { id: 'ch2', title: 'Deep Learning Frameworks' },
        { id: 'ch3', title: 'Building Your First Neural Network' },
      ]
    },
    {
      id: 'advanced',
      title: 'ADVANCED TECHNIQUES',
      lessonsCount: 7,
      chapters: [
        { id: 'ch4', title: 'Convolutional Neural Networks' },
        { id: 'ch5', title: 'Recurrent Neural Networks' },
        { id: 'ch6', title: 'Generative Adversarial Networks' },
        { id: 'ch7', title: 'Transfer Learning' },
      ]
    },
  ]
};

// Default curriculum for paths that don't have specific content yet
const defaultCurriculum: Section[] = [
  {
    id: 'basics',
    title: 'FUNDAMENTALS',
    lessonsCount: 6,
    chapters: [
      { id: 'ch1', title: 'Getting Started', hasPreview: true },
      { id: 'ch2', title: 'Core Concepts', hasPreview: true },
      { id: 'ch3', title: 'Basic Techniques' },
      { id: 'ch4', title: 'Practical Applications' },
    ]
  },
  {
    id: 'advanced',
    title: 'ADVANCED',
    lessonsCount: 5,
    chapters: [
      { id: 'ch5', title: 'Advanced Concepts' },
      { id: 'ch6', title: 'Professional Techniques' },
      { id: 'ch7', title: 'Real-world Case Studies' },
    ]
  }
];

const CourseDetails: React.FC = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const navigate = useNavigate();

  // Find the learning path based on the pathId
  const path = learningPaths.find(path => path.id === pathId);
  
  if (!path) {
    return (
      <PageContainer title="Course Not Found">
        <p>The requested course could not be found.</p>
        <button 
          onClick={() => navigate('/learning-paths')}
          className="mt-4 px-4 py-2 bg-axelari-navy-light text-white rounded-md hover:bg-axelari-navy-light/80"
        >
          Return to Learning Paths
        </button>
      </PageContainer>
    );
  }

  // Get curriculum data or use default
  const curriculum = courseCurriculum[path.id] || defaultCurriculum;
  
  return (
    <PageContainer title={path.title} description={path.description}>
      <div className="mb-6">
        <button 
          onClick={() => navigate('/learning-paths')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Learning Paths
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <CardTitle>{path.title}</CardTitle>
                  <p className="text-sm text-gray-400">{path.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  path.level === 'Beginner' 
                    ? 'bg-green-900/30 text-green-400 border-green-500/30'
                    : path.level === 'Intermediate'
                    ? 'bg-blue-900/30 text-blue-400 border-blue-500/30'
                    : 'bg-purple-900/30 text-purple-400 border-purple-500/30'
                }`}>
                  {path.level}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <AspectRatio ratio={16/9} className="bg-axelari-navy rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-axelari-navy-light">
                    <div className="flex flex-col items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-axelari-teal/20 flex items-center justify-center mb-3">
                        <Play className="h-8 w-8 text-axelari-teal" />
                      </div>
                      <span className="text-sm font-medium">Watch Introduction</span>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-axelari-navy-light rounded-md">
                  <Clock className="h-5 w-5 text-axelari-teal" />
                  <div>
                    <p className="text-sm font-medium">{path.hours} hours</p>
                    <p className="text-xs text-gray-400">Total Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-axelari-navy-light rounded-md">
                  <Layers className="h-5 w-5 text-axelari-teal" />
                  <div>
                    <p className="text-sm font-medium">{path.modules} modules</p>
                    <p className="text-xs text-gray-400">Total Modules</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-axelari-navy-light rounded-md">
                  <Book className="h-5 w-5 text-axelari-teal" />
                  <div>
                    <p className="text-sm font-medium">Lifetime</p>
                    <p className="text-xs text-gray-400">Full Access</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-axelari-navy-light pt-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-400">
                  Learn {path.title} from the ground up in this comprehensive course designed for beginners 
                  and intermediate learners. This course covers fundamental concepts, practical techniques,
                  and hands-on projects to reinforce learning. By the end of this course, you'll be proficient
                  and ready to tackle real-world challenges!
                </p>
              </div>

              <div className="border-t border-axelari-navy-light pt-6">
                <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
                
                {curriculum.map((section, idx) => (
                  <div key={section.id} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full bg-axelari-navy-light flex items-center justify-center text-xs">
                        {idx + 1}
                      </div>
                      <h4 className="font-medium">{section.title}</h4>
                      <span className="text-xs text-gray-400 ml-2">{section.lessonsCount} lessons</span>
                    </div>
                    
                    <div className="ml-3 border-l border-axelari-navy-light pl-6">
                      {section.chapters.map((chapter) => (
                        <div 
                          key={chapter.id} 
                          className="mb-4 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-sm border border-axelari-navy-light flex items-center justify-center">
                              <Play className="h-3 w-3 text-gray-400" />
                            </div>
                            <span className="text-sm">{chapter.title}</span>
                            {chapter.hasPreview && (
                              <span className="text-xs px-2 py-0.5 bg-axelari-navy-light text-gray-400 rounded">
                                Free Preview
                              </span>
                            )}
                          </div>
                          
                          {chapter.hasPreview && (
                            <button className="text-xs text-axelari-teal hover:underline">
                              View Lesson
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="mb-6">
                {path.progress > 0 ? (
                  <>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs font-medium">{path.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-axelari-navy-light rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-axelari-teal to-axelari-purple rounded-full"
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-400 mb-2">You haven't started this course yet.</p>
                )}
              </div>
              
              <button className="w-full py-3 rounded-md bg-gradient-to-r from-axelari-teal to-axelari-purple text-white font-medium hover:opacity-90 transition-opacity mb-4">
                {path.progress > 0 ? 'Continue Learning' : 'Start Learning'}
              </button>
              
              <div className="bg-axelari-navy-light/50 p-4 rounded-md">
                <h4 className="font-medium mb-2">This course includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{path.hours} hours of video content</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400">
                    <Book className="h-4 w-4" />
                    <span>{Math.floor(path.modules * 1.5)} downloadable resources</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400">
                    <Layers className="h-4 w-4" />
                    <span>{path.modules} practical exercises</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default CourseDetails;

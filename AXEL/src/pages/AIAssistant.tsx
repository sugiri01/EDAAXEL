
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/layout/Card';
import { SendHorizontal, MessageSquare, Lightbulb, Book, LineChart } from 'lucide-react';

const AIAssistant = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <PageContainer
          title="AI Learning Assistant"
          description="Your personal AI tutor to guide you through your learning journey"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-[calc(100vh-240px)]">
                  <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-axelari-teal rounded-full flex items-center justify-center text-white font-bold text-xs">
                        AI
                      </div>
                      <div className="flex-1 p-4 rounded-lg rounded-tl-none bg-axelari-navy-light">
                        <p>Hi there! I'm your Axelari AI assistant. I'm here to help with your learning journey. What would you like to explore today?</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <div className="flex-1 p-4 rounded-lg rounded-tr-none bg-axelari-teal/20 border border-axelari-teal/30 text-right">
                        <p>What skills do I need to become a machine learning engineer?</p>
                      </div>
                      <div className="flex-shrink-0 w-8 h-8 bg-axelari-purple rounded-full flex items-center justify-center text-white font-bold text-xs">
                        A
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-axelari-teal rounded-full flex items-center justify-center text-white font-bold text-xs">
                        AI
                      </div>
                      <div className="flex-1 p-4 rounded-lg rounded-tl-none bg-axelari-navy-light">
                        <p className="mb-3">To become a machine learning engineer, you'll need to develop expertise in several key areas:</p>
                        
                        <p className="font-medium mb-1">Technical Skills:</p>
                        <ul className="list-disc pl-5 mb-3 space-y-1 text-gray-300">
                          <li>Strong programming foundations (Python is essential)</li>
                          <li>Machine learning algorithms and frameworks (scikit-learn, TensorFlow, PyTorch)</li>
                          <li>Data preprocessing and feature engineering</li>
                          <li>Deep learning fundamentals</li>
                          <li>Mathematics (linear algebra, calculus, statistics, probability)</li>
                          <li>Big data technologies (Spark, Hadoop)</li>
                          <li>Cloud platforms (AWS, GCP, Azure)</li>
                          <li>MLOps and deployment</li>
                        </ul>
                        
                        <p className="font-medium mb-1">Complementary Skills:</p>
                        <ul className="list-disc pl-5 mb-3 space-y-1 text-gray-300">
                          <li>Software engineering best practices</li>
                          <li>Data visualization</li>
                          <li>Communication skills for explaining complex models</li>
                          <li>Experiment tracking and version control</li>
                        </ul>
                        
                        <p>Would you like me to recommend specific learning paths to help you develop these skills?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-axelari-navy rounded-full py-3 px-4 pr-12 text-white placeholder:text-gray-500 border border-axelari-navy-light focus:border-axelari-teal outline-none"
                      placeholder="Ask me anything about your learning journey..."
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-axelari-teal text-white rounded-full p-2 hover:bg-axelari-teal/80 transition-colors">
                      <SendHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 p-3 rounded-lg bg-axelari-navy-light/50 hover:bg-axelari-navy-light transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Answer Questions</h4>
                      <p className="text-sm text-gray-400">Get explanations on complex topics</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 rounded-lg bg-axelari-navy-light/50 hover:bg-axelari-navy-light transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-axelari-teal/20 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-axelari-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Learning Path Recommendations</h4>
                      <p className="text-sm text-gray-400">Get personalized learning suggestions</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 rounded-lg bg-axelari-navy-light/50 hover:bg-axelari-navy-light transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-axelari-purple/20 flex items-center justify-center">
                      <Book className="h-5 w-5 text-axelari-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Summarize Content</h4>
                      <p className="text-sm text-gray-400">Get concise summaries of learning materials</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 rounded-lg bg-axelari-navy-light/50 hover:bg-axelari-navy-light transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <LineChart className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Skill Assessment</h4>
                      <p className="text-sm text-gray-400">Evaluate your progress and identify gaps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-axelari-navy-light transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-axelari-teal"></div>
                    <span className="text-sm">Machine Learning Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-axelari-navy-light transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-axelari-purple"></div>
                    <span className="text-sm">Neural Networks Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-axelari-navy-light transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Python for Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-axelari-navy-light transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-sm">Career Path: Data Scientist</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default AIAssistant;

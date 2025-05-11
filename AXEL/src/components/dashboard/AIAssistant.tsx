
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/layout/Card';
import { SendHorizontal } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="bg-axelari-teal rounded-full h-6 w-6 flex items-center justify-center text-white font-bold text-xs">AI</span>
          AI Learning Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 rounded-lg bg-axelari-navy border border-axelari-navy-light">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-axelari-teal rounded-full h-6 w-6 flex items-center justify-center text-white font-bold text-xs">
              AI
            </div>
            <div className="font-medium">Axelari Assistant</div>
          </div>
          <p className="text-gray-400">
            Hi there! I'm your Axelari AI assistant. I'm here to help with your learning journey. What would you like to explore today?
          </p>
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

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-axelari-navy-light rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-axelari-teal/20 hover:text-axelari-teal transition-colors">
            Recommend a learning path for data science
          </button>
          <button className="bg-axelari-navy-light rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-axelari-teal/20 hover:text-axelari-teal transition-colors">
            Explain neural networks
          </button>
          <button className="bg-axelari-navy-light rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-axelari-teal/20 hover:text-axelari-teal transition-colors">
            What skills do I need for ML?
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

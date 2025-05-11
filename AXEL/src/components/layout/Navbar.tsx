
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart3, Brain, PuzzleIcon, TestTube, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: BarChart3 },
  { name: 'Psychometric Test', path: '/psychometric-test', icon: TestTube },
  { name: 'Learning Paths', path: '/learning-paths', icon: BookOpen },
  { name: 'AI Assistant', path: '/ai-assistant', icon: Brain },
  { name: 'Skills Map', path: '/skills-map', icon: PuzzleIcon },
];

export const Navbar: React.FC = () => {
  const [activePath, setActivePath] = React.useState(window.location.pathname);
  const { theme } = useTheme();

  React.useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };
    
    window.addEventListener('popstate', updateActivePath);
    
    return () => {
      window.removeEventListener('popstate', updateActivePath);
    };
  }, []);

  return (
    <header className="bg-axelari-navy/90 backdrop-blur-md border-b border-white/10 py-4 px-6 sticky top-0 z-50 dark:bg-axelari-navy/90 light:bg-white/90 light:border-gray-200">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 text-gradient font-bold text-xl" onClick={() => setActivePath('/')}>
            <BookOpen className="h-6 w-6" />
            Axelari.AI
          </Link>
          
          <nav>
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1 rounded-md transition-colors",
                      activePath === item.path 
                        ? "text-axelari-teal" 
                        : "text-improved-visibility hover:text-white light:hover:text-gray-900"
                    )}
                    onClick={() => setActivePath(item.path)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-improved-visibility hover:text-white light:hover:text-gray-900 rounded-full transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/profile" className="flex items-center gap-2 text-white rounded-full bg-axelari-navy-light p-1 pl-3 border border-white/10 hover:border-axelari-teal transition-colors light:bg-gray-100 light:border-gray-200 light:text-gray-800">
            <span>Alex</span>
            <div className="w-8 h-8 bg-axelari-purple rounded-full flex items-center justify-center text-white font-medium">
              A
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};


import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, gradient = false }) => {
  return (
    <div 
      className={cn(
        "rounded-lg p-6 animate-scale-in h-full",
        gradient ? "gradient-border" : "border border-axelari-navy-light",
        "bg-axelari-navy-light/90 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <h3 className={cn("text-xl font-semibold", className)}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <p className={cn("text-sm text-gray-400 mt-1", className)}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("mt-6", className)}>
      {children}
    </div>
  );
};

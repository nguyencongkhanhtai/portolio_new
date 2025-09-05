import React from 'react';
import { User } from 'lucide-react';

interface AnimatedAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ 
  size = 'lg', 
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 64
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main avatar container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 p-1 animate-scaleIn group">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500">
          <User 
            size={iconSizes[size]} 
            className="text-blue-600 group-hover:scale-110 transition-transform duration-300 animate-idle-wobble" 
          />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </div>
      </div>

    </div>
  );
};

export default AnimatedAvatar;
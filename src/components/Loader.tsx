import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinning Capsules */}
        <div className="relative">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-12 bg-gradient-primary rounded-full animate-spin-capsule shadow-glow"
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-12 bg-primary/20 rounded-full animate-pulse-glow blur-sm"
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-foreground animate-pulse">
            Loading Excellence...
          </h3>
          <p className="text-sm text-muted-foreground">
            Preparing your pharmaceutical experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-primary rounded-full animate-pulse origin-left transform scale-x-0 animate-[scale-x-100_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
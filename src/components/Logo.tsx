
import { Mountain, Layers } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-green-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        <Layers className="h-9 w-9 text-white dark:text-white group-hover:text-amber-300 transition-colors duration-300 relative z-10" />
        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-amber-500 group-hover:bg-green-500 rounded-full pulse-glow transition-colors duration-300"></div>
      </div>
      <div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-white transition-all duration-300">EarthSense</h1>
        <p className="text-xs text-blue-100 dark:text-blue-200">Landslide Monitor</p>
      </div>
    </div>
  );
};

export default Logo;

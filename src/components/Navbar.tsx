
import { useState, useEffect } from "react";
import { Menu, Home, Info, HelpCircle, BarChart2, Map, CloudSun } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavItemStyles = (path) => {
    return isActive(path) 
      ? "bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-800 dark:to-purple-800 text-white" 
      : "hover:bg-blue-700/30 dark:hover:bg-blue-800/30";
  };
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end w-full">
            <NavigationMenu>
              <NavigationMenuList className="mr-0 ml-auto">
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/')}`}>
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/dashboard')}`}>
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/predict">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/predict')}`}>
                      <CloudSun className="mr-2 h-4 w-4" />
                      Predict
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/risk-map">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/risk-map')}`}>
                      <Map className="mr-2 h-4 w-4" />
                      Risk Map
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/information">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/information')}`}>
                      <Info className="mr-2 h-4 w-4" />
                      Information
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/about')}`}>
                      <Info className="mr-2 h-4 w-4" />
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/help">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getNavItemStyles('/help')}`}>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
              <Link to="/dashboard" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/dashboard') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <BarChart2 className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/predict" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/predict') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <CloudSun className="mr-2 h-4 w-4" />
                Predict
              </Link>
              <Link to="/risk-map" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/risk-map') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <Map className="mr-2 h-4 w-4" />
                Risk Map
              </Link>
              <Link to="/information" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/information') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <Info className="mr-2 h-4 w-4" />
                Information
              </Link>
              <Link to="/about" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/about') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <Info className="mr-2 h-4 w-4" />
                About Us
              </Link>
              <Link to="/help" className={`flex items-center px-2 py-1 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded ${isActive('/help') ? 'bg-gradient-to-r from-blue-700 to-purple-700' : ''}`}>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

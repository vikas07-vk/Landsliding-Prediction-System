
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, FileText, Send } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-white text-black dark:bg-blue-900 dark:text-gray-100 shadow-inner mt-8">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-3 space-y-4">
        <Logo />
        <p className="text-sm text-black dark:text-gray-300">
          Dedicated to predicting and preventing landslides across India through advanced technology and research.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-300">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-300">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-300">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>


          
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/risk-map" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                  Risk Map
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                  Prediction Tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">Research</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong>2024 Research Paper:</strong> Analysis of landslide triggers in Western Ghats post 2023 monsoon
                </span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong>2024 Case Study:</strong> Wayanad landslide - Causes and preventative measures
                </span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong>2024 Report:</strong> Machine learning approaches to landslide prediction in Himalayan region
                </span>
              </li>
            </ul>
            <Link to="/research" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-3 inline-block">
              View all research papers →
            </Link>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your message or question" 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
            <ul className="space-y-3 text-sm mt-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Earthsensesupport@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  +91 8264667886
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Landslide Prediction System © {new Date().getFullYear()} | Developed by @Vikas</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-blue-700 dark:hover:text-blue-400">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="hover:text-blue-700 dark:hover:text-blue-400">Terms of Use</Link>
            {" | "}
            <Link to="/disclaimer" className="hover:text-blue-700 dark:hover:text-blue-400">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

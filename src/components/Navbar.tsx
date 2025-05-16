import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  {name:'ABOUT US', href: '/aboutus', dropdown: false},
  { name: 'COMODITIES', href: '/comodities', dropdown: false},
  { name: 'SERVICES', href: '/services', dropdown: false},
  { name: 'CONTACT', href: '/contact', dropdown: false },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={cn(
      'fixed w-full max-w-[1200px] top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 lg:px-14 my-16',
      scrolled 
        ? 'bg-white shadow-md py-5 my-0 max-w-full w-full' 
        : 'bg-black/20 py-3 backdrop-filter backdrop-blur-md border-opacity-10 border border-gray-700 rounded-3xl bg-clip-padding'
    )}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-sm transform rotate-12"></div>
            </div>
            <span className={cn(
              "text-2xl font-bold ml-3",
              scrolled ? "text-secondary-dark" : "text-white"
            )}>
              Argosian
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button 
                  onClick={() => toggleDropdown(item.name)}
                  className={cn(
                    "flex items-center font-medium transition-colors",
                    scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
                  )}
                >
                  {item.name}
                  <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", 
                    activeDropdown === item.name ? "transform rotate-180" : "")} />
                </button>
              ) : (
                <a 
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors",
                    scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
                  )}
                >
                  {item.name}
                </a>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className={cn(
                  "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 z-50",
                  activeDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                  {item.items?.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-primary hover:text-white"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className={cn(
            "transition-colors",
            scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
          </a>
          <a href="/" className={cn(
            "transition-colors",
            scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>
          </a>
          <a href="/" className={cn(
            "transition-colors",
            scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
          <a href="/" className={cn(
            "transition-colors",
            scrolled ? "text-secondary-dark hover:text-primary" : "text-white hover:text-primary-light"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
          </a>
          
        </div>

        {/* Get in Touch Button */}
        <div className="hidden lg:block ml-6">
          <button className="bg-white hover:bg-gray-100 text-secondary-dark rounded-md py-3 px-5 flex items-center gap-3 transition-colors">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "focus:outline-none",
              scrolled ? "text-secondary-dark" : "text-white"
            )}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20 min-w-[340px] w-full",
        isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
      )}>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary-dark focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 bg-white">
          {navItems.map((item) => (
            <div key={item.name} className="py-2 border-b border-gray-100">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-secondary-dark font-medium"
                  >
                    {item.name}
                    <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", 
                      activeDropdown === item.name ? "transform rotate-180" : "")} />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-gray-600 hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block text-secondary-dark font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          
          {/* Mobile Social Icons */}
          <div className="flex space-x-6 py-4">
            <a href="" className="text-secondary-dark hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </a>
            <a href="" className="text-secondary-dark hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
            </a>
            <a href="" className="text-secondary-dark hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href="" className="text-secondary-dark hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </a>
          </div>
          
          <button className="w-full bg-primary hover:bg-primary-light text-white rounded-md py-3 px-5 flex items-center justify-center gap-3 transition-colors">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

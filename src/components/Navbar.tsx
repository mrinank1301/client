
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'TRACK', href: '#track' },
  { name: 'PAGES', href: '#', dropdown: true, items: [
    { name: 'Company History', href: '#' },
    { name: 'Our Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ]},
  { name: 'CONTACT', href: '#contact' },
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
      'fixed w-full top-0 left-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">✦ Deliver</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button 
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-secondary-dark hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                  <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", 
                    activeDropdown === item.name ? "transform rotate-180" : "")} />
                </button>
              ) : (
                <a 
                  href={item.href}
                  className="text-secondary-dark hover:text-primary font-medium transition-colors"
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

        {/* Call to action button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary-light text-white rounded-md">
            Get a Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20",
        isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
      )}>
        <nav className="container-custom flex flex-col space-y-4 p-4">
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
          <Button className="bg-primary hover:bg-primary-light text-white rounded-md w-full mt-4">
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

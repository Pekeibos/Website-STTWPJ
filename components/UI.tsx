
import React from 'react';
import { ChevronRight, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  pattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({ className = '', children, id, pattern = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${pattern ? 'bg-papua-pattern' : ''} dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary dark:text-blue-400'}`}>
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-accent mb-4 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600",
    accent: "bg-accent text-white hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900",
    white: "bg-white text-primary hover:bg-gray-100"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={to} className={combinedClasses}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

interface CardProps {
  title: string;
  description: string;
  image?: string;
  date?: string;
  category?: string;
  link?: string;
}

export const NewsCard: React.FC<CardProps> = ({ title, description, image, date, category, link }) => {
  const handleShare = (platform: string) => {
    // In a real app, use the actual article URL. Here we simulate or use current location.
    const url = window.location.href; 
    const text = encodeURIComponent(`Baca berita ini: ${title}`);
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text} ${url}`;
        break;
    }
    
    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {category}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {date && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{date}</p>}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          {link ? (
            <Link to={link} className="inline-flex items-center text-primary dark:text-blue-400 font-bold hover:text-secondary dark:hover:text-blue-300 transition-colors text-sm">
              Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          ) : <span></span>}
          
          <div className="flex items-center space-x-1">
             <span className="text-[10px] uppercase font-bold text-gray-400 mr-1 hidden sm:inline">Bagikan</span>
             <button 
                onClick={() => handleShare('facebook')} 
                className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-400 hover:text-[#1877F2] transition-colors"
                title="Bagikan ke Facebook"
             >
                <Facebook size={16} />
             </button>
             <button 
                onClick={() => handleShare('twitter')} 
                className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-400 hover:text-[#1DA1F2] transition-colors"
                title="Bagikan ke Twitter"
             >
                <Twitter size={16} />
             </button>
             <button 
                onClick={() => handleShare('whatsapp')} 
                className="p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 text-gray-400 hover:text-[#25D366] transition-colors"
                title="Bagikan ke WhatsApp"
             >
                <MessageCircle size={16} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

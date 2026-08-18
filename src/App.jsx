import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Paintbrush, 
  ClipboardList, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './index.css';

const WHATSAPP_NUMBER = "2340000000000"; // Replace with actual number

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    alt: 'Modern Architectural Building'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Luxury Interior Finish'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Structural Construction Site'
  }
];

const PORTFOLIO = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    title: 'Lagos Commercial Plaza',
    category: 'Commercial Construction'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'Ikoyi Luxury Villas',
    category: 'Interior & Architecture'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    title: 'Victoria Island Hub',
    category: 'Project Management'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', service: '', message: '' });

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  // Handle Form Submit to WhatsApp
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const text = `Hello Psylicron Solutions!\n\nMy name is ${formData.name}.\nI'm interested in: ${formData.service}\n\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <img 
            className="navbar-logo-img"
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleFJl1T7oQi8IPlEAO5SNS5UxCTQZ4Bs_EKP_KLz01LWz0C_ayehBy8OJ54hmOCkB_tgNUjUMhQ6Uf67JIxO5tmTxDZlxQjPBdODA7qqZ32_fZvKDn2dkL-JyovKJ12Hqrc56G1wmEjIA7=s1360-w1360-h1020-rw" 
            alt="Psylicron Solutions Logo" 
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Transforming Visions Into Spaces</h1>
          <p className="hero-subtitle">From design to keys in hand. Premier construction and architectural management in Lagos.</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">Our Projects</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="section">
        <h2 className="section-title reveal">Core Services</h2>
        <div className="services-grid">
          <div className="service-card reveal">
            <Building2 size={48} className="service-icon" />
            <h3>Building & Construction</h3>
            <p>Expert execution in general construction, foundational development, and robust structural steel works designed to stand the test of time.</p>
          </div>
          <div className="service-card reveal delay-1">
            <Paintbrush size={48} className="service-icon" />
            <h3>Design & Interiors</h3>
            <p>Comprehensive architectural planning, innovative ceiling systems, and premium interior finish solutions that elevate any space.</p>
          </div>
          <div className="service-card reveal delay-2">
            <ClipboardList size={48} className="service-icon" />
            <h3>Project Management</h3>
            <p>End-to-end oversight ensuring on-time and on-budget delivery. We also handle large-scale renovations and property maintenance.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-bg">
        <h2 className="section-title reveal">Why Choose Us</h2>
        <div className="why-us-grid">
          <div className="why-us-item reveal">
            <div className="why-us-icon">
              <ShieldCheck size={36} />
            </div>
            <h4>Structural Integrity</h4>
            <p>We prioritize safety and durability in every foundational and structural build.</p>
          </div>
          <div className="why-us-item reveal delay-1">
            <div className="why-us-icon">
              <Clock size={36} />
            </div>
            <h4>On-Time Delivery</h4>
            <p>Rigorous project management ensures your project crosses the finish line on schedule.</p>
          </div>
          <div className="why-us-item reveal delay-2">
            <div className="why-us-icon">
              <CheckCircle size={36} />
            </div>
            <h4>Turnkey Solutions</h4>
            <p>From the first architectural sketch to handing over the keys, we handle it all.</p>
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Projects */}
      <section id="portfolio" className="section">
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="portfolio-grid">
          {PORTFOLIO.map((item, i) => (
            <div key={item.id} className={`portfolio-item reveal delay-${i}`}>
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-bg about">
        <div className="about-content">
          <div className="about-text reveal">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Company Profile</h2>
            <p>
              Psylicron Solutions Limited is a leading construction, architecture, and project management company based in Lagos, Nigeria. We specialize in comprehensive property development, taking your dreams from initial design concepts straight through to completion.
            </p>
            <p>
              Under the leadership of MD/CEO Lanre Agboola, our dedication to structural integrity, aesthetic excellence, and meticulous project management sets us apart as a trusted partner in the Nigerian real estate sector.
            </p>
          </div>
          <div className="about-image reveal delay-1">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture blueprint and tools" 
            />
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="section">
        <h2 className="section-title reveal">Request a Quote</h2>
        <div className="inquiry-container reveal">
          <form onSubmit={handleInquirySubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                className="form-control" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label>Service Required</label>
              <select 
                className="form-control"
                required
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service...</option>
                <option value="Building & Construction">Building & Construction</option>
                <option value="Design & Interiors">Design & Interiors</option>
                <option value="Project Management">Project Management</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea 
                className="form-control" 
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <FaWhatsapp size={20} style={{ marginRight: '8px' }} /> Send Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Psylicron Solutions Limited</h4>
            <p>Architects | Builders | Project Managers | Realtors</p>
            <p>Transforming visions into spaces. From design to keys in hand.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><MapPin size={20} /> Lagos, Nigeria</p>
            <p><Mail size={20} /> info@psylicronsolutions.com</p>
            <p><Phone size={20} /> +234 (Contact for Inquiries)</p>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Psylicron Solutions Limited. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}

export default App;

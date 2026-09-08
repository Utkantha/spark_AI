import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Image as ImageIcon, FileText, ArrowRight, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="container animate-fade-in">
      <section className="hero-section">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
          <Sparkles className="w-4 h-4" />
          <span>The Future of Creativity is Here</span>
        </div>
        
        <h1 className="heading-xl">
          Ignite your imagination with <br/>
          <span className="text-gradient">Spark AI</span>
        </h1>
        
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
          Your one-stop destination for harnessing the power of artificial intelligence. 
          Generate stunning images, craft professional resumes, and unlock endless possibilities.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link to="/image-generator" className="btn btn-primary">
            <span>Start Creating</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#services" className="btn btn-secondary">
            Explore Services
          </a>
        </div>
      </section>

      <section id="services" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-lg">Our Services</h2>
          <p className="text-muted">Powerful AI tools at your fingertips.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <Link to="/image-generator" className="glass-card">
            <div style={{ background: 'rgba(168, 85, 247, 0.1)', width: '3rem', height: '3rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Image Generation</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
              Transform your ideas into visual masterpieces. Simply describe what you want to see, and our AI will generate high-quality images in seconds.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
              Try it now <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
          
          {/* Service 2 */}
          <Link to="/resume-generator" className="glass-card delay-100">
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', width: '3rem', height: '3rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
              <FileText className="w-6 h-6" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Resume Generation</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
              Land your dream job with an AI-crafted resume. Input your details, and we'll format a professional, ATS-friendly resume tailored for success.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
              Try it now <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>
      
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', marginTop: '4rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
        <p>&copy; 2026 Spark AI. Powered by OpenAI.</p>
      </footer>
    </div>
  );
};

export default Home;

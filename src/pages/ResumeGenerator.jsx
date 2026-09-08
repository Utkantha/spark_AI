import React, { useState } from 'react';
import { FileText, Sparkles, Copy, Check } from 'lucide-react';
import { generateResume } from '../services/openai';

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({ name: '', skills: '', experience: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.experience.trim()) return;

    setIsGenerating(true);
    setResult(null);
    try {
      const response = await generateResume(formData);
      setResult(response);
    } catch (error) {
      console.error("Failed to generate resume", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', borderRadius: '1rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="heading-lg">Resume Generation</h1>
        <p className="text-muted">Input your details, and AI will craft a professional resume.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input 
              type="text"
              id="name"
              className="form-input" 
              placeholder="e.g. Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="skills">Key Skills (comma separated)</label>
            <input 
              type="text"
              id="skills"
              className="form-input" 
              placeholder="e.g. React, Node.js, Project Management"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="experience">Brief Experience Description</label>
            <textarea 
              id="experience"
              className="form-input" 
              rows="4" 
              placeholder="Describe your work experience and key achievements..."
              value={formData.experience}
              onChange={handleChange}
              style={{ resize: 'vertical' }}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={isGenerating || !formData.name.trim() || !formData.experience.trim()}
          >
            {isGenerating ? (
              <>
                <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div>
                <span>Drafting Resume...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Resume</span>
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className="glass-panel animate-fade-in" style={{ padding: '2rem', position: 'relative' }}>
          <button 
            onClick={handleCopy}
            className="btn btn-secondary"
            style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem', borderRadius: '0.5rem' }}
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-5 h-5" style={{ color: '#10b981' }} /> : <Copy className="w-5 h-5" />}
          </button>
          
          <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: 'var(--text-secondary)', marginTop: '1rem' }}>
            {result.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeGenerator;

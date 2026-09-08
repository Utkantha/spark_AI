import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Download } from 'lucide-react';
import { generateImage } from '../services/openai';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      const response = await generateImage(prompt);
      setResult(response);
    } catch (error) {
      console.error("Failed to generate image", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', borderRadius: '1rem', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
          <ImageIcon className="w-8 h-8" />
        </div>
        <h1 className="heading-lg">Image Generation</h1>
        <p className="text-muted">Describe what you want to see, and AI will create it.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="prompt">Your Prompt</label>
            <textarea 
              id="prompt"
              className="form-input" 
              rows="4" 
              placeholder="A futuristic city with flying cars at sunset, digital art..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={{ resize: 'vertical' }}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <>
                <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Image</span>
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className="glass-panel animate-fade-in" style={{ padding: '1rem', textAlign: 'center' }}>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.5)' }}>
            <img 
              src={result.url} 
              alt={result.prompt} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"{result.prompt}"</p>
          <a href={result.url} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Download className="w-5 h-5" />
            <span>Download Image</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;

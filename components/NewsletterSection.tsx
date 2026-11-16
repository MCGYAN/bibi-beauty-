'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setEmail('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <h3 className="font-serif text-[1.75rem] md:text-4xl text-brand-plum mb-3 md:mb-4">
        Join The Shape List
      </h3>
      <p className="text-brand-plum/65 text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto leading-relaxed">
        New drops, fit tips and offers: be first when the next silhouette ready piece lands.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 boutique-input !py-3.5 text-center sm:text-left"
        />
        <button type="submit" disabled={isSubmitting} className="boutique-btn-primary disabled:opacity-70">
          {isSubmitting ? 'Joining…' : 'Get updates'}
        </button>
      </form>
      {submitStatus === 'success' && (
        <p className="mt-4 text-sm text-brand-burgundy font-medium">Welcome to ShapewearBoss.</p>
      )}
    </div>
  );
}

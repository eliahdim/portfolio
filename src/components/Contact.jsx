import React, { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { contacts } from '../data/siteData.js';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const isSubmitting = status.type === 'loading';

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('https://formspree.io/f/xeelnlog', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.errors?.map((error) => error.message).join(', ') || 'Submission failed.';
        throw new Error(message);
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent. I will get back to you soon.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Could not send the message. Please email me directly instead.',
      });
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader id="contact-title" title="Get In Touch" />

        <div className="contact-content">
          <div className="contact-info" aria-label="Contact links">
            {contacts.map((contact) => (
              <a
                href={contact.href}
                className="contact-item reveal"
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                key={contact.label}
              >
                <i className={contact.icon} aria-hidden="true" />
                <span>
                  <strong>{contact.label}</strong>
                  <span>{contact.value}</span>
                </span>
              </a>
            ))}
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                </>
              )}
            </button>

            <div className={`form-status form-status-${status.type}`} role="status" aria-live="polite">
              {status.message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

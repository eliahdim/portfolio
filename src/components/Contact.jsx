import React, { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const formEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xeelnlog';

export default function Contact({ contacts, profile, copy }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle' });
  const isSubmitting = status.type === 'loading';

  const statusMessage = {
    idle: '',
    loading: copy.loadingMessage,
    success: copy.successMessage,
    error: copy.errorMessage,
  }[status.type];

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const responseData = await response.json().catch(() => null);
        const responseMessage = responseData?.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(', ');

        throw new Error(responseMessage || 'Submission failed.');
      }

      setForm(initialForm);
      setStatus({ type: 'success' });
    } catch {
      setStatus({ type: 'error' });
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          title={copy.title}
          subtitle={copy.subtitle}
        />

        <div className="contact-content">
          <div className="contact-info" aria-label={copy.linksLabel}>
            <a href={profile.cvUrl} className="contact-item contact-item-featured reveal" download>
              <i className="fas fa-file-arrow-down" aria-hidden="true" />
              <span>
                <strong>CV</strong>
                <span>{copy.downloadResume}</span>
              </span>
            </a>

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

          <form
            className="contact-form reveal"
            action={formEndpoint}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="Nytt meddelande från Eliah Dimmed Portfolio"
            />
            <input type="hidden" name="_source" value="eliahdimmed.vercel.app" />

            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">{copy.nameLabel}</label>
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
              <label htmlFor="email">{copy.emailLabel}</label>
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
              <label htmlFor="message">{copy.messageLabel}</label>
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
                  <span>{copy.sending}</span>
                </>
              ) : (
                <>
                  <span>{copy.send}</span>
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                </>
              )}
            </button>

            <div className={`form-status form-status-${status.type}`} role="status" aria-live="polite">
              {statusMessage}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

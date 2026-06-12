import { useState } from 'react';

const roleOptions = [
  'Select organization type...',
  'Government / Municipal',
  'Insurance / Fintech',
  'Utility / Water Authority',
  'Agriculture / Land Management',
  'Engineering / Consulting',
  'Research / Academia',
  'Other',
];

function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    role: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(() => {
    try {
      return localStorage.getItem('floodsensing_form_submitted') === 'true' ? 'success' : 'idle';
    } catch {
      return 'idle';
    }
  }); // idle | loading | success | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Valid email required';
    if (!form.role || form.role === 'Select organization type...') errs.role = 'Please select an organization type';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
    if (!apiUrl) {
      // Graceful degradation in development
      if (import.meta.env.DEV) {
        console.warn('[DEV] VITE_CONTACT_API_URL not set. Form data:', form);
      }
      setTimeout(() => {
        try {
          localStorage.setItem('floodsensing_form_submitted', 'true');
        } catch (err) {
          console.error(err);
        }
        setStatus('success');
      }, 800);
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      try {
        localStorage.setItem('floodsensing_form_submitted', 'true');
      } catch (err) {
        console.error(err);
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-lg text-[15px] transition-all duration-200 focus:outline-none';
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    fontFamily: 'Outfit, sans-serif',
  };
  const inputFocus = (e) => {
    e.target.style.borderColor = '#58A4B0';
    e.target.style.background = 'rgba(255,255,255,0.08)';
  };
  const inputBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.background = 'rgba(255,255,255,0.04)';
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
          style={{ background: 'rgba(88,164,176,0.2)', color: '#58A4B0' }}
        >
          ✓
        </div>
        <h3 className="text-xl font-bold text-white">Thank you!</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>
          We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-[0.05em] mb-2" style={{ color: '#58A4B0' }}>
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="e.g. Jane Doe"
          value={form.fullName}
          onChange={update('fullName')}
          onFocus={inputFocus}
          onBlur={inputBlur}
          aria-describedby={errors.fullName ? 'fullName-err' : undefined}
          aria-invalid={!!errors.fullName}
          className={inputClass}
          style={inputStyle}
        />
        {errors.fullName && <p id="fullName-err" role="alert" className="text-xs mt-1" style={{ color: '#E8593C' }}>{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.05em] mb-2" style={{ color: '#58A4B0' }}>
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@agency.gov"
          value={form.email}
          onChange={update('email')}
          onFocus={inputFocus}
          onBlur={inputBlur}
          aria-describedby={errors.email ? 'email-err' : undefined}
          aria-invalid={!!errors.email}
          className={inputClass}
          style={inputStyle}
        />
        {errors.email && <p id="email-err" role="alert" className="text-xs mt-1" style={{ color: '#E8593C' }}>{errors.email}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-[0.05em] mb-2" style={{ color: '#58A4B0' }}>
          Organization Type
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={update('role')}
          onFocus={inputFocus}
          onBlur={inputBlur}
          aria-describedby={errors.role ? 'role-err' : undefined}
          aria-invalid={!!errors.role}
          className={`${inputClass} cursor-pointer appearance-none`}
          style={{
            ...inputStyle,
            backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            backgroundSize: '16px',
          }}
        >
          {roleOptions.map((opt) => (
            <option key={opt} value={opt} style={{ color: '#000' }}>
              {opt}
            </option>
          ))}
        </select>
        {errors.role && <p id="role-err" role="alert" className="text-xs mt-1" style={{ color: '#E8593C' }}>{errors.role}</p>}
      </div>

      {status === 'error' && (
        <div className="sm:col-span-2 text-sm py-2 px-4 rounded-lg" style={{ background: 'rgba(232,89,60,0.15)', color: '#E8593C', border: '1px solid rgba(232,89,60,0.3)' }}>
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className="sm:col-span-2 mt-1 flex justify-center items-center gap-2 py-4 rounded-lg text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: '#fff', color: '#1B1B1E', fontFamily: 'Outfit, sans-serif' }}
      >
        {status === 'loading' ? (
          <>
            <span
              className="w-4 h-4 rounded-full border-2 border-carbon/20 border-t-carbon animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          'Request Access →'
        )}
      </button>
    </form>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-5 md:px-10 flex justify-center"
      style={{ background: '#1B1B1E' }}
    >
      <div
        className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.9fr)] gap-7 lg:gap-8 items-stretch"
      >
        <div
          className="rounded-xl p-8 md:p-12"
          style={{
            border: '1px solid rgba(88,164,176,0.28)',
            background: 'rgba(88,164,176,0.12)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
          }}
        >
          <h2
            className="mb-7"
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            Schedule an Assessment
          </h2>
          <p className="mb-9 text-[15px] max-w-[560px] leading-[1.6]" style={{ color: 'rgba(88,164,176,0.86)' }}>
            Discover how Floodsensing.AI can secure your jurisdiction against extreme weather events.
          </p>
          <ContactForm />
        </div>

        <div
          className="rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[360px]"
          style={{
            background: '#58A4B0',
            boxShadow: '0 24px 48px rgba(88, 164, 176, 0.2)',
          }}
        >
          <div>
            <h3
              className="mb-8 leading-[1.12]"
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(26px, 3vw, 32px)',
                color: '#1B1B1E',
              }}
            >
              Need immediate deployment?
            </h3>
            <p className="text-sm leading-[1.55] max-w-[280px]" style={{ color: '#1B1B1E' }}>
              Skip the queue. For urgent infrastructure risk assessments, contact our deployment engineering team directly.
            </p>
          </div>
          <a
            href="mailto:floodsensing@gmail.com"
            className="inline-flex items-center justify-center px-4 py-4 rounded-lg text-sm font-semibold no-underline text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'rgba(27,27,30,0.38)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(27,27,30,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(27,27,30,0.38)')}
          >
            floodsensing@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

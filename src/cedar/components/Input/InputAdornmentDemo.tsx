import { Input } from './Input';

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 5.5l6.5 4 6.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-6)',
  padding: 'var(--space-4) var(--space-5)',
  borderBottom: 'var(--border-width-base) solid var(--border-subtle)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--size-xs)',
  color: 'var(--text-subtle)',
  width: 100,
  flexShrink: 0,
};

const wrapStyle: React.CSSProperties = { flex: 1, maxWidth: 360 };

export function InputAdornmentDemo() {
  return (
    <div style={{
      background: 'var(--bg-base)',
      border: 'var(--border-width-base) solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
    }}>
      <div style={rowStyle}>
        <span style={labelStyle}>Leading icon</span>
        <div style={wrapStyle}>
          <Input placeholder="Search" leadingIcon={<SearchIcon />} />
        </div>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Trailing icon</span>
        <div style={wrapStyle}>
          <Input placeholder="Email" trailingIcon={<EmailIcon />} />
        </div>
      </div>
      <div style={{ ...rowStyle, borderBottom: 'none' }}>
        <span style={labelStyle}>Error icon</span>
        <div style={wrapStyle}>
          <Input placeholder="Enter value" hasError />
        </div>
      </div>
    </div>
  );
}

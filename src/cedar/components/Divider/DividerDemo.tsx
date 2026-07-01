import { Divider } from './Divider';

export function DividerVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', width: '100%' }}>
      {(['subtle', 'base', 'strong'] as const).map(v => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>{v}</span>
          <Divider variant={v} />
        </div>
      ))}
    </div>
  );
}

export function DividerWithLabel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', width: '100%' }}>
      <Divider label="Or continue with" />
      <Divider label="Section B" variant="base" />
      <Divider label="Advanced settings" variant="strong" />
    </div>
  );
}

export function DividerVertical() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', height: 32 }}>
      <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>Edit</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>Duplicate</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>Archive</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-base)', fontFamily: 'var(--font-base)', color: 'var(--status-error)' }}>Delete</span>
    </div>
  );
}

export function DividerInSettings() {
  const rows = [
    { label: 'Display name',     value: 'Greg Radcliffe' },
    { label: 'Email address',    value: 'greg@example.com' },
    { label: 'Time zone',        value: 'UTC−5 (Eastern)' },
    { label: 'Language',         value: 'English (US)' },
  ];
  return (
    <div style={{ width: '100%' }}>
      {rows.map((row, i) => (
        <div key={row.label}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--space-4) 0',
          }}>
            <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>{row.label}</span>
            <span style={{ fontSize: 'var(--body-sm)', color: 'var(--text-base)', fontFamily: 'var(--font-base)', fontWeight: 500 }}>{row.value}</span>
          </div>
          {i < rows.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}

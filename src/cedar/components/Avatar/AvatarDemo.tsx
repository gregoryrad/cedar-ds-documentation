import { Avatar, AvatarGroup } from './Avatar';

const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' };

const PEOPLE = [
  { name: 'Alice Kim',      initials: true },
  { name: 'Ben Okafor',     initials: true },
  { name: 'Clara Diaz',     initials: true },
  { name: 'David Chen',     initials: true },
  { name: 'Evelyn Torres',  initials: true },
  { name: 'Frank Müller',   initials: true },
];

export function AvatarInitials() {
  return (
    <div style={row}>
      {PEOPLE.map(p => <Avatar key={p.name} name={p.name} />)}
    </div>
  );
}

export function AvatarNoName() {
  return (
    <div style={row}>
      <Avatar />
      <Avatar size="sm" />
      <Avatar size="lg" />
    </div>
  );
}

export function AvatarSizes() {
  return (
    <div style={{ ...row, alignItems: 'flex-end' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => (
        <div key={s} style={{ textAlign: 'center' }}>
          <Avatar name="Greg Radcliffe" size={s} />
          <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginTop: 'var(--space-1)' }}>{s}</p>
        </div>
      ))}
    </div>
  );
}

export function AvatarSquare() {
  return (
    <div style={row}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => (
        <Avatar key={s} name="Greg Radcliffe" size={s} shape="square" />
      ))}
    </div>
  );
}

export function AvatarWithStatus() {
  return (
    <div style={row}>
      <Avatar name="Alice Kim"    status="online"  />
      <Avatar name="Ben Okafor"   status="away"    />
      <Avatar name="Clara Diaz"   status="busy"    />
      <Avatar name="David Chen"   status="offline" />
    </div>
  );
}

export function AvatarGroupDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>4 visible, +2 overflow</p>
        <AvatarGroup max={4}>
          {PEOPLE.map(p => <Avatar key={p.name} name={p.name} />)}
        </AvatarGroup>
      </div>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>sm size</p>
        <AvatarGroup size="sm" max={4}>
          {PEOPLE.map(p => <Avatar key={p.name} name={p.name} size="sm" />)}
        </AvatarGroup>
      </div>
    </div>
  );
}

export function AvatarInContext() {
  const comments = [
    { name: 'Alice Kim',   time: '2h ago',  text: 'Looks great — just a couple of alignment notes on the token table.' },
    { name: 'Ben Okafor',  time: '45m ago', text: 'Left some comments in the Figma. Ready to review when you are.' },
    { name: 'Clara Diaz',  time: '12m ago', text: 'Approved. Nice work on the dark mode tokens.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {comments.map((c, i) => (
        <div
          key={c.name}
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            padding: 'var(--space-4) var(--space-4)',
            borderBottom: i < comments.length - 1 ? 'var(--border-width-base) solid var(--border-subtle)' : 'none',
          }}
        >
          <Avatar name={c.name} size="sm" />
          <div>
            <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'baseline', marginBottom: 'var(--space-1)' }}>
              <span style={{ fontSize: 'var(--body-sm)', fontWeight: 600, color: 'var(--text-base)', fontFamily: 'var(--font-base)' }}>{c.name}</span>
              <span style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)' }}>{c.time}</span>
            </div>
            <p style={{ fontSize: 'var(--body-sm)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', margin: 0, lineHeight: 1.5 }}>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

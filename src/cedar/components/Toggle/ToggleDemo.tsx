import { useState } from 'react';
import { Toggle } from './Toggle';

export function ToggleOff()  { const [c, s] = useState(false); return <Toggle checked={c} onChange={s} />; }
export function ToggleOn()   { const [c, s] = useState(true);  return <Toggle checked={c} onChange={s} />; }
export function ToggleSmOff(){ const [c, s] = useState(false); return <Toggle checked={c} onChange={s} size="sm" />; }
export function ToggleSmOn() { const [c, s] = useState(true);  return <Toggle checked={c} onChange={s} size="sm" />; }

export function ToggleWithLabel() {
  const [c, s] = useState(true);
  return <Toggle checked={c} onChange={s} label="Enable notifications" />;
}

export function ToggleLabelDisabled() {
  return <Toggle checked={false} label="Sync to cloud" disabled />;
}

export function ToggleFullDemo() {
  const [email, setEmail]     = useState(true);
  const [analytics, setAna]   = useState(false);
  const [twofa, setTwofa]     = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {[
        { label: 'Email notifications', description: 'Receive updates about your account activity and product announcements.', checked: email, onChange: setEmail },
        { label: 'Analytics cookies', description: 'Help us improve Cedar by sharing anonymous usage data. Opt out at any time.', checked: analytics, onChange: setAna },
        { label: 'Two-factor authentication', description: 'Requires a verification code in addition to your password. Strongly recommended.', checked: twofa, onChange: setTwofa, disabled: true },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            padding: 'var(--space-4) var(--space-5)',
            borderBottom: i < 2 ? 'var(--border-width-base) solid var(--border-subtle)' : 'none',
          }}
        >
          <Toggle
            checked={row.checked}
            onChange={row.onChange}
            label={row.label}
            description={row.description}
            disabled={'disabled' in row ? row.disabled : false}
          />
        </div>
      ))}
    </div>
  );
}

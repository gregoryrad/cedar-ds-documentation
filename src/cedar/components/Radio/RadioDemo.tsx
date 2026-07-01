import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

export function RadioStates() {
  const [val, setVal] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Radio label="Unchecked" checked={false} onChange={() => {}} />
      <Radio label="Checked" checked={true} onChange={() => {}} />
      <Radio label="Error" checked={false} state="error" onChange={() => {}} />
      <Radio label="Disabled" checked={false} state="disabled" />
      <Radio label="Disabled checked" checked={true} state="disabled" />
    </div>
  );
}

export function RadioGroupBasic() {
  const [val, setVal] = useState('contributor');
  return (
    <RadioGroup
      name="role-basic"
      value={val}
      onChange={setVal}
      groupLabel="Team role"
      options={[
        { value: 'viewer',      label: 'Viewer' },
        { value: 'contributor', label: 'Contributor' },
        { value: 'maintainer',  label: 'Maintainer' },
        { value: 'owner',       label: 'Owner', disabled: true },
      ]}
    />
  );
}

export function RadioGroupWithDesc() {
  const [val, setVal] = useState('');
  return (
    <RadioGroup
      name="export-format"
      value={val}
      onChange={setVal}
      groupLabel="Export format"
      options={[
        { value: 'css',   label: 'CSS custom properties', description: 'Raw CSS variables file. Drop into any web project.' },
        { value: 'json',  label: 'Design tokens JSON', description: 'W3C DTCG format. Compatible with Style Dictionary and Theo.' },
        { value: 'figma', label: 'Figma variables', description: 'Syncs directly to your Figma library via the Tokens Studio plugin.' },
      ]}
    />
  );
}

export function RadioGroupError() {
  const [val, setVal] = useState('');
  return (
    <RadioGroup
      name="visibility"
      value={val}
      onChange={setVal}
      groupLabel="Visibility"
      error="Select a visibility level to continue."
      options={[
        { value: 'public',   label: 'Public' },
        { value: 'internal', label: 'Internal' },
        { value: 'private',  label: 'Private' },
      ]}
    />
  );
}

export function RadioGroupHorizontal() {
  const [val, setVal] = useState('md');
  return (
    <RadioGroup
      name="size-picker"
      value={val}
      onChange={setVal}
      groupLabel="Size"
      layout="horizontal"
      options={[
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
      ]}
    />
  );
}

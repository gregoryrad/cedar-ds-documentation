import { useState } from 'react';
import { Select, SelectField } from './Select';

const ROLES = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'contributor', label: 'Contributor' },
  { value: 'maintainer', label: 'Maintainer' },
  { value: 'owner', label: 'Owner', disabled: true },
];

const COMPONENTS = [
  { value: 'button', label: 'Button' },
  { value: 'input', label: 'Input' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'select', label: 'Select' },
  { value: 'modal', label: 'Modal' },
  { value: 'toast', label: 'Toast' },
  { value: 'tooltip', label: 'Tooltip' },
];

const STATUS = [
  { value: 'all', label: 'All statuses' },
  { value: 'done', label: 'Done' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'planned', label: 'Planned' },
];

export function BasicSelect() {
  const [val, setVal] = useState('');
  return <Select options={ROLES} value={val} onChange={setVal} placeholder="Select a role" />;
}

export function SelectWithValue() {
  const [val, setVal] = useState('contributor');
  return <Select options={ROLES} value={val} onChange={setVal} />;
}

export function SelectFieldDefault() {
  const [val, setVal] = useState('');
  return (
    <SelectField
      label="Team role"
      options={ROLES}
      value={val}
      onChange={setVal}
      placeholder="Select a role"
      helper="Owners cannot be assigned through this form."
    />
  );
}

export function SelectFieldError() {
  const [val, setVal] = useState('');
  return (
    <SelectField
      label="Component"
      options={COMPONENTS}
      value={val}
      onChange={setVal}
      placeholder="Select a component"
      error="A component is required to generate the report."
    />
  );
}

export function SelectFieldDisabled() {
  return (
    <SelectField
      label="Status filter"
      options={STATUS}
      value="all"
      disabled
    />
  );
}

export function SelectSmall() {
  const [val, setVal] = useState('');
  return <Select options={STATUS} value={val} onChange={setVal} placeholder="Filter by status" size="sm" />;
}

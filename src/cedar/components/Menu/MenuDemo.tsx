import { Menu, type MenuItem } from './Menu';
import { Button } from '../Button/Button';

// Shared icons
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M9.5 2.5l2 2L4 12H2v-2L9.5 2.5z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M2 10V2.5A.5.5 0 0 1 2.5 2H10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);
const IconArchive = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="2" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M2 5v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M5 8h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 4h10M5 4V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V4M12 4l-.8 7.2a1 1 0 0 1-1 .8H3.8a1 1 0 0 1-1-.8L2 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MORE_TRIGGER = (
  <Button variant="outlined" color="neutral" size="sm" aria-label="More actions">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="2.5" cy="7" r="1.25" fill="currentColor"/>
      <circle cx="7" cy="7" r="1.25" fill="currentColor"/>
      <circle cx="11.5" cy="7" r="1.25" fill="currentColor"/>
    </svg>
  </Button>
);

const COMPONENT_ITEMS: MenuItem[] = [
  { type: 'item', label: 'Edit component', icon: <IconEdit />, shortcut: '⌘E', onClick: () => {} },
  { type: 'item', label: 'Duplicate', icon: <IconCopy />, shortcut: '⌘D', onClick: () => {} },
  { type: 'item', label: 'Archive', icon: <IconArchive />, onClick: () => {} },
  { type: 'divider' },
  { type: 'item', label: 'Delete', icon: <IconTrash />, destructive: true, onClick: () => {} },
];

const SETTINGS_ITEMS: MenuItem[] = [
  { type: 'label', text: 'Export' },
  { type: 'item', label: 'Export as CSV', onClick: () => {} },
  { type: 'item', label: 'Export as JSON', onClick: () => {} },
  { type: 'divider' },
  { type: 'item', label: 'Invite contributor', onClick: () => {} },
  { type: 'item', label: 'Manage access', disabled: true, onClick: () => {} },
  { type: 'divider' },
  { type: 'item', label: 'Deactivate product', destructive: true, onClick: () => {} },
];

export function ComponentActionsMenu() {
  return <Menu trigger={MORE_TRIGGER} items={COMPONENT_ITEMS} placement="bottom-end" />;
}

export function SettingsMenu() {
  return (
    <Menu
      trigger={<Button variant="outlined" color="neutral" size="sm">Settings ▾</Button>}
      items={SETTINGS_ITEMS}
      placement="bottom-start"
    />
  );
}

import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

type DemoVariant = 'confirm' | 'destructive' | 'info' | 'form';

interface ModalDemoProps {
  variant?: DemoVariant;
  size?: 'sm' | 'md' | 'lg';
}

const CONFIGS = {
  confirm: {
    triggerLabel: 'Publish component',
    triggerColor: 'brand' as const,
    title: 'Publish to production?',
    description: 'This will make the component available to all product teams.',
    body: 'Ensure all variants have been reviewed in Figma and the React implementation matches the spec. Once published, consumers will receive the update on their next dependency sync.',
    confirmLabel: 'Publish',
    confirmColor: 'brand' as const,
  },
  destructive: {
    triggerLabel: 'Delete component',
    triggerColor: 'destructive' as const,
    title: 'Delete Button component?',
    description: 'This action cannot be undone.',
    body: 'Deleting this component will remove it from the Cedar library and break any products that reference it. Confirm you have notified all consumers before proceeding.',
    confirmLabel: 'Delete',
    confirmColor: 'destructive' as const,
  },
  info: {
    triggerLabel: "What's new in v2",
    triggerColor: 'neutral' as const,
    title: "What's new in Cedar v2",
    description: 'Released June 2026',
    body: null,
    confirmLabel: '',
    confirmColor: 'brand' as const,
  },
  form: {
    triggerLabel: 'Invite contributor',
    triggerColor: 'brand' as const,
    title: 'Invite a contributor',
    description: 'They will receive an email with access to the Cedar Figma file.',
    body: null,
    confirmLabel: 'Send invite',
    confirmColor: 'brand' as const,
  },
};

export function ModalDemo({ variant = 'confirm', size = 'md' }: ModalDemoProps) {
  const [open, setOpen] = useState(false);
  const cfg = CONFIGS[variant];

  const footer = variant === 'info' ? (
    <Button variant="outlined" color="neutral" onClick={() => setOpen(false)}>Close</Button>
  ) : (
    <>
      <Button variant="ghost" color="neutral" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="filled" color={cfg.confirmColor} onClick={() => setOpen(false)}>
        {cfg.confirmLabel}
      </Button>
    </>
  );

  const body = variant === 'info' ? (
    <ul style={{ margin: 0, paddingLeft: '1.25em', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <li>Select, Toggle, and Radio components</li>
      <li>Modal, Toast, Tooltip, Menu, Breadcrumb, and Pagination</li>
      <li>Icon Button and Avatar variants</li>
      <li>Corrected radius scale (sm: 4px, md: 8px, lg: 12px)</li>
      <li>Cedar Ops — design system adoption dashboard</li>
    </ul>
  ) : variant === 'form' ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <label style={{ fontSize: 'var(--body-sm)', fontWeight: 500, color: 'var(--text-base)', fontFamily: 'var(--font-base)' }}>
          Email address
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          style={{
            height: 40,
            padding: '0 var(--space-3)',
            border: 'var(--border-width-base) solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--body-sm)',
            fontFamily: 'var(--font-base)',
            color: 'var(--text-base)',
            outline: 'none',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <label style={{ fontSize: 'var(--body-sm)', fontWeight: 500, color: 'var(--text-base)', fontFamily: 'var(--font-base)' }}>
          Role
        </label>
        <select
          style={{
            height: 40,
            padding: '0 var(--space-3)',
            border: 'var(--border-width-base) solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--body-sm)',
            fontFamily: 'var(--font-base)',
            color: 'var(--text-base)',
            backgroundColor: 'var(--bg-base)',
            outline: 'none',
          }}
        >
          <option>Viewer</option>
          <option>Contributor</option>
          <option>Maintainer</option>
        </select>
      </div>
    </div>
  ) : (
    <p style={{ margin: 0 }}>{cfg.body}</p>
  );

  return (
    <>
      <Button variant="filled" color={cfg.triggerColor} onClick={() => setOpen(true)}>
        {cfg.triggerLabel}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={cfg.title}
        description={cfg.description}
        size={size}
        footer={footer}
      >
        {body}
      </Modal>
    </>
  );
}

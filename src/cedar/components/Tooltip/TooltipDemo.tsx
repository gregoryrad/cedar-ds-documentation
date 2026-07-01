import { Tooltip, type TooltipPlacement } from './Tooltip';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

interface PlacementDemoProps {
  placement: TooltipPlacement;
}

export function PlacementDemo({ placement }: PlacementDemoProps) {
  return (
    <Tooltip content={`Placement: ${placement}`} placement={placement}>
      <Button variant="outlined" color="neutral" size="sm">{placement}</Button>
    </Tooltip>
  );
}

export function TooltipOnBadge() {
  return (
    <Tooltip content="Adoption rate measures the percentage of products using this component's latest major version.">
      <Badge color="information" badgeStyle="subtle">78% adoption ⓘ</Badge>
    </Tooltip>
  );
}

export function TooltipOnIcon() {
  return (
    <Tooltip content="Copy token value to clipboard" placement="right">
      <button
        aria-label="Copy"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          background: 'none',
          cursor: 'pointer',
          color: 'var(--text-subtle)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M2 10V2.5A.5.5 0 0 1 2.5 2H10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
        </svg>
      </button>
    </Tooltip>
  );
}

export function TooltipOnDisabled() {
  return (
    <Tooltip content="You don't have permission to publish. Contact a maintainer." placement="bottom">
      <span style={{ display: 'inline-flex' }}>
        <Button variant="filled" color="brand" size="sm" disabled>Publish</Button>
      </span>
    </Tooltip>
  );
}

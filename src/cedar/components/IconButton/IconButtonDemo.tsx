import { IconButton } from './IconButton';

// ── Inline icons ──────────────────────────────────────────────────────────────

const PencilIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M12.5 2.5a1.415 1.415 0 0 1 2 2L5.5 13.5l-3 1 1-3 9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 5h12M7 5V3h4v2M6 5l.75 9h4.5L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CopyIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="7" y="7" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11 7V4.5A1.5 1.5 0 0 0 9.5 3H4.5A1.5 1.5 0 0 0 3 4.5v5A1.5 1.5 0 0 0 4.5 11H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M13.5 4.5 4.5 13.5M4.5 4.5l9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MoreIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="4"  r="1.25" fill="currentColor"/>
    <circle cx="9" cy="9"  r="1.25" fill="currentColor"/>
    <circle cx="9" cy="14" r="1.25" fill="currentColor"/>
  </svg>
);

const BookmarkIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M5 3h8a1 1 0 0 1 1 1v10.5l-5-3-5 3V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="14" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="4"  cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 8.1 12.5 4.9M5.5 9.9l7 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RefreshIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 9a6 6 0 0 1 9.9-4.5L14 6M15 9a6 6 0 0 1-9.9 4.5L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 3.5V6h2.5M3.5 12v2.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Demos ─────────────────────────────────────────────────────────────────────

const row: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' };

export function IconButtonVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>ghost · neutral (default)</p>
        <div style={row}>
          <IconButton icon={<PencilIcon />} aria-label="Edit"   color="neutral" variant="ghost" />
          <IconButton icon={<CopyIcon />}   aria-label="Copy"   color="neutral" variant="ghost" />
          <IconButton icon={<MoreIcon />}   aria-label="More options" color="neutral" variant="ghost" />
          <IconButton icon={<CloseIcon />}  aria-label="Close"  color="neutral" variant="ghost" />
          <IconButton icon={<BookmarkIcon />} aria-label="Save" color="neutral" variant="ghost" />
          <IconButton icon={<ShareIcon />}  aria-label="Share"  color="neutral" variant="ghost" />
          <IconButton icon={<RefreshIcon />} aria-label="Refresh" color="neutral" variant="ghost" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>ghost · brand</p>
        <div style={row}>
          <IconButton icon={<PencilIcon />} aria-label="Edit"   color="brand"  variant="ghost" />
          <IconButton icon={<BookmarkIcon />} aria-label="Save" color="brand"  variant="ghost" />
          <IconButton icon={<RefreshIcon />} aria-label="Refresh" color="brand" variant="ghost" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>outlined · brand</p>
        <div style={row}>
          <IconButton icon={<PencilIcon />} aria-label="Edit"   color="brand"  variant="outlined" />
          <IconButton icon={<ShareIcon />}  aria-label="Share"  color="brand"  variant="outlined" />
          <IconButton icon={<RefreshIcon />} aria-label="Refresh" color="brand" variant="outlined" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>filled · brand</p>
        <div style={row}>
          <IconButton icon={<PencilIcon />} aria-label="Edit"   color="brand"  variant="filled" />
          <IconButton icon={<BookmarkIcon />} aria-label="Save" color="brand"  variant="filled" />
          <IconButton icon={<RefreshIcon />} aria-label="Refresh" color="brand" variant="filled" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginBottom: 'var(--space-2)' }}>ghost · destructive</p>
        <div style={row}>
          <IconButton icon={<TrashIcon />}  aria-label="Delete" color="destructive" variant="ghost" />
          <IconButton icon={<CloseIcon />}  aria-label="Remove" color="destructive" variant="ghost" />
        </div>
      </div>
    </div>
  );
}

export function IconButtonSizes() {
  return (
    <div style={{ ...row, alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon={<PencilIcon size={16} />} aria-label="Edit" size="sm" color="neutral" variant="ghost" />
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginTop: 'var(--space-1)' }}>sm · 32px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon={<PencilIcon size={18} />} aria-label="Edit" size="md" color="neutral" variant="ghost" />
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginTop: 'var(--space-1)' }}>md · 40px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon={<PencilIcon size={20} />} aria-label="Edit" size="lg" color="neutral" variant="ghost" />
        <p style={{ fontSize: 'var(--size-xs)', color: 'var(--text-subtle)', fontFamily: 'var(--font-base)', marginTop: 'var(--space-1)' }}>lg · 48px</p>
      </div>
    </div>
  );
}

export function IconButtonDisabled() {
  return (
    <div style={row}>
      <IconButton icon={<PencilIcon />} aria-label="Edit"   disabled variant="ghost"    color="neutral" />
      <IconButton icon={<PencilIcon />} aria-label="Edit"   disabled variant="outlined"  color="brand" />
      <IconButton icon={<PencilIcon />} aria-label="Edit"   disabled variant="filled"    color="brand" />
      <IconButton icon={<TrashIcon />}  aria-label="Delete" disabled variant="ghost"    color="destructive" />
    </div>
  );
}

export function IconButtonInContext() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {['Untitled component', 'Button — primary', 'Card — elevated'].map(name => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-3) var(--space-4)',
            border: 'var(--border-width-base) solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-base)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-base)', fontSize: 'var(--body-sm)', color: 'var(--text-base)' }}>{name}</span>
          <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
            <IconButton icon={<CopyIcon />}    aria-label="Duplicate"  size="sm" color="neutral" variant="ghost" />
            <IconButton icon={<PencilIcon />}  aria-label="Edit"       size="sm" color="neutral" variant="ghost" />
            <IconButton icon={<TrashIcon />}   aria-label="Delete"     size="sm" color="destructive" variant="ghost" />
          </div>
        </div>
      ))}
    </div>
  );
}

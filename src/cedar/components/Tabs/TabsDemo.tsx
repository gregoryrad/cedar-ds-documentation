import { Tabs } from './Tabs';

const panelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 'var(--body-md)',
  color: 'var(--text-subtle)',
  lineHeight: 1.6,
  margin: 0,
};

export function TabsDemo() {
  return (
    <Tabs
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: <p style={panelStyle}>Overview panel — the active tab by default. Bold label, 2px teal indicator.</p>,
        },
        {
          id: 'details',
          label: 'Details',
          content: <p style={panelStyle}>Details panel — switch here with a click or the ← → arrow keys.</p>,
        },
        {
          id: 'history',
          label: 'History',
          content: <p style={panelStyle}>History panel — any React node can be passed as tab content.</p>,
        },
      ]}
    />
  );
}

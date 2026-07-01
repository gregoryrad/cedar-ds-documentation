import { ToastProvider, useToast, type ToastVariant } from './Toast';
import { Button } from '../Button/Button';

const DEMOS: Array<{
  label: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
  buttonColor: 'brand' | 'destructive' | 'neutral' | 'secondary';
}> = [
  {
    label: 'Success',
    variant: 'success',
    title: 'Component published',
    message: 'Button v2.3 is now live for all product teams.',
    buttonColor: 'brand',
  },
  {
    label: 'Error',
    variant: 'error',
    title: 'Publish failed',
    message: 'Could not reach the registry. Check your connection and try again.',
    duration: 0,
    buttonColor: 'destructive',
  },
  {
    label: 'Warning',
    variant: 'warning',
    message: 'Adoption below threshold. 3 products are still on Button v1.',
    buttonColor: 'neutral',
  },
  {
    label: 'Information',
    variant: 'information',
    message: 'Cedar v2 releases on 14 July. Review the migration guide.',
    action: { label: 'View guide', onClick: () => {} },
    buttonColor: 'secondary',
  },
  {
    label: 'Neutral',
    variant: 'neutral',
    message: 'Settings saved.',
    buttonColor: 'neutral',
  },
];

function ToastTriggers() {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
      {DEMOS.map(d => (
        <Button
          key={d.variant}
          variant="outlined"
          color={d.buttonColor}
          size="sm"
          onClick={() => toast({
            title: d.title,
            message: d.message,
            variant: d.variant,
            duration: d.duration,
            action: d.action,
          })}
        >
          {d.label}
        </Button>
      ))}
    </div>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider>
      <ToastTriggers />
    </ToastProvider>
  );
}

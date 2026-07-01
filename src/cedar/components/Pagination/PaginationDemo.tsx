import { useState } from 'react';
import { Pagination } from './Pagination';

interface PaginationDemoProps {
  totalPages?: number;
  initialPage?: number;
}

export function PaginationDemo({ totalPages = 12, initialPage = 1 }: PaginationDemoProps) {
  const [current, setCurrent] = useState(initialPage);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Pagination totalPages={totalPages} currentPage={current} onPageChange={setCurrent} />
      <p style={{
        margin: 0,
        fontSize: 'var(--size-xs)',
        fontFamily: 'var(--font-base)',
        color: 'var(--text-subtle)',
      }}>
        Page {current} of {totalPages}
      </p>
    </div>
  );
}

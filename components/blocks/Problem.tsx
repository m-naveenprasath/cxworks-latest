import { ui } from '@/components/ui/styles';
import type { BlockProps } from './types';

export interface ProblemBlock {
  eb?: string;
  a: string;
  b?: string;
  /** [label, text] */
  lines: [string, string][];
}

/** Heading on the left, problem cards on the right (stacks on narrow screens). */
export function Problem({ b }: BlockProps<ProblemBlock>) {
  return (
    <section data-screen-label={b.label} style={ui.section}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: 'clamp(24px,3vw,48px)',
          alignItems: 'start',
        }}
      >
        <div>
          <p style={{ ...ui.eyebrow, marginBottom: '16px' }}>{b.eb}</p>
          <h2 style={ui.h2Compact}>
            {b.a} <span style={{ color: 'var(--acc)', fontStyle: 'italic', fontWeight: '400' }}>{b.b}</span>
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '12px',
          }}
        >
          {b.lines.map(([k, v]) => (
            <div
              key={k}
              data-reveal=""
              className="hv-7f8fefb"
              style={{
                padding: '20px 22px',
                borderRadius: '18px',
                border: '1px solid rgba(var(--ink-rgb),.12)',
                background: 'rgba(var(--ink-rgb),.025)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '12px',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--acc)',
                }}
              >
                {k}
              </span>
              <span style={{ fontSize: '17px', lineHeight: '1.5', color: 'var(--ink)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

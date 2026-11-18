import { Fragment } from 'react';
import { type V, list, txt } from '@/lib/products/dc';

/** QueryPrism page — how section. */
export function HowItWorks({ v }: { v: V }) {
  return (
    <section
      id="how"
      style={{ padding: 'clamp(72px,8vw,110px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '36px' }}>
        <div
          data-reveal="1"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: '20px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px' }}>
            <div
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#64A8FF',
              }}
            >
              {'How it works'}
            </div>
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(30px,3.6vw,48px)',
                lineHeight: '1.06',
                letterSpacing: '-0.03em',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: '500',
                textWrap: 'balance',
              }}
            >
              {'One connected workflow, from seed query to published content.'}
            </h2>
          </div>
          <button
            onClick={v.goApp}
            style={{
              height: '40px',
              padding: '0 16px',
              borderRadius: '999px',
              border: '1px solid rgba(100,168,255,.4)',
              background: 'transparent',
              color: '#F5F5F7',
              fontSize: '13.5px',
              cursor: 'pointer',
            }}
          >
            {'Click through the product ↓'}
          </button>
        </div>
        <div
          data-reveal="1"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}
        >
          {list(v.qpFlow).map((f, i1) => (
            <Fragment key={i1}>
              <button
                className="ph-hover-4a2225"
                onClick={f?.onClick}
                style={{
                  position: 'relative',
                  padding: '18px 16px',
                  borderRadius: '16px',
                  border: '1px solid rgba(100,168,255,.18)',
                  background: 'rgba(100,168,255,.04)',
                  color: '#F5F5F7',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  minHeight: '132px',
                  transition: 'all .25s',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '11px',
                    color: '#64A8FF',
                  }}
                >
                  <span>{txt(f?.n)}</span>
                  <span style={{ color: '#98989D' }}>{txt(f?.arrow)}</span>
                </span>
                <span style={{ fontSize: '15.5px', fontWeight: '500', lineHeight: '1.3' }}>{txt(f?.t)}</span>
                <span style={{ fontSize: '12.5px', lineHeight: '1.45', color: '#98989D' }}>{txt(f?.d)}</span>
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

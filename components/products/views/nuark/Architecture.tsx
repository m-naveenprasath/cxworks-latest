import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK page — architecture section. */
export function Architecture({ v }: { v: V }) {
  return (
    <section
      id="architecture"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '56px 80px',
        }}
      >
        <div data-reveal="1" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'04 / Built as one mind'}
          </div>
          <h2
            style={{
              margin: '0',
              fontSize: 'clamp(34px,4.2vw,56px)',
              lineHeight: '1.03',
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'40+ skills. One coordinated reply.'}
          </h2>
          <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#98989D' }}>
            {
              'A pricing question can draw on competitor data and the catalogue at once. A traffic drop can be checked against technical SEO, on-page content and ad spend in the same answer.'
            }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {list(v.archLayers).map((a, i1) => (
              <Fragment key={i1}>
                <div
                  onMouseEnter={a?.onEnter}
                  onClick={a?.onEnter}
                  style={css(
                    `padding:16px 20px; border-radius:14px; border:1px solid ${str(a?.border)}; background:${str(a?.bg)}; cursor:pointer; transition:all .35s ease`,
                  )}
                >
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={css(`font-family:'Montserrat',sans-serif; font-size:11px; color:${str(a?.nColor)}`)}>
                      {txt(a?.n)}
                    </span>
                    <span style={{ fontSize: '16.5px', fontWeight: '500' }}>{txt(a?.t)}</span>
                  </div>
                  <div
                    style={css(
                      `max-height:${str(a?.dH)}; opacity:${str(a?.dOp)}; overflow:hidden; transition:max-height .4s ease, opacity .4s ease`,
                    )}
                  >
                    <p style={{ margin: '8px 0 0 30px', fontSize: '14px', lineHeight: '1.5', color: '#98989D' }}>
                      {txt(a?.d)}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div data-reveal="1" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '8px' }}>
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#98989D',
            }}
          >
            {"Who it's for"}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {list(v.nuarkRoles).map((r, i1) => (
              <Fragment key={i1}>
                <span
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(64,200,224,.3)',
                    fontSize: '13.5px',
                    color: '#F5F5F7',
                  }}
                >
                  {txt(r)}
                </span>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#98989D',
              marginTop: '16px',
            }}
          >
            {'Why it matters'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {list(v.nuarkFor).map((b, i1) => (
              <Fragment key={i1}>
                <div
                  style={{
                    padding: '18px 0',
                    borderTop: '1px solid rgba(245,245,247,.08)',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(150px, 200px) 1fr',
                    gap: '8px 20px',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>{txt(b?.t)}</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#98989D' }}>{txt(b?.d)}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

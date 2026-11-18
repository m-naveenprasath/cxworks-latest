import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK page — workflow section. */
export function Workflow({ v }: { v: V }) {
  return (
    <div
      ref={v.wfRef}
      id="workflow"
      style={css(`position:relative; height:${str(v.wfOuterH)}; border-top:1px solid rgba(245,245,247,.06)`)}
    >
      <div
        style={css(
          `position:${str(v.wfPos)}; top:0; min-height:${str(v.wfMinH)}; display:flex; align-items:center; padding:clamp(88px,9vw,120px) clamp(20px,5vw,64px)`,
        )}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '760px' }}>
            <div
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#40C8E0',
              }}
            >
              {'03 / How it works'}
            </div>
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(36px,4.6vw,62px)',
                lineHeight: '1.03',
                letterSpacing: '-0.03em',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: '500',
                textWrap: 'balance',
              }}
            >
              {'Ask → Route → Analyse → Act.'}
            </h2>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', maxWidth: '620px' }}>
              {
                '40+ skills and multiple connectors work together as one coordinated mind. The team sees one reply, not six reports.'
              }
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              height: '2px',
              background: 'rgba(245,245,247,.08)',
              borderRadius: '1px',
              overflow: 'hidden',
            }}
          >
            <div
              ref={v.wfBarRef}
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '0%',
                background: 'linear-gradient(90deg, #40C8E0, #7FDCEC)',
              }}
            ></div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '14px',
            }}
          >
            {list(v.wfSteps).map((w, i1) => (
              <Fragment key={i1}>
                <div
                  style={css(
                    `padding:24px; border-radius:20px; border:1px solid ${str(w?.border)}; background:${str(w?.bg)}; opacity:${str(w?.op)}; transition:all .5s ease; display:flex; flex-direction:column; gap:14px; min-height:270px`,
                  )}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={css(
                        `width:8px; height:8px; border-radius:50%; background:${str(w?.dot)}; transition:background .4s`,
                      )}
                    ></span>
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12px', color: '#98989D' }}>
                      {txt(w?.n)}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '24px',
                      letterSpacing: '-0.02em',
                      fontFamily: "'Montserrat',sans-serif",
                      fontWeight: '500',
                    }}
                  >
                    {txt(w?.t)}
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#C7C7CC' }}>{txt(w?.d)}</span>
                  <div
                    style={css(
                      `margin-top:auto; padding:12px 14px; border-radius:12px; background:rgba(0,0,0,.6); border:1px solid rgba(245,245,247,.06); font-size:13px; line-height:1.5; color:#7FDCEC; opacity:${str(w?.exOp)}; transition:opacity .5s .15s`,
                    )}
                  >
                    {txt(w?.ex)}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

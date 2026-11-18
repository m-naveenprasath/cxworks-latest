import { type V, css, str, txt } from '@/lib/products/dc';

/** Home page — ecosystem section. */
export function Ecosystem({ v }: { v: V }) {
  return (
    <section
      id="ecosystem"
      style={{
        padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(245,245,247,.06)',
        background: 'radial-gradient(60% 50% at 50% 0%, rgba(64,200,224,.07), transparent 70%)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '56px',
        }}
      >
        <div
          data-reveal="1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
            maxWidth: '780px',
          }}
        >
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'03 / The ecosystem'}
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
            {'From CXWorks practice to measurable outcomes.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D' }}>
            {'Hover any layer to trace how it connects.'}
          </p>
        </div>
        <div
          data-reveal="1"
          onMouseLeave={v.ecoOff}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <button
            onMouseEnter={v.ecoCx}
            onClick={v.ecoCx}
            style={css(
              `padding:16px 32px; border-radius:999px; border:1px solid ${str(v.ecoCxBorder)}; background:rgba(64,200,224,.08); color:#F5F5F7; cursor:pointer; opacity:${str(v.ecoCxOp)}; transition:all .3s`,
            )}
          >
            <img
              src="/images/products/cxworks-logo.svg"
              alt="CXWorks"
              style={{ height: '22px', width: 'auto', display: 'block' }}
            />
          </button>
          <div
            style={{
              position: 'relative',
              width: '1px',
              height: '44px',
              background: 'linear-gradient(#40C8E0, rgba(64,200,224,.2))',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '-2px',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#40C8E0',
                animation: 'cxTravel 2.2s linear infinite',
              }}
            ></span>
          </div>
          <button
            onMouseEnter={v.ecoOs}
            onClick={v.ecoOs}
            style={css(
              `width:min(100%, 640px); padding:18px 24px; border-radius:18px; border:1px solid ${str(v.ecoOsBorder)}; background:rgba(245,245,247,.03); backdrop-filter:blur(12px); color:#F5F5F7; cursor:pointer; opacity:${str(v.ecoOsOp)}; transition:all .3s; display:flex; flex-direction:column; gap:4px; align-items:center`,
            )}
          >
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '10.5px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'Platform layer'}
            </span>
            <span style={{ fontSize: 'clamp(16px,2vw,19px)', fontWeight: '500' }}>
              {'Digital Customer Experience Operating System'}
            </span>
          </button>
          <div style={{ position: 'relative', width: 'min(100%, 420px)', height: '44px' }}>
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '1px',
                height: '22px',
                background: 'rgba(245,245,247,.25)',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                left: '25%',
                right: '25%',
                top: '22px',
                height: '1px',
                background: 'rgba(245,245,247,.25)',
              }}
            ></div>
            <div
              style={css(
                `position:absolute; left:25%; top:22px; width:1px; height:22px; background:${str(v.ecoLineN)}; transition:background .3s`,
              )}
            ></div>
            <div
              style={css(
                `position:absolute; left:75%; top:22px; width:1px; height:22px; background:${str(v.ecoLineQ)}; transition:background .3s`,
              )}
            ></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', width: 'min(100%, 640px)' }}>
            <button
              onMouseEnter={v.ecoN}
              onClick={v.ecoN}
              style={css(
                `padding:22px; border-radius:20px; border:1px solid ${str(v.ecoNBorder)}; background:linear-gradient(160deg, rgba(64,200,224,.16), rgba(28,28,30,.9)); color:#F5F5F7; cursor:pointer; opacity:${str(v.ecoNOp)}; transform:${str(v.ecoNT)}; transition:all .35s; text-align:left; display:flex; flex-direction:column; gap:6px`,
              )}
            >
              <span style={{ height: '28px', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/products/nuark-logo.svg"
                  alt="NUARK"
                  style={{ height: '20px', width: 'auto', display: 'block' }}
                />
              </span>
              <span style={{ fontSize: '13.5px', color: '#C7C7CC' }}>{'Chat-based ecommerce agent'}</span>
            </button>
            <button
              onMouseEnter={v.ecoQ}
              onClick={v.ecoQ}
              style={css(
                `padding:22px; border-radius:20px; border:1px solid ${str(v.ecoQBorder)}; background:linear-gradient(200deg, rgba(100,168,255,.16), rgba(28,28,30,.9)); color:#F5F5F7; cursor:pointer; opacity:${str(v.ecoQOp)}; transform:${str(v.ecoQT)}; transition:all .35s; text-align:left; display:flex; flex-direction:column; gap:6px`,
              )}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src="/images/products/queryprism-icon.svg"
                  alt=""
                  style={{ width: '24px', height: '24px', display: 'block' }}
                />
                <span
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: '700',
                    fontSize: '19px',
                    letterSpacing: '-0.02em',
                    color: '#F5F5F7',
                  }}
                >
                  {'QueryPrism'}
                </span>
              </span>
              <span style={{ fontSize: '13.5px', color: '#B7C4D8' }}>{'SEO · AEO · GEO content intelligence'}</span>
            </button>
          </div>
          <p
            style={{
              margin: '28px 0 0',
              minHeight: '56px',
              maxWidth: '640px',
              textAlign: 'center',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#C7C7CC',
              textWrap: 'pretty',
            }}
          >
            {txt(v.ecoDesc)}
          </p>
        </div>
      </div>
    </section>
  );
}

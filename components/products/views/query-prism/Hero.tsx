import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — Hero section. */
export function Hero({ v }: { v: V }) {
  return (
    <section
      style={{ position: 'relative', padding: '160px clamp(20px,5vw,64px) clamp(80px,9vw,120px)', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          width: '1000px',
          height: '1000px',
          right: '-300px',
          top: '-400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,168,255,.16), transparent 60%)',
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/images/products/queryprism-icon.svg"
                alt=""
                style={{ width: '36px', height: '36px', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: '700',
                  fontSize: '24px',
                  letterSpacing: '-0.02em',
                }}
              >
                {'QueryPrism'}
              </span>
            </span>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'a CXWorks product'}
            </span>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(100,168,255,.35)',
                fontSize: '12px',
                color: '#A9CCFF',
              }}
            >
              {'Free trial'}
            </span>
          </div>
          <h1
            style={{
              margin: '0',
              fontSize: 'clamp(40px,5.6vw,80px)',
              lineHeight: '.98',
              letterSpacing: '-0.035em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Find the questions your site '}
            <span style={{ fontFamily: "'Forum',serif", fontWeight: '400', letterSpacing: '0', color: '#64A8FF' }}>
              {'doesn’t answer yet.'}
            </span>
          </h1>
          <p
            style={{
              margin: '0',
              maxWidth: '560px',
              fontSize: 'clamp(17px,1.4vw,19px)',
              lineHeight: '1.6',
              color: '#98989D',
              textWrap: 'pretty',
            }}
          >
            {
              'AI search breaks a topic into follow-up questions. Give QueryPrism a topic and a page, and it shows which questions the page answers — and which deserve a page of their own. SEO, AEO and GEO in one workflow.'
            }
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '4px' }}>
            <button
              className="ph-hover-205650"
              onClick={v.openTrial}
              style={{
                height: '52px',
                padding: '0 24px',
                borderRadius: '999px',
                border: '0',
                background: '#64A8FF',
                color: '#000000',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform .2s, box-shadow .2s',
              }}
            >
              {'Try QueryPrism ↗'}
            </button>
            <button
              className="ph-hover-598864"
              onClick={v.openApp}
              style={{
                height: '52px',
                padding: '0 20px',
                borderRadius: '999px',
                border: '1px solid rgba(245,245,247,.16)',
                background: 'transparent',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'See How It Works ↗'}
            </button>
          </div>
        </div>
        <div
          style={{
            padding: 'clamp(18px,2.4vw,28px)',
            borderRadius: '26px',
            background: 'linear-gradient(180deg, rgba(100,168,255,.07), rgba(245,245,247,.015))',
            border: '1px solid rgba(100,168,255,.2)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 50px 120px -50px rgba(0,0,0,.95)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              height: '56px',
              padding: '0 18px',
              borderRadius: '16px',
              background: '#000000',
              border: '1px solid rgba(100,168,255,.3)',
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '10px',
                letterSpacing: '.1em',
                color: '#64A8FF',
                flexShrink: '0',
              }}
            >
              {'SEED'}
            </span>
            <span
              ref={v.typeRef}
              style={{ fontSize: 'clamp(14px,1.5vw,17px)', whiteSpace: 'nowrap', overflow: 'hidden' }}
            >
              {'bathroom and kitchen showroom'}
            </span>
            <span
              style={{
                width: '2px',
                height: '20px',
                background: '#64A8FF',
                animation: 'cxBlink 1s steps(1) infinite',
                flexShrink: '0',
              }}
            ></span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '10.5px',
              letterSpacing: '.1em',
              color: '#98989D',
            }}
          >
            <span
              style={{
                flex: '1',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(100,168,255,.5), transparent)',
              }}
            ></span>
            {'FANS OUT ACROSS 6 INTENTS'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '8px' }}>
            {list(v.qpHeroChips).map((c, i1) => (
              <Fragment key={i1}>
                <div
                  style={css(
                    `padding:10px 12px; border-radius:12px; border:1px solid rgba(100,168,255,.2); background:rgba(0,0,0,.7); display:flex; flex-direction:column; gap:4px; animation:cxIn .6s ease both; animation-delay:${str(c?.delay)}`,
                  )}
                >
                  <span
                    style={css(
                      `font-family:'Montserrat',sans-serif; font-size:9.5px; letter-spacing:.12em; text-transform:uppercase; color:${str(c?.color)}`,
                    )}
                  >
                    {txt(c?.k)}
                  </span>
                  <span style={{ fontSize: '13px', color: '#D7DCE4' }}>{txt(c?.q)}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              borderTop: '1px solid rgba(245,245,247,.07)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '12px' }}>
              <span style={{ fontSize: '24px', letterSpacing: '-0.03em' }}>{'12'}</span>
              <span style={{ fontSize: '12px', color: '#98989D' }}>{'sub-queries'}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '12px' }}>
              <span style={{ fontSize: '24px', letterSpacing: '-0.03em' }}>{'3 of 12'}</span>
              <span style={{ fontSize: '12px', color: '#98989D' }}>{'fully answered by your page'}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '12px' }}>
              <span style={{ fontSize: '24px', letterSpacing: '-0.03em' }}>{'5'}</span>
              <span style={{ fontSize: '12px', color: '#98989D' }}>{'deserve their own page'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { type V } from '@/lib/products/dc';

/** NUARK page — Hero section. */
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
          left: '-300px',
          top: '-400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,200,224,.14), transparent 60%)',
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
            <img
              src="/images/products/nuark-logo.svg"
              alt="NUARK"
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
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
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(64,200,224,.35)',
                fontSize: '12px',
                color: '#7FDCEC',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#40C8E0',
                  animation: 'cxBlink 2s infinite',
                }}
              ></span>
              {'Waitlist open'}
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
            {'One conversation to '}
            <span style={{ fontFamily: "'Forum',serif", fontWeight: '400', letterSpacing: '0', color: '#40C8E0' }}>
              {'ask, analyse and act.'}
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
              'NUARK is a chat-based AI agent for ecommerce teams. It connects to the systems and data you already use, so the work happens in one conversation instead of across a dozen tabs.'
            }
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px 28px',
              padding: '16px 0',
              borderTop: '1px solid rgba(245,245,247,.08)',
              borderBottom: '1px solid rgba(245,245,247,.08)',
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '26px', letterSpacing: '-0.03em', fontFamily: "'Montserrat',sans-serif" }}>
                {'40+'}
              </span>
              <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'specialised skills'}</span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '26px', letterSpacing: '-0.03em', fontFamily: "'Montserrat',sans-serif" }}>
                {'34'}
              </span>
              <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'named agents'}</span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '26px', letterSpacing: '-0.03em', fontFamily: "'Montserrat',sans-serif" }}>
                {'6'}
              </span>
              <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'skill areas'}</span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span
                style={{
                  fontSize: '26px',
                  letterSpacing: '-0.03em',
                  fontFamily: "'Montserrat',sans-serif",
                  color: '#30D158',
                }}
              >
                {'Live'}
              </span>
              <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'in production'}</span>
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              className="ph-hover-1c0f8a"
              onClick={v.openWaitlist}
              style={{
                height: '52px',
                padding: '0 24px',
                borderRadius: '999px',
                border: '0',
                background: '#40C8E0',
                color: '#000000',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform .2s, box-shadow .2s',
              }}
            >
              {'Join the NUARK Waitlist'}
            </button>
            <button
              className="ph-hover-598864"
              onClick={v.goAgents}
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
              {'Explore the skill areas ↓'}
            </button>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: '460px', display: 'flex', alignItems: 'center' }}>
          {v.isDesktop ? (
            <>
              <div
                style={{
                  position: 'absolute',
                  left: '-12px',
                  top: '0',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  background: 'rgba(44,44,46,.82)',
                  border: '1px solid rgba(245,245,247,.1)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 30px 60px -30px rgba(0,0,0,.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: 'cxFloat 7s ease-in-out infinite',
                  zIndex: '2',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                  }}
                >
                  {'SKILLS COMBINED'}
                </span>
                <span style={{ fontSize: '14px' }}>{'5 skills · 3 connectors'}</span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: '-12px',
                  bottom: '0',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  background: 'rgba(44,44,46,.85)',
                  border: '1px solid rgba(64,200,224,.3)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 30px 60px -30px rgba(0,0,0,.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: 'cxFloat 8s ease-in-out infinite',
                  animationDelay: '-3s',
                  zIndex: '2',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#40C8E0',
                  }}
                >
                  {'REPORT READY'}
                </span>
                <span style={{ fontSize: '14px' }}>{'3 fixes drafted · 1 shipped'}</span>
              </div>
            </>
          ) : null}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              margin: '0 auto',
              borderRadius: '22px',
              background: 'linear-gradient(180deg, rgba(245,245,247,.05), rgba(245,245,247,.015))',
              border: '1px solid rgba(245,245,247,.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 50px 120px -50px rgba(0,0,0,.95)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: '1',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                borderBottom: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <img src="/images/products/nuark-logo.svg" alt="NUARK" style={{ height: '11px', width: 'auto' }} />
              <span
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.1em',
                  color: '#98989D',
                }}
              >
                {'INSTANCE'}
              </span>
            </div>
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  alignSelf: 'flex-end',
                  maxWidth: '82%',
                  padding: '11px 14px',
                  borderRadius: '14px 14px 4px 14px',
                  background: '#2C2C2E',
                  border: '1px solid rgba(245,245,247,.08)',
                  fontSize: '14px',
                  lineHeight: '1.45',
                }}
              >
                {'Why did revenue dip on Running Shoes last week?'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: '#98989D' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#30D158' }}></span>
                {'Analysed 214 resources · 4.2s'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span
                  style={{
                    padding: '4px 9px',
                    borderRadius: '999px',
                    border: '1px solid rgba(64,200,224,.3)',
                    fontSize: '11px',
                    color: '#7FDCEC',
                  }}
                >
                  {'Technical SEO Audit'}
                </span>
                <span
                  style={{
                    padding: '4px 9px',
                    borderRadius: '999px',
                    border: '1px solid rgba(64,200,224,.3)',
                    fontSize: '11px',
                    color: '#7FDCEC',
                  }}
                >
                  {'Facet & Filter Integrity'}
                </span>
                <span
                  style={{
                    padding: '4px 9px',
                    borderRadius: '999px',
                    border: '1px solid rgba(64,200,224,.3)',
                    fontSize: '11px',
                    color: '#7FDCEC',
                  }}
                >
                  {'Pricing Intelligence'}
                </span>
                <span
                  style={{
                    padding: '4px 9px',
                    borderRadius: '999px',
                    border: '1px solid rgba(64,200,224,.3)',
                    fontSize: '11px',
                    color: '#7FDCEC',
                  }}
                >
                  {'Ad Watch'}
                </span>
              </div>
              <div
                style={{
                  maxWidth: '92%',
                  padding: '12px 14px',
                  borderRadius: '14px 14px 14px 4px',
                  background: 'rgba(64,200,224,.1)',
                  border: '1px solid rgba(64,200,224,.28)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
              >
                {
                  'Three causes: a broken size filter on mobile, a competitor price cut on 12 hero SKUs, and a paused top creative. Fixes are drafted for each.'
                }
              </div>
            </div>
            <div
              style={{
                margin: '0 14px 14px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 6px 0 16px',
                borderRadius: '14px',
                background: '#000000',
                border: '1px solid rgba(245,245,247,.1)',
                fontSize: '13.5px',
                color: '#8E8E93',
              }}
            >
              {'Ask me anything…'}
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#40C8E0',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                }}
              >
                {'→'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

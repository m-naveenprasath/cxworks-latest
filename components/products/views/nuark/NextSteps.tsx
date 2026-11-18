import { type V } from '@/lib/products/dc';

/** NUARK page — NextSteps section. */
export function NextSteps({ v }: { v: V }) {
  return (
    <section style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div
        data-reveal="1"
        style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: '16px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#40C8E0',
              }}
            >
              {'The CXWorks products'}
            </span>
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(28px,3.4vw,44px)',
                lineHeight: '1.06',
                letterSpacing: '-0.03em',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: '500',
              }}
            >
              {'Two products. Pick your next step.'}
            </h2>
          </div>
          <button
            className="ph-hover-2a3816"
            onClick={v.goProducts}
            style={{
              background: 'none',
              border: '0',
              padding: '0',
              color: '#98989D',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            {'Compare both on the home page →'}
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              padding: 'clamp(24px,3vw,36px)',
              borderRadius: '28px',
              background: 'radial-gradient(90% 90% at 0% 100%, rgba(64,200,224,.16), transparent 60%), #1C1C1E',
              border: '1px solid rgba(64,200,224,.55)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <img
                src="/images/products/nuark-logo.svg"
                alt="NUARK"
                style={{ height: '22px', width: 'auto', display: 'block' }}
              />
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid #40C8E0',
                  fontSize: '11.5px',
                  color: '#40C8E0',
                }}
              >
                {'You’re here'}
              </span>
            </div>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.5' }}>
              {'A chat-based AI agent for ecommerce teams. Ask, analyse and act in one conversation.'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: '13px', color: '#98989D' }}>
              <span>{'40+ skills'}</span>
              <span>{'34 agents'}</span>
              <span>{'6 skill areas'}</span>
              <span style={{ color: '#30D158' }}>{'Live in production'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                fontSize: '12.5px',
                color: '#C7C7CC',
                padding: '12px 0',
                borderTop: '1px solid rgba(245,245,247,.07)',
                borderBottom: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.1em',
                  color: '#98989D',
                  marginRight: '4px',
                }}
              >
                {'JOURNEY'}
              </span>
              {'Explore NUARK '}
              <span style={{ color: '#40C8E0' }}>{'→'}</span>
              {' See the skill areas & demo '}
              <span style={{ color: '#40C8E0' }}>{'→'}</span>
              {' Join the waitlist'}
            </div>
            <div style={{ flex: '1' }}></div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={v.goWaitlistNuark}
                style={{
                  height: '48px',
                  padding: '0 20px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#40C8E0',
                  color: '#000000',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {'Join the NUARK Waitlist'}
              </button>
              <button
                onClick={v.goAgents}
                style={{
                  height: '48px',
                  padding: '0 18px',
                  borderRadius: '999px',
                  border: '1px solid rgba(64,200,224,.4)',
                  background: 'transparent',
                  color: '#F5F5F7',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                {'Back to the skill areas ↑'}
              </button>
            </div>
          </div>
          <div
            style={{
              padding: 'clamp(24px,3vw,36px)',
              borderRadius: '28px',
              background: 'radial-gradient(90% 90% at 100% 100%, rgba(100,168,255,.16), transparent 60%), #1C1C1E',
              border: '1px solid rgba(100,168,255,.22)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/images/products/queryprism-icon.svg"
                  alt=""
                  style={{ width: '26px', height: '26px', display: 'block' }}
                />
                <span
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: '700',
                    fontSize: '19px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {'QueryPrism'}
                </span>
              </span>
            </div>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.5' }}>
              {
                'SEO, AEO and GEO content intelligence. Find what your content misses and create content that gets cited.'
              }
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: '13px', color: '#98989D' }}>
              <span>{'Fan-out'}</span>
              <span>{'Coverage check'}</span>
              <span>{'SERP analyser'}</span>
              <span>{'Briefs'}</span>
              <span>{'Cluster map'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                fontSize: '12.5px',
                color: '#C7C7CC',
                padding: '12px 0',
                borderTop: '1px solid rgba(245,245,247,.07)',
                borderBottom: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.1em',
                  color: '#98989D',
                  marginRight: '4px',
                }}
              >
                {'JOURNEY'}
              </span>
              {'Explore QueryPrism '}
              <span style={{ color: '#64A8FF' }}>{'→'}</span>
              {' Click through the product '}
              <span style={{ color: '#64A8FF' }}>{'→'}</span>
              {' Sign up '}
              <span style={{ color: '#64A8FF' }}>{'→'}</span>
              {' Free trial'}
            </div>
            <div style={{ flex: '1' }}></div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={v.goQP}
                style={{
                  height: '48px',
                  padding: '0 20px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#64A8FF',
                  color: '#000000',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {'Explore QueryPrism →'}
              </button>
              <button
                onClick={v.openTrial}
                style={{
                  height: '48px',
                  padding: '0 18px',
                  borderRadius: '999px',
                  border: '1px solid rgba(100,168,255,.4)',
                  background: 'transparent',
                  color: '#F5F5F7',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                {'Start free trial'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

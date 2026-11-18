import { type V } from '@/lib/products/dc';

/** Home page — NextSteps section. */
export function NextSteps({ v }: { v: V }) {
  return (
    <section style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '16px',
        }}
      >
        <div
          style={{
            padding: 'clamp(28px,4vw,48px)',
            borderRadius: '28px',
            background: 'radial-gradient(90% 90% at 0% 100%, rgba(64,200,224,.18), transparent 60%), #1C1C1E',
            border: '1px solid rgba(64,200,224,.22)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minHeight: '300px',
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '11px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'If you need things done'}
          </span>
          <h3
            style={{
              margin: '0',
              fontSize: 'clamp(28px,3.2vw,42px)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Ask, analyse and act in one conversation.'}
          </h3>
          <div style={{ flex: '1' }}></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={v.goNuark}
              style={{
                height: '50px',
                padding: '0 22px',
                borderRadius: '999px',
                border: '0',
                background: '#40C8E0',
                color: '#000000',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {'Explore NUARK →'}
            </button>
            <button
              onClick={v.openWaitlist}
              style={{
                height: '50px',
                padding: '0 22px',
                borderRadius: '999px',
                border: '1px solid rgba(64,200,224,.45)',
                background: 'transparent',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {'Join the waitlist'}
            </button>
          </div>
        </div>
        <div
          style={{
            padding: 'clamp(28px,4vw,48px)',
            borderRadius: '28px',
            background: 'radial-gradient(90% 90% at 100% 100%, rgba(100,168,255,.17), transparent 60%), #1C1C1E',
            border: '1px solid rgba(100,168,255,.22)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minHeight: '300px',
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '11px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#64A8FF',
            }}
          >
            {'If you need content that ranks and gets cited'}
          </span>
          <h3
            style={{
              margin: '0',
              fontSize: 'clamp(28px,3.2vw,42px)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Find the queries your content misses — and create content that gets cited.'}
          </h3>
          <div style={{ flex: '1' }}></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={v.goQP}
              style={{
                height: '50px',
                padding: '0 22px',
                borderRadius: '999px',
                border: '0',
                background: '#64A8FF',
                color: '#000000',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {'Explore QueryPrism →'}
            </button>
            <button
              onClick={v.openTrial}
              style={{
                height: '50px',
                padding: '0 22px',
                borderRadius: '999px',
                border: '1px solid rgba(100,168,255,.45)',
                background: 'transparent',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {'Start free trial'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

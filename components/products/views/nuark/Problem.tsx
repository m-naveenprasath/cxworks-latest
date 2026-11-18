/** NUARK page — Problem section. */
export function Problem() {
  return (
    <section
      style={{ padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'The problem'}
          </span>
          <h2
            style={{
              margin: '0',
              fontSize: 'clamp(28px,3vw,40px)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
            }}
          >
            {'One question. A dozen tabs.'}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '6px' }}>
          <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Tool-switching'}</span>
          <span style={{ fontSize: '15.5px', lineHeight: '1.55', color: '#98989D' }}>
            {
              '"Why did revenue dip on this category?" means the storefront admin, analytics, ad platforms, an SEO tool and a pricing tracker.'
            }
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '6px' }}>
          <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Stitched by hand'}</span>
          <span style={{ fontSize: '15.5px', lineHeight: '1.55', color: '#98989D' }}>
            {'Each tool gives part of the answer. Someone still has to join them up and decide what to do.'}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '6px' }}>
          <span style={{ fontSize: '17px', fontWeight: '500' }}>{'NUARK replaces the routine'}</span>
          <span style={{ fontSize: '15.5px', lineHeight: '1.55', color: '#98989D' }}>
            {
              'Ask in plain language. NUARK pulls the right data, runs the analysis, investigates and gets the work done.'
            }
          </span>
        </div>
      </div>
    </section>
  );
}

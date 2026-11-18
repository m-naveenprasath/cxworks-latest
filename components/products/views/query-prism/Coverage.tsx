import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — coverage section. */
export function Coverage({ v }: { v: V }) {
  return (
    <section
      id="coverage"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '36px' }}>
        <div
          data-reveal="1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '24px 64px',
            alignItems: 'end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#64A8FF',
              }}
            >
              {'02 / Coverage analysis'}
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
              {'How well does your page answer each query?'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {'Example: an existing page scored against the '}
            <span style={{ color: '#F5F5F7' }}>{txt(v.topicName)}</span>
            {
              ' query set. Every sub-query is scored covered, partial or missing — with the quote that proves it, its search demand, and whether it deserves its own page.'
            }
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', pointerEvents: 'none', userSelect: 'none' }}>
          <div
            style={{
              flex: '1 1 320px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0 18px',
              borderRadius: '14px',
              border: '1px solid rgba(100,168,255,.3)',
              background: '#000000',
              fontSize: '15px',
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '10px',
                letterSpacing: '.1em',
                color: '#64A8FF',
              }}
            >
              {'PAGE'}
            </span>
            {txt(v.covPlaceholder)}
          </div>
          <div
            style={{
              height: '54px',
              padding: '0 24px',
              borderRadius: '14px',
              background: 'rgba(100,168,255,.14)',
              border: '1px solid rgba(100,168,255,.35)',
              color: '#A9CCFF',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: '#30D158' }}>{'✓'}</span>
            {'Analysis complete'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
          {list(v.covSteps).map((c, i1) => (
            <Fragment key={i1}>
              <div
                style={css(
                  `padding:14px 16px; border-radius:14px; border:1px solid ${str(c?.border)}; background:rgba(245,245,247,.02); display:flex; justify-content:space-between; align-items:center; transition:border-color .4s`,
                )}
              >
                <span style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '11px',
                      color: '#98989D',
                      paddingTop: '2px',
                    }}
                  >
                    {txt(c?.n)}
                  </span>
                  {txt(c?.t)}
                </span>
                <span style={css(`color:${str(c?.color)}`)}>{txt(c?.mark)}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <div
          style={{
            borderRadius: '24px',
            background: '#1C1C1E',
            border: '1px solid rgba(100,168,255,.16)',
            padding: 'clamp(18px,2.4vw,28px)',
            minHeight: '320px',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {v.covIdle ? (
            <div
              style={{
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                textAlign: 'center',
                color: '#98989D',
              }}
            >
              <span style={{ fontSize: '16px', color: '#F5F5F7' }}>{'Enter a page URL and run the check.'}</span>
              <span style={{ fontSize: '14px' }}>{'Leave it blank to use the example page.'}</span>
            </div>
          ) : null}{' '}
          {v.covRunning ? (
            <div
              style={{
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '2px solid rgba(100,168,255,.2)',
                  borderTopColor: '#64A8FF',
                  animation: 'cxSpin .8s linear infinite',
                }}
              ></span>
              <span style={{ fontSize: '13px', color: '#98989D' }}>{txt(v.covTarget)}</span>
            </div>
          ) : null}{' '}
          {v.covDone ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '28px',
                animation: 'cxIn .5s ease',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <span style={{ fontSize: '12.5px', color: '#98989D', wordBreak: 'break-all' }}>{txt(v.covTarget)}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: '0' }}>
                    <svg viewBox="0 0 120 120" style={{ width: '140px', height: '140px' }}>
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        style={{ fill: 'none', stroke: 'rgba(100,168,255,.12)', strokeWidth: '9' }}
                      ></circle>
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        style={css(
                          `fill:none; stroke:#64A8FF; stroke-width:9; stroke-linecap:round; stroke-dasharray:${str(v.covDash)}; transform:rotate(-90deg); transform-origin:60px 60px; transition:stroke-dasharray 1s ease`,
                        )}
                      ></circle>
                    </svg>
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontSize: '34px', letterSpacing: '-0.04em' }}>
                        {txt(v.covScore)}
                        {'%'}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#98989D' }}>{'coverage'}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '13.5px',
                      color: '#98989D',
                    }}
                  >
                    <span>
                      <span style={{ color: '#30D158' }}>{'●'}</span> {txt(v.cntC)}
                      {' covered'}
                    </span>
                    <span>
                      <span style={{ color: '#40C8E0' }}>{'●'}</span> {txt(v.cntP)}
                      {' partial'}
                    </span>
                    <span>
                      <span style={{ color: '#FF6961' }}>{'●'}</span> {txt(v.cntM)}
                      {' missing'}
                    </span>
                    <span style={{ marginTop: '6px', color: '#F5F5F7' }}>
                      {txt(v.gapDemand)}
                      {' demand in gaps'}
                    </span>
                    <span style={{ color: '#64A8FF' }}>
                      {txt(v.ownPageCount)}
                      {' deserve a page of their own'}
                    </span>
                    <span style={{ color: '#30D158' }}>
                      {txt(v.citeReady)}
                      {' citation-ready answers'}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10.5px',
                    letterSpacing: '.1em',
                    color: '#FF6961',
                  }}
                >
                  {'TOP GAPS BY DEMAND'}
                </span>
                {list(v.covMissing).map((m, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(245,245,247,.03)',
                        border: '1px solid rgba(245,245,247,.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                      }}
                    >
                      <span
                        style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '13.5px' }}
                      >
                        <span>{txt(m?.q)}</span>
                        <span
                          style={css(
                            `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(m?.color)}; flex-shrink:0`,
                          )}
                        >
                          {txt(m?.label)}
                          {' · '}
                          {txt(m?.vol)}
                        </span>
                      </span>
                      <span style={{ fontSize: '12.5px', color: '#98989D' }}>{txt(m?.fix)}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {list(v.covRows).map((r, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto auto',
                        gap: '12px',
                        alignItems: 'center',
                        padding: '10px 4px',
                        borderBottom: '1px solid rgba(245,245,247,.06)',
                      }}
                    >
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                        <span style={{ fontSize: '13.5px', color: '#D7DCE4' }}>{txt(r?.q)}</span>
                        <span style={{ fontSize: '11.5px', color: '#98989D' }}>
                          {txt(r?.intent)}
                          {' · '}
                          <span style={css(`color:${str(r?.buildColor)}`)}>{txt(r?.build)}</span>
                        </span>
                        {r?.hasQuote ? (
                          <span
                            style={{
                              fontFamily: "'Forum',serif",
                              fontSize: '13.5px',
                              lineHeight: '1.4',
                              color: '#C7C7CC',
                            }}
                          >
                            {txt(r?.quote)}
                          </span>
                        ) : null}
                      </span>
                      <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10.5px', color: '#98989D' }}>
                        {txt(r?.vol)}
                      </span>
                      <span
                        style={css(
                          `font-family:'Montserrat',sans-serif; font-size:10.5px; padding:4px 9px; border-radius:999px; color:${str(r?.color)}; border:1px solid ${str(r?.color)}`,
                        )}
                      >
                        {txt(r?.label)}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

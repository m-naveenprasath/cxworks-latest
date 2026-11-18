import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — clusters section. */
export function Clusters({ v }: { v: V }) {
  return (
    <section
      id="clusters"
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
              {'04 / Query cluster map'}
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
              {'See the whole topic landscape.'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {'Your fan-out plus suggested queries that complete every cluster for '}
            <span style={{ color: '#F5F5F7' }}>{txt(v.topicName)}</span>
            {' — sized by demand, coloured by coverage, linked by relationship. Hover a cluster to explore it.'}
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '16px',
            alignItems: 'stretch',
          }}
        >
          <div
            onMouseLeave={v.clusterOff}
            style={{
              gridColumn: 'span 2',
              minWidth: '0',
              position: 'relative',
              aspectRatio: '600 / 440',
              borderRadius: '24px',
              background: 'radial-gradient(circle at 50% 50%, rgba(100,168,255,.08), transparent 60%), #1C1C1E',
              border: '1px solid rgba(100,168,255,.16)',
              overflow: 'hidden',
            }}
          >
            <svg viewBox="0 0 600 440" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}>
              {' '}
              {list(v.clusters).map((c, i1) => (
                <Fragment key={i1}>
                  {' '}
                  <line
                    x1="300"
                    y1="220"
                    x2={c?.x}
                    y2={c?.y}
                    style={css(
                      `stroke:rgba(100,168,255,.25); stroke-width:1; opacity:${str(c?.op)}; transition:opacity .3s`,
                    )}
                  ></line>{' '}
                </Fragment>
              ))}{' '}
              {list(v.clusterLinks).map((l, i1) => (
                <Fragment key={i1}>
                  {' '}
                  <line
                    x1={l?.x1}
                    y1={l?.y1}
                    x2={l?.x2}
                    y2={l?.y2}
                    style={css(
                      `stroke:#64A8FF; stroke-width:1.2; stroke-dasharray:4 5; opacity:${str(l?.op)}; transition:opacity .3s; animation:cxDash 1.6s linear infinite`,
                    )}
                  ></line>{' '}
                </Fragment>
              ))}{' '}
              {list(v.clusterSubLines).map((l, i1) => (
                <Fragment key={i1}>
                  {' '}
                  <line
                    x1={l?.x1}
                    y1={l?.y1}
                    x2={l?.x2}
                    y2={l?.y2}
                    style={css(
                      `stroke:rgba(245,245,247,.25); stroke-width:1; opacity:${str(l?.op)}; transition:opacity .3s`,
                    )}
                  ></line>{' '}
                </Fragment>
              ))}{' '}
              {list(v.clusterDots).map((d, i1) => (
                <Fragment key={i1}>
                  {' '}
                  <circle
                    cx={d?.x}
                    cy={d?.y}
                    r={d?.r}
                    style={css(`fill:${str(d?.c)}; opacity:${str(d?.op)}; transition:opacity .3s`)}
                  ></circle>{' '}
                </Fragment>
              ))}{' '}
            </svg>
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                maxWidth: '22%',
                padding: '10px 14px',
                borderRadius: '14px',
                border: '1px solid rgba(100,168,255,.6)',
                background: 'rgba(100,168,255,.14)',
                fontSize: 'clamp(10px,1.2vw,13px)',
                textAlign: 'center',
                lineHeight: '1.3',
              }}
            >
              {txt(v.topicName)}
            </div>
            {list(v.clusters).map((c, i1) => (
              <Fragment key={i1}>
                <button
                  onMouseEnter={c?.onEnter}
                  onClick={c?.onEnter}
                  style={css(
                    `position:absolute; left:${str(c?.left)}; top:${str(c?.top)}; transform:${str(c?.t)}; width:${str(c?.size)}; height:${str(c?.size)}; max-width:20%; max-height:27%; border-radius:50%; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:#F5F5F7; opacity:${str(c?.op)}; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; transition:all .3s cubic-bezier(.2,.8,.2,1)`,
                  )}
                >
                  <span style={{ fontSize: 'clamp(9px,1.1vw,12.5px)', fontWeight: '500' }}>{txt(c?.name)}</span>
                  <span
                    style={css(
                      `font-family:'Montserrat',sans-serif; font-size:clamp(8px,.9vw,10px); color:${str(c?.color)}`,
                    )}
                  >
                    {txt(c?.cov)}
                    {'%'}
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              padding: 'clamp(20px,2.6vw,28px)',
              borderRadius: '24px',
              background: '#1C1C1E',
              border: '1px solid rgba(100,168,255,.16)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {v.clNone ? (
              <>
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10.5px',
                    letterSpacing: '.1em',
                    color: '#64A8FF',
                  }}
                >
                  {'TOPIC LANDSCAPE'}
                </span>
                <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
                  {'6 clusters · '}
                  {txt(v.subCount)}
                  {' queries'}
                </span>
                <span style={{ fontSize: '14.5px', lineHeight: '1.55', color: '#98989D' }}>
                  {
                    'Circle size shows search demand. The percentage is coverage. Dashed lines connect related clusters.'
                  }
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginTop: 'auto',
                    fontSize: '13px',
                    color: '#98989D',
                  }}
                >
                  <span>
                    <span style={{ color: '#30D158' }}>{'●'}</span>
                    {' Covered'}
                  </span>
                  <span>
                    <span style={{ color: '#40C8E0' }}>{'●'}</span>
                    {' Partial'}
                  </span>
                  <span>
                    <span style={{ color: '#FF6961' }}>{'●'}</span>
                    {' Uncovered'}
                  </span>
                </div>
              </>
            ) : null}
            {v.clSome ? (
              <>
                <span
                  style={css(
                    `font-family:'Montserrat',sans-serif; font-size:10.5px; letter-spacing:.1em; color:${str(v.clColor)}`,
                  )}
                >
                  {'CLUSTER'}
                </span>
                <span style={{ fontSize: '26px', letterSpacing: '-0.02em' }}>{txt(v.clName)}</span>
                <div style={{ display: 'flex', gap: '24px', fontSize: '13.5px' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: '#98989D', fontSize: '12px' }}>{'Demand'}</span>
                    {txt(v.clDemand)}
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: '#98989D', fontSize: '12px' }}>{'Coverage'}</span>
                    {txt(v.clCov)}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {list(v.clQueries).map((q, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '10px',
                          padding: '10px 0',
                          borderTop: '1px solid rgba(245,245,247,.07)',
                          fontSize: '13.5px',
                        }}
                      >
                        <span>{txt(q?.q)}</span>
                        <span
                          style={css(
                            `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(q?.color)}; flex-shrink:0`,
                          )}
                        >
                          {txt(q?.label)}
                          {' · '}
                          {txt(q?.vol)}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <span style={{ marginTop: 'auto', fontSize: '13px', color: '#98989D' }}>
                  {'Related: '}
                  <span style={{ color: '#F5F5F7' }}>{txt(v.clRelated)}</span>
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

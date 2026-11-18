import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — fanout section. */
export function Fanout({ v }: { v: V }) {
  return (
    <section
      id="fanout"
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
              {'01 / Intent & query fan-out'}
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
              {'One seed query. Six intent dimensions.'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'QueryPrism analyses the intent behind a seed query and fans it out into Define, Segment, Evaluate, Compare, How To and Adjacent sub-queries — using generic logic or real search data.'
            }
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '11px',
              letterSpacing: '.1em',
              color: '#98989D',
              marginRight: '6px',
            }}
          >
            {'SEED QUERY'}
          </span>
          {list(v.topicChips).map((t, i1) => (
            <Fragment key={i1}>
              <button
                onClick={t?.onClick}
                style={css(
                  `height:38px; padding:0 14px; border-radius:999px; border:1px solid ${str(t?.border)}; background:${str(t?.bg)}; color:${str(t?.color)}; font-size:13px; cursor:pointer; transition:all .25s`,
                )}
              >
                {txt(t?.label)}
              </button>
            </Fragment>
          ))}
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              padding: '3px',
              borderRadius: '999px',
              border: '1px solid rgba(245,245,247,.12)',
            }}
          >
            <button
              onClick={v.setGeneric}
              style={css(
                `height:32px; padding:0 14px; border-radius:999px; border:0; background:${str(v.genBg)}; color:${str(v.genColor)}; font-size:12.5px; cursor:pointer; transition:all .25s`,
              )}
            >
              {'Generic logic'}
            </button>
            <button
              onClick={v.setData}
              style={css(
                `height:32px; padding:0 14px; border-radius:999px; border:0; background:${str(v.dataBg)}; color:${str(v.dataColor)}; font-size:12.5px; cursor:pointer; transition:all .25s`,
              )}
            >
              {'Real search data'}
            </button>
          </div>
          <button
            onClick={v.replayFan}
            style={{
              height: '38px',
              padding: '0 14px',
              borderRadius: '999px',
              border: '0',
              background: 'rgba(245,245,247,.06)',
              color: '#F5F5F7',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {'↻ Replay'}
          </button>
        </div>
        <div
          style={{
            padding: 'clamp(16px,2.4vw,28px)',
            borderRadius: '24px',
            background: '#1C1C1E',
            border: '1px solid rgba(100,168,255,.16)',
          }}
        >
          {v.isDesktop ? (
            <>
              <div
                style={{
                  position: 'relative',
                  height: '14px',
                  marginBottom: '14px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10.5px',
                  letterSpacing: '.1em',
                  color: '#98989D',
                }}
              >
                <span style={{ position: 'absolute', left: '0' }}>{'SEED QUERY'}</span>
                <span style={{ position: 'absolute', left: '24%' }}>{'INTENT'}</span>
                <span style={{ position: 'absolute', left: '51%' }}>{'SUB-QUERIES'}</span>
                <span style={{ position: 'absolute', left: '86%' }}>{'COVERAGE'}</span>
              </div>
              <div style={{ position: 'relative', height: '480px' }}>
                <svg
                  viewBox="0 0 100 480"
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}
                >
                  {' '}
                  {list(v.fanPaths).map((p, i1) => (
                    <Fragment key={i1}>
                      {' '}
                      <path
                        d={p?.d}
                        style={css(
                          `fill:none; stroke:${str(p?.color)}; stroke-width:1; vector-effect:non-scaling-stroke; opacity:${str(p?.op)}; transition:opacity .6s ease, stroke .6s ease`,
                        )}
                      ></path>{' '}
                    </Fragment>
                  ))}{' '}
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '208px',
                    width: '17%',
                    height: '64px',
                    borderRadius: '14px',
                    border: '1px solid rgba(100,168,255,.6)',
                    background: 'rgba(100,168,255,.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 10px',
                    textAlign: 'center',
                    fontSize: '13.5px',
                    lineHeight: '1.3',
                  }}
                >
                  {txt(v.topicName)}
                </div>
                {list(v.fanIntents).map((i, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={css(
                        `position:absolute; left:24%; top:${str(i?.top)}; width:20%; height:36px; border-radius:11px; border:1px solid rgba(100,168,255,.3); background:#000000; display:flex; align-items:center; justify-content:space-between; gap:8px; padding:0 12px; font-size:13.5px; opacity:${str(i?.op)}; transform:${str(i?.t)}; transition:opacity .5s ease, transform .5s ease; transition-delay:${str(i?.delay)}`,
                      )}
                    >
                      {txt(i?.name)}
                      <span
                        style={css(
                          `font-family:'Montserrat',sans-serif; font-size:10.5px; color:#64A8FF; opacity:${str(i?.demandOp)}; transition:opacity .3s`,
                        )}
                      >
                        {txt(i?.demand)}
                      </span>
                    </div>
                  </Fragment>
                ))}{' '}
                {list(v.fanSubs).map((s, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={css(
                        `position:absolute; left:51%; top:${str(s?.top)}; width:33%; height:32px; border-radius:9px; border:1px solid rgba(245,245,247,.08); background:rgba(0,0,0,.8); display:flex; align-items:center; justify-content:space-between; gap:8px; padding:0 12px; font-size:12.5px; color:#D7DCE4; opacity:${str(s?.op)}; transform:${str(s?.t)}; transition:opacity .45s ease, transform .45s ease; transition-delay:${str(s?.delay)}`,
                      )}
                    >
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {txt(s?.q)}
                      </span>
                      <span
                        style={css(
                          `flex-shrink:0; font-family:'Montserrat',sans-serif; font-size:10.5px; color:#98989D; opacity:${str(s?.volOp)}; transition:opacity .3s`,
                        )}
                      >
                        {txt(s?.vol)}
                      </span>
                    </div>
                    <div
                      style={css(
                        `position:absolute; left:86%; top:${str(s?.top)}; height:32px; display:flex; align-items:center; gap:7px; font-family:'Montserrat',sans-serif; font-size:11px; color:${str(s?.color)}; opacity:${str(s?.covOp)}; transition:opacity .4s ease; transition-delay:${str(s?.covDelay)}`,
                      )}
                    >
                      <span style={css(`width:7px; height:7px; border-radius:50%; background:${str(s?.color)}`)}></span>
                      {txt(s?.covLabel)}
                    </div>
                  </Fragment>
                ))}
              </div>
            </>
          ) : null}{' '}
          {v.isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(100,168,255,.6)',
                  background: 'rgba(100,168,255,.1)',
                  fontSize: '13.5px',
                }}
              >
                {txt(v.topicName)}
              </div>
              {list(v.fanList).map((i, i1) => (
                <Fragment key={i1}>
                  <div
                    style={{
                      marginLeft: '12px',
                      paddingLeft: '14px',
                      borderLeft: '1px solid rgba(100,168,255,.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      animation: 'cxIn .5s ease both',
                    }}
                  >
                    <span style={{ fontSize: '14.5px', fontWeight: '500' }}>{txt(i?.name)}</span>
                    {list(i?.subs).map((s, i2) => (
                      <Fragment key={i2}>
                        <div
                          style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '12.5px' }}
                        >
                          <span style={{ color: '#D7DCE4' }}>
                            {txt(s?.q)} <span style={{ color: '#98989D' }}>{txt(s?.vol)}</span>
                          </span>
                          <span style={css(`color:${str(s?.color)}; flex-shrink:0`)}>{txt(s?.label)}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          ) : null}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 24px',
              marginTop: '20px',
              paddingTop: '18px',
              borderTop: '1px solid rgba(245,245,247,.07)',
              fontSize: '13.5px',
              color: '#98989D',
            }}
          >
            <span>
              {txt(v.subCount)}
              {' sub-queries · '}
              {txt(v.totalDemand)}
            </span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

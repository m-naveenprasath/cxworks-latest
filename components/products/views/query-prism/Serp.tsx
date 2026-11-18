import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — serp section. */
export function Serp({ v }: { v: V }) {
  return (
    <section
      id="serp"
      style={{
        padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(245,245,247,.06)',
        background: 'radial-gradient(60% 40% at 50% 0%, rgba(100,168,255,.06), transparent 70%)',
      }}
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
              {'03 / SERP → brief → content'}
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
              {'From gaps to a brief to a draft.'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'QueryPrism analyses the SERPs for your gaps, converts the findings into a structured content brief, then the content writing agent drafts against real search requirements.'
            }
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {list(v.qpSteps).map((t, i1) => (
            <Fragment key={i1}>
              <button
                onClick={t?.onClick}
                style={css(
                  `height:44px; padding:0 18px; border-radius:999px; border:1px solid ${str(t?.border)}; background:${str(t?.bg)}; color:${str(t?.color)}; font-size:14px; cursor:pointer; display:flex; align-items:center; gap:10px; transition:all .25s`,
                )}
              >
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#64A8FF' }}>
                  {txt(t?.n)}
                </span>
                {txt(t?.t)}
              </button>
            </Fragment>
          ))}
        </div>
        <div
          style={{
            borderRadius: '24px',
            background: '#1C1C1E',
            border: '1px solid rgba(100,168,255,.16)',
            padding: 'clamp(18px,2.4vw,28px)',
            minHeight: '420px',
          }}
        >
          {v.qpS0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'cxIn .4s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: '#000000',
                    border: '1px solid rgba(245,245,247,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '9.5px',
                      letterSpacing: '.1em',
                      color: '#98989D',
                    }}
                  >
                    {'VOLUME/MO'}
                  </span>
                  <span style={{ fontSize: '18px' }}>{txt(v.totalDemand)}</span>
                </div>
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: '#000000',
                    border: '1px solid rgba(245,245,247,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '9.5px',
                      letterSpacing: '.1em',
                      color: '#98989D',
                    }}
                  >
                    {'DIFFICULTY'}
                  </span>
                  <span style={{ fontSize: '18px' }}>{'34'}</span>
                </div>
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: '#000000',
                    border: '1px solid rgba(245,245,247,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '9.5px',
                      letterSpacing: '.1em',
                      color: '#98989D',
                    }}
                  >
                    {'GOOGLE FEATURES'}
                  </span>
                  <span style={{ fontSize: '14px' }}>{'Local pack · AI Overview · PAA'}</span>
                </div>
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: 'rgba(100,168,255,.1)',
                    border: '1px solid rgba(100,168,255,.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '9.5px',
                      letterSpacing: '.1em',
                      color: '#64A8FF',
                    }}
                  >
                    {'PAGE TYPE TO BUILD'}
                  </span>
                  <span style={{ fontSize: '14px' }}>{'Landing page · chosen from what ranks'}</span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10.5px',
                  letterSpacing: '.1em',
                  color: '#98989D',
                }}
              >
                <span style={{ color: '#64A8FF' }}>
                  {'CURRENTLY RANKING · '}
                  {txt(v.topicName)}
                </span>
                <span>{'SEO DATA VIA AHREFS'}</span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <div style={{ minWidth: '640px', display: 'flex', flexDirection: 'column' }}>
                  {list(v.serpRows).map((r, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '28px minmax(220px,2fr) 120px 150px 70px',
                          gap: '14px',
                          alignItems: 'center',
                          padding: '14px 4px',
                          borderBottom: '1px solid rgba(245,245,247,.06)',
                        }}
                      >
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12px', color: '#98989D' }}>
                          {txt(r?.rank)}
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                          <span style={{ fontSize: '14px' }}>{txt(r?.title)}</span>
                          <span style={{ fontSize: '12px', color: '#98989D' }}>{txt(r?.d)}</span>
                        </span>
                        <span style={{ fontSize: '12.5px', color: '#C7C7CC' }}>{txt(r?.type)}</span>
                        <span style={{ display: 'flex', gap: '5px' }}>
                          {list(r?.dots).map((d, i2) => (
                            <Fragment key={i2}>
                              <span
                                title={d?.k}
                                style={css(`width:16px; height:16px; border-radius:5px; background:${str(d?.c)}`)}
                              ></span>
                            </Fragment>
                          ))}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '11px',
                            color: '#98989D',
                            textAlign: 'right',
                          }}
                        >
                          {txt(r?.words)}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(0,0,0,.6)',
                    border: '1px solid rgba(245,245,247,.07)',
                    fontSize: '13.5px',
                    lineHeight: '1.45',
                  }}
                >
                  <span style={{ color: '#64A8FF' }}>{'3 of 5'}</span>
                  {' results compare options side by side'}
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(0,0,0,.6)',
                    border: '1px solid rgba(245,245,247,.07)',
                    fontSize: '13.5px',
                    lineHeight: '1.45',
                  }}
                >
                  <span style={{ color: '#64A8FF' }}>{'How To'}</span>
                  {' answers favour video and steps'}
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(0,0,0,.6)',
                    border: '1px solid rgba(245,245,247,.07)',
                    fontSize: '13.5px',
                    lineHeight: '1.45',
                  }}
                >
                  <span style={{ color: '#64A8FF' }}>{'~2,100 words'}</span>
                  {' average across ranking guides'}
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(0,0,0,.6)',
                    border: '1px solid rgba(245,245,247,.07)',
                    fontSize: '13.5px',
                    lineHeight: '1.45',
                  }}
                >
                  <span style={{ color: '#64A8FF' }}>{'AI Overview'}</span>
                  {' present for Define and Evaluate'}
                </div>
              </div>
              <button
                onClick={v.toBrief}
                style={{
                  alignSelf: 'flex-start',
                  height: '46px',
                  padding: '0 20px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#64A8FF',
                  color: '#000000',
                  fontSize: '14.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {'Build the content brief →'}
              </button>
            </div>
          ) : null}{' '}
          {v.qpS1 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px',
                animation: 'cxIn .4s ease',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10.5px',
                    letterSpacing: '.1em',
                    color: '#64A8FF',
                  }}
                >
                  {'CONTENT BRIEF'}
                </span>
                <span style={{ fontSize: 'clamp(20px,2.2vw,26px)', lineHeight: '1.25', letterSpacing: '-0.02em' }}>
                  {txt(v.briefH1)}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(245,245,247,.08)' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Primary keyword'}</span>
                    <span style={{ textAlign: 'right' }}>{txt(v.topicName)}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'URL slug'}</span>
                    <span style={{ textAlign: 'right' }}>{txt(v.briefSlug)}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Schema'}</span>
                    <span style={{ textAlign: 'right' }}>{'FAQPage · LocalBusiness'}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Status'}</span>
                    <span style={{ textAlign: 'right', color: '#64A8FF' }}>
                      {'Backlog → In progress → Ready → Published'}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Target length'}</span>
                    <span>{'2,000–2,400 words'}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Export'}</span>
                    <span>{'Word · Markdown'}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(245,245,247,.06)',
                      fontSize: '13.5px',
                    }}
                  >
                    <span style={{ color: '#98989D' }}>{'Queries to answer'}</span>
                    <span>{txt(v.subCount)}</span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '13.5px' }}
                  >
                    <span style={{ color: '#98989D' }}>{'Gap demand'}</span>
                    <span>{txt(v.gapDemand)}</span>
                  </div>
                </div>
                <button
                  onClick={v.toGen}
                  style={{
                    alignSelf: 'flex-start',
                    height: '46px',
                    padding: '0 20px',
                    borderRadius: '999px',
                    border: '0',
                    background: '#64A8FF',
                    color: '#000000',
                    fontSize: '14.5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {'Generate content →'}
                </button>
              </div>
              <div
                style={{ gridColumn: 'span 2', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                {list(v.briefSecs).map((b, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        padding: '14px 16px',
                        borderRadius: '14px',
                        background: 'rgba(0,0,0,.6)',
                        border: '1px solid rgba(245,245,247,.07)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}
                      >
                        <span style={{ display: 'flex', gap: '10px', alignItems: 'baseline', minWidth: '0' }}>
                          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#98989D' }}>
                            {'H2'}
                          </span>
                          <span style={{ fontSize: '15px' }}>{txt(b?.h)}</span>
                        </span>
                        <span
                          style={css(
                            `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(b?.stColor)}; flex-shrink:0`,
                          )}
                        >
                          {txt(b?.st)}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
                        {list(b?.qs).map((q, i2) => (
                          <Fragment key={i2}>
                            <span
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '12.5px',
                                color: '#C7C7CC',
                              }}
                            >
                              <span
                                style={css(`width:6px; height:6px; border-radius:50%; background:${str(q?.color)}`)}
                              ></span>
                              {txt(q?.q)}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          ) : null}{' '}
          {v.qpS2 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'cxIn .4s ease' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10.5px',
                    letterSpacing: '.1em',
                    color: '#64A8FF',
                  }}
                >
                  {'CONTENT WRITING AGENT · DRAFT'}
                </span>
                <button
                  onClick={v.runGen}
                  style={{
                    height: '40px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    border: '1px solid rgba(100,168,255,.4)',
                    background: 'transparent',
                    color: '#F5F5F7',
                    fontSize: '13.5px',
                    cursor: 'pointer',
                  }}
                >
                  {txt(v.genBtn)}
                </button>
              </div>
              <span style={{ fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                {txt(v.briefH1)}
              </span>
              <p style={{ margin: '0', maxWidth: '760px', fontSize: '15.5px', lineHeight: '1.65', color: '#C7C7CC' }}>
                {txt(v.genIntro)}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gap: '8px',
                }}
              >
                {list(v.genSecs).map((g, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={css(
                        `padding:14px 16px; border-radius:14px; background:rgba(0,0,0,.6); border:1px solid rgba(245,245,247,.07); display:flex; flex-direction:column; gap:10px; opacity:${str(g?.op)}; transition:opacity .4s`,
                      )}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                        <span style={{ fontSize: '14.5px' }}>{txt(g?.h)}</span>
                        <span
                          style={css(
                            `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(g?.stColor)}; flex-shrink:0`,
                          )}
                        >
                          {txt(g?.st)}
                        </span>
                      </div>
                      <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(100,168,255,.12)' }}>
                        <div
                          style={css(
                            `width:${str(g?.bar)}; height:100%; border-radius:2px; background:#64A8FF; transition:width .5s ease`,
                          )}
                        ></div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#98989D' }}>
                {'Written against query intent, coverage gaps, SERP insights and the keyword clusters below.'}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

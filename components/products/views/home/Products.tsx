import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Home page — products section. */
export function Products({ v }: { v: V }) {
  return (
    <section id="products" style={{ position: 'relative', padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
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
                color: '#40C8E0',
              }}
            >
              {'01 / The products'}
            </div>
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(38px,5vw,68px)',
                lineHeight: '1.02',
                letterSpacing: '-0.03em',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: '500',
                textWrap: 'balance',
              }}
            >
              {'Two products. Two problems. One CXWorks ecosystem.'}
            </h2>
          </div>
          <p
            style={{
              margin: '0',
              fontSize: 'clamp(16px,1.4vw,19px)',
              lineHeight: '1.6',
              color: '#98989D',
              textWrap: 'pretty',
            }}
          >
            {'NUARK '}
            <span style={{ color: '#F5F5F7' }}>{'acts on your business'}</span>
            {'. QueryPrism '}
            <span style={{ color: '#F5F5F7' }}>
              {'shows what your content is missing — and helps you create content that ranks and gets cited'}
            </span>
            {'. Different jobs, different paths — choose the one that matches your problem.'}
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '20px',
          }}
        >
          <div data-reveal="1">
            <article
              onMouseEnter={v.hoverCardN}
              onMouseLeave={v.hoverCardOff}
              style={css(
                `position:relative; height:100%; min-height:660px; border-radius:28px; overflow:hidden; background:radial-gradient(120% 70% at 0% 0%, rgba(64,200,224,.18), transparent 60%), #1C1C1E; border:1px solid ${str(v.cardNBorder)}; display:flex; flex-direction:column; transform:${str(v.cardNT)}; transition:transform .5s cubic-bezier(.2,.8,.2,1), border-color .4s, box-shadow .5s; box-shadow:${str(v.cardNShadow)}`,
              )}
            >
              <div
                style={{
                  position: 'relative',
                  padding: 'clamp(20px,2.6vw,28px)',
                  borderBottom: '1px solid rgba(64,200,224,.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.12em',
                    color: '#98989D',
                  }}
                >
                  <span>{'NUARK INSTANCE'}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#30D158' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#30D158',
                        animation: 'cxBlink 2s infinite',
                      }}
                    ></span>
                    {'LIVE'}
                  </span>
                </div>
                <div
                  style={{
                    alignSelf: 'flex-end',
                    maxWidth: '86%',
                    padding: '10px 14px',
                    borderRadius: '14px 14px 4px 14px',
                    background: '#2C2C2E',
                    border: '1px solid rgba(245,245,247,.08)',
                    fontSize: '13.5px',
                    lineHeight: '1.45',
                  }}
                >
                  {'Map ranking opportunities across our top 50 SERPs.'}
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: '#98989D' }}
                >
                  <span
                    style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#40C8E0', flexShrink: '0' }}
                  ></span>
                  {'Keyword Klarity · SERP & Cluster Analyzer · Analysed 282 resources'}
                </div>
                <div
                  style={{
                    maxWidth: '92%',
                    padding: '11px 14px',
                    borderRadius: '14px 14px 14px 4px',
                    background: 'rgba(64,200,224,.1)',
                    border: '1px solid rgba(64,200,224,.28)',
                    fontSize: '13.5px',
                    lineHeight: '1.5',
                  }}
                >
                  {'47 opportunities · est. +18.2K monthly clicks. Briefs are ready for the writers.'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginTop: '4px' }}>
                  <div
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: '#000000',
                      border: '1px solid rgba(245,245,247,.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: '9px',
                        letterSpacing: '.1em',
                        color: '#98989D',
                      }}
                    >
                      {'CLUSTERS'}
                    </span>
                    <span style={{ fontSize: '16px' }}>{'50'}</span>
                  </div>
                  <div
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: '#000000',
                      border: '1px solid rgba(245,245,247,.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: '9px',
                        letterSpacing: '.1em',
                        color: '#98989D',
                      }}
                    >
                      {'QUICK WINS'}
                    </span>
                    <span style={{ fontSize: '16px' }}>{'23'}</span>
                  </div>
                  <div
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: '#000000',
                      border: '1px solid rgba(245,245,247,.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: '9px',
                        letterSpacing: '.1em',
                        color: '#98989D',
                      }}
                    >
                      {'BRIEFS READY'}
                    </span>
                    <span style={{ fontSize: '16px' }}>{'47'}</span>
                  </div>
                </div>
                <div
                  style={{
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 6px 0 14px',
                    borderRadius: '12px',
                    background: '#000000',
                    border: '1px solid rgba(245,245,247,.1)',
                    fontSize: '13px',
                    color: '#8E8E93',
                  }}
                >
                  {'Ask me anything…'}
                  <span
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '9px',
                      background: '#40C8E0',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}
                  >
                    {'→'}
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: 'clamp(24px,3vw,36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  flex: '1',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '11px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#40C8E0',
                  }}
                >
                  {'Product 01 '}
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#98989D' }}></span>
                  <span style={{ color: '#98989D' }}>{'Waitlist open'}</span>
                </div>
                <h3 style={{ margin: '0' }}>
                  <img
                    src="/images/products/nuark-logo.svg"
                    alt="NUARK"
                    style={{ height: 'clamp(34px,3.6vw,46px)', width: 'auto', display: 'block' }}
                  />
                </h3>
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.5', color: '#F5F5F7', maxWidth: '440px' }}>
                  {
                    'A chat-based AI agent for ecommerce teams. Ask in plain language — NUARK pulls the data, runs the analysis and gets the work done.'
                  }
                </p>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#98989D', maxWidth: '440px' }}>
                  <span style={{ color: '#7FDCEC' }}>{'40+ skills · 34 agents · 6 skill areas'}</span>
                  {' — all live in production, connected to your own systems.'}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {list(v.cardCaps).map((c, i1) => (
                    <Fragment key={i1}>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px',
                          padding: '6px 11px',
                          borderRadius: '999px',
                          border: '1px solid rgba(245,245,247,.1)',
                          fontSize: '12.5px',
                          color: '#C7C7CC',
                        }}
                      >
                        <span style={css(`width:6px; height:6px; border-radius:50%; background:${str(c?.dot)}`)}></span>
                        {txt(c?.label)}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ flex: '1' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    className="ph-hover-0882f3"
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'transform .2s',
                    }}
                  >
                    {'Explore NUARK '}
                    <span>{'→'}</span>
                  </button>
                  <span style={{ fontSize: '13.5px', color: '#98989D' }}>{'Product tour, then waitlist'}</span>
                </div>
              </div>
            </article>
          </div>
          <div data-reveal="1">
            <article
              onMouseEnter={v.hoverCardQ}
              onMouseLeave={v.hoverCardOff}
              style={css(
                `position:relative; height:100%; min-height:660px; border-radius:28px 28px 28px 8px; overflow:hidden; background:radial-gradient(120% 70% at 100% 0%, rgba(100,168,255,.17), transparent 60%), #1C1C1E; border:1px solid ${str(v.cardQBorder)}; display:flex; flex-direction:column; transform:${str(v.cardQT)}; transition:transform .5s cubic-bezier(.2,.8,.2,1), border-color .4s, box-shadow .5s; box-shadow:${str(v.cardQShadow)}`,
              )}
            >
              <div style={{ padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '11px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#64A8FF',
                  }}
                >
                  {'Product 02 '}
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#98989D' }}></span>
                  <span style={{ color: '#98989D' }}>{'Free trial'}</span>
                </div>
                <h3 style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src="/images/products/queryprism-icon.svg"
                    alt=""
                    style={{ width: 'clamp(40px,4vw,52px)', height: 'auto', display: 'block' }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 'clamp(34px,3.8vw,48px)',
                      lineHeight: '1',
                      letterSpacing: '-0.03em',
                      fontWeight: '700',
                    }}
                  >
                    {'QueryPrism'}
                  </span>
                </h3>
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.5', maxWidth: '420px' }}>
                  {'SEO, AEO & GEO content intelligence platform.'}
                </p>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#98989D', maxWidth: '440px' }}>
                  <span style={{ color: '#A9CCFF' }}>{'The problem:'}</span>
                  {" you can't see every question behind a topic — or what your content is missing."}
                </p>
              </div>
              <div
                style={{
                  margin: '0 clamp(16px,2vw,24px)',
                  padding: '16px',
                  borderRadius: '20px',
                  background: 'rgba(100,168,255,.04)',
                  border: '1px solid rgba(100,168,255,.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: '1',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    height: '42px',
                    padding: '0 14px',
                    borderRadius: '12px',
                    background: '#000000',
                    border: '1px solid rgba(100,168,255,.25)',
                  }}
                >
                  <span
                    style={{ width: '10px', height: '10px', border: '1.5px solid #64A8FF', borderRadius: '50%' }}
                  ></span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px' }}>
                    {'bathroom and kitchen showroom'}
                  </span>
                  <span
                    style={{
                      width: '1.5px',
                      height: '16px',
                      background: '#64A8FF',
                      animation: 'cxBlink 1s steps(1) infinite',
                    }}
                  ></span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10.5px',
                      color: '#98989D',
                    }}
                  >
                    {'12 sub-queries'}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    paddingLeft: '14px',
                    borderLeft: '1px dashed rgba(100,168,255,.3)',
                  }}
                >
                  {list(v.qpCardRows).map((r, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={css(
                          `display:flex; align-items:center; gap:10px; font-size:13px; animation:cxIn .5s ease both; animation-delay:${str(r?.delay)}`,
                        )}
                      >
                        <span style={{ width: '10px', height: '1px', background: 'rgba(100,168,255,.4)' }}></span>
                        <span
                          style={{
                            flex: '1',
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '12px',
                            color: '#D7DCE4',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {txt(r?.q)}
                        </span>
                        <span
                          style={css(
                            `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(r?.color)}; display:flex; align-items:center; gap:5px`,
                          )}
                        >
                          <span
                            style={css(`width:6px; height:6px; border-radius:50%; background:${str(r?.color)}`)}
                          ></span>
                          {txt(r?.label)}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10.5px',
                      letterSpacing: '.1em',
                      color: '#98989D',
                    }}
                  >
                    {"WHAT'S INSIDE"}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {list(v.qpTools).map((t, i1) => (
                      <Fragment key={i1}>
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '7px 11px',
                            borderRadius: '10px',
                            background: '#000000',
                            border: '1px solid rgba(100,168,255,.2)',
                            fontSize: '12.5px',
                            color: '#F5F5F7',
                          }}
                        >
                          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#64A8FF' }}>
                            {txt(t?.n)}
                          </span>
                          {txt(t?.t)}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: 'clamp(20px,3vw,32px) clamp(24px,3vw,36px) clamp(24px,3vw,36px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  className="ph-hover-0882f3"
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
                    transition: 'transform .2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {'Explore QueryPrism →'}
                </button>
                <span style={{ fontSize: '13.5px', color: '#98989D' }}>{'Product tour, then free trial'}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

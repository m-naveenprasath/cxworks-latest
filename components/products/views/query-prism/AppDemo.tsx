import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — app section. */
export function AppDemo({ v }: { v: V }) {
  return (
    <section
      id="app"
      style={{
        padding: 'clamp(72px,9vw,120px) clamp(16px,4vw,48px)',
        borderTop: '1px solid rgba(245,245,247,.06)',
        background: 'radial-gradient(60% 40% at 50% 0%, rgba(100,168,255,.07), transparent 70%)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '36px' }}>
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
              {'Inside the product'}
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
              {'Click through the real workflow.'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'An example workspace for Coburn’s showrooms. Open a sub-query to see why it’s there, tick rows to create briefs, switch to the funnel board, and edit a brief.'
            }
          </p>
        </div>
        <div
          data-reveal="1"
          style={{
            position: 'relative',
            borderRadius: '22px',
            border: '1px solid rgba(245,245,247,.1)',
            background: '#111113',
            overflow: 'hidden',
            boxShadow: '0 60px 140px -60px rgba(0,0,0,.95)',
          }}
        >
          <div style={css(`display:grid; grid-template-columns:${str(v.appCols)}; min-height:640px`)}>
            {v.appShowSide ? (
              <aside
                style={{
                  padding: '16px 12px',
                  borderRight: '1px solid rgba(245,245,247,.07)',
                  background: '#1C1C1E',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px 12px' }}>
                  <img src="/images/products/queryprism-icon.svg" alt="" style={{ width: '22px', height: '22px' }} />
                  <span style={{ fontWeight: '700', fontSize: '15px', letterSpacing: '-0.02em' }}>{'QueryPrism'}</span>
                </div>
                <button
                  onClick={v.toggleWs}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(245,245,247,.1)',
                    background: '#2C2C2E',
                    color: '#F5F5F7',
                    cursor: 'pointer',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: '#98989D',
                    }}
                  >
                    {'Workspace'}
                  </span>
                  <span style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '13px' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {txt(v.appWs)}
                    </span>
                    <span style={{ color: '#98989D' }}>{'▾'}</span>
                  </span>
                </button>
                {v.appWsOpen ? (
                  <div
                    style={{
                      position: 'absolute',
                      left: '12px',
                      right: '12px',
                      top: '108px',
                      zIndex: '5',
                      padding: '8px',
                      borderRadius: '12px',
                      background: '#2C2C2E',
                      border: '1px solid rgba(245,245,247,.14)',
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      animation: 'cxIn .2s ease',
                    }}
                  >
                    <span style={{ padding: '4px 8px' }}>
                      <span
                        style={{
                          fontFamily: "'Montserrat',sans-serif",
                          fontSize: '10px',
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: '#98989D',
                        }}
                      >
                        {'Switch to'}
                      </span>
                    </span>
                    {list(v.appWsList).map((w, i1) => (
                      <Fragment key={i1}>
                        <button
                          className="ph-hover-598864"
                          onClick={w?.onClick}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px',
                            borderRadius: '8px',
                            border: '0',
                            background: 'transparent',
                            color: '#F5F5F7',
                            fontSize: '13px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          {txt(w?.w)}
                          <span style={{ color: '#64A8FF' }}>{txt(w?.mark)}</span>
                        </button>
                      </Fragment>
                    ))}
                    <button
                      onClick={v.addWs}
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        border: '0',
                        background: 'transparent',
                        color: '#64A8FF',
                        fontSize: '13px',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {'+ Add a workspace'}
                    </button>
                  </div>
                ) : null}
                {list(v.appNav).map((n, i1) => (
                  <Fragment key={i1}>
                    <button
                      onClick={n?.onClick}
                      style={css(
                        `display:flex; justify-content:space-between; align-items:center; padding:9px 12px; border-radius:9px; border:0; background:${str(n?.bg)}; color:${str(n?.color)}; font-size:13.5px; cursor:pointer; text-align:left`,
                      )}
                    >
                      {txt(n?.l)}
                      <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#98989D' }}>
                        {txt(n?.badge)}
                      </span>
                    </button>
                  </Fragment>
                ))}
                <span style={{ padding: '14px 12px 4px' }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: '#98989D',
                    }}
                  >
                    {'Setup'}
                  </span>
                </span>
                {list(v.appSetup).map((n, i1) => (
                  <Fragment key={i1}>
                    <button
                      onClick={n?.onClick}
                      style={css(
                        `display:flex; padding:9px 12px; border-radius:9px; border:0; background:${str(n?.bg)}; color:${str(n?.color)}; font-size:13.5px; cursor:pointer; text-align:left`,
                      )}
                    >
                      {txt(n?.l)}
                    </button>
                  </Fragment>
                ))}
                <div
                  style={{
                    marginTop: 'auto',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(245,245,247,.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span>{'Generations'}</span>
                    <span style={{ color: '#98989D' }}>{'38 / 50'}</span>
                  </span>
                  <span style={{ height: '4px', borderRadius: '2px', background: 'rgba(245,245,247,.08)' }}>
                    <span
                      style={{
                        display: 'block',
                        width: '76%',
                        height: '100%',
                        borderRadius: '2px',
                        background: '#64A8FF',
                      }}
                    ></span>
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#98989D' }}>{'Pro · resets 1 Nov'}</span>
                </div>
              </aside>
            ) : null}
            <div style={{ minWidth: '0', display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0 18px',
                  borderBottom: '1px solid rgba(245,245,247,.07)',
                }}
              >
                {v.appNarrowNav ? (
                  <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
                    {list(v.appNav).map((n, i1) => (
                      <Fragment key={i1}>
                        <button
                          onClick={n?.onClick}
                          style={css(
                            `height:30px; padding:0 10px; border-radius:8px; border:0; background:${str(n?.bg)}; color:${str(n?.color)}; font-size:12px; white-space:nowrap; cursor:pointer`,
                          )}
                        >
                          {txt(n?.l)}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                ) : null}
                {v.appShowSide ? (
                  <div
                    style={{
                      flex: '1',
                      height: '34px',
                      maxWidth: '380px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                      borderRadius: '10px',
                      background: '#2C2C2E',
                      fontSize: '13px',
                      color: '#8E8E93',
                    }}
                  >
                    {'Search runs, briefs, pages'}
                  </div>
                ) : null}
                <div style={{ flex: '1' }}></div>
                <button
                  onClick={v.appNew}
                  style={{
                    height: '36px',
                    padding: '0 14px',
                    borderRadius: '10px',
                    border: '0',
                    background: '#64A8FF',
                    color: '#000000',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {'+ New fan-out'}
                </button>
              </div>
              <div style={{ padding: 'clamp(16px,2.4vw,28px)', flex: '1', minWidth: '0' }}>
                {v.aOverview ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'cxIn .3s ease' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
                        {'Find the questions your site doesn’t answer yet'}
                      </span>
                      <span style={{ fontSize: '13.5px', color: '#98989D' }}>
                        {
                          'AI search breaks a topic into follow-up questions. QueryPrism shows which ones your page answers and which deserve a page of their own.'
                        }
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Topics researched'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{'3'}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Coverage'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{'29%'}</span>
                          <span style={{ fontSize: '12px', color: '#98989D' }}>{'Covered + half of partial'}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Deserve their own page'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{txt(v.appOwn)}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Briefs started'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{txt(v.appBriefsStarted)}</span>
                          <span style={{ fontSize: '12px', color: '#98989D' }}>
                            {'In progress, ready or published'}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#FF6961',
                            }}
                          >
                            {'Slipping'}
                          </span>
                          <span style={{ fontSize: '24px' }}>{'2'}</span>
                          <button
                            onClick={v.appGoRecovery}
                            style={{
                              alignSelf: 'flex-start',
                              background: 'none',
                              border: '0',
                              padding: '0',
                              color: '#64A8FF',
                              fontSize: '12px',
                              cursor: 'pointer',
                            }}
                          >
                            {'Review in Authority Recovery →'}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#2C2C2E',
                        border: '1px solid rgba(245,245,247,.07)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontSize: '15px' }}>{'What to build next'}</span>
                            <span style={{ fontSize: '12px', color: '#98989D' }}>
                              {'Backlog, missing first, then by QDP score'}
                            </span>
                          </span>
                        </div>
                        {list(v.appBacklog).map((b, i1) => (
                          <Fragment key={i1}>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0,1fr) 80px 40px auto',
                                gap: '12px',
                                alignItems: 'center',
                                padding: '10px 0',
                                borderTop: '1px solid rgba(245,245,247,.06)',
                              }}
                            >
                              <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                                <span style={{ fontSize: '13.5px' }}>{txt(b?.q)}</span>
                                <span style={{ fontSize: '11.5px', color: '#98989D' }}>
                                  <span style={css(`color:${str(b?.segColor)}`)}>{txt(b?.seg)}</span>
                                  {' · '}
                                  {txt(b?.type)}
                                </span>
                              </span>
                              <span
                                style={css(
                                  `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(b?.covColor)}`,
                                )}
                              >
                                {txt(b?.cov)}
                              </span>
                              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12px' }}>
                                {txt(b?.qdp)}
                              </span>
                              <button
                                onClick={b?.onCreate}
                                style={{
                                  height: '32px',
                                  padding: '0 12px',
                                  borderRadius: '9px',
                                  border: '1px solid rgba(100,168,255,.4)',
                                  background: 'transparent',
                                  color: '#F5F5F7',
                                  fontSize: '12.5px',
                                  cursor: 'pointer',
                                }}
                              >
                                {'Create brief'}
                              </button>
                            </div>
                          </Fragment>
                        ))}
                        {v.appBacklogEmpty ? (
                          <span style={{ fontSize: '13px', color: '#98989D', padding: '10px 0' }}>
                            {'Backlog is clear. Every opportunity has a brief.'}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}{' '}
                {v.aNew ? (
                  <div
                    style={{
                      maxWidth: '620px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '18px',
                      animation: 'cxIn .3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span
                        style={{
                          fontFamily: "'Montserrat',sans-serif",
                          fontSize: '10px',
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: '#64A8FF',
                        }}
                      >
                        {'Query Fanout · new run'}
                      </span>
                      <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                        {'What should AI search answer?'}
                      </span>
                      <span style={{ fontSize: '13.5px', color: '#98989D' }}>
                        {
                          'See the questions AI search asks about a topic, and check which ones your page already answers.'
                        }
                      </span>
                    </div>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'Topic'}</span>
                      <span
                        style={{
                          height: '46px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 14px',
                          borderRadius: '12px',
                          border: '1px solid rgba(100,168,255,.35)',
                          background: '#2C2C2E',
                          fontSize: '14.5px',
                        }}
                      >
                        {'bathroom and kitchen showroom'}
                      </span>
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'The page to check'}</span>
                      <span
                        style={{
                          height: '46px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 14px',
                          borderRadius: '12px',
                          border: '1px solid rgba(245,245,247,.12)',
                          background: '#2C2C2E',
                          fontSize: '14.5px',
                        }}
                      >
                        {'showroom.coburns.com/locations'}
                      </span>
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#C7C7CC', marginRight: '4px' }}>{'Data'}</span>
                      <button
                        onClick={v.newDataSearch}
                        style={css(
                          `height:34px; padding:0 14px; border-radius:999px; border:1px solid rgba(100,168,255,.4); background:${str(v.ndSBg)}; color:#F5F5F7; font-size:13px; cursor:pointer`,
                        )}
                      >
                        {'Real search data'}
                      </button>
                      <button
                        onClick={v.newDataGeneric}
                        style={css(
                          `height:34px; padding:0 14px; border-radius:999px; border:1px solid rgba(100,168,255,.4); background:${str(v.ndGBg)}; color:#F5F5F7; font-size:13px; cursor:pointer`,
                        )}
                      >
                        {'Generic fan-out'}
                      </button>
                      <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'Region · United States'}</span>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#2C2C2E',
                        border: '1px solid rgba(245,245,247,.07)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                        <span>
                          {'1 · Generate your fan-out '}
                          <span style={{ color: '#98989D' }}>
                            {'— the sub-queries AI search writes for this topic'}
                          </span>
                        </span>
                        <span>
                          {'2 · Check coverage '}
                          <span style={{ color: '#98989D' }}>
                            {'— covered, partial or missing, with the quote that proves it'}
                          </span>
                        </span>
                        <span>
                          {'3 · Act on gaps '}
                          <span style={{ color: '#98989D' }}>
                            {'— see which deserve their own page, then generate a brief'}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {v.appNotRunning ? (
                        <button
                          onClick={v.appRunNow}
                          style={{
                            height: '36px',
                            padding: '0 14px',
                            borderRadius: '10px',
                            border: '0',
                            background: '#64A8FF',
                            color: '#000000',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {'Generate your fan-out'}
                        </button>
                      ) : null}
                      {v.appRunning ? (
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '13.5px',
                            color: '#98989D',
                          }}
                        >
                          <span
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              border: '2px solid rgba(100,168,255,.2)',
                              borderTopColor: '#64A8FF',
                              animation: 'cxSpin .8s linear infinite',
                            }}
                          ></span>
                          {'Generating sub-queries… coverage fills in as each one is checked'}
                        </span>
                      ) : null}
                      <span style={{ fontSize: '12px', color: '#98989D' }}>{'About a minute · uses 1 generation'}</span>
                    </div>
                  </div>
                ) : null}{' '}
                {v.aFanout ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'cxIn .3s ease' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
                          {'bathroom and kitchen showroom'}
                        </span>
                        <span
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px 12px',
                            fontSize: '12.5px',
                            color: '#98989D',
                          }}
                        >
                          <span style={{ color: '#30D158' }}>{'● Real search data'}</span>
                          <span>{'Checked showroom.coburns.com/locations'}</span>
                          <span>{'v2 · today'}</span>
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          padding: '3px',
                          borderRadius: '10px',
                          border: '1px solid rgba(245,245,247,.12)',
                        }}
                      >
                        <button
                          onClick={v.viewList}
                          style={css(
                            `height:30px; padding:0 12px; border-radius:8px; border:0; background:${str(v.vListBg)}; color:#F5F5F7; font-size:12.5px; cursor:pointer`,
                          )}
                        >
                          {'List'}
                        </button>
                        <button
                          onClick={v.viewBoard}
                          style={css(
                            `height:30px; padding:0 12px; border-radius:8px; border:0; background:${str(v.vBoardBg)}; color:#F5F5F7; font-size:12.5px; cursor:pointer`,
                          )}
                        >
                          {'Board'}
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Your page fully answers'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                            {txt(v.appCovered)}{' '}
                            <span style={{ fontSize: '14px', color: '#98989D' }}>
                              {'of '}
                              {txt(v.appN)}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Deserve a page of their own'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                            {txt(v.appOwn)}{' '}
                            <span style={{ fontSize: '14px', color: '#98989D' }}>
                              {'of '}
                              {txt(v.appN)}
                            </span>
                          </span>
                          <span style={{ fontSize: '12px', color: '#98989D' }}>{'QDP score ≥ 70'}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Citation readiness'}
                          </span>
                          <span style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                            {txt(v.appCite)}{' '}
                            <span style={{ fontSize: '14px', color: '#98989D' }}>
                              {'of '}
                              {txt(v.appJudged)}
                            </span>
                          </span>
                          <span style={{ fontSize: '12px', color: '#98989D' }}>{'Direct answer near a heading'}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: 'rgba(100,168,255,.05)',
                        border: '1px solid rgba(245,245,247,.07)',
                        borderColor: 'rgba(100,168,255,.2)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '10px',
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: '#98989D',
                          }}
                        >
                          {'Your seed query'}
                        </span>
                        <span style={{ fontSize: '13.5px' }}>
                          {'bathroom and kitchen showroom '}
                          <span style={{ color: '#98989D' }}>
                            {'— read as: find and visit a local kitchen & bath showroom'}
                          </span>
                        </span>
                      </div>
                    </div>
                    {v.appList ? (
                      <>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {list(v.appFilters).map((c, i1) => (
                            <Fragment key={i1}>
                              <button
                                onClick={c?.onClick}
                                style={css(
                                  `height:30px; padding:0 12px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:12.5px; cursor:pointer`,
                                )}
                              >
                                {txt(c?.l)}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                        <div
                          style={{ borderRadius: '14px', border: '1px solid rgba(245,245,247,.08)', overflowX: 'auto' }}
                        >
                          <div style={{ minWidth: '620px' }}>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '24px minmax(0,1fr) 90px 110px 24px',
                                gap: '12px',
                                padding: '10px 14px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '10px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              ></span>
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '10px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              >
                                {'Sub-query · segment · build'}
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '10px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              >
                                {'Coverage'}
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '10px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              >
                                {'QDP score'}
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '10px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              ></span>
                            </div>
                            {list(v.appRows).map((x, i1) => (
                              <Fragment key={i1}>
                                <div
                                  onClick={x?.onToggle}
                                  style={css(
                                    `border-top:1px solid rgba(245,245,247,.06); background:${str(x?.rowBg)}; cursor:pointer; transition:background .25s`,
                                  )}
                                >
                                  <div
                                    style={{
                                      display: 'grid',
                                      gridTemplateColumns: '24px minmax(0,1fr) 90px 110px 24px',
                                      gap: '12px',
                                      alignItems: 'center',
                                      padding: '12px 14px',
                                    }}
                                  >
                                    <span
                                      onClick={x?.onPick}
                                      style={css(
                                        `width:18px; height:18px; border-radius:5px; border:1px solid ${str(x?.checkBorder)}; background:${str(x?.checkBg)}; color:#000000; font-size:11px; display:flex; align-items:center; justify-content:center`,
                                      )}
                                    >
                                      {txt(x?.check)}
                                    </span>
                                    <span
                                      style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}
                                    >
                                      <span style={{ fontSize: '13.5px' }}>{txt(x?.q)}</span>
                                      <span
                                        style={{
                                          display: 'flex',
                                          flexWrap: 'wrap',
                                          gap: '6px 10px',
                                          fontSize: '11.5px',
                                        }}
                                      >
                                        <span style={css(`color:${str(x?.segColor)}`)}>{txt(x?.seg)}</span>
                                        <span style={css(`color:${str(x?.buildColor)}`)}>{txt(x?.build)}</span>
                                      </span>
                                    </span>
                                    <span
                                      style={css(
                                        `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(x?.covColor)}; display:flex; align-items:center; gap:6px`,
                                      )}
                                    >
                                      <span
                                        style={css(
                                          `width:7px; height:7px; border-radius:50%; background:${str(x?.covColor)}`,
                                        )}
                                      ></span>
                                      {txt(x?.cov)}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      <span
                                        style={{
                                          flex: '1',
                                          height: '4px',
                                          borderRadius: '2px',
                                          background: 'rgba(245,245,247,.08)',
                                        }}
                                      >
                                        <span
                                          style={css(
                                            `display:block; width:${str(x?.qdpW)}; height:100%; border-radius:2px; background:${str(x?.qdpColor)}`,
                                          )}
                                        ></span>
                                      </span>
                                      <span
                                        style={{
                                          fontFamily: "'Montserrat',sans-serif",
                                          fontSize: '11px',
                                          width: '24px',
                                          textAlign: 'right',
                                        }}
                                      >
                                        {txt(x?.qdp)}
                                      </span>
                                    </span>
                                    <span style={{ color: '#98989D', textAlign: 'center' }}>{txt(x?.chev)}</span>
                                  </div>
                                  {x?.open ? (
                                    <div
                                      style={{
                                        padding: '4px 14px 16px 50px',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                        gap: '10px',
                                        animation: 'cxIn .3s ease',
                                      }}
                                    >
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <span
                                          style={{
                                            fontFamily: "'Montserrat',sans-serif",
                                            fontSize: '10px',
                                            letterSpacing: '.1em',
                                            textTransform: 'uppercase',
                                            color: '#98989D',
                                          }}
                                        >
                                          {'Why this'}
                                        </span>
                                        <span style={{ fontSize: '13px', lineHeight: '1.5' }}>{txt(x?.why)}</span>
                                        <span style={{ fontSize: '12px', color: '#98989D' }}>
                                          {txt(x?.intent)}
                                          {' · '}
                                          {txt(x?.funnel)}
                                        </span>
                                      </div>
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <span
                                          style={{
                                            fontFamily: "'Montserrat',sans-serif",
                                            fontSize: '10px',
                                            letterSpacing: '.1em',
                                            textTransform: 'uppercase',
                                            color: '#98989D',
                                          }}
                                        >
                                          {'On your page'}
                                        </span>
                                        <span style={{ fontSize: '13px', lineHeight: '1.5' }}>{txt(x?.on)}</span>
                                        {x?.hasQuote ? (
                                          <span
                                            style={{
                                              fontFamily: "'Forum',serif",
                                              fontSize: '14px',
                                              lineHeight: '1.4',
                                              color: '#C7C7CC',
                                            }}
                                          >
                                            {txt(x?.quote)}
                                          </span>
                                        ) : null}
                                      </div>
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <span
                                          style={{
                                            fontFamily: "'Montserrat',sans-serif",
                                            fontSize: '10px',
                                            letterSpacing: '.1em',
                                            textTransform: 'uppercase',
                                            color: '#98989D',
                                          }}
                                        >
                                          {'Real search term'}
                                        </span>
                                        <span style={{ fontSize: '13px', lineHeight: '1.5' }}>{txt(x?.term)}</span>
                                        <span
                                          style={{
                                            fontFamily: "'Montserrat',sans-serif",
                                            fontSize: '10px',
                                            letterSpacing: '.1em',
                                            textTransform: 'uppercase',
                                            color: '#98989D',
                                          }}
                                        >
                                          {'Build'}
                                        </span>
                                        <span style={{ fontSize: '13px' }}>{txt(x?.ptype)}</span>
                                      </div>
                                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <button
                                          onClick={x?.onBrief}
                                          style={{
                                            height: '36px',
                                            padding: '0 14px',
                                            borderRadius: '10px',
                                            border: '0',
                                            background: '#64A8FF',
                                            color: '#000000',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          {txt(x?.briefLabel)}
                                        </button>
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </Fragment>
                            ))}{' '}
                            {v.appNoRows ? (
                              <div style={{ padding: '24px', textAlign: 'center', fontSize: '13px', color: '#98989D' }}>
                                {'No sub-queries match these filters'}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <span style={{ fontSize: '12px', color: '#98989D' }}>
                          {'Click a row to see why it’s there · ticked rows go into “Create briefs”'}
                        </span>
                      </>
                    ) : null}
                    {v.appBoardView ? (
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '10px',
                        }}
                      >
                        {list(v.appBoard).map((col, i1) => (
                          <Fragment key={i1}>
                            <div
                              style={{
                                padding: '12px',
                                borderRadius: '14px',
                                background: '#1C1C1E',
                                border: '1px solid rgba(245,245,247,.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                              }}
                            >
                              <span
                                style={{ display: 'flex', gap: '8px', alignItems: 'baseline', padding: '2px 4px 6px' }}
                              >
                                <span
                                  style={{
                                    fontFamily: "'Montserrat',sans-serif",
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#64A8FF',
                                  }}
                                >
                                  {txt(col?.name)}
                                </span>
                                <span style={{ fontSize: '11.5px', color: '#98989D' }}>{txt(col?.sub)}</span>
                              </span>
                              {list(col?.cards).map((x, i2) => (
                                <Fragment key={i2}>
                                  <div
                                    className="ph-hover-17766b"
                                    onClick={x?.onBrief}
                                    style={{
                                      padding: '12px',
                                      borderRadius: '12px',
                                      background: '#2C2C2E',
                                      border: '1px solid rgba(245,245,247,.07)',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '8px',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <span style={{ fontSize: '13px', lineHeight: '1.4' }}>{txt(x?.q)}</span>
                                    <span
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        gap: '8px',
                                        fontSize: '11.5px',
                                      }}
                                    >
                                      <span style={{ color: '#98989D' }}>
                                        {'→ '}
                                        {txt(x?.ptype)}
                                      </span>
                                      <span
                                        style={css(`font-family:'Montserrat',sans-serif; color:${str(x?.qdpColor)}`)}
                                      >
                                        {'QDP '}
                                        {txt(x?.qdp)}
                                      </span>
                                    </span>
                                    <span style={{ fontSize: '11px', color: '#64A8FF' }}>{txt(x?.briefLabel)}</span>
                                  </div>
                                </Fragment>
                              ))}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}{' '}
                {v.aRuns ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'cxIn .3s ease' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{'Runs'}</span>
                      <span style={{ fontSize: '13px', color: '#98989D' }}>
                        {'Every fan-out on '}
                        {txt(v.appWs)}
                        {'. Re-runs of a topic stack up as versions.'}
                      </span>
                    </div>
                    <div style={{ borderRadius: '14px', border: '1px solid rgba(245,245,247,.08)', overflowX: 'auto' }}>
                      <div style={{ minWidth: '620px' }}>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1.6fr) 1.2fr 1fr 70px 80px 70px',
                            gap: '10px',
                            padding: '10px 14px',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Topic'}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Type'}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Data'}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Queries'}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Own page'}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Date'}
                          </span>
                        </div>
                        {list(v.appRunsList).map((r, i1) => (
                          <Fragment key={i1}>
                            <div
                              className="ph-hover-dffb5f"
                              onClick={r?.onOpen}
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0,1.6fr) 1.2fr 1fr 70px 80px 70px',
                                gap: '10px',
                                padding: '13px 14px',
                                borderTop: '1px solid rgba(245,245,247,.06)',
                                fontSize: '13px',
                                cursor: 'pointer',
                              }}
                            >
                              <span>{txt(r?.topic)}</span>
                              <span style={{ color: '#C7C7CC' }}>{txt(r?.type)}</span>
                              <span style={{ color: '#C7C7CC' }}>{txt(r?.data)}</span>
                              <span>{txt(r?.q)}</span>
                              <span style={{ color: '#64A8FF' }}>{txt(r?.own)}</span>
                              <span style={{ color: '#98989D' }}>{txt(r?.date)}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}{' '}
                {v.aBriefs ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'cxIn .3s ease' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{'Briefs'}</span>
                      <span style={{ fontSize: '13px', color: '#98989D' }}>
                        {
                          'Every sub-query that deserves its own page, from all runs, tracked from backlog to published.'
                        }
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {list(v.appBriefStages).map((c, i1) => (
                        <Fragment key={i1}>
                          <button
                            onClick={c?.onClick}
                            style={css(
                              `height:30px; padding:0 12px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:12.5px; cursor:pointer`,
                            )}
                          >
                            {txt(c?.l)}
                          </button>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {list(v.appBriefList).map((b, i1) => (
                        <Fragment key={i1}>
                          <div
                            className="ph-hover-17766b"
                            onClick={b?.onOpen}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'minmax(0,1fr) 50px 100px auto',
                              gap: '12px',
                              alignItems: 'center',
                              padding: '13px 14px',
                              borderRadius: '12px',
                              background: '#2C2C2E',
                              border: '1px solid rgba(245,245,247,.07)',
                              cursor: 'pointer',
                            }}
                          >
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                              <span style={{ fontSize: '13.5px' }}>{txt(b?.q)}</span>
                              <span style={{ fontSize: '11.5px', color: '#98989D' }}>{txt(b?.type)}</span>
                            </span>
                            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11.5px' }}>
                              {txt(b?.qdp)}
                            </span>
                            <span
                              style={css(
                                `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(b?.stColor)}`,
                              )}
                            >
                              {txt(b?.stage)}
                            </span>
                            <button
                              onClick={b?.onRemove}
                              style={{
                                background: 'none',
                                border: '0',
                                color: '#98989D',
                                fontSize: '12px',
                                cursor: 'pointer',
                              }}
                            >
                              {'Remove'}
                            </button>
                          </div>
                        </Fragment>
                      ))}
                      {v.appNoBriefs ? (
                        <div
                          style={{
                            padding: '28px',
                            borderRadius: '12px',
                            border: '1px dashed rgba(245,245,247,.14)',
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#98989D',
                          }}
                        >
                          {
                            'Nothing here yet. Opportunities land here when a run finds sub-queries that deserve their own page.'
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}{' '}
                {v.aBrief ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'cxIn .3s ease' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '12px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <button
                          onClick={v.bBack}
                          style={{
                            alignSelf: 'flex-start',
                            background: 'none',
                            border: '0',
                            padding: '0',
                            color: '#98989D',
                            fontSize: '12.5px',
                            cursor: 'pointer',
                          }}
                        >
                          {'← Briefs'}
                        </button>
                        <span style={{ fontSize: '12.5px', color: '#98989D' }}>
                          {'Brief · from bathroom and kitchen showroom · '}
                          <span style={{ color: '#64A8FF' }}>
                            {'QDP '}
                            {txt(v.bQdp)}
                          </span>
                        </span>
                        <span style={{ fontSize: '20px', letterSpacing: '-0.02em', lineHeight: '1.3' }}>
                          {txt(v.bQ)}
                        </span>
                      </div>
                      <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
                        <button
                          onClick={v.bCopy}
                          style={{
                            height: '36px',
                            padding: '0 14px',
                            borderRadius: '10px',
                            border: '1px solid rgba(245,245,247,.16)',
                            background: 'transparent',
                            color: '#F5F5F7',
                            fontSize: '13px',
                            fontWeight: '400',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {'Copy outline'}
                        </button>
                        <button
                          onClick={v.bExportToggle}
                          style={{
                            height: '36px',
                            padding: '0 14px',
                            borderRadius: '10px',
                            border: '1px solid rgba(245,245,247,.16)',
                            background: 'transparent',
                            color: '#F5F5F7',
                            fontSize: '13px',
                            fontWeight: '400',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {'Export ▾'}
                        </button>
                        {v.bExportOpen ? (
                          <div
                            style={{
                              position: 'absolute',
                              right: '0',
                              top: '42px',
                              zIndex: '5',
                              padding: '6px',
                              borderRadius: '10px',
                              background: '#2C2C2E',
                              border: '1px solid rgba(245,245,247,.14)',
                              display: 'flex',
                              flexDirection: 'column',
                              minWidth: '160px',
                            }}
                          >
                            <button
                              onClick={v.bExportDoc}
                              style={{
                                padding: '8px 10px',
                                border: '0',
                                background: 'transparent',
                                color: '#F5F5F7',
                                fontSize: '13px',
                                textAlign: 'left',
                                cursor: 'pointer',
                              }}
                            >
                              {'Word (.doc)'}
                            </button>
                            <button
                              onClick={v.bExportMd}
                              style={{
                                padding: '8px 10px',
                                border: '0',
                                background: 'transparent',
                                color: '#F5F5F7',
                                fontSize: '13px',
                                textAlign: 'left',
                                cursor: 'pointer',
                              }}
                            >
                              {'Markdown (.md)'}
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12.5px', color: '#98989D', marginRight: '4px' }}>{'Status'}</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {list(v.bStages).map((c, i1) => (
                          <Fragment key={i1}>
                            <button
                              onClick={c?.onClick}
                              style={css(
                                `height:30px; padding:0 12px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:12.5px; cursor:pointer`,
                              )}
                            >
                              {txt(c?.l)}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: '12px',
                      }}
                    >
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#64A8FF',
                            }}
                          >
                            {'Page tags'}
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "'Montserrat',sans-serif",
                                fontSize: '10px',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: '#98989D',
                              }}
                            >
                              {'SEO title'}
                            </span>
                            <span style={{ fontSize: '14px' }}>{txt(v.bTitle)}</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "'Montserrat',sans-serif",
                                fontSize: '10px',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: '#98989D',
                              }}
                            >
                              {'Meta description'}
                            </span>
                            <span style={{ fontSize: '13px', lineHeight: '1.5', color: '#C7C7CC' }}>
                              {txt(v.bMeta)}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "'Montserrat',sans-serif",
                                fontSize: '10px',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: '#98989D',
                              }}
                            >
                              {'URL slug'}
                            </span>
                            <span style={{ fontSize: '13px' }}>{txt(v.bSlug)}</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "'Montserrat',sans-serif",
                                fontSize: '10px',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: '#98989D',
                              }}
                            >
                              {'Primary keyword'}
                            </span>
                            <span style={{ fontSize: '13px' }}>{txt(v.bKw)}</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "'Montserrat',sans-serif",
                                fontSize: '10px',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: '#98989D',
                              }}
                            >
                              {'Page type'}
                            </span>
                            <span style={{ fontSize: '13px' }}>
                              {txt(v.bType)} <span style={{ color: '#98989D' }}>{'· chosen from what ranks'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          background: '#2C2C2E',
                          border: '1px solid rgba(245,245,247,.07)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#64A8FF',
                            }}
                          >
                            {'Outline'}
                          </span>
                          {list(v.bOutline).map((o, i1) => (
                            <Fragment key={i1}>
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '10px',
                                  alignItems: 'baseline',
                                  padding: '8px 0',
                                  borderTop: '1px solid rgba(245,245,247,.06)',
                                }}
                              >
                                <span
                                  style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#98989D' }}
                                >
                                  {'H2·'}
                                  {txt(o?.n)}
                                </span>
                                <span style={{ fontSize: '13.5px' }}>{txt(o?.o)}</span>
                              </div>
                            </Fragment>
                          ))}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '16px',
                              paddingTop: '6px',
                              fontSize: '12.5px',
                            }}
                          >
                            <span>
                              <span style={{ color: '#98989D' }}>{'Target length'}</span> {txt(v.bLen)}
                              {' words'}
                            </span>
                            <span>
                              <span style={{ color: '#98989D' }}>{'Schema'}</span> {txt(v.bSchema)}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                            <span style={{ fontSize: '12.5px', color: '#98989D' }}>{'Internal links'}</span>
                            {list(v.bLinks).map((l, i1) => (
                              <Fragment key={i1}>
                                <span
                                  style={{
                                    padding: '3px 9px',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(100,168,255,.3)',
                                    fontSize: '12px',
                                    color: '#A9CCFF',
                                  }}
                                >
                                  {txt(l)}
                                </span>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}{' '}
                {v.aClusters ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'cxIn .3s ease' }}>
                    <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{'Cluster map'}</span>
                    <span style={{ fontSize: '13.5px', color: '#98989D', maxWidth: '560px' }}>
                      {
                        'Pick a topic to open its cluster map: your fan-out plus suggested queries that complete every cluster.'
                      }
                    </span>
                    {list(v.appRunsList).map((r, i1) => (
                      <Fragment key={i1}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '13px 14px',
                            borderRadius: '12px',
                            background: '#2C2C2E',
                            border: '1px solid rgba(245,245,247,.07)',
                          }}
                        >
                          <span style={{ fontSize: '13.5px' }}>
                            {txt(r?.topic)}{' '}
                            <span style={{ color: '#98989D' }}>
                              {'· '}
                              {txt(r?.q)}
                              {' queries'}
                            </span>
                          </span>
                          <button
                            onClick={v.appOpenMap}
                            style={{
                              background: 'none',
                              border: '0',
                              color: '#64A8FF',
                              fontSize: '12.5px',
                              cursor: 'pointer',
                            }}
                          >
                            {'Open cluster map →'}
                          </button>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                ) : null}{' '}
                {v.aRecovery ? (
                  <div
                    style={{
                      maxWidth: '560px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      animation: 'cxIn .3s ease',
                    }}
                  >
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        border: '1px solid rgba(64,200,224,.45)',
                        fontSize: '11.5px',
                        color: '#7FDCEC',
                      }}
                    >
                      {'Coming soon'}
                    </span>
                    <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{'Authority Recovery'}</span>
                    <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#98989D' }}>
                      {
                        'Recover pages that are slipping. We’ll watch your pages for lost rankings and AI citations, show the new questions they no longer answer, and give you the fixes to win them back.'
                      }
                    </span>
                    {v.appNotNotified ? (
                      <button
                        onClick={v.appNotify}
                        style={{
                          height: '36px',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: '0',
                          background: '#64A8FF',
                          color: '#000000',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {'Notify me when it’s ready'}
                      </button>
                    ) : null}
                    {v.appNotified ? (
                      <span style={{ fontSize: '13.5px', color: '#30D158' }}>{'✓ You’ll be notified'}</span>
                    ) : null}
                  </div>
                ) : null}{' '}
                {v.aConfig ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      maxWidth: '720px',
                      animation: 'cxIn .3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
                        {'Configuration · '}
                        {txt(v.appWs)}
                      </span>
                      <span style={{ fontSize: '13px', color: '#98989D' }}>
                        {
                          'A workspace is one website. Runs, briefs and recovery checks belong to the workspace they were made in.'
                        }
                      </span>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#2C2C2E',
                        border: '1px solid rgba(245,245,247,.07)',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '14px',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Domain'}
                          </span>
                          <span style={{ fontSize: '13.5px' }}>{txt(v.appWs)}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Business model'}
                          </span>
                          <span style={{ fontSize: '13.5px' }}>{'B2C'}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Industry'}
                          </span>
                          <span style={{ fontSize: '13.5px' }}>{'Home improvement · Kitchen & bath'}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span
                            style={{
                              fontFamily: "'Montserrat',sans-serif",
                              fontSize: '10px',
                              letterSpacing: '.1em',
                              textTransform: 'uppercase',
                              color: '#98989D',
                            }}
                          >
                            {'Default market'}
                          </span>
                          <span style={{ fontSize: '13.5px' }}>{'United States · English (US)'}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#2C2C2E',
                        border: '1px solid rgba(245,245,247,.07)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '10px',
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: '#98989D',
                          }}
                        >
                          {'Scan setup'}
                        </span>
                        <span style={{ fontSize: '13.5px' }}>{'Automatic sitemap scanning · weekly'}</span>
                        <span style={{ fontSize: '12.5px', color: '#98989D' }}>
                          {'Powers the page picker and overlap warnings. Stores titles and URLs only.'}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}{' '}
                {v.aUse ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'cxIn .3s ease' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{'Use cases'}</span>
                      <span style={{ fontSize: '13px', color: '#98989D' }}>
                        {'Pick a workflow, and New fan-out opens set up for it.'}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                      }}
                    >
                      {list(v.appUse).map((u, i1) => (
                        <Fragment key={i1}>
                          <button
                            className="ph-hover-17766b"
                            onClick={u?.onClick}
                            style={{
                              textAlign: 'left',
                              padding: '16px',
                              borderRadius: '14px',
                              background: '#2C2C2E',
                              border: '1px solid rgba(245,245,247,.07)',
                              color: '#F5F5F7',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontSize: '14.5px', fontWeight: '500' }}>{txt(u?.t)}</span>
                            <span style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#98989D' }}>{txt(u?.d)}</span>
                            <span style={{ fontSize: '12.5px', color: '#64A8FF' }}>{'Start →'}</span>
                          </button>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {v.appHasPicked ? (
            <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '18px',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 8px 8px 16px',
                borderRadius: '14px',
                background: '#2C2C2E',
                border: '1px solid rgba(100,168,255,.4)',
                boxShadow: '0 20px 50px -10px rgba(0,0,0,.9)',
                animation: 'cxIn .25s ease',
                zIndex: '6',
              }}
            >
              <span style={{ fontSize: '13px' }}>
                {txt(v.appPicked)}
                {' selected'}
              </span>
              <button
                onClick={v.appCreatePicked}
                style={{
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '10px',
                  border: '0',
                  background: '#64A8FF',
                  color: '#000000',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {'Create briefs'}
              </button>
              <button
                onClick={v.appClearPicked}
                style={{ background: 'none', border: '0', color: '#98989D', fontSize: '12.5px', cursor: 'pointer' }}
              >
                {'Clear'}
              </button>
            </div>
          ) : null}{' '}
          {v.appHasToast ? (
            <div
              style={{
                position: 'absolute',
                right: '18px',
                top: '64px',
                padding: '10px 14px',
                borderRadius: '12px',
                background: '#2C2C2E',
                border: '1px solid rgba(48,209,88,.4)',
                fontSize: '13px',
                color: '#F5F5F7',
                animation: 'cxIn .25s ease',
                zIndex: '7',
              }}
            >
              {'✓ '}
              {txt(v.appToast)}
            </div>
          ) : null}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={v.openTrial}
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
            }}
          >
            {'Try it on your own site'}
          </button>
          <span style={{ fontSize: '13.5px', color: '#98989D' }}>
            {'Example data. Your trial runs on your real domain.'}
          </span>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Home page — showcase section. */
export function Showcase({ v }: { v: V }) {
  return (
    <section
      id="showcase"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <div
          data-reveal="1"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '28px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
            <div
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#40C8E0',
              }}
            >
              {'02 / Product explorer'}
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
              {'See both products at work, without leaving the page.'}
            </h2>
          </div>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              padding: '4px',
              borderRadius: '999px',
              background: 'rgba(245,245,247,.04)',
              border: '1px solid rgba(245,245,247,.1)',
            }}
          >
            <div
              style={css(
                `position:absolute; top:4px; bottom:4px; left:${str(v.pillLeft)}; width:calc(50% - 4px); border-radius:999px; background:${str(v.pillBg)}; transition:left .45s cubic-bezier(.2,.8,.2,1), background .4s`,
              )}
            ></div>
            <button
              onClick={v.setScN}
              style={css(
                `position:relative; width:150px; height:44px; border:0; background:none; border-radius:999px; font-size:14px; font-weight:600; letter-spacing:.06em; color:${str(v.tglNColor)}; cursor:pointer; transition:color .3s`,
              )}
            >
              {'NUARK'}
            </button>
            <button
              onClick={v.setScQ}
              style={css(
                `position:relative; width:150px; height:44px; border:0; background:none; border-radius:999px; font-size:14px; font-weight:600; color:${str(v.tglQColor)}; cursor:pointer; transition:color .3s`,
              )}
            >
              {'QueryPrism'}
            </button>
          </div>
        </div>
        <div
          data-reveal="1"
          style={css(`display:grid; grid-template-columns:${str(v.scCols)}; gap:20px; align-items:start`)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {list(v.scTabs).map((t, i1) => (
              <Fragment key={i1}>
                <button
                  onClick={t?.onClick}
                  style={css(
                    `text-align:left; display:flex; gap:16px; align-items:flex-start; padding:18px 20px; border-radius:16px; border:1px solid ${str(t?.border)}; background:${str(t?.bg)}; color:#F5F5F7; cursor:pointer; transition:background .3s, border-color .3s`,
                  )}
                >
                  <span
                    style={css(
                      `font-family:'Montserrat',sans-serif; font-size:12px; color:${str(t?.numColor)}; padding-top:3px`,
                    )}
                  >
                    {txt(t?.num)}
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '17px', fontWeight: '500' }}>{txt(t?.t)}</span>
                    <span style={{ fontSize: '14px', color: '#98989D', lineHeight: '1.45' }}>{txt(t?.d)}</span>
                  </span>
                </button>
              </Fragment>
            ))}
            <div style={{ flex: '1', minHeight: '12px' }}></div>
            {v.isScN ? (
              <button
                onClick={v.goNuark}
                style={{
                  alignSelf: 'flex-start',
                  height: '48px',
                  padding: '0 20px',
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
            ) : null}
            {v.isScQ ? (
              <button
                onClick={v.openTrial}
                style={{
                  alignSelf: 'flex-start',
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
                {'Try QueryPrism ↗'}
              </button>
            ) : null}
          </div>
          <div
            style={css(
              `min-width:0; position:relative; min-height:460px; border-radius:24px; padding:clamp(18px,2.4vw,28px); background:${str(v.scPanelBg)}; border:1px solid ${str(v.scPanelBorder)}; transition:background .5s, border-color .5s; overflow:hidden`,
            )}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              <span style={css(`color:${str(v.scAccent)}`)}>{txt(v.scPanelTitle)}</span>
              <span>{'Example workspace'}</span>
            </div>
            {v.isScN ? (
              <div style={{ animation: 'cxIn .4s ease' }}>
                <div
                  style={{
                    minWidth: '0',
                    borderRadius: '20px',
                    border: '1px solid rgba(245,245,247,.1)',
                    background: '#1C1C1E',
                    overflow: 'hidden',
                    boxShadow: 'none',
                  }}
                >
                  <div
                    style={{
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 18px',
                      borderBottom: '1px solid rgba(245,245,247,.07)',
                      background: '#2C2C2E',
                    }}
                  >
                    <img src="/images/products/nuark-logo.svg" alt="NUARK" style={{ height: '12px', width: 'auto' }} />
                    <span
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: '10.5px',
                        letterSpacing: '.12em',
                        color: '#98989D',
                      }}
                    >
                      {'NUARK INSTANCE'}
                    </span>
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10.5px', color: '#98989D' }}>
                      {'v2.4.1'}
                    </span>
                  </div>
                  <div
                    style={{ padding: 'clamp(16px,2.4vw,28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: 'rgba(64,200,224,.14)',
                            border: '1px solid rgba(64,200,224,.35)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img src="/images/products/nuark-logo.svg" alt="" style={{ width: '30px', height: 'auto' }} />
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <span style={{ fontSize: '16px', fontWeight: '600' }}>{txt(v.chAgent)}</span>
                          <span style={{ fontSize: '12.5px', color: '#98989D' }}>
                            {'Smart workflows that learn from your operations'}
                          </span>
                        </span>
                      </div>
                      <span
                        style={{
                          padding: '7px 14px',
                          borderRadius: '999px',
                          border: '1px solid rgba(64,200,224,.4)',
                          fontSize: '12.5px',
                          color: '#7FDCEC',
                        }}
                      >
                        {'+ Create job'}
                      </span>
                    </div>
                    <div
                      style={css(
                        `align-self:flex-end; max-width:80%; padding:12px 16px; border-radius:16px 16px 4px 16px; background:#2C2C2E; border:1px solid rgba(245,245,247,.08); font-size:14.5px; line-height:1.45; opacity:${str(v.chOp0)}; transition:opacity .4s`,
                      )}
                    >
                      {txt(v.chPrompt)}
                    </div>
                    <div
                      style={css(
                        `display:flex; align-items:center; gap:8px; font-size:12px; color:#98989D; opacity:${str(v.chOp1)}; transition:opacity .4s`,
                      )}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#30D158',
                          animation: 'cxBlink 1.4s infinite',
                        }}
                      ></span>
                      {txt(v.chMeta)}
                    </div>
                    <div
                      style={css(
                        `max-width:86%; padding:13px 16px; border-radius:16px 16px 16px 4px; background:rgba(64,200,224,.1); border:1px solid rgba(64,200,224,.28); font-size:14.5px; line-height:1.5; opacity:${str(v.chOp2)}; transform:${str(v.chT2)}; transition:opacity .45s, transform .45s`,
                      )}
                    >
                      {txt(v.chReply)}
                    </div>
                    <div
                      style={css(
                        `padding:clamp(14px,2vw,22px); border-radius:18px; border:1px solid rgba(245,245,247,.09); background:#000000; display:flex; flex-direction:column; gap:14px; opacity:${str(v.chOp3)}; transform:${str(v.chT3)}; transition:opacity .5s, transform .5s`,
                      )}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '12px',
                          fontFamily: "'Montserrat',sans-serif",
                          fontSize: '10.5px',
                          letterSpacing: '.12em',
                        }}
                      >
                        <span style={{ color: '#40C8E0' }}>
                          {'REPORT · '}
                          {txt(v.chAgentUpper)}
                        </span>
                        <span style={{ color: '#98989D' }}>{txt(v.chRid)}</span>
                      </div>
                      <span style={{ fontSize: 'clamp(16px,1.8vw,20px)', letterSpacing: '-0.01em' }}>
                        {txt(v.chHead)}
                      </span>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                          gap: '8px',
                        }}
                      >
                        {list(v.chKpis).map((k, i1) => (
                          <Fragment key={i1}>
                            <div
                              style={{
                                padding: '12px 14px',
                                borderRadius: '12px',
                                background: '#2C2C2E',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Montserrat',sans-serif",
                                  fontSize: '9.5px',
                                  letterSpacing: '.1em',
                                  textTransform: 'uppercase',
                                  color: '#98989D',
                                }}
                              >
                                {txt(k?.l)}
                              </span>
                              <span style={{ fontSize: '18px' }}>{txt(k?.v)}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div
                        style={{ borderRadius: '12px', border: '1px solid rgba(245,245,247,.08)', overflowX: 'auto' }}
                      >
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1.4fr 1.4fr 1fr 1fr',
                            gap: '10px',
                            padding: '10px 14px',
                            minWidth: '480px',
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '9.5px',
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: '#98989D',
                            borderBottom: '1px solid rgba(245,245,247,.08)',
                          }}
                        >
                          {list(v.chCols).map((c, i1) => (
                            <Fragment key={i1}>
                              <span>{txt(c)}</span>
                            </Fragment>
                          ))}
                        </div>
                        {list(v.chRows).map((r, i1) => (
                          <Fragment key={i1}>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '1.4fr 1.4fr 1fr 1fr',
                                gap: '10px',
                                padding: '11px 14px',
                                minWidth: '480px',
                                fontSize: '13px',
                                borderTop: '1px solid rgba(245,245,247,.05)',
                              }}
                            >
                              <span style={{ fontWeight: '500' }}>{txt(r?.a)}</span>
                              <span style={{ color: '#C7C7CC' }}>{txt(r?.b)}</span>
                              <span style={{ color: '#C7C7CC' }}>{txt(r?.c)}</span>
                              <span style={css(`color:${str(r?.dColor)}`)}>{txt(r?.d)}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 7px 0 18px',
                        borderRadius: '14px',
                        background: '#000000',
                        border: '1px solid rgba(245,245,247,.1)',
                        fontSize: '14px',
                        color: '#8E8E93',
                      }}
                    >
                      {'Ask me anything…'}
                      <span
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: '#40C8E0',
                          color: '#000000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {'→'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}{' '}
            {v.scQ0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'cxIn .4s ease' }}>
                <div
                  style={{
                    alignSelf: 'flex-start',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(100,168,255,.5)',
                    background: 'rgba(100,168,255,.08)',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '14px',
                  }}
                >
                  {'bathroom and kitchen showroom'}
                </div>
                <div
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}
                >
                  {list(v.fanMini).map((i, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={{
                          padding: '14px',
                          borderRadius: '14px',
                          background: 'rgba(10,11,13,.7)',
                          border: '1px solid rgba(100,168,255,.16)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '10.5px',
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: '#64A8FF',
                          }}
                        >
                          {txt(i?.name)}
                        </span>
                        {list(i?.subs).map((s, i2) => (
                          <Fragment key={i2}>
                            <span
                              style={{
                                display: 'flex',
                                gap: '8px',
                                alignItems: 'center',
                                fontSize: '13px',
                                color: '#D7DCE4',
                              }}
                            >
                              <span
                                style={css(
                                  `width:6px; height:6px; border-radius:50%; background:${str(s?.color)}; flex-shrink:0`,
                                )}
                              ></span>
                              {txt(s?.q)}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            ) : null}{' '}
            {v.scQ1 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '24px',
                  alignItems: 'center',
                  animation: 'cxIn .4s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#98989D' }}>
                    {'/locations'}
                  </span>
                  <span style={{ fontSize: '72px', lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '500' }}>
                    {'42'}
                    <span style={{ fontSize: '32px', color: '#98989D' }}>{'%'}</span>
                  </span>
                  <span style={{ fontSize: '14px', color: '#98989D' }}>{'of the query set answered by this page'}</span>
                  <div style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden', gap: '2px' }}>
                    <span style={{ width: '25%', background: '#30D158' }}></span>
                    <span style={{ width: '33%', background: '#40C8E0' }}></span>
                    <span style={{ width: '42%', background: '#FF6961' }}></span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12.5px', color: '#98989D' }}>
                    <span>
                      <span style={{ color: '#30D158' }}>{'●'}</span>
                      {' 3 covered'}
                    </span>
                    <span>
                      <span style={{ color: '#40C8E0' }}>{'●'}</span>
                      {' 4 partial'}
                    </span>
                    <span>
                      <span style={{ color: '#FF6961' }}>{'●'}</span>
                      {' 5 missing'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10.5px',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: '#FF6961',
                    }}
                  >
                    {'Missing queries'}
                  </span>
                  {list(v.covMini).map((m, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={{
                          padding: '12px 14px',
                          borderRadius: '12px',
                          background: 'rgba(255,105,97,.06)',
                          border: '1px solid rgba(255,105,97,.2)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                        }}
                      >
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12.5px' }}>{txt(m?.q)}</span>
                        <span style={{ fontSize: '12.5px', color: '#98989D' }}>{txt(m?.fix)}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            ) : null}{' '}
            {v.scQ2 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'cxIn .4s ease' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                    padding: '0 4px',
                  }}
                >
                  <span>{'TOP RESULTS · BATHROOM AND KITCHEN SHOWROOM'}</span>
                  <span>{'INTENTS COVERED'}</span>
                </div>
                {list(v.serpMini).map((r, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(0,0,0,.6)',
                        border: '1px solid rgba(245,245,247,.06)',
                      }}
                    >
                      <span style={{ display: 'flex', gap: '12px', alignItems: 'baseline', minWidth: '0' }}>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#98989D' }}>
                          {txt(r?.rank)}
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                          <span style={{ fontSize: '13.5px' }}>{txt(r?.title)}</span>
                          <span style={{ fontSize: '11.5px', color: '#98989D' }}>
                            {txt(r?.d)}
                            {' · '}
                            {txt(r?.type)}
                          </span>
                        </span>
                      </span>
                      <span style={{ display: 'flex', gap: '4px', flexShrink: '0' }}>
                        {list(r?.dots).map((d, i2) => (
                          <Fragment key={i2}>
                            <span
                              style={css(`width:12px; height:12px; border-radius:4px; background:${str(d?.c)}`)}
                            ></span>
                          </Fragment>
                        ))}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            ) : null}{' '}
            {v.scQ3 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'cxIn .4s ease' }}>
                <span style={{ fontSize: '18px', letterSpacing: '-0.01em', marginBottom: '6px' }}>
                  {'Bathroom and kitchen showroom: the complete guide'}
                </span>
                {list(v.scBrief).map((b, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(0,0,0,.6)',
                        border: '1px solid rgba(245,245,247,.06)',
                      }}
                    >
                      <span style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: '#98989D' }}>
                          {'H2'}
                        </span>
                        <span style={{ fontSize: '14px' }}>{txt(b?.h)}</span>
                      </span>
                      <span
                        style={css(
                          `font-family:'Montserrat',sans-serif; font-size:10.5px; color:${str(b?.stColor)}; flex-shrink:0`,
                        )}
                      >
                        {txt(b?.st)}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            ) : null}{' '}
            {v.scQ4 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', animation: 'cxIn .4s ease' }}>
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#64A8FF',
                  }}
                >
                  {'CONTENT WRITING AGENT · DRAFT'}
                </span>
                <span style={{ fontSize: '18px', letterSpacing: '-0.01em' }}>
                  {'Bathroom and kitchen showroom: the complete guide'}
                </span>
                <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: '#C7C7CC' }}>
                  {
                    'Written against query intent, coverage gaps, SERP insights and keyword clusters — structured so search engines rank it and AI answers can cite it.'
                  }
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {list(v.citeFeatures).map((c, i1) => (
                    <Fragment key={i1}>
                      <span
                        style={{
                          padding: '6px 11px',
                          borderRadius: '999px',
                          border: '1px solid rgba(100,168,255,.3)',
                          fontSize: '12.5px',
                          color: '#A9CCFF',
                        }}
                      >
                        {txt(c)}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}
                >
                  {list(v.scBrief).map((b, i1) => (
                    <Fragment key={i1}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          background: 'rgba(0,0,0,.6)',
                          border: '1px solid rgba(245,245,247,.06)',
                        }}
                      >
                        <span style={{ fontSize: '13px' }}>{txt(b?.h)}</span>
                        <span
                          style={{
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '10px',
                            color: '#30D158',
                            flexShrink: '0',
                          }}
                        >
                          {'Drafted'}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            ) : null}{' '}
            {v.scQ5 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'cxIn .4s ease' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                    padding: '0 4px',
                  }}
                >
                  <span>{'CLUSTER'}</span>
                  <span>{'DEMAND · COVERAGE'}</span>
                </div>
                {list(v.clusterMini).map((c, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '110px 1fr 120px',
                        gap: '14px',
                        alignItems: 'center',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(0,0,0,.6)',
                        border: '1px solid rgba(245,245,247,.06)',
                      }}
                    >
                      <span style={{ fontSize: '14px' }}>{txt(c?.name)}</span>
                      <span style={{ height: '6px', borderRadius: '3px', background: 'rgba(100,168,255,.12)' }}>
                        <span
                          style={css(
                            `display:block; width:${str(c?.w)}; height:100%; border-radius:3px; background:#64A8FF`,
                          )}
                        ></span>
                      </span>
                      <span
                        style={{
                          fontFamily: "'Montserrat',sans-serif",
                          fontSize: '11px',
                          textAlign: 'right',
                          color: '#98989D',
                        }}
                      >
                        {txt(c?.demand)}
                        {' · '}
                        <span style={css(`color:${str(c?.color)}`)}>
                          {txt(c?.cov)}
                          {'%'}
                        </span>
                      </span>
                    </div>
                  </Fragment>
                ))}
                <span style={{ fontSize: '12.5px', color: '#98989D', padding: '4px' }}>
                  {'Related clusters: Define ↔ How To · Evaluate ↔ Compare · Compare ↔ Adjacent'}
                </span>
              </div>
            ) : null}{' '}
            {v.scQ6 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'cxIn .4s ease' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                    padding: '0 4px',
                  }}
                >
                  <span>{'PAGES LOSING AUTHORITY'}</span>
                  <span>{'RECOVERY ACTION'}</span>
                </div>
                {list(v.authRows).map((r, i1) => (
                  <Fragment key={i1}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(0,0,0,.6)',
                        border: '1px solid rgba(245,245,247,.06)',
                      }}
                    >
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                        <span style={{ fontSize: '13.5px' }}>{txt(r?.p)}</span>
                        <span style={{ fontSize: '11.5px', color: '#FF6961' }}>{txt(r?.drop)}</span>
                      </span>
                      <span style={{ fontSize: '12.5px', color: '#A9CCFF', textAlign: 'right' }}>{txt(r?.fix)}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

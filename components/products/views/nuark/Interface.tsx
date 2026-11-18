import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK page — interface section. */
export function Interface({ v }: { v: V }) {
  return (
    <section
      id="interface"
      style={{
        padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(245,245,247,.06)',
        background: 'radial-gradient(60% 40% at 50% 0%, rgba(64,200,224,.06), transparent 70%)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
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
              {'02 / Live demo'}
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
              {'Connected across your '}
              <span style={{ fontFamily: "'Forum',serif", fontWeight: '400', letterSpacing: '0', color: '#40C8E0' }}>
                {'entire business.'}
              </span>
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'Pick a workflow and watch one prompt move through the skill network — from intent, to analysis, to a ready report.'
            }
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '16px',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {list(v.chatTabs).map((t, i1) => (
              <Fragment key={i1}>
                <button
                  onClick={t?.onClick}
                  style={css(
                    `display:flex; justify-content:space-between; align-items:center; padding:16px 18px; border-radius:14px; border:1px solid ${str(t?.border)}; background:${str(t?.bg)}; color:${str(t?.color)}; font-size:15px; font-weight:${str(t?.weight)}; cursor:pointer; text-align:left; box-shadow:${str(t?.shadow)}; transition:all .3s ease`,
                  )}
                >
                  {txt(t?.tab)}
                  <span style={css(`opacity:${str(t?.arrowOp)}`)}>{'→'}</span>
                </button>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              gridColumn: 'span 3',
              minWidth: '0',
              borderRadius: '24px',
              border: '1px solid rgba(245,245,247,.1)',
              background: '#1C1C1E',
              overflow: 'hidden',
              boxShadow: '0 60px 140px -60px rgba(0,0,0,.95)',
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
            <div style={{ padding: 'clamp(16px,2.4vw,28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                <span style={{ fontSize: 'clamp(16px,1.8vw,20px)', letterSpacing: '-0.01em' }}>{txt(v.chHead)}</span>
                <div
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}
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
                <div style={{ borderRadius: '12px', border: '1px solid rgba(245,245,247,.08)', overflowX: 'auto' }}>
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
      </div>
    </section>
  );
}

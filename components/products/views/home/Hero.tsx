import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Home page — Hero section. */
export function Hero({ v }: { v: V }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '150px clamp(20px,5vw,64px) 72px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '0',
          backgroundImage:
            'linear-gradient(rgba(245,245,247,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,247,.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 40%, #000 20%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 60% 40%, #000 20%, transparent 75%)',
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          right: '-200px',
          top: '-200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,200,224,.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={css(
          `position:absolute; width:800px; height:800px; right:10%; top:0; border-radius:50%; background:radial-gradient(circle, rgba(64,200,224,.16), transparent 60%); opacity:${str(v.glowN)}; transition:opacity .6s; pointer-events:none`,
        )}
      ></div>
      <div
        style={css(
          `position:absolute; width:800px; height:800px; right:-10%; top:10%; border-radius:50%; background:radial-gradient(circle, rgba(100,168,255,.16), transparent 60%); opacity:${str(v.glowQ)}; transition:opacity .6s; pointer-events:none`,
        )}
      ></div>
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 470px), 1fr))',
          gap: 'clamp(48px,6vw,88px)',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: '#40C8E0' }}></span>
            {'CXWorks Products '}
          </div>
          <h1
            style={{
              margin: '0',
              fontSize: 'clamp(40px,5.8vw,84px)',
              lineHeight: '.98',
              letterSpacing: '-0.035em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Technology built for the '}
            <span style={{ fontFamily: "'Forum',serif", fontWeight: '400', letterSpacing: '0', color: '#40C8E0' }}>
              {'next generation'}
            </span>
            {' of digital growth.'}
          </h1>
          <p
            style={{
              margin: '0',
              maxWidth: '540px',
              fontSize: 'clamp(17px,1.4vw,19px)',
              lineHeight: '1.6',
              color: '#98989D',
              textWrap: 'pretty',
            }}
          >
            {
              'CXWorks builds intelligent products that help digital teams understand, optimise and act — across customer experience, commerce operations and AI-powered search.'
            }
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginTop: '6px' }}>
            <button
              className="ph-hover-1c0f8a"
              onClick={v.goProducts}
              style={{
                height: '52px',
                padding: '0 26px',
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
                transition: 'transform .2s, box-shadow .2s',
              }}
            >
              {'Explore Products '}
              <span>{'↓'}</span>
            </button>
            <button
              className="ph-hover-598864"
              onClick={v.goAbout}
              style={{
                height: '52px',
                padding: '0 20px',
                borderRadius: '999px',
                border: '1px solid rgba(245,245,247,.16)',
                background: 'transparent',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background .2s',
              }}
            >
              {'Why CXWorks builds products'}
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div onMouseMove={v.onStageMove} onMouseLeave={v.onStageLeave} style={{ perspective: '1400px' }}>
            <div
              ref={v.stageRef}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 0.86',
                borderRadius: '28px',
                background: 'linear-gradient(180deg, rgba(245,245,247,.05), rgba(245,245,247,.015))',
                border: '1px solid rgba(245,245,247,.1)',
                boxShadow: '0 40px 120px -50px rgba(0,0,0,.9), inset 0 1px 0 rgba(245,245,247,.06)',
                transition: 'transform .4s cubic-bezier(.2,.7,.2,1)',
                overflow: 'hidden',
              }}
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}
              >
                {' '}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="30"
                  ry="36"
                  style={{
                    fill: 'none',
                    stroke: 'rgba(245,245,247,.08)',
                    strokeWidth: '1',
                    vectorEffect: 'non-scaling-stroke',
                    strokeDasharray: '2 6',
                  }}
                ></ellipse>{' '}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="44"
                  ry="44"
                  style={{
                    fill: 'none',
                    stroke: 'rgba(245,245,247,.05)',
                    strokeWidth: '1',
                    vectorEffect: 'non-scaling-stroke',
                  }}
                ></ellipse>{' '}
                {list(v.heroLines).map((l, i1) => (
                  <Fragment key={i1}>
                    {' '}
                    <line
                      x1={l?.x1}
                      y1={l?.y1}
                      x2={l?.x2}
                      y2={l?.y2}
                      style={css(
                        `stroke:${str(l?.color)}; stroke-width:1; vector-effect:non-scaling-stroke; stroke-dasharray:3 5; opacity:${str(l?.op)}; transition:opacity .4s; animation:cxDash 1.6s linear infinite`,
                      )}
                    ></line>{' '}
                  </Fragment>
                ))}{' '}
                <line
                  x1="22"
                  y1="50"
                  x2="42"
                  y2="50"
                  style={css(
                    `stroke:#40C8E0; stroke-width:1.5; vector-effect:non-scaling-stroke; opacity:${str(v.mainN)}; transition:opacity .4s`,
                  )}
                ></line>{' '}
                <line
                  x1="58"
                  y1="50"
                  x2="78"
                  y2="50"
                  style={css(
                    `stroke:#64A8FF; stroke-width:1.5; vector-effect:non-scaling-stroke; opacity:${str(v.mainQ)}; transition:opacity .4s`,
                  )}
                ></line>{' '}
              </svg>
              <div
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '16px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '11px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#98989D',
                }}
              >
                {'CXWorks / product layer'}
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '11px',
                  color: '#98989D',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#40C8E0',
                    animation: 'cxBlink 2s infinite',
                  }}
                ></span>
                {'live'}
              </div>
              <div
                onMouseEnter={v.focusC}
                onClick={v.focusC}
                style={css(
                  `position:absolute; left:50%; top:50%; transform:${str(v.coreT)}; transition:transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .4s; cursor:pointer; z-index:3; width:clamp(96px,22%,132px); aspect-ratio:1; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; background:radial-gradient(circle at 50% 30%, rgba(64,200,224,.22), rgba(44,44,46,.95) 70%); border:1px solid rgba(64,200,224,.45); box-shadow:0 0 60px -10px rgba(64,200,224,.35)`,
                )}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(64,200,224,.3)',
                    animation: 'cxSpin 30s linear infinite',
                  }}
                ></div>
                <img
                  src="/images/products/cxworks-logo.svg"
                  alt="CXWorks"
                  style={{ width: '72%', height: 'auto', display: 'block' }}
                />
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '9px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: '#98989D',
                    textAlign: 'center',
                    lineHeight: '1.3',
                  }}
                >
                  {'Intelligence'}
                  <br />
                  {'layer'}
                </span>
              </div>
              {list(v.heroChips).map((c, i1) => (
                <Fragment key={i1}>
                  <div
                    style={css(
                      `position:absolute; left:${str(c?.left)}; top:${str(c?.top)}; transform:${str(c?.t)}; opacity:${str(c?.op)}; transition:opacity .45s ease, transform .45s cubic-bezier(.2,.8,.2,1); transition-delay:${str(c?.delay)}; padding:6px 10px; border-radius:999px; border:1px solid ${str(c?.border)}; background:rgba(28,28,30,.85); font-family:'Montserrat',sans-serif; font-size:clamp(9px,1vw,11px); color:#F5F5F7; white-space:nowrap; display:flex; align-items:center; gap:6px; pointer-events:none`,
                    )}
                  >
                    <span style={css(`width:5px; height:5px; border-radius:50%; background:${str(c?.dot)}`)}></span>
                    {txt(c?.label)}{' '}
                  </div>
                </Fragment>
              ))}
              <button
                onMouseEnter={v.focusN}
                onFocus={v.focusN}
                onClick={v.focusN}
                style={css(
                  `position:absolute; left:20%; top:50%; transform:${str(v.nodeNT)}; opacity:${str(v.nodeNOp)}; transition:transform .45s cubic-bezier(.2,.8,.2,1), opacity .4s, box-shadow .4s; width:clamp(84px,19%,116px); aspect-ratio:1; border-radius:24px; border:1px solid rgba(64,200,224,.55); background:linear-gradient(160deg, rgba(64,200,224,.28), rgba(44,44,46,.95)); box-shadow:${str(v.nodeNShadow)}; color:#F5F5F7; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px`,
                )}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#40C8E0',
                    animation: 'cxPulse 2s ease-in-out infinite',
                  }}
                ></span>
                <img
                  src="/images/products/nuark-logo.svg"
                  alt="NUARK"
                  style={{ width: '68%', height: 'auto', display: 'block' }}
                />
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '9px',
                    color: '#7FDCEC',
                    letterSpacing: '.06em',
                  }}
                >
                  {'40+ SKILLS'}
                </span>
              </button>
              <button
                onMouseEnter={v.focusQ}
                onFocus={v.focusQ}
                onClick={v.focusQ}
                style={css(
                  `position:absolute; left:80%; top:50%; transform:${str(v.nodeQT)}; opacity:${str(v.nodeQOp)}; transition:transform .45s cubic-bezier(.2,.8,.2,1), opacity .4s, box-shadow .4s; width:clamp(84px,19%,116px); aspect-ratio:1; border-radius:50%; border:1px solid rgba(100,168,255,.55); background:linear-gradient(200deg, rgba(100,168,255,.28), rgba(28,28,30,.95)); box-shadow:${str(v.nodeQShadow)}; color:#F5F5F7; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px`,
                )}
              >
                <img
                  src="/images/products/queryprism-icon.svg"
                  alt=""
                  style={{ width: '34%', height: 'auto', display: 'block' }}
                />
                <span style={{ fontSize: 'clamp(10px,1.2vw,13px)', fontWeight: '700', letterSpacing: '-0.01em' }}>
                  {'QueryPrism'}
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '9px',
                    color: '#A9CCFF',
                    letterSpacing: '.06em',
                  }}
                >
                  {'7 TOOLS'}
                </span>
              </button>
            </div>
          </div>
          <div
            style={css(
              `min-height:132px; border-radius:20px; padding:20px 22px; background:rgba(245,245,247,.03); border:1px solid ${str(v.heroInfoBorder)}; backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); transition:border-color .4s`,
            )}
          >
            {v.heroInfoDefault ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'cxIn .35s ease' }}>
                <div
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '11px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#40C8E0',
                  }}
                >
                  {'Two products · one intelligence layer'}
                </div>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', color: '#98989D' }}>
                  {'Hover '}
                  <span style={{ color: '#40C8E0' }}>{'NUARK'}</span>
                  {' to see the skill areas that act on your business. Hover '}
                  <span style={{ color: '#64A8FF' }}>{'QueryPrism'}</span>
                  {' to see how one seed query becomes many.'}
                </p>
              </div>
            ) : null}{' '}
            {v.heroInfoC ? (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  animation: 'cxIn .35s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '380px' }}>
                  <div
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '11px',
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#40C8E0',
                    }}
                  >
                    {'CXWorks · Intelligence layer'}
                  </div>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#F5F5F7' }}>
                    {'The CXWorks practice in digital customer experience — the foundation both products are built on.'}
                  </p>
                </div>
                <button
                  onClick={v.goAbout}
                  style={{
                    height: '44px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    border: '0',
                    background: '#40C8E0',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {'About CXWorks'}
                </button>
              </div>
            ) : null}{' '}
            {v.heroInfoN ? (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  animation: 'cxIn .35s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '360px' }}>
                  <div
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '11px',
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#40C8E0',
                    }}
                  >
                    {'NUARK · Waitlist open'}
                  </div>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#F5F5F7' }}>
                    {
                      'A chat-based AI agent for ecommerce teams. 40+ skills across six areas, working on your real data.'
                    }
                  </p>
                </div>
                <button
                  onClick={v.goNuark}
                  style={{
                    height: '44px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    border: '0',
                    background: '#40C8E0',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {'Explore NUARK →'}
                </button>
              </div>
            ) : null}{' '}
            {v.heroInfoQ ? (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  animation: 'cxIn .35s ease',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '360px' }}>
                  <div
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '11px',
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#64A8FF',
                    }}
                  >
                    {'QueryPrism · Free trial'}
                  </div>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#F5F5F7' }}>
                    {
                      "SEO, AEO and GEO content intelligence. Fan out a seed query, find coverage gaps, brief and write what's missing."
                    }
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={v.openTrial}
                    style={{
                      height: '44px',
                      padding: '0 18px',
                      borderRadius: '999px',
                      border: '0',
                      background: '#64A8FF',
                      color: '#000000',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {'Try QueryPrism ↗'}
                  </button>
                  <button
                    onClick={v.openApp}
                    style={{
                      height: '44px',
                      padding: '0 16px',
                      borderRadius: '999px',
                      border: '1px solid rgba(100,168,255,.35)',
                      background: 'transparent',
                      color: '#F5F5F7',
                      fontSize: '14px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {'See how it works ↗'}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '72px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(245,245,247,.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px 28px',
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: '11px',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: '#98989D',
          }}
        >
          {'Built on the CXWorks practice'}
        </span>
        {list(v.disciplines).map((d, i1) => (
          <Fragment key={i1}>
            <span style={{ fontSize: '14px', color: '#C7C7CC' }}>{txt(d)}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

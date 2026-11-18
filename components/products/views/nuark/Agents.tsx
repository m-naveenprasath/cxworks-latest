import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK page — agents section. */
export function Agents({ v }: { v: V }) {
  return (
    <section
      id="agents"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
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
              {'01 / Skill areas'}
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
              {'Six skill areas. 34 agents. All live.'}
            </h2>
          </div>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'Each skill is built for a specific business function, from catalogue data through to brand protection. Select an area to see its agents.'
            }
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '16px',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {list(v.areaList).map((a, i1) => (
              <Fragment key={i1}>
                <button
                  onClick={a?.onClick}
                  style={css(
                    `display:flex; align-items:center; gap:14px; padding:14px 16px; border-radius:16px; border:1px solid ${str(a?.border)}; background:${str(a?.bg)}; color:#F5F5F7; cursor:pointer; text-align:left; transition:all .3s ease; box-shadow:${str(a?.shadow)}`,
                  )}
                >
                  <span
                    style={css(
                      `width:38px; height:38px; flex-shrink:0; border-radius:11px; display:flex; align-items:center; justify-content:center; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:600; background:${str(a?.iconBg)}; color:${str(a?.iconColor)}; transition:all .3s`,
                    )}
                  >
                    {txt(a?.n)}
                  </span>
                  <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span style={{ fontSize: '15.5px', fontWeight: '500' }}>{txt(a?.name)}</span>
                    <span
                      style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: '10.5px',
                        letterSpacing: '.1em',
                        color: '#98989D',
                      }}
                    >
                      {txt(a?.countLabel)}
                    </span>
                  </span>
                  <span style={css(`font-size:14px; color:${str(a?.arrowColor)}`)}>{'↗'}</span>
                </button>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              gridColumn: 'span 2',
              minWidth: '0',
              padding: 'clamp(22px,3vw,40px)',
              borderRadius: '26px',
              background: 'radial-gradient(70% 60% at 100% 0%, rgba(64,200,224,.08), transparent 60%), #1C1C1E',
              border: '1px solid rgba(64,200,224,.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              minHeight: '440px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    background: 'rgba(64,200,224,.14)',
                    color: '#40C8E0',
                  }}
                >
                  {txt(v.agN)}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(24px,2.6vw,34px)',
                    letterSpacing: '-0.02em',
                    fontFamily: "'Montserrat',sans-serif",
                    fontWeight: '500',
                  }}
                >
                  {txt(v.agName)}
                </h3>
              </div>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10.5px',
                  letterSpacing: '.12em',
                  color: '#30D158',
                  paddingTop: '8px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#30D158',
                    animation: 'cxBlink 2s infinite',
                  }}
                ></span>
                {'LIVE IN PRODUCTION'}
              </span>
            </div>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.5', color: '#F5F5F7', textWrap: 'pretty' }}>
              {txt(v.agTagline)}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: '8px',
              }}
            >
              {list(v.agAgents).map((g, i1) => (
                <Fragment key={i1}>
                  <div
                    style={css(
                      `display:flex; align-items:center; gap:14px; padding:15px 18px; border-radius:14px; border:1px solid rgba(245,245,247,.09); background:rgba(0,0,0,.5); animation:cxIn .4s ease both; animation-delay:${str(g?.delay)}`,
                    )}
                  >
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#98989D' }}>
                      {txt(g?.n)}
                    </span>
                    <span style={{ fontSize: '15px' }}>{txt(g?.t)}</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <p
              style={{
                margin: 'auto 0 0',
                paddingTop: '18px',
                borderTop: '1px solid rgba(245,245,247,.07)',
                fontSize: '14.5px',
                lineHeight: '1.65',
                color: '#98989D',
                textWrap: 'pretty',
              }}
            >
              {txt(v.agDesc)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

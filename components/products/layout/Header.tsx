import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Fixed glass navigation bar (logo, Products and Contact menus, CTAs). */
export function Header({ v }: { v: V }) {
  return (
    <header
      style={css(
        `position:fixed; top:0; left:0; right:0; z-index:60; padding:${str(v.navOuterPad)}; transition:padding .35s ease; pointer-events:none`,
      )}
    >
      <div
        style={css(
          `max-width:1280px; margin:0 auto; height:${str(v.navH)}; display:flex; align-items:center; gap:${str(v.navGap)}; padding:0 10px 0 ${str(v.navPadL)}; border-radius:999px; background:linear-gradient(140deg, rgba(255,255,255,.12), rgba(255,255,255,.03) 50%, rgba(255,255,255,.07)); background-color:rgba(28,28,30,.5); border:1px solid rgba(255,255,255,.16); box-shadow:inset 0 1px 0 rgba(255,255,255,.3), inset 0 -1px 0 rgba(255,255,255,.06), 0 16px 40px -16px rgba(0,0,0,.85); backdrop-filter:blur(32px) saturate(200%); -webkit-backdrop-filter:blur(32px) saturate(200%); transition:height .35s ease; pointer-events:auto`,
        )}
      >
        <button
          onClick={v.goHome}
          aria-label="CXWorks home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: '0',
            padding: '0',
            cursor: 'pointer',
            color: '#F5F5F7',
          }}
        >
          <img
            src="/images/products/cxworks-logo.svg"
            alt="CXWorks"
            style={{ height: '20px', width: 'auto', display: 'block' }}
          />
          {v.hasCrumb ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '1px', height: '18px', background: 'rgba(245,245,247,.2)' }}></span>
              {v.isNuark ? (
                <img
                  src="/images/products/nuark-logo.svg"
                  alt="NUARK"
                  style={{ height: '15px', width: 'auto', display: 'block' }}
                />
              ) : null}
              {v.isQP ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img
                    src="/images/products/queryprism-icon.svg"
                    alt=""
                    style={{ width: '18px', height: '18px', display: 'block' }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontWeight: '700',
                      fontSize: '14px',
                      letterSpacing: '-0.02em',
                      color: '#F5F5F7',
                    }}
                  >
                    {'QueryPrism'}
                  </span>
                </span>
              ) : null}
            </span>
          ) : null}
        </button>
        {v.showNavLinks ? (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ position: 'relative' }}>
              <button
                className="ph-hover-bf7004"
                onClick={v.toggleProducts}
                style={css(
                  `display:flex; align-items:center; gap:6px; background:${str(v.prodBg)}; border:0; padding:8px 12px; border-radius:10px; font-size:14px; color:${str(v.prodColor)}; cursor:pointer; transition:color .2s, background .2s`,
                )}
              >
                {'Products '}
                <span style={css(`font-size:10px; transition:transform .2s; transform:${str(v.prodChev)}`)}>{'▾'}</span>
              </button>
              {v.prodOpen ? (
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: 'calc(100% + 12px)',
                    width: 'min(560px, 86vw)',
                    padding: '12px',
                    borderRadius: '18px',
                    background: 'rgba(28,28,30,.97)',
                    border: '1px solid rgba(64,200,224,.28)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    boxShadow: '0 30px 60px -20px rgba(0,0,0,.9)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    animation: 'cxIn .2s ease',
                    zIndex: '70',
                  }}
                >
                  <button
                    className="ph-hover-a67671"
                    onClick={v.pickNuark}
                    style={{
                      textAlign: 'left',
                      padding: '16px',
                      borderRadius: '14px',
                      border: '1px solid rgba(64,200,224,.22)',
                      background: 'rgba(64,200,224,.05)',
                      color: '#F5F5F7',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      transition: 'all .2s',
                    }}
                  >
                    <img
                      src="/images/products/nuark-logo.svg"
                      alt="NUARK"
                      style={{ height: '15px', width: 'auto', display: 'block' }}
                    />
                    <span style={{ fontSize: '13.5px', lineHeight: '1.45', color: '#C7C7CC' }}>
                      {'Chat-based AI agent for ecommerce teams. Ask, analyse and act.'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#40C8E0' }}>{'Waitlist open →'}</span>
                  </button>
                  <button
                    className="ph-hover-51d928"
                    onClick={v.pickQP}
                    style={{
                      textAlign: 'left',
                      padding: '16px',
                      borderRadius: '14px',
                      border: '1px solid rgba(100,168,255,.22)',
                      background: 'rgba(100,168,255,.05)',
                      color: '#F5F5F7',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      transition: 'all .2s',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <img
                        src="/images/products/queryprism-icon.svg"
                        alt=""
                        style={{ width: '18px', height: '18px' }}
                      />
                      <span style={{ fontWeight: '700', fontSize: '14.5px', letterSpacing: '-0.02em' }}>
                        {'QueryPrism'}
                      </span>
                    </span>
                    <span style={{ fontSize: '13.5px', lineHeight: '1.45', color: '#C7C7CC' }}>
                      {'SEO, AEO & GEO content intelligence. Content that gets cited.'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64A8FF' }}>{'Free trial →'}</span>
                  </button>
                  <button
                    className="ph-hover-4c7156"
                    onClick={v.pickAll}
                    style={{
                      gridColumn: 'span 2',
                      height: '38px',
                      borderRadius: '10px',
                      border: '0',
                      background: 'transparent',
                      color: '#98989D',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    {'Compare both products →'}
                  </button>
                </div>
              ) : null}
            </div>
            {list(v.navItemsDesk).map((n, i1) => (
              <Fragment key={i1}>
                <button
                  className="ph-hover-bf7004"
                  onClick={n?.onClick}
                  style={css(
                    `position:relative; background:none; border:0; padding:8px 12px; border-radius:10px; font-size:14px; color:${str(n?.color)}; cursor:pointer; transition:color .2s, background .2s`,
                  )}
                >
                  {txt(n?.label)}
                </button>
              </Fragment>
            ))}
          </nav>
        ) : null}
        <div style={{ flex: '1' }}></div>
        {v.showNavLinks ? (
          <a
            className="ph-hover-bf7004"
            href={v.cxworksUrl}
            rel="noopener"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 10px',
              borderRadius: '10px',
              fontSize: '14px',
              color: '#98989D',
              whiteSpace: 'nowrap',
            }}
          >
            {'Visit CXWorks'}
            <span aria-hidden="true" style={{ fontSize: '12px', color: '#40C8E0' }}>
              {'↗'}
            </span>
          </a>
        ) : null}
        {v.showNavLinks ? (
          <div style={{ position: 'relative' }}>
            <button
              className="ph-hover-2a3816"
              onClick={v.toggleContact}
              style={css(
                `display:flex; align-items:center; gap:6px; background:none; border:0; font-size:14px; color:${str(v.contactColor)}; padding:8px 10px; cursor:pointer`,
              )}
            >
              {'Contact '}
              <span style={css(`font-size:10px; transition:transform .2s; transform:${str(v.contactChev)}`)}>
                {'▾'}
              </span>
            </button>
            {v.contactOpen ? (
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: 'calc(100% + 10px)',
                  width: '300px',
                  padding: '10px',
                  borderRadius: '16px',
                  background: 'rgba(28,28,30,.96)',
                  border: '1px solid rgba(64,200,224,.3)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  boxShadow: '0 30px 60px -20px rgba(0,0,0,.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: 'cxIn .2s ease',
                  zIndex: '70',
                }}
              >
                <span
                  style={{
                    padding: '6px 10px 8px',
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.12em',
                    color: '#40C8E0',
                  }}
                >
                  {'SUPPORT CONTACTS'}
                </span>
                {list(v.contacts).map((c, i1) => (
                  <Fragment key={i1}>
                    <div
                      className="ph-hover-598864"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '8px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      <a
                        href={c?.mailto}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          color: '#F5F5F7',
                          minWidth: '0',
                        }}
                      >
                        <span style={{ fontSize: '14px' }}>{txt(c?.name)}</span>
                        <span style={{ fontSize: '12.5px', color: '#98989D' }}>{txt(c?.email)}</span>
                      </a>
                      <button
                        onClick={c?.onCopy}
                        style={css(
                          `flex-shrink:0; height:28px; padding:0 10px; border-radius:8px; border:1px solid rgba(245,245,247,.14); background:transparent; color:${str(c?.copyColor)}; font-size:12px; cursor:pointer`,
                        )}
                      >
                        {txt(c?.copyLabel)}
                      </button>
                    </div>
                  </Fragment>
                ))}
                <a
                  className="ph-hover-ff3807"
                  href={v.contactUrl}
                  style={{
                    marginTop: '4px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#40C8E0',
                    color: '#000000',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {'Email all three'}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
        {v.showNavCta ? (
          <button
            className="ph-hover-0882f3"
            onClick={v.navCtaClick}
            style={css(
              `height:40px; padding:0 18px; border-radius:999px; border:0; background:${str(v.navCtaBg)}; color:#000000; font-size:14px; font-weight:600; cursor:pointer; white-space:nowrap; transition:transform .2s, background .3s`,
            )}
          >
            {txt(v.navCtaLabel)}
          </button>
        ) : null}
        {v.isNarrow ? (
          <button
            onClick={v.toggleMenu}
            aria-label="Menu"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              border: '1px solid rgba(245,245,247,.14)',
              background: 'rgba(245,245,247,.04)',
              color: '#F5F5F7',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <span
              style={css(
                `width:16px; height:1.5px; background:#F5F5F7; transition:transform .25s; transform:${str(v.burgerTop)}`,
              )}
            ></span>
            <span
              style={css(
                `width:16px; height:1.5px; background:#F5F5F7; transition:transform .25s; transform:${str(v.burgerBot)}`,
              )}
            ></span>
          </button>
        ) : null}
      </div>
    </header>
  );
}

import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Home page — waitlist section. */
export function Waitlist({ v }: { v: V }) {
  return (
    <section id="waitlist" style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(28px,5vw,64px)',
          borderRadius: '32px',
          background:
            'radial-gradient(60% 90% at 0% 100%, rgba(64,200,224,.12), transparent 60%), radial-gradient(60% 90% at 100% 0%, rgba(100,168,255,.12), transparent 60%), #1C1C1E',
          border: '1px solid rgba(64,200,224,.22)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '40px 64px',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'Get started'}
          </span>
          <h2
            style={{
              margin: '0',
              fontSize: 'clamp(34px,4.2vw,56px)',
              lineHeight: '1.03',
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Sign up for one product, or both.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'One form. Pick the products you want and we’ll set you up — a place on the NUARK waitlist, a QueryPrism free trial, or both.'
            }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#40C8E0' }}>{'●'}</span>
              <span>
                <span style={{ color: '#F5F5F7' }}>{'NUARK'}</span>{' '}
                <span style={{ color: '#98989D' }}>{'— waitlist · we onboard teams in small groups'}</span>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#64A8FF' }}>{'●'}</span>
              <span>
                <span style={{ color: '#F5F5F7' }}>{'QueryPrism'}</span>{' '}
                <span style={{ color: '#98989D' }}>{'— free trial · straight into the product'}</span>
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: 'clamp(20px,3vw,32px)',
            borderRadius: '24px',
            background: '#2C2C2E',
            border: '1px solid rgba(245,245,247,.08)',
          }}
        >
          {v.hpShowForm ? (
            <form onSubmit={v.submitHome} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'Products'}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={v.hpToggleN}
                    style={css(
                      `flex:1 1 220px; text-align:left; padding:16px; border-radius:16px; border:1px solid ${str(v.hpNBorder)}; background:${str(v.hpNBg)}; color:#F5F5F7; cursor:pointer; display:flex; gap:14px; align-items:flex-start; transition:all .25s`,
                    )}
                  >
                    <span
                      style={css(
                        `margin-top:2px; width:20px; height:20px; flex-shrink:0; border-radius:6px; border:1px solid ${str(v.hpNBorder)}; background:${str(v.hpNCheckBg)}; color:#000000; font-size:12px; display:flex; align-items:center; justify-content:center`,
                      )}
                    >
                      {txt(v.hpNCheck)}
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <img
                        src="/images/products/nuark-logo.svg"
                        alt="NUARK"
                        style={{ height: '14px', width: 'auto', display: 'block' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>{'Join the waitlist'}</span>
                      <span style={{ fontSize: '12.5px', lineHeight: '1.45', color: '#98989D' }}>
                        {'Chat-based AI agent for ecommerce teams.'}
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={v.hpToggleQ}
                    style={css(
                      `flex:1 1 220px; text-align:left; padding:16px; border-radius:16px; border:1px solid ${str(v.hpQBorder)}; background:${str(v.hpQBg)}; color:#F5F5F7; cursor:pointer; display:flex; gap:14px; align-items:flex-start; transition:all .25s`,
                    )}
                  >
                    <span
                      style={css(
                        `margin-top:2px; width:20px; height:20px; flex-shrink:0; border-radius:6px; border:1px solid ${str(v.hpQBorder)}; background:${str(v.hpQCheckBg)}; color:#000000; font-size:12px; display:flex; align-items:center; justify-content:center`,
                      )}
                    >
                      {txt(v.hpQCheck)}
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <img
                          src="/images/products/queryprism-icon.svg"
                          alt=""
                          style={{ width: '18px', height: '18px' }}
                        />
                        <span style={{ fontWeight: '700', fontSize: '14px' }}>{'QueryPrism'}</span>
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>{'Start a free trial'}</span>
                      <span style={{ fontSize: '12.5px', lineHeight: '1.45', color: '#98989D' }}>
                        {'SEO, AEO & GEO content intelligence.'}
                      </span>
                    </span>
                  </button>
                </div>
                {v.hpHasErr ? <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(v.hpErr)}</span> : null}
              </div>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}
              >
                {list(v.fields).map((f, i1) => (
                  <Fragment key={i1}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{txt(f?.label)}</span>
                      <input
                        className="ph-focus-76ee2b"
                        type={f?.type}
                        name={f?.key}
                        autoComplete={f?.ac}
                        autoCapitalize={f?.cap}
                        spellCheck="false"
                        value={f?.value ?? ''}
                        onChange={f?.onChange}
                        placeholder={f?.placeholder}
                        style={css(
                          `height:50px; border-radius:12px; border:1px solid ${str(f?.border)}; background:rgba(245,245,247,.04); color:#F5F5F7; padding:0 16px; font-size:16px; font-family:inherit; outline:none; transition:box-shadow .2s`,
                        )}
                      />
                      {f?.hasError ? (
                        <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(f?.error)}</span>
                      ) : null}
                    </label>
                  </Fragment>
                ))}
              </div>
              {v.hpN ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px dashed rgba(64,200,224,.3)',
                    animation: 'cxIn .3s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      color: '#40C8E0',
                    }}
                  >
                    {'FOR THE NUARK WAITLIST'}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'Role'}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {list(v.roleChips).map((c, i1) => (
                        <Fragment key={i1}>
                          <button
                            type="button"
                            onClick={c?.onClick}
                            style={css(
                              `height:36px; padding:0 13px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:13px; cursor:pointer; transition:all .2s`,
                            )}
                          >
                            {txt(c?.label)}
                          </button>
                        </Fragment>
                      ))}
                    </div>
                    {v.hasRoleError ? (
                      <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(v.roleError)}</span>
                    ) : null}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'What are you interested in?'}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {list(v.interestChips).map((c, i1) => (
                        <Fragment key={i1}>
                          <button
                            type="button"
                            onClick={c?.onClick}
                            style={css(
                              `height:36px; padding:0 13px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:13px; cursor:pointer; transition:all .2s`,
                            )}
                          >
                            {txt(c?.label)}
                          </button>
                        </Fragment>
                      ))}
                    </div>
                    {v.hasInterestError ? (
                      <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(v.interestError)}</span>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {v.hpError ? (
                <div
                  role="alert"
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: 'rgba(255,105,97,.08)',
                    border: '1px solid rgba(255,105,97,.35)',
                    fontSize: '14px',
                    color: '#FFD1CC',
                  }}
                >
                  {"We couldn't submit that just now. Check your connection and try again."}
                </div>
              ) : null}
              <button
                className="ph-hover-0882f3"
                type="submit"
                style={{
                  height: '54px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#40C8E0',
                  color: '#000000',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'transform .2s',
                }}
              >
                {v.hpLoading ? (
                  <>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid rgba(0,0,0,.25)',
                        borderTopColor: '#000000',
                        animation: 'cxSpin .7s linear infinite',
                      }}
                    ></span>
                    {'Signing you up…'}
                  </>
                ) : null}
                {v.hpNotLoading ? <>{txt(v.hpLabel)}</> : null}
              </button>
              <span style={{ fontSize: '12px', color: '#98989D', textAlign: 'center' }}>
                {"We'll only use these details to contact you about the products you chose."}
              </span>
            </form>
          ) : null}{' '}
          {v.hpSuccess ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                animation: 'cxIn .45s ease',
                minHeight: '280px',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1px solid #40C8E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#40C8E0',
                  fontSize: '22px',
                }}
              >
                {'✓'}
              </span>
              <h3
                style={{
                  margin: '0',
                  fontSize: 'clamp(24px,2.8vw,30px)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.03em',
                  fontWeight: '500',
                }}
              >
                {"You're signed up, "}
                {txt(v.successName)}
                {'.'}
              </h3>
              {v.hdN ? (
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(64,200,224,.08)',
                    border: '1px solid rgba(64,200,224,.3)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '14.5px' }}>{"You're on the NUARK waitlist."}</span>
                    <span style={{ fontSize: '12.5px', color: '#98989D' }}>
                      {"We'll email "}
                      {txt(v.successEmail)}
                      {' when early access opens.'}
                    </span>
                  </span>
                  <button
                    onClick={v.openNuarkSite}
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '999px',
                      border: '0',
                      background: '#40C8E0',
                      color: '#000000',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    {'Explore NUARK ↗'}
                  </button>
                </div>
              ) : null}
              {v.hdQ ? (
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(100,168,255,.08)',
                    border: '1px solid rgba(100,168,255,.3)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '14.5px' }}>{'Your QueryPrism trial is ready.'}</span>
                    <span style={{ fontSize: '12.5px', color: '#98989D' }}>
                      {'Your details carry over — no second sign-up.'}
                    </span>
                  </span>
                  <button
                    onClick={v.hpOpenQP}
                    style={{
                      height: '40px',
                      padding: '0 16px',
                      borderRadius: '999px',
                      border: '0',
                      background: '#64A8FF',
                      color: '#000000',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    {'Open QueryPrism →'}
                  </button>
                </div>
              ) : null}
              <button
                onClick={v.hpReset}
                style={{
                  alignSelf: 'flex-start',
                  background: 'none',
                  border: '0',
                  padding: '0',
                  color: '#98989D',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                {'Sign up for another product'}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK waitlist / QueryPrism free-trial modal form. */
export function SignupModal({ v }: { v: V }) {
  return (
    <>
      <div
        onClick={v.closeModal}
        style={css(
          `position:fixed; inset:0; z-index:100; background:${str(v.backdropA)}; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); transition:background .3s ease; display:flex; align-items:center; justify-content:center; padding:16px; overflow-y:auto`,
        )}
      >
        <div
          onClick={v.stop}
          role="dialog"
          aria-modal="true"
          style={css(
            `position:relative; width:100%; max-width:540px; max-height:calc(100vh - 32px); overflow-y:auto; border-radius:26px; background:#2C2C2E; border:1px solid ${str(v.modalBorder)}; box-shadow:0 60px 140px -40px rgba(0,0,0,.95); opacity:${str(v.modalOp)}; transform:${str(v.modalT)}; transition:opacity .3s ease, transform .45s cubic-bezier(.2,.8,.2,1)`,
          )}
        >
          <div
            style={css(
              `position:absolute; inset:0 0 auto 0; height:220px; background:${str(v.modalGlow)}; pointer-events:none`,
            )}
          ></div>
          <div
            style={{
              position: 'relative',
              padding: 'clamp(24px,4vw,36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={css(
                  `font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:${str(v.modalAccent)}`,
                )}
              >
                {' '}
                {v.isWaitlist ? <>{'NUARK · Early access'}</> : null}
                {v.isTrial ? <>{'QueryPrism · Free trial'}</> : null}{' '}
              </span>
              <button
                className="ph-hover-2e3bab"
                onClick={v.closeModal}
                aria-label="Close"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(245,245,247,.14)',
                  background: 'transparent',
                  color: '#F5F5F7',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                {'✕'}
              </button>
            </div>
            {v.showForm ? (
              <form onSubmit={v.submit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {v.isWaitlist ? (
                    <>
                      <h3
                        style={{
                          margin: '0',
                          fontSize: 'clamp(26px,3vw,32px)',
                          lineHeight: '1.1',
                          letterSpacing: '-0.03em',
                          fontWeight: '500',
                        }}
                      >
                        {'Join the NUARK waitlist'}
                      </h3>
                      <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#98989D' }}>
                        {'Tell us a little about your team. We onboard in small groups.'}
                      </p>
                    </>
                  ) : null}
                  {v.isTrial ? (
                    <>
                      <h3
                        style={{
                          margin: '0',
                          fontSize: 'clamp(26px,3vw,32px)',
                          lineHeight: '1.1',
                          letterSpacing: '-0.03em',
                          fontWeight: '500',
                        }}
                      >
                        {'Start your QueryPrism trial'}
                      </h3>
                      <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#98989D' }}>
                        {"Three fields. No card. You'll go straight into the product."}
                      </p>
                    </>
                  ) : null}
                </div>
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
                          `height:50px; border-radius:12px; border:1px solid ${str(f?.border)}; background:rgba(245,245,247,.04); color:#F5F5F7; padding:0 16px; font-size:16px; font-family:inherit; outline:none; transition:box-shadow .2s, border-color .2s`,
                        )}
                      />
                      {f?.hasError ? (
                        <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(f?.error)}</span>
                      ) : null}
                    </label>
                  </Fragment>
                ))}
                {v.isWaitlist ? (
                  <>
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
                  </>
                ) : null}
                {v.isError ? (
                  <div
                    role="alert"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(255,105,97,.08)',
                      border: '1px solid rgba(255,105,97,.35)',
                      fontSize: '14px',
                      lineHeight: '1.45',
                      color: '#FFD1CC',
                    }}
                  >
                    {"We couldn't submit that just now. Check your connection and try again."}
                  </div>
                ) : null}
                <button
                  className="ph-hover-0882f3"
                  type="submit"
                  style={css(
                    `height:54px; border-radius:999px; border:0; background:${str(v.modalAccent)}; color:#000000; font-size:16px; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; transition:transform .2s, opacity .2s`,
                  )}
                >
                  {v.isLoading ? (
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
                      {txt(v.loadingLabel)}
                    </>
                  ) : null}
                  {v.notLoading ? <>{txt(v.submitLabel)}</> : null}
                </button>
                <span style={{ fontSize: '12px', lineHeight: '1.5', color: '#98989D', textAlign: 'center' }}>
                  {"We'll only use these details to contact you about this product."}
                </span>
              </form>
            ) : null}
            {v.showSuccess ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'cxIn .45s ease' }}>
                <span
                  style={css(
                    `width:52px; height:52px; border-radius:50%; border:1px solid ${str(v.modalAccent)}; display:flex; align-items:center; justify-content:center; color:${str(v.modalAccent)}; font-size:22px`,
                  )}
                >
                  {'✓'}
                </span>
                {v.isWaitlist ? (
                  <>
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(26px,3vw,32px)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                        fontWeight: '500',
                      }}
                    >
                      {"You're on the NUARK waitlist."}
                    </h3>
                    <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.6', color: '#98989D' }}>
                      {'Thanks, '}
                      {txt(v.successName)}
                      {". We'll email "}
                      <span style={{ color: '#F5F5F7' }}>{txt(v.successEmail)}</span>
                      {' when early access opens for '}
                      {txt(v.successCompany)}
                      {'.'}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <button
                        onClick={v.closeAndNuark}
                        style={{
                          height: '48px',
                          padding: '0 20px',
                          borderRadius: '999px',
                          border: '0',
                          background: '#40C8E0',
                          color: '#000000',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                        }}
                      >
                        {'Explore NUARK ↗'}
                      </button>
                      <button
                        onClick={v.waitlistToTrial}
                        style={{
                          height: '48px',
                          padding: '0 20px',
                          borderRadius: '999px',
                          border: '1px solid rgba(100,168,255,.4)',
                          background: 'transparent',
                          color: '#F5F5F7',
                          fontSize: '15px',
                          cursor: 'pointer',
                        }}
                      >
                        {'Try QueryPrism instead'}
                      </button>
                    </div>
                  </>
                ) : null}
                {v.isTrial ? (
                  <>
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(26px,3vw,32px)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                        fontWeight: '500',
                      }}
                    >
                      {'Your trial is ready.'}
                    </h3>
                    {v.trialHasUrl ? (
                      <>
                        <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.6', color: '#98989D' }}>
                          {'Taking you to QueryPrism in '}
                          <span style={{ color: '#F5F5F7' }}>
                            {txt(v.countdown)}
                            {'s'}
                          </span>
                          {'…'}
                        </p>
                        <button
                          onClick={v.openNow}
                          style={{
                            alignSelf: 'flex-start',
                            height: '48px',
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
                          {'Open QueryPrism now →'}
                        </button>
                      </>
                    ) : null}
                    {v.trialNoUrl ? (
                      <>
                        <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.6', color: '#98989D' }}>
                          {'Account details captured for '}
                          {txt(v.successEmail)}
                          {'.'}
                        </p>
                        <div
                          style={{
                            padding: '12px 14px',
                            borderRadius: '12px',
                            border: '1px dashed rgba(64,200,224,.45)',
                            fontFamily: "'Montserrat',sans-serif",
                            fontSize: '12px',
                            lineHeight: '1.55',
                            color: '#7FDCEC',
                          }}
                        >
                          {'Trial destination not configured. Set '}
                          <span style={{ color: '#F5F5F7' }}>{'queryPrismTrialUrl'}</span>
                          {' (QUERY_PRISM_TRIAL_URL) to route users into the product.'}
                        </div>
                        <button
                          onClick={v.closeModal}
                          style={{
                            alignSelf: 'flex-start',
                            height: '48px',
                            padding: '0 22px',
                            borderRadius: '999px',
                            border: '1px solid rgba(245,245,247,.16)',
                            background: 'transparent',
                            color: '#F5F5F7',
                            fontSize: '15px',
                            cursor: 'pointer',
                          }}
                        >
                          {'Close'}
                        </button>
                      </>
                    ) : null}
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

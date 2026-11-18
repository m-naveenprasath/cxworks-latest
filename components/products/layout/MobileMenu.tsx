import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** Full-screen menu shown on small screens when the burger is open. */
export function MobileMenu({ v }: { v: V }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '55',
          background: 'rgba(0,0,0,.86)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          padding: '110px 24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          animation: 'cxIn .3s ease',
        }}
      >
        {list(v.navItems).map((n, i1) => (
          <Fragment key={i1}>
            <button
              onClick={n?.onClick}
              style={css(
                `text-align:left; background:none; border:0; border-bottom:1px solid rgba(245,245,247,.08); padding:18px 0; font-size:30px; letter-spacing:-0.03em; color:${str(n?.color)}; cursor:pointer`,
              )}
            >
              {txt(n?.label)}
            </button>
          </Fragment>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
          <button
            onClick={v.goNuark}
            style={{
              height: '52px',
              borderRadius: '999px',
              border: '1px solid rgba(64,200,224,.5)',
              background: 'rgba(64,200,224,.1)',
              color: '#F5F5F7',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            {'Explore NUARK'}
          </button>
          <button
            onClick={v.openTrial}
            style={{
              height: '52px',
              borderRadius: '999px',
              border: '0',
              background: '#64A8FF',
              color: '#000000',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {'Try QueryPrism ↗'}
          </button>
          <a
            href={v.cxworksUrl}
            rel="noopener"
            style={{
              height: '52px',
              borderRadius: '14px',
              border: '1px solid rgba(245,245,247,.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#F5F5F7',
              fontSize: '15.5px',
            }}
          >
            {'Visit CXWorks'}
            <span aria-hidden="true" style={{ color: '#40C8E0' }}>
              {'↗'}
            </span>
          </a>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '6px 16px',
              padding: '12px',
              fontSize: '14px',
            }}
          >
            {list(v.contacts).map((c, i1) => (
              <Fragment key={i1}>
                <a href={c?.mailto} style={{ color: '#98989D' }}>
                  {txt(c?.email)}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

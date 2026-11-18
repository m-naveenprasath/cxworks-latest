import { type V, css, str } from '@/lib/products/dc';
import { SignupModal } from '@/components/products/forms/SignupModal';
import { Footer } from '@/components/products/layout/Footer';
import { Header } from '@/components/products/layout/Header';
import { MobileMenu } from '@/components/products/layout/MobileMenu';
import { HomeView } from '@/components/products/views/HomeView';
import { NuarkView } from '@/components/products/views/NuarkView';
import { QueryPrismView } from '@/components/products/views/QueryPrismView';

/** Whole products site. Which view shows is driven by the route state in lib/products-logic.ts. */
export function ProductsPage({ v }: { v: V }) {
  return (
    <>
      <Header v={v} />
      {v.menuOpen ? <MobileMenu v={v} /> : null}
      <main
        style={css(
          `opacity:${str(v.pageOp)}; transform:${str(v.pageT)}; transition:opacity .25s ease, transform .35s ease`,
        )}
      >
        {v.isHome ? <HomeView v={v} /> : null}
        {v.isNuark ? <NuarkView v={v} /> : null}
        {v.isQP ? <QueryPrismView v={v} /> : null}
      </main>
      <Footer v={v} />
      {v.modalOpen ? <SignupModal v={v} /> : null}
    </>
  );
}

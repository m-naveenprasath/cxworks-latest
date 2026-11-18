import { type V } from '@/lib/products/dc';
import { Hero } from '@/components/products/views/home/Hero';
import { Products } from '@/components/products/views/home/Products';
import { Showcase } from '@/components/products/views/home/Showcase';
import { Ecosystem } from '@/components/products/views/home/Ecosystem';
import { About } from '@/components/products/views/home/About';
import { Compare } from '@/components/products/views/home/Compare';
import { Waitlist } from '@/components/products/views/home/Waitlist';
import { NextSteps } from '@/components/products/views/home/NextSteps';

/** Home page: both products, explorer, ecosystem, comparison and sign-up. */
export function HomeView({ v }: { v: V }) {
  return (
    <div data-screen-label="Home">
      <Hero v={v} />
      <Products v={v} />
      <Showcase v={v} />
      <Ecosystem v={v} />
      <About v={v} />
      <Compare v={v} />
      <Waitlist v={v} />
      <NextSteps v={v} />
    </div>
  );
}

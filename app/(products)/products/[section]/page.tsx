import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata, sectionParams } from '@/lib/products/pages';

/** Section URLs (e.g. /about/) render the home page and scroll to that section on load. */
export const dynamicParams = false;
export const generateStaticParams = () => sectionParams('home');
export const metadata = pageMetadata('home');

export default function HomeSectionPage() {
  return <ProductsApp startPage="home" />;
}

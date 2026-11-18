import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata } from '@/lib/products/pages';

export const metadata = pageMetadata('query-prism');

export default function QueryPrismPage() {
  return <ProductsApp startPage="query-prism" />;
}

import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata } from '@/lib/products/pages';

export const metadata = pageMetadata('nuark');

export default function NuarkPage() {
  return <ProductsApp startPage="nuark" />;
}

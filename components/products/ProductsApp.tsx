'use client';

import { Component } from 'react';
import { ProductsPage } from '@/components/products/ProductsPage';
import { ProductsLogic } from '@/lib/products/logic';
import { PRODUCT_LINKS } from '@/lib/products/site';

export type StartPage = 'home' | 'nuark' | 'query-prism';

type Props = { startPage: StartPage };

/**
 * Client host for the products site. Owns one ProductsLogic instance (state, timers, routing, forms)
 * and re-renders ProductsPage whenever the logic changes state.
 */
export default class ProductsApp extends Component<Props, { n: number }> {
  state = { n: 0 };
  private logic: ProductsLogic;

  constructor(props: Props) {
    super(props);
    this.logic = new ProductsLogic({ ...PRODUCT_LINKS, startPage: props.startPage, reducedMotion: false });
  }

  componentDidMount() {
    this.logic.host = { rerender: (cb) => this.setState((s) => ({ n: s.n + 1 }), cb) };
    this.logic.componentDidMount();
    requestAnimationFrame(() => document.documentElement.classList.remove('pre-hydrate'));
  }

  componentWillUnmount() {
    this.logic.componentWillUnmount();
    this.logic.host = null;
  }

  render() {
    const v = { ...this.logic.props, ...this.logic.renderVals() };
    return <ProductsPage v={v} />;
  }
}

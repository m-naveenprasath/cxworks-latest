/**
 * Base class for the page logic (lib/products-logic.ts).
 *
 * State updates are applied synchronously (`this.state` is current right after `setState`), and the
 * host component (components/ProductsApp.tsx) re-renders afterwards. The logic code relies on that,
 * so it deliberately does not use React's batched state.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

export interface LogicHost {
  rerender(cb?: () => void): void;
}

export class DCLogic<P extends Record<string, Any> = Record<string, Any>> {
  props: P;
  state: Record<string, Any> = {};
  host: LogicHost | null = null;

  constructor(props: P) {
    this.props = props;
  }

  setState(update: Record<string, Any> | ((prev: Record<string, Any>) => Record<string, Any>), cb?: () => void) {
    const patch = typeof update === 'function' ? update(this.state) : update;
    this.state = { ...this.state, ...patch };
    this.host?.rerender(cb);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  /** The flat object the components render from (merged over props). */
  renderVals(): Record<string, Any> {
    return {};
  }
}

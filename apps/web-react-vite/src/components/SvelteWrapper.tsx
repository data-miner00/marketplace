import { useRef, useLayoutEffect } from "react";
import { ComponentType } from "svelte";

function SvelteWrapper<TProps>(
  Component: ComponentType
): (props: TProps) => JSX.Element {
  return (props: TProps) => {
    const svelteRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current?.firstChild?.remove();
      }
      new Component({
        target: svelteRef.current!,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}

export default SvelteWrapper;

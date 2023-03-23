import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  alerts: HTML[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <Slider class="bg-base gap-6 scrollbar-none">
        {alerts.map((alert) => (
          <>
            <div class="flex justify-center items-center w-screen h-[30px] text-default-inverse" dangerouslySetInnerHTML={{ __html: alert }}>
            </div>
          </>
        ))}
      </Slider>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;

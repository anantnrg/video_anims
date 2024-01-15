/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Circle, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  Vector2,
  all,
  createRef,
  easeInOutQuad,
  easeInSine,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loop,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  makeRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  range,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useRandom,
  waitFor,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  /* ---- Background Start ---- */
  // const circles: Circle[] = [];
  // yield view.add(
  //   <Rect
  //     height="97%"
  //     maxHeight="97%"
  //     width="100%"
  //     maxWidth="97%"
  //     clip
  //     layout
  //     direction="column"
  //     gap={45}
  //     alignItems="center"
  //     justifyContent="center"
  //     wrap="wrap"
  //   >
  //     {range(759).map((i) => (
  //       <Circle
  //         width={2}
  //         height={2}
  //         fill="rgba(255, 255, 255, 0.35)"
  //         ref={makeRef(circles, i)}
  //         opacity={0}
  //       />
  //     ))}
  //   </Rect>,
  // );

  // const random = useRandom();
  // yield loop(Infinity, () =>
  //   all(
  //     ...circles.map((circle) =>
  //       circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 2),
  //     ),
  //   ),
  // );
  /* ---- Background End ---- */

  /* ---- Intro Start ---- */
  const introTextRef = createRef<Txt>();
  const introSubTextRef = createRef<Txt>();

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={900}
      fontSize={102}
      ref={introTextRef}
      fill="cdd6f4"
    />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={600}
      fontSize={42}
      ref={introSubTextRef}
      fill="fab387"
      y={120}
    />,
  );

  yield* introTextRef().text("The Ownership System", 1, easeInOutQuad);
  yield* introSubTextRef().text(
    "Rust Programming Series - #5",
    1,
    easeInOutQuad,
  );

  yield* waitUntil("learn basics");
  yield* all(
    introTextRef().opacity(0, 0.5, easeInSine),
    introTextRef().x(-700, 0.5, easeInSine),
    introSubTextRef().opacity(0, 0.5, easeInSine),
    introSubTextRef().x(-700, 0.5, easeInSine),
  );
  yield* introTextRef().x(0);
  yield* introTextRef().text("", 1, easeInOutQuad);
  yield* introTextRef().opacity(1);
  yield* introTextRef().fontSize(128);
  yield* introTextRef().fill("cba6f7");
  yield* introTextRef().text("Memory Allocation", 1, easeInOutQuad);
  yield* waitFor(2);
  yield* all(
    introTextRef().opacity(0, 0.5, easeInSine),
    introTextRef().y(-700, 0.5, easeInSine),
  );
  /* ---- Intro End ---- */

  /* ---- Memory Allocation Start ---- */

  /* ---- Memory Allocation End ---- */
});

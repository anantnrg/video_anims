/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import { Circle, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  all,
  createRef,
  easeInOutQuad,
  easeInSine,
  loop,
  makeRef,
  range,
  useRandom,
  waitFor,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  /* ---- Background Start ---- */
  const circles: Circle[] = [];
  yield view.add(
    <Rect
      height="97%"
      maxHeight="97%"
      width="100%"
      maxWidth="97%"
      clip
      layout
      direction="column"
      gap={45}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {range(759).map((i) => (
        <Circle
          width={2}
          height={2}
          fill="rgba(255, 255, 255, 0.75)"
          ref={makeRef(circles, i)}
          opacity={0}
        />
      ))}
    </Rect>,
  );

  // yield loop(Infinity, () => {
  //   const shuffledCircles = circles.sort(() => Math.random() - 0.5);
  //   const halfOfCircles = shuffledCircles.slice(
  //     0,
  //     Math.ceil(shuffledCircles.length / 1.75),
  //   );
  //   const remainingCircles = circles.filter(
  //     (circle) => !halfOfCircles.includes(circle),
  //   );

  //   return all(
  //     ...halfOfCircles.map((circle) => circle.opacity(1, 3, easeInOutQuad)),
  //     ...remainingCircles.map((circle) => circle.opacity(0, 3, easeInOutQuad)),
  //   );
  // });
  const random = useRandom();
  yield loop(Infinity, () =>
    all(
      ...circles.map((circle) =>
        circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 2),
      ),
    ),
  );
  /* ---- Background End ---- */

  /* ---- Intro Start ---- */
  const introTextRef = createRef<Txt>();
  const introSubTextRef = createRef<Txt>();

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={600}
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
    introTextRef().y(700, 0.5, easeInSine),
  );
  /* ---- Intro End ---- */
});

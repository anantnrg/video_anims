/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Circle, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  Vector2,
  all,
  createRef,
  easeInOutQuad,
  easeInOutQuart,
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
import { animateClone } from "helpers/animations";

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

  yield* introTextRef().text("The Ownership System", 1, easeInOutQuart);
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
  yield* introTextRef().text("", 1, easeInOutQuart);
  yield* introTextRef().opacity(1);
  yield* introTextRef().fontSize(128);
  yield* introTextRef().fill("cba6f7");
  yield* introTextRef().text("Memory Allocation", 1, easeInOutQuart);
  yield* waitFor(2);
  yield* all(
    introTextRef().opacity(0, 0.5, easeInSine),
    introTextRef().y(-700, 0.5, easeInSine),
  );
  /* ---- Intro End ---- */

  /* ---- Memory Allocation Start ---- */
  const memBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={memBoxRef}
      scale={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
        fill="b4befe"
        text="Memory"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="b4befe"
      />
    </Rect>,
  );

  yield* waitUntil("we utilize memory");
  yield* memBoxRef().scale(1, 0.75, easeInOutQuart);

  const stackMemBoxContRef = createRef<Rect>();
  const stackMemBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={stackMemBoxContRef}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
        fill="a6e3a1"
        text="Stack"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="a6e3a1"
        direction="column"
        ref={stackMemBoxRef}
        alignItems="center"
        gap={40}
        padding={20}
        clip
      />
    </Rect>,
  );

  const heapMemBoxContRef = createRef<Rect>();
  const heapMemBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={heapMemBoxContRef}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
        fill="fab387"
        text="Heap"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="fab387"
        ref={heapMemBoxRef}
      />
    </Rect>,
  );

  yield* waitUntil("memory is divided into two parts");
  yield* all(
    memBoxRef().opacity(0, 0.75, easeInOutQuart),
    stackMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    stackMemBoxContRef().x(-400, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    heapMemBoxContRef().x(400, 0.75, easeInOutQuart),
  );

  yield* waitUntil("lets see how they're different");
  yield* all(
    stackMemBoxContRef().x(0, 1, easeInOutQuart),
    stackMemBoxContRef().scale(1.1, 1, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
  );

  yield* stackMemBoxContRef().scale(1, 1, easeInOutQuart);

  const stackMemSampleIntValue = createRef<Rect>();
  const stackMemSampleFloatValue = createRef<Rect>();
  const stackMemSampleBoolValue = createRef<Rect>();

  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="74c7ec"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleIntValue}
      clip
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="74c7ec"
        text="some_int: 420"
      />
    </Rect>,
  );
  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="74c7ec"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleFloatValue}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="74c7ec"
        text="a_float: 3.004"
      />
    </Rect>,
  );
  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="74c7ec"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleBoolValue}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="74c7ec"
        text="bool: true"
      />
    </Rect>,
  );

  yield* waitUntil("integers");
  yield* animateClone(view, stackMemSampleIntValue(), function* (clone) {
    yield* clone.y(100);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-181, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("floats");
  yield* animateClone(view, stackMemSampleFloatValue(), function* (clone) {
    yield* clone.y(140);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-70, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("booleans");
  yield* animateClone(view, stackMemSampleBoolValue(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(38, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("last value pushed");
  yield* stackMemSampleBoolValue().stroke("f38ba8", 0.25, easeInOutQuart);

  yield* waitUntil("first one to be popped off");
  yield* animateClone(view, stackMemSampleBoolValue(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(180, 0.75, easeInOutQuart),
    );
  });
  yield* stackMemSampleBoolValue().opacity(0, 0);

  yield* waitUntil("efficient access to data");
  yield* stackMemSampleFloatValue().stroke("f9e2af", 0.35, easeInOutQuart);
  yield* waitFor(0.5);
  yield* stackMemSampleFloatValue().stroke("74c7ec", 0.35, easeInOutQuart);
  yield* stackMemSampleIntValue().stroke("f9e2af", 0.35, easeInOutQuart);
  yield* waitFor(0.5);
  yield* stackMemSampleIntValue().stroke("74c7ec", 0.35, easeInOutQuart);
  /* ---- Memory Allocation End ---- */
});

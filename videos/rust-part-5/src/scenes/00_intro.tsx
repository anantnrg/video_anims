/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Circle, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import {
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
  //         fill="rgba(255, 255, 255, 0.75)"
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
    introTextRef().y(-700, 0.5, easeInSine),
  );
  /* ---- Intro End ---- */

  /* ---- Memory Allocation Start ---- */
  const stackContMemBox = createRef<Rect>();
  const heapContMemBox = createRef<Rect>();
  const stackMemBox = createRef<Rect>();
  const heapMemBox = createRef<Rect>();
  const mainStackFrameCont = createRef<Rect>();
  const mainStackFrame = createRef<Rect>();
  const mainStackFrameSampleValue = createRef<Txt>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      ref={stackContMemBox}
      scale={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={48}
        fontWeight={600}
        fill="a6e3a1"
        text="Stack"
        marginBottom={10}
      />
      <Rect
        layout
        direction="column"
        width={400}
        height={600}
        radius={15}
        stroke="a6e3a1"
        lineWidth={6}
        ref={stackMemBox}
        alignItems="center"
        paddingLeft={15}
        paddingRight={15}
        paddingTop={5}
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      ref={heapContMemBox}
      scale={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={48}
        fontWeight={600}
        fill="fab387"
        text="Heap"
        marginBottom={10}
      />
      <Rect
        layout
        direction="column"
        width={400}
        height={600}
        radius={15}
        stroke="fab387"
        lineWidth={6}
        ref={heapMemBox}
        alignItems="center"
        padding={20}
      />
    </Rect>,
  );

  yield* waitUntil("stack memory");
  yield* stackContMemBox().scale(1, 0.75, easeInOutQuad);
  yield* stackContMemBox().x(-400, 0.55, easeInOutQuad);

  yield* waitUntil("heap memory");
  yield* heapContMemBox().scale(1, 0.75, easeInOutQuad);
  yield* heapContMemBox().x(400, 0.55, easeInOutQuad);

  yield* waitUntil("stack mem can be used");
  yield* all(
    heapContMemBox().opacity(0, 0.75, easeInOutQuad),
    stackContMemBox().x(0, 0.75, easeInOutQuad),
    stackContMemBox().scale(1.1, 0.55, easeInSine),
  );

  stackMemBox().add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      width="100%"
      height={200}
      margin={10}
      stroke="cba6f7"
      lineWidth={4}
      radius={15}
      clip
      ref={mainStackFrameCont}
      scale={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cba6f7"
        marginTop={10}
        text="main"
      />
      <Rect width="100%" stroke="cba6f7" lineWidth={4} marginTop={10} />
      <Rect
        layout
        direction="column"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        ref={mainStackFrame}
      />
    </Rect>,
  );

  yield* waitUntil("stack consists of frames");
  yield* mainStackFrameCont().scale(1, 0.75, easeInOutQuad);

  mainStackFrame().add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={32}
      fontWeight={600}
      fill="cdd6f4"
      ref={mainStackFrameSampleValue}
      text=""
    />,
  );

  yield* waitUntil("program will allocate");
  yield* mainStackFrameSampleValue().text("value: 420", 0.75, easeInOutQuad);
  /* ---- Memory Allocation End ---- */
});

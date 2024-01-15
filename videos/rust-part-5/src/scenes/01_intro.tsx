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
  const memBox = createRef<Rect>();
  const stackContMemBox = createRef<Rect>();
  const heapContMemBox = createRef<Rect>();
  const stackMemBox = createRef<Rect>();
  const heapMemBox = createRef<Rect>();
  const mainStackFrameCont = createRef<Rect>();
  const mainStackFrame = createRef<Rect>();
  const mainStackFrameTitle = createRef<Txt>();
  const mainStackFrameTitleSep = createRef<Rect>();
  const highlightBox = createRef<Rect>();
  const mainStackFrameSampleValueInt = createRef<Txt>();
  const mainStackFrameSampleValueFloat = createRef<Txt>();
  const mainStackFrameSampleValueBool = createRef<Txt>();
  const LIFO = createRef<Txt>();

  yield view.add(
    <Rect layout direction="column" alignItems="center" ref={memBox} scale={0}>
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={48}
        fontWeight={600}
        fill="cdd6f4"
        text="Memory"
        marginBottom={10}
      />
      <Rect
        layout
        direction="column"
        width={400}
        height={600}
        radius={15}
        stroke="cdd6f4"
        lineWidth={8}
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
      ref={stackContMemBox}
      opacity={0}
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
        lineWidth={8}
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
      opacity={0}
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
        lineWidth={8}
        ref={heapMemBox}
        alignItems="center"
        padding={20}
      />
    </Rect>,
  );

  yield* waitUntil("we utilize memory");
  yield* memBox().scale(1, 0.75, easeInOutQuad);

  yield* waitUntil("memory is divided into two parts");
  yield* all(
    memBox().opacity(0, 1, easeInOutQuad),
    stackContMemBox().opacity(1, 1, easeInOutQuad),
    stackContMemBox().x(-450, 0.75, easeInOutQuad),
    heapContMemBox().opacity(1, 1, easeInOutQuad),
    heapContMemBox().x(450, 0.75, easeInOutQuad),
  );

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
      minHeight={200}
      margin={10}
      stroke="cba6f7"
      lineWidth={0}
      radius={15}
      clip
      ref={mainStackFrameCont}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cba6f7"
        marginTop={10}
        text="main"
        ref={mainStackFrameTitle}
        scale={0}
      />
      <Rect
        width="100%"
        stroke="cba6f7"
        lineWidth={4}
        marginTop={10}
        ref={mainStackFrameTitleSep}
        opacity={0}
      />
      <Rect
        direction="column"
        width="100%"
        height="100%"
        ref={mainStackFrame}
        gap={30}
        paddingLeft={20}
        paddingTop={20}
      />
    </Rect>,
  );

  // yield view.add(<Rect width={100} height={40} fill="cdd5f4" x={40} y={200} />);

  // yield* waitUntil("stack consists of frames");
  // yield* mainStackFrameCont().scale(1, 0.75, easeInOutQuad);

  mainStackFrame().add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={32}
      fontWeight={600}
      fill="89dceb"
      ref={mainStackFrameSampleValueInt}
      text="some_int: 420"
      opacity={0}
    />,
  );

  yield* waitUntil("integers");
  yield* mainStackFrameSampleValueInt().opacity(1, 0.75, easeInOutQuad);

  mainStackFrame().add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={32}
      fontWeight={600}
      fill="74c7ec"
      ref={mainStackFrameSampleValueFloat}
      text="a_float: 3.004"
      opacity={0}
    />,
  );

  yield* waitUntil("floats");
  yield* mainStackFrameSampleValueFloat().opacity(1, 0.75, easeInOutQuad);
  mainStackFrame().add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={32}
      fontWeight={600}
      fill="94e2d5"
      ref={mainStackFrameSampleValueBool}
      text="bool: true"
      opacity={0}
    />,
  );

  yield view.add(
    <Rect
      width={250}
      height={60}
      lineWidth={5}
      stroke="f38ba8"
      radius={10}
      x={-80}
      y={-20}
      opacity={0}
      ref={highlightBox}
    />,
  );

  yield view.add(
    <Txt
      text=""
      fontFamily="JetBrains Mono"
      fontSize={56}
      fontWeight={800}
      fill="f9e2af"
      x={600}
      ref={LIFO}
    />,
  );

  yield* waitUntil("booleans");
  yield* mainStackFrameSampleValueBool().opacity(1, 0.75, easeInOutQuad);

  yield* waitUntil("are organized");
  yield* LIFO().text("Last In First Out", 0.75, easeInOutQuad);

  yield* waitUntil("the last value");
  yield* highlightBox().opacity(1, 0.75, easeInOutQuad);
  yield* waitUntil("popped off");
  yield* highlightBox().opacity(0, 0.75, easeInOutQuad);
  yield* mainStackFrameSampleValueBool().opacity(0, 0.75, easeInOutQuad);
  yield* waitUntil("values in the stack");
  yield* LIFO().text("", 0.75, easeInOutQuad);
  yield* all(
    mainStackFrameTitle().scale(1, 0.75, easeInOutQuad),
    mainStackFrameTitleSep().opacity(1, 0.75, easeInOutQuad),
    mainStackFrameCont().lineWidth(4, 0.15, easeInOutQuad),
  );

  yield* waitUntil("stack frame is popped");
  yield* mainStackFrameCont().opacity(0, 0.75, easeInOutQuad);

  /* ---- Memory Allocation End ---- */
});

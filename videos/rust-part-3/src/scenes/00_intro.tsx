/* eslint-disable react/jsx-filename-extension */
import { makeScene2D, Img } from "@motion-canvas/2d";
import {
  all,
  tween,
  createRef,
  map,
  easeInSine,
  chain,
  easeOutSine,
  waitUntil,
  easeInOutCubic,
} from "@motion-canvas/core";
import { Copyright } from "helpers/copyright";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const ferrisLogo = createRef<Img>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img ref={ferrisLogo} src={ferrisImg} width={900} scale={0} />,
  );

  yield* waitUntil("start-intro");

  yield* chain(
    tween(0.75, (value) => {
      ferrisLogo().scale(map(0, 1.1, easeInOutCubic(value)));
    }),
    tween(0.75, (value) => {
      ferrisLogo().scale(map(1.1, 1, easeInOutCubic(value)));
    }),
  );

  yield* waitUntil("finish-intro");

  yield* all(
    tween(0.75, (value) => {
      ferrisLogo().scale(map(1, 0.15, easeOutSine(value)));
    }),
    tween(0.75, (value) => {
      ferrisLogo().x(map(0, 850, easeInSine(value)));
    }),
    tween(0.75, (value) => {
      ferrisLogo().y(map(0, 450, easeInSine(value)));
    }),
  );
});

// Third-Party & Ecosystem Imports
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";

// Architecture & Global State Imports
import backgroundReducer, {
  setBackgroundImages,
} from "../../../../../../store/slices/Background/BackgroundSlice.js";
import languageReducer from "../../../../../../store/slices/Languages/LanguageSlice.js";

jest.unstable_mockModule("react-blurhash", () => ({
  Blurhash: () => null,
}));
jest.unstable_mockModule("../../../../../translator/translator.js", () => ({
  translator: (_language: string, text: string) => text,
}));

// Internal Tools & Utilities
const { BackgroundByType } = await import("../view/backgroundByType.tsx");

const images = [
  { type: "Nature", src: "nature-wide.jpg", src2: "nature-mobile.jpg", hash1: "hash" },
  { type: "Anime", src: "anime-wide.jpg", src2: "anime-mobile.jpg", hash1: "hash" },
];

const createStore = () => {
  const store = configureStore({
    reducer: { background: backgroundReducer, language: languageReducer },
  });
  store.dispatch(setBackgroundImages(images));
  return store;
};

test("shows only images of the requested type", () => {
  const store = createStore();
  const { container, rerender } = render(
    <Provider store={store}>
      <BackgroundByType type="Nature" />
    </Provider>
  );

  const displayedImages = container.querySelectorAll("img");
  expect(displayedImages).toHaveLength(1);
  expect(["nature-wide.jpg", "nature-mobile.jpg"]).toContain(
    displayedImages[0].getAttribute("src")
  );

  rerender(
    <Provider store={store}>
      <BackgroundByType type="Unknown" />
    </Provider>
  );
  expect(container.querySelectorAll("img")).toHaveLength(0);
});

test("switches between wide and mobile images when the viewport changes", () => {
  const originalWidth = window.innerWidth;
  const originalHeight = window.innerHeight;
  const setViewport = (width: number, height: number) => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: width });
    Object.defineProperty(window, "innerHeight", { configurable: true, value: height });
    fireEvent.resize(window);
  };

  try {
    setViewport(1200, 700);
    const { container } = render(
      <Provider store={createStore()}>
        <BackgroundByType type="Nature" />
      </Provider>
    );
    const image = container.querySelector("img");
    expect(image).toHaveAttribute("src", "nature-wide.jpg");

    setViewport(400, 800);
    expect(image).toHaveAttribute("src", "nature-mobile.jpg");

    setViewport(1200, 700);
    expect(image).toHaveAttribute("src", "nature-wide.jpg");
  } finally {
    setViewport(originalWidth, originalHeight);
  }
});

import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "./counterSlice";

test("should handle initial state", () => {
  expect(counterReducer(undefined, { type: "unknown" })).toEqual({
    value: 0,
  });
});

test("should handle increment", () => {
  const initialState = { value: 3 };
  const actual = counterReducer(initialState, increment());
  expect(actual.value).toEqual(4);
});

test("should handle decrement", () => {
  const initialState = { value: 3 };
  const actual = counterReducer(initialState, decrement());
  expect(actual.value).toEqual(2);
});

test("should handle incrementByAmount", () => {
  const initialState = { value: 3 };
  const actual = counterReducer(initialState, incrementByAmount(2));
  expect(actual.value).toEqual(5);
});

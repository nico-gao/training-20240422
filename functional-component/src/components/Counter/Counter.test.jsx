/* 
unit test
test one unit of code at a time, the function or component should not depend on  anything else

integration test
test multiple units togethor, test the interaction between them

end-to-end test (e2e test)
simulate how users interact with the application

BDD (behavior driven development)
write the code first, and then write test cases based on user behavior

TDD (test driven development)
write test cases first, and then write code to meet requirements and pass all test cases

*/
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter, { CounterContainer } from "./Counter";
import { add } from "./demo";

// jest

// beforeEach(()=>{
//   // do some setup
// })

// beforeAll(()=>{

// })

// afterEach
// afterAll
// describe("math function", () => {
//   it("should do addition", () => {
//     expect(add(1, 2)).toBe(3);
//   });

//   it("should do substraction", () => {});
//   it("should do multiplication", () => {});
// });

describe("Counter", () => {
  it("should display an initial value of 0", () => {
    const { getByText } = render(
      <Counter counter={0} handleAdd={() => {}} handleMinus={() => {}} />
    );
    expect(getByText("Counter: 0")).toBeInTheDocument();
  });

  it("should add one to the counter by clicking + button", () => {
    const mockHandleAdd = jest.fn();
    const { getByText } = render(
      <Counter counter={0} handleAdd={mockHandleAdd} handleMinus={() => {}} />
    );
    const plusButton = getByText("+");
    expect(plusButton).toBeInTheDocument();
    userEvent.click(plusButton);
    expect(mockHandleAdd).toBeCalledTimes(1);
  });
});

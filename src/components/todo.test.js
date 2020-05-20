import React from "react";
import Todo from "./Todo";
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
/*
import { configure, shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
*/

describe("<Todo /> component Unit Tests", () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: "buy milk"
  };

  let component;
  beforeEach(() => {
    // setup a DOM element as a render target
    component = document.createElement("div");
    document.body.appendChild(component);
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(component);
    component.remove();
    component = null;
  });

  it("should render 1 <Todo /> component", () => {
    act(() => {
      render(<Todo onClick={mockFn} completed={false} text="go shopping" />, component);
    })
  });
});

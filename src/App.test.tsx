import React from "react";
//import { render } from "@testing-library/react";
import App from "./App";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  /* const { getByTestId } = render(<App />);
  const linkElement = getByTestId("holin");
  expect(linkElement).toBeInTheDocument(); */
  /* 
    有时候我们需要对组件内部的一些数据state做测试，
    这个时候我们需要依赖第三方模块
    cnpm i enzyme --save  安装到开发模块

  */

  /* 
    只渲染APP这一层的组件，浅渲染，其内部的组件只进行标记即可
  */
  const wrapper = shallow(<App />);
  /* expect(wrapper.find(".App").length).toBe(1);
  console.log(wrapper.debug());
  expect(wrapper.find(".App").prop("title")).toBe("holin"); */

  /* 
    专门写一个属性给测试用
  */
  expect(wrapper.find('[data-test="holin"]').length).toBe(1);
  console.log(wrapper.debug());
  expect(wrapper.find('[data-test="holin"]').prop("title")).toBe("holin");
});

import Vue from 'vue'
import { mount } from "vue-test-utils";
import HelloWorld from '../src/component/Hello.vue'

describe('HelloWorld.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(HelloWorld);
  });

  it("属性名字是否是 foo", () => {
    expect(new HelloWorld().name).toBe('foo');
  });

  it("updates the .textContent to 'foo!'", done => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toBe('这是一个foo组件。');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
})

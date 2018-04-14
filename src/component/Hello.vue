<!-- src/component/HelloDecorator.vue -->
<!-- 这是使用装饰器定义 as ! Hello; 组件的替代方法 -->
<template>
  <div class="test">这是一个{{name}}组件，今年是:{{zodiac}}，今年{{age}}岁了。</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
  name = 'Hello'
  is18 = false
  age = 18
  zodiac = 2018
  arr = [1, 3, 4]
  updateAge() {
    this.age = 200;
    this.arr.unshift(0);
  }
  created() {
    this.updateAge();
  }
}
</script>

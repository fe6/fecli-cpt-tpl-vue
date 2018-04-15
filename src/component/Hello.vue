<!-- src/component/HelloDecorator.vue -->
<!-- 这是使用装饰器定义 as ! Hello; 组件的替代方法 -->
<template>
  <div class="test iconfont icon-xiaoyuan-2">这是一个{{name}}组件。</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
  name = 'foo'
}
</script>

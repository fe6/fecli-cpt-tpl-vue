<!-- src/component/HelloDecorator.vue -->
<!-- 这是使用装饰器定义 as ! Hello; 组件的替代方法 -->
<template>
  <div class="test">这是一个{{name}}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
    name: string = '组111件';
}
</script>

<template>
  <Hello/>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Hello from '@/component/index';
import '@/style/index';

@Component({
  components: {
    Hello,
  },
})

export default class App extends Vue {
  message: String = 'Hello';
}
</script>

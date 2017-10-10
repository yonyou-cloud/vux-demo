<style scoped lang="postcss">
</style>

<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
      <checklist :options="commonList"></checklist>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Checklist } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Checklist
  },
  data(){
    return {
      commonList: ['China', 'Japan', 'America'],
    }
  }
}
</script>

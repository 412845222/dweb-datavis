<template>
  
  <dweb-left-menu :data="leftmenu.data"></dweb-left-menu>
  <dweb-page-view></dweb-page-view>
  <dweb-footer></dweb-footer>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup(){
    const leftmenu = reactive({
      data:[
        {
          name:"示例",
          url:"/"
        },
        {
          name:"示例",
          url:"/"
        },
        {
          name:"示例",
          url:"/"
        },
        {
          name:"示例",
          url:"/"
        },
      ]
    })

    // console.log(leftmenu)




    return {
      leftmenu:leftmenu
    }
  }
}
</script>

<style>
</style>

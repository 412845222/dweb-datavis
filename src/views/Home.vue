<template>
  <div class="home">
    <div class="row" style="margin: 0;">
      <div class="col-9">
        <echarts-bar></echarts-bar>
      </div>
      <div id="luckysheet-box" class="col-3" style="height: 95vh;overflow: hidden;padding: 0;">
        <luckysheet :width="table_width" ></luckysheet>
      </div>
    </div>

  </div>
</template>

<script>

  import { ref, reactive, onMounted } from "vue"
  export default {
    name: 'Home',
    setup() {
      const table_width = ref(0)
      const echarts_data = reactive({
        xAxis: ['直接访问', '邮件营销'],
        yAxis: ['周一', '周二', '周三'],
        series: [{
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: [320, 302, 301]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: [120, 132, 101]
        }]
      })


      onMounted(() => {
        table_width.value = document.getElementById("luckysheet-box").offsetWidth - 30
        console.log(table_width.value)
      })


      function changeEacharts(data) {
        console.log(data)
        echarts_data.series = data.series
        echarts_data.xAxis = data.xAxis
        echarts_data.yAxis = data.yAxis
        // console.log(echarts_data)
      }
      // provide('changeEacharts', changeEacharts)
      return {
        table_width: table_width,
        changeEacharts: changeEacharts,
        echarts_data: echarts_data
      }
    }

  }
</script>
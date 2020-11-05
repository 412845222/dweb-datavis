import { createStore } from "vuex";

export default createStore({
  state: {
    echarts_option: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: [],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "category",
        data: [],
      },
      series: [],
    },
  },
  getters: {
    //获取echarts-bar数据
    getBarOption(state) {
      return state.echarts_option;
    },
  },
  mutations: {
    //从表格修改
    changeEchartsOpthon(state,option){
      state.echarts_option.legend.data = option.xAxis
      state.echarts_option.yAxis.data = option.yAxis
      state.echarts_option.series = option.series
      // console.log(state)
    }
  },
  actions: {},
  modules: {},
});

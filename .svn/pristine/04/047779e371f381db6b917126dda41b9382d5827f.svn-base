import { queryCityData } from '@/services/portrait';
export default {
  namespace: 'mapDetail',
  state: {
    citydata: [],
    id: 'colorMap',
    theme: {
      color: "black",
      width: window.innerWidth,
      height: 550
    },

    title: [{
      text: '区域分布',
      color: 'black'
    }, {
      show: true,
      text: 'TOP 10 排行榜',
      color: '#666666',
      right: '40',
      textStyle: {
        color: '#666666',
        fontSize: 14
      }
    }],
    visualMap: {
      min: 0,
      max: 1000,
      inRange: {
        color: ['#67e0e3', '#b7d6f3', '#467E90', '#37a2da'] // , '#425769'
      }
    },
    yAxis: {
      data: []
    },
    series: { name: '', data: [], topData: [], zoom: 0.85 }
  },

  effects: {
    * fetchCityData({ payload }, {call, put}){
      const response = yield call(queryCityData,payload);
      yield put({
        type : 'getCityData',
        payload : response
      })
    }
  },

  reducers: {
    getCityData(state, action) {
      // 后台返回数据
      const citydata = action.payload.data;

      const titledata = [];
      const bartop10 = [];

      function NumDescSort(a, b) {
        return b.value - a.value;
      }

      function NumAsceSort(a, b) {
        return a.value - b.value;
      }

      // 先进行一次降序排序，找出最大的前十个
      citydata.sort(NumDescSort);

      // 当省份数小于10个时，cityLength显示省份数
      let cityLength = 10;
      if(citydata.length < 10) {
        cityLength = citydata.length;
      }
      for (let i = 0; i < cityLength; i++) {
        const top10 = {
          name: citydata[i].name,
          value: citydata[i].value
        };
        bartop10.push(top10);
        // dataShadow.push(yMax);
      }

      bartop10.sort(NumAsceSort);
      for (let i = 0; i < bartop10.length; i++) {
        titledata.push(bartop10[i].name);
      }

      return {
        ...state,
        yAxis: {
          data: titledata
        },
        series: { name: '', data: citydata, topData: bartop10, zoom: 0.85 }
      }
    }
  }
}

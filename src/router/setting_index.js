import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSiderbar from '@/components/setting/Siderbar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
         myHeader  : SettingHeader,
         myDetail  : SettingDetail,
         mySiderbar: SettingSiderbar,
      }
    }
  ]
})

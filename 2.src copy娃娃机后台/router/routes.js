/* 
所有路由配置的数组
*/

import Home from '@/pages/Home/Home'
import Detail from '@/pages/Detail/Detail'
import Device from '@/pages/Device/Device'
import User from '@/pages/User/User'
import Video from '@/pages/Video/Video'
import Login from '@/pages/Login/Login'
import AddLibrary from '@/pages/AddLibrary/AddLibrary'
import AddDevice from '@/pages/AddDevice/AddDevice'
import ComboManage from '@/pages/ComboManage/ComboManage'
import AddCombo from '@/pages/AddCombo/AddCombo'
import AddressManage from '@/pages/AddressManage/AddressManage'
import AddAddress from '@/pages/AddAddress/AddAddress'
import Setting from '@/pages/Setting/Setting'
import Withdraw from '@/pages/Withdraw/Withdraw'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/device',
    component: Device,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/video',
    component: Video,
    meta: {
      isShowFooter: true
    },
    // children:[
    //   {
    //     path:'/video/addlibrary',
    //     component: AddLibrary
    //   },
    // ]
  },
  {
    path: '/user',
    component: User,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/withdraw',
    component: Withdraw
  },
  {
    path: '/device/addDevice',
    component: AddDevice
  },
  {
    path:'/video/addlibrary',
    component: AddLibrary
  },
  {
    path: '/device/comboManage',
    component: ComboManage
  },
  {
    path: '/addCombo',
    component: AddCombo
  },
  {
    path: '/device/addressManage',
    component: AddressManage
  },
  {
    path: '/device/addressManage/addAddress',
    component: AddAddress
  },
  {
    path: '/',
    redirect: '/home'
  }
]
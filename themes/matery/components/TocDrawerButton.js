import { useGlobal } from '@/lib/global'
import React from 'react'
import CONFIG_MATERY from '../config_matery'

/**
 * 点击召唤目录抽屉
 * 当屏幕下滑500像素后会出现该控件
 * @param props 父组件传入props
 * @returns {JSX.Element}
 * @constructor
 */
const TocDrawerButton = (props) => {
  const { locale } = useGlobal()
  if (!CONFIG_MATERY.WIDGET_TOC) {
    return <></>
  }
  return (<div onClick={props.onClick} className='py-2 px-3 cursor-pointer transform duration-200 flex justify-center items-center w-7 h-7 text-center' title={locale.POST.TOP} >
    <i className='fas fa-list-ol text-xs'/>
  </div>)
}

export default TocDrawerButton

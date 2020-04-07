import style from './comp1.css'

import {Component} from 'preact';

export default () => {
  return(
    <div className={style.OuterClass}>
      <p className={style.testClass}>
        www.example.com
      </p>
      outer class
    </div>
  )
}
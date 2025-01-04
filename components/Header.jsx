import { useContext, useState } from "react";
import { Theme } from "../contexts/ThemeContext";

export default function Header() {
  // console.log();
  const [isDark,setDark]=useContext(Theme);
  // isDark=a[0]
  // setDark=a[1]
  // if(isDark){
  //   document.querySelector('main').classList.add('dark')
  //   document.querySelector('header').classList.add('dark')
  // }else {
  //   document.querySelector('main').classList.remove('dark')
  //   document.querySelector('header').classList.remove('dark')
  // } 

    return (
      <header className={`header-container ${!isDark?'dark':''}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=>{
            setDark(!isDark)
            localStorage.setItem('isDark',!isDark)
          }}>
            <i className={`fa-solid fa-${(isDark)?'moon':'sun'}`} />
            &nbsp;&nbsp;{isDark?'Dark_':'Light_'}Mode
          </p>
        </div>
      </header>
    )
  }
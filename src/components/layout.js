import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../css/layout.module.scss"
const Layout = (props)=>{
  return (
    <div className={layoutStyles.container}>
      <Header/>
      <content className={layoutStyles.content}>{props.children}</content>
      <Footer />
    </div>
  )
}
export default Layout
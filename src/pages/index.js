import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {

    return (
<Layout>
    <Head pageTitle="Home"/>
   <h1>Hello world!</h1> 
   <Link to="/about/">About</Link>
   <Link to="/contact/">Contact</Link>
</Layout>
    )
}
export default IndexPage; 

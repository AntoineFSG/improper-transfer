import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


export default () => 
<div>
<Layout>
    <Head pageTitle="About"/>
   <h1>About Me!</h1> 
   <Link to="/">Back</Link>
   <Link to="/contact/">Contact</Link>
</Layout>
</div>

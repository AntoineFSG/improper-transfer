import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


export default () => 
<div>
<Layout>
    <Head pageTitle="404"/>
   <h1>Page Not Found!</h1> 
   <Link to="/">Let's Go Back Home</Link>
</Layout>
</div>

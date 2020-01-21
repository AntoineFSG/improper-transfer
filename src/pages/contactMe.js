import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactMe = () => {
  
  return(
  <Layout>
    <Head pageTitle="Contact"/>
    <SEO title="Contact Ian McGillivray" />
    <h1>Contact <span>the Designer</span> Ian McGillivray</h1>
    <div className="formContainer">
    <form method="post" action="https://getform.io/f/3fd17b8c-d675-4171-a7cf-b0b4bb1e053a">
  <label for="email">
    Email
    <input  type="email" name="email" id="email" />
  </label>
  <label for="name">
    Name
    <input type="text" name="name" id="text"/>
  </label>
  <label for="message">
    Message
    <textarea rows="15" type="text" name="message" id="message"></textarea> 
  </label>
  <button type="submit">Send</button>
</form>
    </div>
  </Layout>
)}

export default ContactMe

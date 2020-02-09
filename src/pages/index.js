import React,{useState}from "react"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressCategory {
        edges {
          node {
            slug
            name
            id
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            featured_media {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 700) {
                          ...GatsbyImageSharpFluid_withWebp
                                }
                }
              }
            }
            categories{
              slug
              name
              id
            }
            id
            title
            slug
            excerpt
            date(formatString: "YYYYMMDD")
          }
        }
      }
    }
    `)

    const categories = data.allWordpressCategory.edges.map(edge=>edge.node).sort(function(a, b) {
      return a.name.localeCompare(b.name);
   });;//[0node: {id: ..., slug: "art-direction", name: "Art Direction"},1,2,3...]
    console.log(categories)
    const posts =data.allWordpressPost.edges
    //STATE
    const [active,setActive]=useState({
      slug: "uncategorized",
      name: "All",
      id: "ed21dc38-2f86-52bd-879f-400c7a15e7d6"});

    const filteredPosts=[];
    const getFilteredPosts=(posts,active)=>{
    posts.forEach(post=>{
      console.log(post.node.categories[0].slug)
      for(let i=0;i<post.node.categories.length;i++){
        if(post.node.categories[i].slug===active.slug){
          
          filteredPosts.push(post);
        }
      }
    });
    
    return filteredPosts
  }
    

      
  return(
  <Layout>
    <Head pageTitle="Home"/>
    <SEO title="Home of Improper design" />
    <h1 className="introH1">The <span>Design Work</span> of  Ian McGillivray</h1>
    <div className="catContainer">
    {categories.map(node => (
      <button id={node.id} onClick={()=>{setActive(node);
      console.log(active)}}>
        {node.name}
      </button>
    ))}
    </div>
    <PostList data={getFilteredPosts(posts,active)} activeCat={active}/>
  </Layout>
)}

export default IndexPage

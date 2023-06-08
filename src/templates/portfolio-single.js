import React from "react"
import get from 'lodash/get'
import {Link} from 'gatsby'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Jam from "../components/jam"
// import '../css/blog-post.css';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from '@contentful/rich-text-types'
import Hero from '../components/hero'
import Seo from '../components/seo'



      class BlogPostTemplate extends React.Component {
        render() {
          const post = get(this.props, 'data.contentfulPortfolio')
          const next = get(this.props, 'data.next')
          const previous = get(this.props, 'data.previous')
          const options = {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
              const { gatsbyImage, description } = node.data.target
              return (
                 <GatsbyImage
                    image={getImage(gatsbyImage)}
                    alt={description}
                 />
               )
              },
            },
          };
          return (
            <Jam location={this.props.location}>
            <Seo
          title={post.title}
        />
      
              <div className="w-[95%] mx-auto ">
              <Hero
           className
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description}
          
        />
                 <h1 className="text-2xl my">{post.title}</h1>
              
              <div className='text-lg "w-[95%] mx-auto'>
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
             
    
              </div>
              {(previous || next) && (
                 <div className='text-lg w-[95%] mx-auto'>
              <nav>
                <ul className="">
                  {previous && (
                    <li>
                      <Link to={`/portfolio-test/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/portfolio-test/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              </div>
            )}
            </Jam>
          )
        }
      }

   export default BlogPostTemplate



export const pageQuery = graphql`
  query PortfolioBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulPortfolio(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
        
      }
    }
    previous: contentfulPortfolio(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPortfolio(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
  `
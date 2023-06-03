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
          const post = get(this.props, 'data.contentfulPortolio')
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
           <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description}
          
        />
              <div className="container">
              <div className='text-2xl'>
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
              <h1>{post.title}</h1>
              
    
              </div>
              {(previous || next) && (
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
    contentfulPortolio(slug: { eq: $slug }) {
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
    previous: contentfulPortolio(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPortolio(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
  `
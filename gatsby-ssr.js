/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="adobe-fonts"
      src="https://use.typekit.net/alj3sly.js"
      type="text/javascript"
    />,
    <script
      key="adobe-fonts-load"
      dangerouslySetInnerHTML={{
        __html: `try{Typekit.load({ async: true });}catch(e){}`,
      }}
    />,
  ]);}
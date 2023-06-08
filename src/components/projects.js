import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        nodes {
          title
          slug
          data
          tags
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const projects = data.allContentfulPortolio.nodes;

  return projects.map((project, index) => {
    const imageData = project.image?.gatsbyImageData;
    const image = imageData ? (
      <GatsbyImage image={imageData} alt={project.title} style={{}} />
    ) : null;

    const postdate = project.data && typeof project.data === 'string' ? project.data : null;
    const year = postdate ? new Date(postdate).getFullYear() : null;

    const tags = project.tags || [];

    return (
      <div className="h-auto border  border-solid border-black max-w-full" style={{ textAlign: 'col' }} key={index}>
         <Link className="no-underline" 
          to={`/portfolio-test/${project.slug}/`}>{image}    </Link>
        <div className="py-4 px-4 border-black border-y flex justify-between">
          <Link className="no-underline" 
          to={`/portfolio-test/${project.slug}/`}>
            <h2 className="text-xl font-bold no-underline  font-semibold text-black font-acumin">
              {project.title}
            </h2>
          </Link>
          <span className="text-xl font-acumin leading-[40px]">{year && `${year}`}</span>
        </div>
        <div className="p-4 ">
          {tags.length > 0 &&
            tags.map((tag, tagIndex) => (
              <Link
                to={`/tags/${tag}`}
                key={tagIndex}
                className="text-black font-acumin no-underline"
              >{tag}
                 {tagIndex < tags.length - 1 && <span className="mx-2">+</span>}
              </Link>
            ))}
        </div>
      </div>
    );
  });
};

export default Projects;

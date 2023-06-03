import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortolio {
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
      <div className="h-auto border border-solid border-black max-w-full" style={{ textAlign: 'col' }} key={index}>
        {image}
        <div className="py-4 px-4 border-black border-y">
          <Link to={`/portfolio-test/${project.slug}/`}>
            <h2 className="text-2xl text-black font-acumin">
              {project.title}
            </h2>
          </Link>
          {year && `${year}`}
        </div>
        <div>
          {tags.length > 0 &&
            tags.map((tag, tagIndex) => (
              <Link
                to={`/tags/${tag}`}
                key={tagIndex}
                className="mr-2"
              >
                #{tag}
              </Link>
            ))}
        </div>
      </div>
    );
  });
};

export default Projects;

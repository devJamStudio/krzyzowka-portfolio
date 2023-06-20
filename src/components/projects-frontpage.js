import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

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
      allContentfulFrontPage {
        nodes {
          decoration {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const projects = data.allContentfulPortfolio.nodes;
  const decorationImages = data.allContentfulFrontPage.nodes.map(
    node => node.decoration.map(item => item.gatsbyImageData)
  ).flat();

  const generateDecorationElements = () => {
    const decorationElements = [];

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      const imageData = project.image?.gatsbyImageData;
      const image = imageData ? (
        <GatsbyImage image={imageData} alt={project.title} className="hover:scale-125 z-0 ease-in duration-100 " style={{}} />
      ) : null;

      const postdate = project.data && typeof project.data === 'string' ? project.data : null;
      const year = postdate ? new Date(postdate).getFullYear() : null;

      const tags = project.tags || [];

      decorationElements.push(
        <div className="h-auto border overflow-hidden border-solid border-black max-w-full" style={{ textAlign: 'col' }} key={`project-${i}`}>
          <Link className="no-underline" to={`/portfolio-test/${project.slug}/`}>{image}</Link>
          <div className="py-4 px-4 overflow-hidden relative bg-krzyzowka z-50 border-black border-y flex justify-between">
            <Link className="no-underline sm:min-h-[70px]" to={`/portfolio-test/${project.slug}/`}>
              <h2 className="text-md md:text-xl font-bold no-underline overflow-hidden font-semibold text-black font-acumin">
                {project.title}
              </h2>
            </Link>
            <span className="text-xl font-acumin">{year && `${year}`}</span>
          </div>
          <div className="p-4 overflow-hidden">
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

      if ((i + 1) % 11 === 0) {
        decorationElements.push(
          <div
            key={`decoration-${i + 1}`}
            className="decoration-element"
            style={{
              backgroundImage: `url(${decorationImages[(i + 1) % decorationImages.length].images.fallback.src})`
            }}
          ></div>
        );
      }

      if ((i + 1) % 12 === 0) {
        decorationElements.push(
          <div
            key={`decoration-${i + 1}`}
            className="decoration-element"
            style={{
              backgroundImage: `url(${decorationImages[(i + 1) % decorationImages.length].images.fallback.src})`
            }}
          ></div>,
          <div
            key={`decoration-${i + 2}`}
            className="decoration-element"
            style={{
              backgroundImage: `url(${decorationImages[(i + 2) % decorationImages.length].images.fallback.src})`
            }}
          ></div>
        );
      }
    }

    return decorationElements;
  };

  return (
    <>
      {generateDecorationElements()} {/* Inject decoration elements */}
    </>
  );
};

export default Projects;

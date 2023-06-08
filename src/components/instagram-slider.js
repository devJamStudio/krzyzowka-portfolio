import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';

SwiperCore.use([Navigation, Pagination]);

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 24) {
        edges {
          node {
            id
            caption
            permalink
            localImage {
              childImageSharp {
                gatsbyImageData(
                 
                  aspectRatio: 1 
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allInstagramContent.edges;

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }} // Set autoplay delay to 3000ms (3 seconds)
        loop={true} // Enable looping
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {posts.map((post) => {
          const { id, caption, permalink, localImage } = post.node;
          const imageData = localImage.childImageSharp.gatsbyImageData;
          const image = getImage(imageData);

          return (
            <SwiperSlide key={id} className="swiper-slide flex">
              <Link to={permalink} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-full">
                  <GatsbyImage
                    image={image}
                    alt={caption}
                    className="w-full h-full object-cover"
                    imgClassName="w-full h-full"
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Instagram;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

// Import required modules from Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.module.css';

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTestimonials {
        edges {
          node {
            id
            description {
              raw
            }
            clientsName
          }
        }
      }
    }
  `);

  const testimonials = data.allContentfulTestimonials.edges;

  return (
    <div className="testimonial-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Set autoplay delay to 5000ms (5 seconds)
      >
        {testimonials.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <div className="testimonial-slide py-8">
              <div className="w-full">
                {renderRichText(node.description)}
              </div>
              <h3 className="py-4">{node.clientsName}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

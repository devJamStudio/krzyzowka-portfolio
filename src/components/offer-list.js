import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

const OfferList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOffer {
        edges {
          node {
            tab1Header
            tab1List
            tab1Price
            tab2Header
            tab2List
            tab2Price
            tab3Header
            tab3List
            tab3Price
            description {
              description
            }
            name
            price
          }
        }
      }
    }
  `);

  const offers = data.allContentfulOffer.edges;

  const [expandedOffer, setExpandedOffer] = useState(null);

  const handleAccordionToggle = (index) => {
    if (expandedOffer === index) {
      setExpandedOffer(null);
    } else {
      setExpandedOffer(index);
    }
  };

  return (
    <div>
      {offers.map(({ node }, index) => (
        <div key={node.name} className="border rounded-lg mb-4">
          <div
            className="bg-gray-200 px-4 py-2 cursor-pointer"
            onClick={() => handleAccordionToggle(index)}
          >
            <div className="flex justify-between items-center">
              <span>{`${index + 1}. ${node.name} - ${node.price}`}</span>
              <span className="px-2 text-center border-black border rounded-2xl">
                {expandedOffer === index ? "-" : "+"}
              </span>
            </div>
          </div>
          {expandedOffer === index && (
            <div className="p-4">
              <p>{node.description?.description}</p>
              <div className="mt-4">
                {node.tab1Header && (
                  <div className="mb-4">
                    <h3 className="font-bold">{node.tab1Header}</h3>
                    <ul>
                      {node.tab1List?.map((item) => (
                        <li key={item} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          >
                            <path d="M2.22266 10H17.2227" />
                            <path d="M13.334 15C13.334 12.2386 15.5726 10 18.334 10" />
                            <path d="M13.334 5C13.334 7.76142 15.5726 10 18.334 10" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {node.tab1Price && <p>{node.tab1Price}</p>}
                  </div>
                )}
                {node.tab2Header && node.tab2List && (
                  <div className="mb-4">
                    <h3 className="font-bold">{node.tab2Header}</h3>
                    <ul>
                      {node.tab2List.map((item) => (
                        <li key={item} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          >
                            <path d="M2.22266 10H17.2227" />
                            <path d="M13.334 15C13.334 12.2386 15.5726 10 18.334 10" />
                            <path d="M13.334 5C13.334 7.76142 15.5726 10 18.334 10" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {node.tab2Price && <p>{node.tab2Price}</p>}
                  </div>
                )}
                {node.tab3Header && node.tab3List && (
                  <div>
                    <h3 className="font-bold">{node.tab3Header}</h3>
                    <ul>
                      {node.tab3List.map((item) => (
                        <li key={item} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          >
                            <path d="M2.22266 10H17.2227" />
                            <path d="M13.334 15C13.334 12.2386 15.5726 10 18.334 10" />
                            <path d="M13.334 5C13.334 7.76142 15.5726 10 18.334 10" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {node.tab3Price && <p>{node.tab3Price}</p>}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OfferList;

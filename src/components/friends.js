import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const FriendsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFriends {
        edges {
          node {
            name
            tags
            url
          }
        }
      }
    }
  `)

  const friends = data.allContentfulFriends.edges

  return (
    <div>
      {friends.map(({ node }) => (
        <div key={node.name} className="flex ">
          <div className="border border-black rounded-3xl items-center p-2 justify-center">
            <ul className="flex  items-center justify-center ">
              {node.tags.map((tag) => (
                <li key={tag} className="m-0 px-1">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <a href={node.url} className="text-black ">
          <div className="border border-black rounded-3xl items-center p-2 justify-center">
              {node.name}
          </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default FriendsList

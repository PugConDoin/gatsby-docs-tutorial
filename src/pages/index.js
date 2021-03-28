import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world</p>
      <img
        src="https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2ZW5nZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt=""
      />
    </div>
  )
}

import { GatsbySeo } from "gatsby-plugin-next-seo"
import PropTypes from "prop-types"
import React from "react"
import { useMetadata } from "../data/use-metadata"

const Layout = ({ children }) => {
  const { title, description, siteUrl, siteName, language } = useMetadata()
  return (
    <>
      <GatsbySeo
        title={title}
        description={description}
        canonical={siteUrl}
        language={language}
        openGraph={{
          url: siteUrl,
          title: title,
          description: description,
          images: [],
          site_name: siteName,
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "",
        }}
      />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

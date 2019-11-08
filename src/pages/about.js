import React from 'react'
import Layout from "../components/layout"
import get from 'lodash/get'
import Helmet from 'react-helmet'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
        </div>
      </Layout>
    )
  }
}

export default AboutIndex
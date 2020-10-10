/* eslint-disable import/prefer-default-export */

import React from 'react'
import Layout from './src/components/Layout'

function wrapPageElement ({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }

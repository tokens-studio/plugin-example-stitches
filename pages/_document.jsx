import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { styled } from '../stitches.config'
import { getCssText } from '../stitches.config'

const StyledHtml = styled(Html, {
  background: '$theme-bg-default',
  color: '$theme-fg-default',
})
export default class Document extends NextDocument {
  render() {
    return (
      <StyledHtml lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </StyledHtml>
    )
  }
}

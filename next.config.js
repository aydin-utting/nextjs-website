const images = require('remark-images')
const emoji = require('remark-emoji')
const frontmatter = require('remark-frontmatter')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji,frontmatter]
  }
})

// module.exports = withMDX()
 
/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
/* eslint-disable */
import { App } from "./index"

export const gqlBlogGql = `query Blog(\$id: Int!) {
  blog(id: \$id) {
    result {
      id
      content
      posts(id: 3) {
        id
        content
      }
      meta
    }
  }
}
`
export const gqlBlogsGql = `query Blogs(\$pagination: Pagination!) {
  blogs(pagination: \$pagination) {
    result {
      id
      content
      posts(id: 1) {
        id
        content
      }
      meta
    }
  }
}
`
export const gqlCreateBlogGql = `mutation CreateBlog(\$content: String!) {
  createBlog(content: \$content) {
    result {
      id
      content
      posts(id: 2) {
        id
        content
      }
      meta
    }
  }
}
`
// @ts-ignore
export function indexTemplateHtml(this: App) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
// @ts-ignore
export var indexTemplateHtmlStatic = [  ]
/* eslint-enable */
// tslint:enable

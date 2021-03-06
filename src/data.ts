export const blogs = [
  {
    id: 1,
    content: 'blog 1 content',
    meta: {
      foo: 'bar'
    } as any,
    posts: [11, 12, 13]
  },
  {
    id: 2,
    content: 'blog 2 content',
    meta: {
      bar: 123
    } as any,
    posts: [21, 22, 23]
  }
]

export const posts = [
  {
    id: 11,
    content: 'post 11 content',
    blogId: 1
  },
  {
    id: 12,
    content: 'post 12 content',
    blogId: 1
  },
  {
    id: 13,
    content: 'post 13 content',
    blogId: 1
  },
  {
    id: 21,
    content: 'post 21 content',
    blogId: 2
  },
  {
    id: 22,
    content: 'post 22 content',
    blogId: 2
  },
  {
    id: 23,
    content: 'post 23 content',
    blogId: 2
  }
]

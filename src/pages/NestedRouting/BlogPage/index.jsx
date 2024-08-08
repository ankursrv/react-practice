import React from 'react'

const BlogPage = () => {
  return (
    <>
      <main className="max-w-[1320px] mx-auto">
        <section className="my-10 text-center">
          <h1 className='text-2xl font-bold'>Blog Page</h1>
          <p>Blog Page Info</p>
        </section>
        <section>
          <figure className=' h-[480px]'>
            <img className='w-full h-full rounded-[32px] object-fill' src="/images/blog-img.png" alt="" />
          </figure>
        </section>
      </main>
    </>
  )
}

export default BlogPage

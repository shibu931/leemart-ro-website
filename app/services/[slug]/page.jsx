import Header from '@/components/shared/Header'
import React from 'react'

const page = ({ params }) => {
    const title = params.slug.toUpperCase().replaceAll('-', ' ')
  return (
    <>
        <Header title={title}/>
        <section>

        </section>
    </>
  )
}

export default page
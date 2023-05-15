import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import CONFIG_FUKA from '../config_fuka'
import TagItemMini from '@/themes/next/components/TagItemMini'

const BlogCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG_FUKA.POST_LIST_PREVIEW && post.blockMap
  // matery 主题默认强制显示图片
  if (post && !post.page_cover) {
    post.page_cover = siteInfo?.pageCover
  }
  const showPageCover = CONFIG_FUKA.POST_LIST_COVER && post?.page_cover

  return (<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true'
               className='w-full lg:max-w-sm p-2 h-full overflow-auto'>
      <section className='shadow mb-4 p-2 bg-white dark:bg-hexo-black-gray hover:shadow-lg duration-200'>
        <div className='flex flex-col-reverse justify-between duration-300'>
          <div className='p-2 flex flex-col w-full'>

            <Link
              href={`${BLOG.SUB_PATH}/${post.slug}`}
              passHref
              className={`break-words cursor-pointer font-semibold hover:underline text-xl ${showPreview ? 'justify-center' : 'justify-start'}
    leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400`}>
              {post.title}
            </Link>
            {(!showPreview || showSummary) && (
              <p className='mt-4 mb-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7 overflow-hidden'>
                {post.summary}
              </p>)}
            <div className='md:flex-nowrap flex-wrap md:justify-start inline-block'>
              <div>
                {post.tagItems.map(tag => (<TagItemMini key={tag.name} tag={tag} />))}
              </div>
            </div>
          </div>


          {showPageCover && (<Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
            <div className='h-40 w-full relative duration-200 cursor-pointer transform overflow-hidden'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post?.page_cover}
                alt={post.title}
                className='w-full hover:scale-125 transform duration-500'
              ></img>
              {/* <Image className='hover:scale-105 transform duration-500' src={post?.page_cover} alt={post.title} layout='fill' objectFit='cover' loading='lazy' /> */}
            </div>
          </Link>)}
        </div>
      </section>
    </div>

  )
}

export default BlogCard
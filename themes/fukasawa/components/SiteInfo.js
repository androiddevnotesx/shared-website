import BLOG from '@/blog.config'

function SiteInfo({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (<footer
    className='relative leading-6 justify-start w-full text-gray-400 text-xs font-sans'
  >
            <span> © {`${copyrightDate}`} <span> <a href={BLOG.LINK} className='text-gray-500 dark:text-gray-300 '> <i
              className='mx-1 animate-pulse fas fa-heart' /> {BLOG.AUTHOR}</a>. <br /></span>

              <span className='hidden busuanzi_container_site_pv'> <i className='fas fa-eye' /><span
                className='px-1 busuanzi_value_site_pv'> </span>  </span>
            <span className='pl-2 hidden busuanzi_container_site_uv'> <i className='fas fa-users' /> <span
              className='px-1 busuanzi_value_site_uv'> </span> </span>
              <br />
              <span className='text-xs font-sans  text-gray-500 dark:text-gray-300 '><a
                href={BLOG.PRIVACY_POLICY_URL} className='underline '>Privacy Policy</a></span>
              <br />
                      <span className='text-xs font-sans  text-gray-500 dark:text-gray-300 '>Contributed by  <a
                        href='https://github.com/androiddevnotes' className='underline '>{BLOG.AUTHOR}</a>.</span>
             </span>
  </footer>)
}

export default SiteInfo

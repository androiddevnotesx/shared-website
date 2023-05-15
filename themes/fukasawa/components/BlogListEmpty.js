
/**
 * 空白博客 列表
 * @returns {JSX.Element}
 * @constructor
 */
const BlogListEmpty = ({ currentSearch }) => {
  return <div className='flex items-center justify-center min-h-screen mx-auto md:-mt-20'>
        <p className='text-gray-500 dark:text-gray-300'>Nothing yet here! Want to contribute: Just message @androiddevnotes on Twitter! {(currentSearch && <div>{currentSearch}</div>)}</p>
  </div>
}
export default BlogListEmpty

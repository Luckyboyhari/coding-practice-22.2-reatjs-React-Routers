// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props

  return (
    <ul className="list">
      {details.map(eachItem => (
        <BlogItem key={eachItem.id} userDetails={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList

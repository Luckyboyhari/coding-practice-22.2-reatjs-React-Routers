// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetails} = props
  const {id, title, description, publishedDate} = userDetails

  return (
    <li key={id} className="list-con">
      <div className="bg-con">
        <h1 className="head">{title}</h1>
        <p className="par">{publishedDate}</p>
      </div>

      <p className="para">{description}</p>

      <hr className="hr" />
    </li>
  )
}
export default BlogItem

import React from 'react'
import { Link } from 'gatsby'
import {Card,CardTitle,CardText,CardSubtitle,CardBody} from 'reactstrap'
import path from '../../.cache/normalize-page-path'



const Post = ({title,author,post,date,body}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle><Link to={path}>{title}</Link></CardTitle>
          <CardSubtitle>
            <span className="text-info">{date}</span> by{' '}
            <span className="text-info">{author}</span>
          </CardSubtitle>
          <CardText>{body}</CardText>
          <Link to={path} className="btn btn-outline-primary float-right">Read more</Link>
      </CardBody>
    </Card>
  )
}

export default Post

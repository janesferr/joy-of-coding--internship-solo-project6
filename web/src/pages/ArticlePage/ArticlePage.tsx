import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

interface Props {
  id: number
}

const ArticlePage = ({id}: Props) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <ArticlesCell id={id} />
      
    </>
  )
}

export default ArticlePage

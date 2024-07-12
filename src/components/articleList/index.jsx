import data from '../../../article.json';
import { Article } from '../article';

export const ArticleList = () => {

  return <div className='mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[80vw]'>
    {
      data.map((props,index)=>{
return<Article key={index} {...props}/>

      })
    }
  </div>
}
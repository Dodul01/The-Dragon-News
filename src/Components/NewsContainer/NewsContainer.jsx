import NewsCard from '../NewsCard/NewsCard';

const NewsContainer = ({ data }) => {
  return (
    <div className="flex-1 p-2">
      <h1 className='text-xl font-bold'>All News</h1>
      {data.map((news)=> <NewsCard key={news._id} news={news}></NewsCard>)}
    </div>
  )
}

export default NewsContainer
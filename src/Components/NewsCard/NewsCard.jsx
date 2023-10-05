import { BsBookmark, BsShare } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, total_view } = news;
  let sortDesc = '';

  if (details.length > 200) {
    sortDesc = details.slice(0, 400) + '...'
  }

  return (
    <div className="border rounded-lg my-4">
      <div className="bg-gray-200 mb-3 flex items-center justify-between p-4">
        <div className='flex gap-2'>
          <div className="btn-circle avatar">
            <div className="w-full rounded-full">
              <img src={author.img} />
            </div>
          </div>
          <div>
            <h4 className="font-bold">{author.name}</h4>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <BsShare className='text-xl cursor-pointer'></BsShare>
          <BsBookmark className='text-xl cursor-pointer'></BsBookmark>
        </div>
      </div>

      <div>
        <h1 className='text-xl font-bold px-2 mb-2'>{title}</h1>
        <img className='w-full' src={image_url} alt="" />
        <p className='p-2 text-gray-400'>{sortDesc}</p>
        <Link to={`/newsDetails/${news._id}`} className='text-orange-400 p-2'>Read More...</Link>
        <div className='flex items-center justify-between p-4'>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
          </div>
          <p className='flex items-center cursor-pointer text-gray-400'>
            <AiFillEye className='text-2xl cursor-pointer text-gray-400'></AiFillEye>
            {total_view} 
          </p>
        </div>
      </div>

    </div>
  )
}

export default NewsCard 
import { useLoaderData, useParams } from 'react-router-dom'
import { BsShare, BsBookmark } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai';
import LeftNav from '../../Components/LeftNav/LeftNav';
import Nav from '../../Components/Nav/Nav';
import Head from '../../Components/Head/Head';

const NewsDetails = () => {
  const data = useLoaderData()
  const params = useParams();
  const currentNews = data.find(item => item._id == params.id);
  const { title, author, image_url, details, total_view } = currentNews;

  return (
    <div>
      <Head></Head>
      <Nav></Nav>
      <div className='flex'>
        <div className='mx-4'>
          <div>
            <img className='w-full' src={image_url} alt="" />
            <h1 className='text-2xl font-bold px-2 mt-3 mb-2'>{title}</h1>
            <p className='p-2 text-gray-400'>{details}</p>
            <button className='btn p-0 px-4 my-2 mb-6 m-0 bg-black text-white hover:bg-slate-800'>All The News In This Categories</button>
          </div>
        </div>

        <div>
          <LeftNav></LeftNav>
        </div>
      </div>

    </div>
  )
}

export default NewsDetails

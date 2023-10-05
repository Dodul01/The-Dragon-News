import { useLoaderData } from "react-router-dom"
import Head from "../../Components/Head/Head"
import LeftNav from "../../Components/LeftNav/LeftNav"
import Nav from "../../Components/Nav/Nav"
import NewsContainer from "../../Components/NewsContainer/NewsContainer"
import RightNav from "../../Components/RightNav/RightNav"
import Marquee from "../../Components/Marquee/Marquee"

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Head></Head>
      <Marquee news={'Dragon News Reports Record-Breaking Readership Numbers as Global Audiences Flock to Stay Informed.'}></Marquee>
      <Nav></Nav>
      <div className="flex lg:flex-row flex-col gap-2 m-4">
        <RightNav></RightNav>
        <NewsContainer data={data}></NewsContainer>
        <LeftNav></LeftNav>
      </div>
    </div>
  )
}

export default Home

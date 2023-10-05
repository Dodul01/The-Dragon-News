import Head from "../../Components/Head/Head"
import Nav from "../../Components/Nav/Nav"

const About = () => {
  return (
    <div>
      <Head></Head>
      <Nav></Nav>
      <section className="about-section py-12 mt-2">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Dragon News</h2>
            <p className="text-gray-600 leading-relaxed">
              Dragon News is your trusted source for the latest news, updates, and insights from around the world.
              Our dedicated team of journalists and reporters work tirelessly to bring you accurate and up-to-date
              information on a wide range of topics, including politics, business, technology, entertainment, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We believe in the power of journalism to inform, educate, and inspire. Our mission is to deliver
              high-quality news content that empowers our readers and helps them stay informed about the events
              that matter most.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

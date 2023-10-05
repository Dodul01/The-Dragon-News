import Head from "../../Components/Head/Head"
import Nav from "../../Components/Nav/Nav"

const Career = () => {
  return (
    <div>
      <Head></Head>
      <Nav></Nav>
      <section className="career-section bg-white py-12 mt-2">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Join Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              At Dragon News, we're always looking for talented and passionate individuals to join our team.
              If you're a journalist, writer, photographer, or someone who is passionate about news and storytelling,
              we'd love to hear from you.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We offer exciting career opportunities where you can contribute to meaningful journalism and make an impact.
              Explore our current job openings and start your journey with Dragon News today.
            </p>
            <a
              href="/career"
              className="mt-6 inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              View Job Openings
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career

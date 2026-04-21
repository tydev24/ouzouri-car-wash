import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoPresentation } from "@/components/video-presentation"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <VideoPresentation />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

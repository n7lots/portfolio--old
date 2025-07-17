import VerticalSlider from "../Slider/VerticalSlider";
import Portfolio from '/Portfolio-website.png'
import BlueProtocol from '/Blue-protocol.png'
import GTA from '/GTA_V.png'

const slidesData = [
    {
      title: 'Portfolio Website',
      description: "Actually, this is what you see in front of you now. I built this website using React + Vite. Didn't use any additional libraries.",
      image: Portfolio
    },
    {
      title: 'Copy of Blue Protocol',
      description: 'I tried to make a copy of the Blue Protocol site, using only HTML and CSS (The design is not responsive)',
      image: BlueProtocol
    },
    {
      title: 'GTA V site in progress',
      description: "I'm creating a website for the GTA V game using Next.js (a new technology for me).",
      image: GTA
    }
  ];

export default function ExperienceSection() {
  return (
    <section className="experience">
      <div className="experience-content">
        <VerticalSlider slides={slidesData} />
      </div>
    </section>
  );
}

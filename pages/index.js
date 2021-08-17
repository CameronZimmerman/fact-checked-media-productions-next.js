import style from '../styles/Home.module.css';

import CaptionedImage from '../components/CaptionedImage';
import Testimonial from '../components/CircularImageText';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <section className={style.upperHome}>
        <section className={style.upperHomeLeft}>
          <h2 className="headers">Building platforms and community</h2>
          <div className={style.homeImages}>
            <CaptionedImage
              heading="Lions Of Liberty"
              image="/assets/LionsOfLiberty.png" 
              text="Marc Clair, Brian McWillams, and John Odermatt provide 3 unique shows exploring liberty in one podcast feed."
              link="https://www.lionsofliberty.com/"
              />
              <CaptionedImage
              heading="I am Andy's mom"
              image="/assets/AndysMom.png" 
              text="Andy's Mom is a podcast aimed to openly discuss and honestly approach the topic of grief in our society."
              link="https://andysmom.com/"
              />
              <CaptionedImage
              heading="The Paradocs"
              image="/assets/theparadocs.png" 
              text="Join Dr. Eric Larson for a fun, informative, and lighthearted podcast helping us learn more about the practice of medicine."
              link="https://theparadocs.com/"
              />
              <CaptionedImage
              heading="Counter Flow with Buck Johnson"
              image="/assets/counterflow_cover_art.jpg" 
              text="Buck Johnson features discussions with individuals outside of mainstream left/right binary politics, adressing philosophy, lifestyle and freedom."
              link="https://deathtotyrants.libsyn.com/"
            />
          </div>
        </section>
        <section className={style.upperHomeRight}>
          <div className={style.homeMainText}>
            <h3 className="headers">What we do</h3>
            <p>
              Fact Checked Media Productions is an all purpose podcasting service for those who wish to spread their voice and message. We create a personal connection with each of our clients, skipping the bureaucracy. Together we will build your podcasts platform and audience, ensuring that your message is heard. Pricing is negotiable at a per show or per month basis.
            </p>
          </div>
        </section>
      </section>
      <section className={style.lowerHome}>
        <h2 className="headers">Testimonials</h2>
        <div className={style.testimonials}>
          <Testimonial image="/assets/breakthecycle.jpg" text={'Joshua Smith of Break the Cycle: "Justin has taken my internet show from a cool to watch long form show to something that can be more digestible to people on the run, by creating short form samples that get people interested. He has a been a key to my growing success and I couldn\'t do the show without him. Let this man help you. He does amazing work"'} />
          <Testimonial image="/assets/peddlingFiction.png" text={'Johnny Profita of Peddling Fiction: "My podcast wouldn\'t be what it is today without Justin\'s dedication and hard work. He\'s a modern-day renaissance man; handling everything from audio/video editing and social media promotion to fan page management and guest bookings so I can focus on creating content. He jumps at every opportunity to help with all the challenges that come with podcasting. He\'s the best thing to happen to a technologically illiterate such as myself."'} />
          <Testimonial image="/assets/LionsOfLiberty.png" text={'Brian McWilliams of Lions of Liberty Podcast: "We\'ve been working with Justin for a while now and it’s been a fantastic experience that\'s been turnkey, taking the onus of social media content creation off our busy plates. Justin really gets to know the audience, and his content and clip selection matches what our fans want to hear. It\'s giving us a great opportunity to grow the fan base and maximize on what we’re putting out."'} />
          <Testimonial image="/assets/LosLibertinos.jpg" text={'Carlos Abelar of Los Libertinos: "Professionalism and attention to detail comes standard with Justin\'s output but what I find most important and key is that the working relationship is honest and constructive. He makes you feel like he\'s a partner in helping execute your goals. I highly recommend him for your team.”'} />
        </div>
      </section>
    </div>
  );
};

export default Home;

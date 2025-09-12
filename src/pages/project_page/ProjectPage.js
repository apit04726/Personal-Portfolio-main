import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";

// Import all your project images
import kasturi from "../../images/kasturi_jpg.jpeg";
import nikkoo from "../../images/nikko-home22.jpeg";
import nikko from "../../images/nikko-garden.jpeg";
import jkCapinvest from "../../images/jk-.jpeg";
import mrFish from "../../images/mr-fish.jpg";
import ammPro from "../../images/Amm-pro.jpg";
import barca from "../../images/Barca-city.jpeg";
import leadozz from "../../images/leddog.jpeg";
import dalida from "../../images/daida-music.jpeg";
import asmahan from "../../images/asmahan.jpeg";
import airbnb from "../../images/Air-bd.jpeg";
import propty from "../../images/property.jpeg";
import rvEstore from "../../images/rv-estore.jpeg";
import goodee from "../../images/Goodi-react.jpeg";
import kith from "../../images/kith-pic.jpeg";
import allbirds from "../../images/all-bird.jpeg";
import cowboy from "../../images/cow-boy.jpeg";
import loveHealthy from "../../images/love-helghy.jpeg";
import nikooPhase5 from "../../images/nikko-pahse-111.jpeg";
import perfectHomz from "../../images/perfect-home.jpeg";
import miraLotha from "../../images/mira-lotha-55.jpeg";
import mirebal from "../../images/mirebal-ii.jpeg";
import tata1 from "../../images/tata-111.jpeg";
import tata3 from "../../images/tataiii.jpeg";
import birla3 from "../../images/birlaiii.jpeg";
import birla1 from "../../images/birlaa112.jpeg";
import dwarkesh from "../../images/dwarkesh-jai-jpeg.jpeg";
import shivPetroleum from "../../images/shive-pp.jpeg";
import eventHub from "../../images/eventppp.jpeg";
import lendingusa from "../../images/leaninng-1.jpg";

// Portfolio projects data
const portfolioProjects = [
  {
    image: lendingusa,
    title: 'LendingUSA',
    description: 'Custom WordPress theme for business website',
    category: 'WordPress & PHP ACF',
    client: 'Business Client',
    date: '01 March, 2015',
    url: 'https://lendingusa.com/',
    details: 'LendingUSA is a fintech platform that provides point-of-sale financing for merchants and personal loans for borrowers, helping over 10,000 businesses and 150,000 customers with fast, flexible funding solutions.'
  },
  {
    image: jkCapinvest,
    title: 'Jk Capinvest',
    description: 'Advanced WordPress plugin for SEO',
    category: 'Advanced Wordpress & Elementor Build',
    client: 'SEO Agency',
    date: '20 August, 2024',
    url: 'https://jkcapinvest.com/',
    details: 'JK CapInvest is a boutique, independent London-based real estate search agency with over 23 years of experience. It offers tailored residential and commercial acquisition, lettings, management, and after-sale services in prime Central London neighborhoods. and analytics for WordPress sites.'
  },
  {
    image: mrFish,
    title: 'Mr Fish Uk',
    description: 'Advanced WordPress plugin for SEO',
    category: 'Advanced Wordpress & Elementor Build',
    client: 'SEO Agency',
    date: '15 April, 2023',
    url: 'https://www.mrfish.uk.com/',
    details: 'Mr Fish — A beloved traditional fish & chips eatery located at 51 Salusbury Rd, London NW6 6NJ, serving up a mix of classic and modern British fare for over 30 years'
  },
  {
    image: ammPro,
    title: 'Amm Pro',
    description: 'Advanced WordPress plugin for SEO',
    category: 'Advanced Wordpress & Elementor Build',
    client: 'SEO Agency',
    date: '15 March, 2025',
    url: 'https://amm-pro.com/',
    details: 'AMM-PRO (AM Management & Productions) is a London-founded event production company, established in 2003 by Ali Matar. With over 20 years of expertise, AMM-PRO delivers custom-tailored show production and event management—spanning from intimate gatherings to large-scale international productions. Their portfolio includes prestigious venues like the Royal Albert Hall and London Coliseum, and showcases such as "Broken Wings" and "RUMI – THE MUSICAL.'
  },
  {
    image: kasturi,
    title: 'Kasturi Sphere 360 Media Partner',
    description: 'Advanced WordPress plugin for SEO',
    category: 'Advanced Wordpress & Elementor Woocommerce',
    client: 'Woocommerce, Ecommerce Client',
    date: '15 January, 2025',
    url: 'https://dev.digitize-info.com/wordpress/kasturi-sphere-360-media-partner/',
    details: 'WooCommerce-based eCommerce platform built on WordPress—scalable, SEO-friendly, and highly customizable for seamless product, payment, and order management.'
  },
  {
    image: nikko,
    title: 'Bhartiya City Nikoo Garden Estate Sadahalli Bangalore',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'Advanced Wordpress & Php ',
    client: 'Real Estate and Woocommerce Client',
    date: '15 February , 2025',
    url: 'https://bhartiyacitynikoosadahalli.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.'
  },
  {
    image: nikkoo,
    title: 'Nikoo Homes 6 Phase 2 Sadahalli Bangalore',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'Advanced Wordpress & Php ',
    client: 'Real Estate and Woocommerce Client',
    date: '20 February, 2024',
    url: 'https://nikoohomes6.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.'
  },
  {
    image: barca,
    title: 'Barca At Godrej MSR City Bangalore',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'Advanced Wordpress & Php ',
    client: 'Real Estate and Woocommerce Client',
    date: '20 Marce, 2025',
    url: 'https://barca-msrcity-shettigere.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.'
  },
  {
    image: leadozz,
    title: 'Leadozz',
    description: 'Advanced WordPress plugin for SEO and Php, HTML5',
    category: 'Advanced Wordpress & Php ',
    client: 'Real Estate and Woocommerce Client and Digital Marketing',
    date: '25 Marce, 2025',
    url: 'https://leadozz.com/',
    details: 'Leadozz is a seasoned B2B lead generation agency offering customized, tech-savvy campaigns aimed at delivering measurable ROI. With over a decade in the field, they position themselves as growth partners for businesses seeking high-quality leads, underpinned by data-driven methods and a client-centric approach.'
  },
  {
    image: dalida,
    title: 'Dalida Musical Tribute',
    description: 'Advanced WordPress plugin for SEO and Php, HTML5',
    category: 'Advanced Wordpress & Php, HTML5',
    client: 'Singing and Music Client',
    date: '25 Fabruary, 2025',
    url: 'https://dalidamusicaltribute.com/',
    details: 'A vibrant stage tribute that revives Dalida\'s timeless songs with live performance, choreography, and visuals—bringing her legacy back to life for global audiences.'
  },
  {
    image: asmahan,
    title: 'Asmahan Show',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'Advanced Wordpress & Php',
    client: 'Singing and Music Client',
    date: '25 Fabruary, 2025',
    url: 'https://asmahan.show/',
    details: 'Asmahan: A New Musical Play is a heartfelt, bilingual stage tribute to a legendary singer, blending biography, music, and visual storytelling to revive her legacy—though it shines especially during its concert act.'
  },
  {
    image: airbnb,
    title: 'Air Bnb',
    description: 'Application for e-commerce Payment Gateway',
    category: 'React.js Payment Gateway',
    client: 'E-Shop',
    date: '10 June, 2024',
    url: 'https://www.airbnb.co.in/',
    details: 'Airbnb is a global online marketplace for short- and long-term lodging, experiences, and services. It was founded in 2008 in San Francisco and is now a publicly traded company on Nasdaq. It connects millions of hosts offering unique accommodations (from cottages to city apartments) and local experiences (like tours or workshops) — all backed by safety tools like verified IDs secure messaging, and 24/7 support through AirCover.'
  },
  {
    image: propty,
    title: 'Propty Co',
    description: 'Application for e-commerce Payment Gateway',
    category: 'React.js Payment Gateway',
    client: 'E-Shop Propty Hunters',
    date: '10 Marce, 2025',
    url: 'https://www.propty.co/',
    details: 'PropTy aims to redefine property discovery in Dubai (where it\'s positioned as the first platform of its kind) by combining Augmented Reality with Artificial Intelligence. It not only simplifies finding the right property but also enriches the experience by integrating local lifestyle elements.'
  },
  {
    image: rvEstore,
    title: 'RV Estore',
    description: 'Application for e-commerce Payment Gateway',
    category: 'React.js Payment Gateway',
    client: 'E-Shop Propty Hunters',
    date: '28 Marce, 2025',
    url: 'https://www.rv.estore.in/',
    details: 'There is mention of something called "The RV Store" on Instagram, which hints at categories like Beauty & Personal Care, Health & Wellness, and Pet Care Products, though details are sparse, and it may not be directly linked to the URL you provided. A listing for RV Online Store shows a simple contact form, store hours (8 am – 9 pm), and a legal name of "RV Online Store," but doesn\'t offer much more in terms of product information or an overview.'
  },
  {
    image: goodee,
    title: 'Goodee World',
    description: 'Application for e-commerce Payment Gateway',
    category: 'React.js Payment Gateway',
    client: 'E-Shop Woocommerce',
    date: '28 April, 2025',
    url: 'https://www.goodeeworld.com/',
    details: 'Goodee—also known as Goodee World—is a curated online marketplace rooted in the ethos of "good design, good people, and good purpose." It showcases thoughtfully selected home goods and decor items that are not only aesthetically appealing but also socially and environmentally conscientious. Every product is vetted by Goodee\'s in-house sustainability team for its design integrity and meaningful impact.'
  },
  {
    image: kith,
    title: 'Kith',
    description: 'Custom Shopify theme for online store',
    category: 'Shopify',
    client: 'Online Retailer',
    date: '05 August, 2024',
    url: 'https://kith.com/',
    details: 'Global footprint: Operates around 17 standalone boutiques worldwide and several shop-in-shops in premier department stores like Selfridges and Hirshleifers. Kith Treats: A signature in-store experience—a nostalgic cereal and ice-cream bar born out of Fieg\'s childhood love for cereal. It began in 2015 and features rotating menu creations by talents like Victor Cruz, Action Bronson, Virgil Abloh, Daniel Arsham, and Futura.'
  },
  {
    image: allbirds,
    title: 'All Birds',
    description: 'Custom Shopify theme for online store',
    category: 'Shopify Advance Plugin Integration',
    client: 'Online Retailer',
    date: '05 Marce, 2025',
    url: 'https://www.allbirds.com/',
    details: 'Allbirds is an American footwear and apparel company founded in 2015 by Tim Brown and Joey Zwillinger, and headquartered in San Francisco. It began with the Wool Runner sneaker and has grown into a global brand recognized for its minimalist design and sustainable ethos.'
  },
  {
    image: cowboy,
    title: 'Cowboy',
    description: 'Custom Shopify theme for online store',
    category: 'Shopify Advance Plugin Integration',
    client: 'Online Retailer',
    date: '14 Marce, 2025',
    url: 'https://cowboy.com/',
    details: 'Cowboy is a designer and manufacturer of connected electric bikes (e-bikes) a smart and seamless mobility experience. The bikes are designed in Belgium and assembled in France Founded in 2017 in Brussels by Adrien Roose, Karim Slaoui, and Tanguy Goretti, Cowboy list The Guardian Cowboy Cowboy now serves customers across 2,500+ cities'
  },
  {
    image: loveHealthy,
    title: 'Love Healthy',
    description: 'Branding website with custom CMS',
    category: 'Core PHP',
    client: 'Brand Studio',
    date: '20 September, 2024',
    url: 'https://dev.digitize-info.com/php_projects/love-healthy/',
    details: 'Love Healthy Project A custom Content Management System (CMS) and branding website developed using PHP and MySQL. The platform is designed to provide dynamic content management, user-friendly administration, and strong branding features, enabling efficient website updates and a seamless digital presence.'
  },
  {
    image: nikooPhase5,
    title: 'Nikoo Homes 5 Phase II',
    description: 'Branding website with custom CMS',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '20 Marce, 2025',
    url: 'https://nikoohome5.in/',
    details: 'Backend: PHP on an nginx server Frontend: A hybrid architecture that uses React for dynamic features like instant search and filters, providing a fast, app-like user experience. Infrastructure A CDN and caching for optimized performance and fast global content delivery. Core Function: A standard LEMP stack (Linux, nginx, MySQL, PHP) tailored for a scalable online store.'
  },
  {
    image: perfectHomz,
    title: 'Perfect Homz',
    description: 'Branding website with custom CMS',
    category: 'Core PHP, Wordpress',
    client: 'Real Estate - Bangalore',
    date: '10 Marce, 2025',
    url: 'https://perfecthomz.com/',
    details: 'Core Platform: The site is a WordPress application, using the Astra theme as its foundation. The backend is powered by PHP, with data stored in a MySQL/MariaDB database. E-commerce Engine: It utilizes WooCommerce to manage its product catalog, shopping cart, and checkout processes, identifying it as a standard WordPress-based e-commerce site. Frontend & Interactivity. '
  },
  {
    image: miraLotha,
    title: 'Lodha Mirabelle Phase - IV',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '10 Marce, 2025',
    url: 'https://www.mirabelleproject.com/lodha-group/lodha-mirabelle-bangalore/',
    details: 'This marketing website is engineered on a custom technology stack, utilizing Core PHP for its server-side logic without reliance on a mainstream framework. The frontend is crafted with standard HTML5, CSS3, and Vanilla JavaScript—supplemented with jQuery—to deliver a premium brand experience cha providing tailored control for real estate branding needs. Hosted on an Apache web server, the site s defining technical.'
  },
  {
    image: mirebal,
    title: 'Lodha Mirabelle Phase - I',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://mirabelle-manyata-bangalore.com/',
    details: 'This marketing website is engineered on a custom technology stack, utilizing Core PHP for its server-side logic without reliance on a mainstream framework. The frontend is crafted with standard HTML5, CSS3, and Vanilla JavaScript—supplemented with jQuery—to deliver a premium brand experience characterized by dynamic animations and a video-heavy presentation.'
  },
  {
    image: tata1,
    title: 'TATA Carnatica Phase - I',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://tatacarnaticabangalore.in/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic. This indicates a custom-developed backend architecture, deliberately constructed without the overhead of a standard framework like Laravel or Symfony. The content is managed through a proprietary CMS, a bespoke system also built with core PHP and MySQL'
  },
  {
    image: tata3,
    title: 'TATA Carnatica Phase - III',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://www.thecarnatica.net.in/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic. This indicates a custom-developed backend architecture, deliberately constructed without the overhead of a standard framework like Laravel or Symfony. The content is managed through a proprietary CMS, a bespoke system also built with core PHP and MySQL'
  },
  {
    image: birla3,
    title: 'Birla Estates Trimaya Phase 3',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '28 Marce, 2025',
    url: 'https://birlahomes.in/trimaya/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic. This indicates a custom-developed backend architecture, deliberately constructed without the overhead of a standard framework like Laravel or Symfony. The content is managed through a proprietary CMS, a bespoke system also built with core PHP and MySQL'
  },
  {
    image: birla1,
    title: 'Birla Estates Trimaya Phase 1',
    description: 'Branding website with custom CMS Html5',
    category: 'Core PHP',
    client: 'Real Estate - Bangalore',
    date: '29 Marce, 2025',
    url: 'https://birlatrimaya-devanahalli.com/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic. This indicates a custom-developed backend architecture, deliberately constructed without the overhead of a standard framework like Laravel or Symfony. The content is managed through a proprietary CMS, a bespoke system also built with core PHP and MySQL'
  },
  {
    image: dwarkesh,
    title: 'Shree Dwarkesh Enterprise',
    description: 'Book management system and Expanse Management with Laravel',
    category: 'Laravel',
    client: 'Finance Management',
    date: '12 December, 2024',
    url: 'https://dwarkeshenterprise.com/sde-admin/dashboard',
    details: 'Created a scalable Expanse Management and book management system using Laravel and Vue.js.'
  },
  {
    image: shivPetroleum,
    title: 'Shiv Petroleum ',
    description: 'Book management system and Expanse Management with Laravel',
    category: 'Laravel',
    client: 'Finance Management and Petrol Pump',
    date: '12 December, 2024',
    url: 'https://',
    details: 'Created a scalable Expanse Management and book management system and payment gateway and Api integration using Laravel and Vue.js.'
  },
  {
    image: eventHub,
    title: ' EventHub',
    description: 'Book management system and Expanse Management with Laravel',
    category: 'Laravel Payment Gateway',
    client: 'Finance Management and Petrol Pump',
    date: '12 Marce, 2025',
    url: 'https://versapublish.com/',
    details: 'The Event Management System is a web and mobile-based application developed to simplify the process of planning, organizing, and executing events such as conferences, weddings, exhibitions'
  }
];

export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        {portfolioProjects.map((project, index) => (
                          <Col md={3} className="col-sm-12 col-md-4" key={index}>
                            <Fade bottom>
                              <div
                                className="singleProject"
                                style={{
                                  backgroundColor: "rgb(142 70 186 / 31%)",
                                  border: "1px solid",
                                }}
                              >
                                <div className="projectContent">
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    {project.title}
                                  </h5>
                                  <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                                    {project.category}
                                  </h6>
                                  <img src={project.image} alt={project.title} />
                                  <div className="project--showcaseBtn">
                                    <a
                                      href={project.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={"iconBtn"}
                                      aria-labelledby={`code-${index}`}
                                    >
                                      <FaCode
                                        id={`code-${index}`}
                                        className={"icon"}
                                        aria-label="Code"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <h6>
                                  <p
                                    className="project--desc"
                                    style={{
                                      background: "#fbd9ad",
                                      color: "#b061df",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {project.details}
                                  </p>
                                </h6>
                                <div
                                  className="project--lang"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  {project.category}
                                </div>
                              </div>
                            </Fade>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
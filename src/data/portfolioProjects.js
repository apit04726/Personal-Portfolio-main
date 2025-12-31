// Centralized portfolio projects data with slugs and brief metadata
import lendingusa from "../images/leaninng-1.jpg";
import seyt from "../images/se-yt.png";
import jkCapinvest from "../images/jk-.jpeg";
import mrFish from "../images/mr-fish.jpg";
import ammPro from "../images/Amm-pro.jpg";
import kasturi from "../images/kasturi_jpg.jpeg";
import nikko from "../images/nikko-garden.jpeg";
import nikkoo from "../images/nikko-home22.jpeg";
import barca from "../images/Barca-city.jpeg";
import leadozz from "../images/leddog.jpeg";
import dalida from "../images/daida-music.jpeg";
import asmahan from "../images/asmahan.jpeg";
import airbnb from "../images/Air-bd.jpeg";
import propty from "../images/property.jpeg";
import rvEstore from "../images/rv-estore.jpeg";
import goodee from "../images/Goodi-react.jpeg";
import myportfolio from "../images/my-portfolio.jpeg";
import newshub from "../images/news-apk.jpeg";
import kith from "../images/kith-pic.jpeg";
import allbirds from "../images/all-bird.jpeg";
import cowboy from "../images/cow-boy.jpeg";
import loveHealthy from "../images/love-helghy.jpeg";
import nikooPhase5 from "../images/nikko-pahse-111.jpeg";
import perfectHomz from "../images/perfect-home.jpeg";
import miraLotha from "../images/mira-lotha-55.jpeg";
import mirebal from "../images/mirebal-ii.jpeg";
import tata1 from "../images/tata-111.jpeg";
import tata3 from "../images/tataiii.jpeg";
import birla3 from "../images/birlaiii.jpeg";
import birla1 from "../images/birlaa112.jpeg";
import dwarkesh from "../images/dwarkesh-jai-jpeg.jpeg";
import shivPetroleum from "../images/shive-pp.jpeg";
import eventHub from "../images/eventppp.jpeg";
import bustraking from "../images/bus-traking.jpeg";
import aiBlogAutomation from "../images/aiBlogAutomation.jpeg";
import wordpressFbMov from "../images/n8n-videos/wordprees+fb.mov"; // local video for Automated Blog Posting System

const projects = [
  {
    slug: 'lendingusa',
    image: lendingusa,
    title: 'LendingUSA',
    description: 'Custom WordPress theme for business website',
    category: 'wordpress &php',
    client: 'Business Client',
    date: '01 March, 2015',
    url: 'https://lendingusa.com/',
    details: 'LendingUSA is a fintech platform that provides point-of-sale financing for merchants and personal loans for borrowers, helping over 10,000 businesses and 150,000 customers with fast, flexible funding solutions.',
    features: ['Responsive marketing site', 'Custom ACF-driven content', 'SEO-friendly templates', 'Fast deployment'],
    technologies: ['WordPress', 'PHP', 'ACF', 'MySQL'],
    packages: ['elementor (optional)', 'WP-CLI (dev)', 'Yoast/SEO plugins']
  },

  {
    slug: 'story-elleone',
    image: seyt,
    title: 'The Story by Elleone',
    description: 'Custom one page site',
    category: 'wordpress &php',
    client: 'Youtube channel',
    date: '01 March, 2025',
    url: 'https://storyelleone.vercel.app/',
    details: 'Discover proven strategies to increase subscribers boost engagement, and maximize your YouTube channels potential.',
    features: ['One-page layout', 'Newsletter signup', 'Embedded media', 'YouTube Api integration'],
    technologies: ['WordPress', 'PHP', 'HTML5'],
    packages: ['contact form plugin', 'SEO plugin']
  },
  {
    slug: 'jk-capinvest',
    image: jkCapinvest,
    title: 'Jk Capinvest',
    description: 'Advanced WordPress plugin for SEO',
    category: 'wordpress &php',
    client: 'SEO Agency',
    date: '20 August, 2024',
    url: 'https://jkcapinvest.com/',
    details: 'JK CapInvest is a boutique, independent London-based real estate search agency with over 23 years of experience. It offers tailored residential and commercial acquisition, lettings, management, and after-sale services in prime Central London neighborhoods. and analytics for WordPress sites.',
    features: ['Property listings', 'Contact forms', 'Map integration'],
    technologies: ['WordPress', 'Elementor', 'PHP'],
    packages: ['Elementor Pro', 'Contact Form 7', 'Yoast SEO']
  },
  {
    slug: 'mr-fish-uk',
    image: mrFish,
    title: 'Mr Fish Uk',
    description: 'Advanced WordPress plugin for SEO',
    category: 'wordpress &php',
    client: 'SEO Agency',
    date: '15 April, 2023',
    url: 'https://www.mrfish.uk.com/',
    details: 'Mr Fish — A beloved traditional fish & chips eatery located at 51 Salusbury Rd, London NW6 6NJ, serving up a mix of classic and modern British fare for over 30 years',
    features: ['Menu pages', 'Location & opening hours', 'SEO optimization'],
    technologies: ['WordPress', 'PHP', 'Elementor Pro'],
    packages: ['Yoast SEO', 'Gallery plugin', 'Contact Form plugin']
  },
  {
    slug: 'amm-pro',
    image: ammPro,
    title: 'Amm Pro',
    description: 'Advanced WordPress plugin for SEO',
    category: 'wordpress &php',
    client: 'SEO Agency',
    date: '15 March, 2025',
    url: 'https://amm-pro.com/',
    details: 'AMM-PRO (AM Management & Productions) is a London-founded event production company, established in 2003 by Ali Matar. With over 20 years of expertise, AMM-PRO delivers custom-tailored show production and event management—spanning from ',
    features: ['Project portfolio', 'Service pages', 'Contact / enquiry forms'],
    technologies: ['WordPress', 'Bakery Page Builder', 'PHP'],
    packages: ['WPBakery', 'Contact Form plugin', 'Yoast SEO']
  },
  {
    slug: 'kasturi-sphere-360',
    image: kasturi,
    title: 'Kasturi Sphere 360 Media',
    description: 'Advanced WordPress plugin for SEO',
    category: 'wordpress &php',
    client: 'Woocommerce Client',
    date: '15 January, 2025',
    url: 'https://dev.digitize-info.com/wordpress/kasturi-sphere-360-media-partner/',
    details: 'WooCommerce-based eCommerce platform built on WordPress—scalable, SEO-friendly, and highly customizable for seamless product, payment, and order management.',
    features: ['WooCommerce integration', 'Custom product templates', 'Payment setup'],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Elementor Pro'],
    packages: ['WooCommerce', 'Payment gateway plugins', 'Rezorpay']
  },
  {
    slug: 'bhartiya-city-nikoo',
    image: nikko,
    title: 'Bhartiya City Nikoo Garden',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'wordpress &php',
    client: 'Real Estate & Marketing',
    date: '15 February , 2025',
    url: 'https://bhartiyacitynikoosadahalli.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.',
    features: ['Property listings', 'Gallery', 'SEO optimised content'],
    technologies: ['WordPress', 'PHP', 'MySQL'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO']
  },
  {
    slug: 'nikoo-homes-6',
    image: nikkoo,
    title: 'Nikoo Homes 6 Phase 2',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'wordpress &php',
    client: 'Real Estate & Marketing',
    date: '20 February, 2024',
    url: 'https://nikoohomes6.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.',
    features: ['Property listings', 'Gallery', 'SEO optimised content'],
    technologies: ['WordPress', 'PHP', 'MySQL'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO']
  },
  {
    slug: 'barca-godrej-msr',
    image: barca,
    title: 'Barca At Godrej MSR City',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'wordpress &php',
    client: 'Real Estate & Marketing',
    date: '20 March, 2025',
    url: 'https://barca-msrcity-shettigere.com/',
    details: 'A large luxury township near Bangalore Airport offering apartments, lofts, and villas with premium amenities and strong future connectivity.',
    features: ['Property listings', 'Gallery', 'SEO optimised content'],
    technologies: ['WordPress', 'PHP', 'MySQL'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO']
  },
  {
    slug: 'leadozz',
    image: leadozz,
    title: 'Leadozz',
    description: 'Advanced WordPress plugin for SEO and Php, HTML5',
    category: 'wordpress &php',
    client: 'Digital Marketing & Agency',
    date: '25 March, 2025',
    url: 'https://leadozz.com/',
    details: 'Leadozz is a seasoned B2B lead generation agency offering customized, tech-savvy campaigns aimed at delivering measurable ROI. With over a decade in the field, they position themselves as growth partners for businesses seeking high-quality leads, underpinned by data-driven.',
    features: ['Lead generation', 'Campaign setup', 'SEO and analytics', 'Digital marketing'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Elementor Pro'],
    packages: ['Click to Chat', 'Contact Form 7', 'Easy Table of Contents']
  },
  {
    slug: 'dalida-musical-tribute',
    image: dalida,
    title: 'Dalida Musical Tribute',
    description: 'Advanced WordPress plugin for SEO and Php, HTML5',
    category: 'wordpress &php',
    client: 'Singing and Music Client',
    date: '25 Fabruary, 2025',
    url: 'https://dalidamusicaltribute.com/',
    details: 'A vibrant stage tribute that revives Dalida\'s timeless songs with live performance, choreography, and visuals—bringing her legacy back to life for global audiences.',
    features: ['Multimedia integration', 'Event details', 'Ticket booking', 'SEO optimization'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Elementor Pro', 'WooCommerce'],
    packages: ['CMSMasters Content Composer', 'Contact Form 7', 'Yoast SEO', 'Event Tickets', 'MailPoet']
  },
  {
    slug: 'asmahan-show',
    image: asmahan,
    title: 'Asmahan Show',
    description: 'Advanced WordPress plugin for SEO and Php',
    category: 'wordpress &php',
    client: 'Singing and Music Client',
    date: '25 Fabruary, 2025',
    url: 'https://asmahan.show/',
    details: 'Asmahan: A New Musical Play is a heartfelt, bilingual stage tribute to a legendary singer, blending biography, music, and visual storytelling to revive her legacy—though it shines especially during its concert act.',
    features: ['Multimedia integration', 'Event details', 'Ticket booking', 'SEO optimization'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Elementor Pro', 'WooCommerce'],
    packages: ['CMSMasters Content Composer', 'Contact Form 7', 'Yoast SEO', 'Event Tickets']
  },
  {
    slug: 'airbnb-example',
    image: airbnb,
    title: 'Air Bnb',
    description: 'Application for e-commerce Payment Gateway',
    category: 'react js',
    client: 'E-Shop',
    date: '10 June, 2024',
    url: 'https://www.airbnb.co.in/',
    details: 'Airbnb is a global online marketplace for short- and long-term lodging, experiences, and services.',
    features: ['Listings', 'Search & filters', 'Booking flow', 'User profiles', 'Payment gateway'],
    technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Payment Gateway Api'],
    packages: ['react-router-dom', 'axios', 'redux-thunk', 'react-bootstrap', 'stripe']
  },
  {
    slug: 'propty-co',
    image: propty,
    title: 'Propty Co',
    description: 'Application for e-commerce Payment Gateway',
    category: 'react js',
    client: 'E-Shop Propty Hunters',
    date: '10 Marce, 2025',
    url: 'https://www.propty.co/',
    details: 'PropTy aims to redefine property discovery in Dubai by combining AR and AI.',
    features: ['3D property tours', 'AI-driven recommendations', 'User accounts', 'Payment gateway'],
    technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Payment Gateway Api'],
    packages: ['react-router-dom', 'axios', 'redux-thunk', 'react-bootstrap', 'stripe']
  },
  {
    slug: 'vshopease',
    image: rvEstore,
    title: 'VShopEase',
    description: 'Application for e-commerce Payment Gateway',
    category: 'react js',
    client: 'E-Shop Propty Hunters',
    date: '28 Marce, 2025',
    url: 'https://vshopease.vercel.app/',
    details: 'There is mention of something called "The RV Store" on Instagram, which hints at categories like Beauty & Personal Care, Health & Wellness, and Pet Care Products.',
    features: ['Product listings', 'Search & filters', 'Shopping cart', 'User profiles', 'Payment gateway'],
    technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Payment Gateway Api'],
    packages: ['react-router-dom', 'axios', 'redux-thunk', 'react-bootstrap', 'Razorpay']
  },
  {
    slug: 'goodee-world',
    image: goodee,
    title: 'Goodee World',
    description: 'Application for e-commerce Payment Gateway',
    category: 'react js',
    client: 'E-Shop Woocommerce',
    date: '28 April, 2025',
    url: 'https://www.goodeeworld.com/',
    details: 'Goodee—also known as Goodee World—is a curated online marketplace rooted in the ethos of "good design, good people, and good purpose."',
    features: ['Product listings', 'Search & filters', 'Shopping cart', 'User profiles', 'Payment gateway'],
    technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Payment Gateway Api'],
    packages: ['react-router-dom', 'axios', 'redux-thunk', 'react-bootstrap', 'Razorpay']
  },
  {
    slug: 'my-personal-portfolio',
    image: myportfolio,
    title: 'My Personal Portfolio',
    description: 'personal portfolio web application built with React.js',
    category: 'react js',
    client: 'Self',
    date: '28 April, 2025',
    url: 'https://imvishall.netlify.app/',
    details: 'A personal portfolio built with React.js showcasing professional skills, modern UI, and diverse real-world projects across WordPress, React, React Native, Shopify, Core PHP, and Laravel.',
    features: ['Project case studies', 'Certificates', 'Contact form', 'Netlify deployment'],
    technologies: ['React', 'Bootstrap', 'React Reveal', 'GitHub'],
    packages: ['react-reveal', 'react-bootstrap', 'react-router-dom', 'Build with Netlify']
  },
  {
    slug: 'newshub',
    image: newshub,
    title: 'NewsHub',
    description: 'Application for live news',
    category: 'react native app',
    client: 'Software Development',
    date: '10 Nov, 2025',
    url: 'https://drive.google.com/file/d/1qGKOlAHXIgTuMCo9auRDFRV46kgG4bwt/view?usp=sharing',
    details: 'A modern, lightweight React Native News App with a smooth UI and real-time content for Android, iOS, and Web and live news App.',
    features: ['Live news updates', 'Category filters', 'Bookmarking', 'Multi-platform support', 'Expo.Dev Deployment'],
    technologies: ['React Native', 'Redux', 'Bootstrap', 'News API', 'Expo.Dev'],
    packages: ['react-navigation', 'axios', 'redux-thunk', 'react-native-elements', 'Expo Build']
  },
  {
    slug: 'kith',
    image: kith,
    title: 'Kith',
    description: 'Custom Shopify theme for online store',
    category: 'shopify',
    client: 'Online Retailer',
    date: '05 August, 2024',
    url: 'https://kith.com/',
    details: 'Global footprint: Operates around 17 standalone boutiques worldwide and several shop-in-shops in premier department stores.',
    features: ['Custom theme design', 'Product showcase', 'E-commerce functionality', 'payment gateway integration'],
    technologies: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Payment Gateway Api'],
    packages: ['Shopify Apps for SEO and Analytics', 'Razorpay', 'Shopify Payments', 'Oberlo', 'Paid Plugins']
  },
  {
    slug: 'allbirds',
    image: allbirds,
    title: 'All Birds',
    description: 'Custom Shopify theme for online store',
    category: 'shopify',
    client: 'Online Retailer',
    date: '05 Marce, 2025',
    url: 'https://www.allbirds.com/',
    details: 'Allbirds is an American footwear and apparel company founded in 2015 by Tim Brown and Joey Zwillinger.',
    features: ['Custom theme design', 'Product showcase', 'E-commerce functionality', 'payment gateway integration'],
    technologies: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Payment Gateway Api'],
    packages: ['Shopify Apps for SEO and Analytics', 'Razorpay', 'Shopify Payments', 'Oberlo', 'Paid Plugins']
  },
  {
    slug: 'cowboy',
    image: cowboy,
    title: 'Cowboy',
    description: 'Custom Shopify theme for online store',
    category: 'shopify',
    client: 'Online Retailer',
    date: '14 Marce, 2025',
    url: 'https://cowboy.com/',
    details: 'Cowboy is a designer and manufacturer of connected electric bikes (e-bikes).',
    features: ['Custom theme design', 'Product showcase', 'E-commerce functionality', 'payment gateway integration'],
    technologies: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Payment Gateway Api'],
    packages: ['Shopify Apps for SEO and Analytics', 'Razorpay', 'Shopify Payments', 'Oberlo', 'Paid Plugins']
  },
  {
    slug: 'love-healthy',
    image: loveHealthy,
    title: 'Love Healthy',
    description: 'Branding website with custom CMS',
    category: 'core php',
    client: 'Brand Studio',
    date: '20 September, 2024',
    url: 'https://dev.digitize-info.com/php_projects/love-healthy/',
    details: 'Love Healthy Project A custom Content Management System (CMS) and branding website developed using PHP and MySQL.',
    features: ['Custom CMS', 'Responsive design', 'SEO optimization', 'Food Delivery', 'Health Products', 'Payment Gateway Integration'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Payment Gateway Api'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Razorpay', 'Mailchimp']
  },
  {
    slug: 'nikoo-homes-5-phase-ii',
    image: nikooPhase5,
    title: 'Nikoo Homes 5 Phase II',
    description: 'Branding website with custom CMS',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '20 Marce, 2025',
    url: 'https://nikoohome5.in/',
    details: 'Backend: PHP on an nginx server Frontend: A hybrid architecture that uses React for dynamic features like instant search and filters.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'perfect-homz',
    image: perfectHomz,
    title: 'Perfect Homz',
    description: 'Branding website with custom CMS',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '10 Marce, 2025',
    url: 'https://perfecthomz.com/',
    details: 'Core Platform: The site is a WordPress application, using the Astra theme as its foundation.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'WordPress', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'lodha-mirabelle-phase-iv',
    image: miraLotha,
    title: 'Lodha Mirabelle Phase',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '10 Marce, 2025',
    url: 'https://www.mirabelleproject.com/lodha-group/lodha-mirabelle-bangalore/',
    details: 'This marketing website is engineered on a custom technology stack, utilizing Core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'lodha-mirabelle-phase-i',
    image: mirebal,
    title: 'Lodha Mirabelle Phase - I',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://mirabelle-manyata-bangalore.com/',
    details: 'This marketing website is engineered on a custom technology stack, utilizing Core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'tata-carnatica-phase-i',
    image: tata1,
    title: 'TATA Carnatica Phase - I',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://tatacarnaticabangalore.in/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'tata-carnatica-phase-iii',
    image: tata3,
    title: 'TATA Carnatica Phase - III',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '05 Marce, 2025',
    url: 'https://www.thecarnatica.net.in/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'birla-estates-trimaya-phase-3',
    image: birla3,
    title: 'Birla Estates Trimaya Phase 3',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '28 Marce, 2025',
    url: 'https://birlahomes.in/trimaya/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'birla-estates-trimaya-phase-1',
    image: birla1,
    title: 'Birla Estates Trimaya Phase 1',
    description: 'Branding website with custom CMS Html5',
    category: 'core php',
    client: 'Real Estate - Bangalore',
    date: '29 Marce, 2025',
    url: 'https://birlatrimaya-devanahalli.com/',
    details: 'This branding website is engineered on a lean and purpose-built technology stack, utilizing core PHP for its server-side logic.',
    features: ['Property listings', 'Gallery', 'SEO optimised content', 'Digital Marketing'],
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript'],
    packages: ['Phpmailer', 'Composer', 'Lazy Load', 'Yoast SEO', 'SMTP Mail']
  },
  {
    slug: 'shree-dwarkesh-enterprise',
    image: dwarkesh,
    title: 'Dwarkesh Enterprise',
    description: 'Book management system, Expanse Management and Loan Management with Laravel',
    category: 'laravel',
    client: 'Finance Management',
    date: '12 December, 2024',
    url: 'https://dwarkeshenterprise.com/sde-admin/dashboard',
    details: 'Developed a scalable Expense and Book Management system using Laravel and Vue.js, featuring real-time data handling, intuitive dashboards, secure CRUD operations, and optimized workflows for fast, efficient management.',
    features: [
      'Secure role-based access',
      'Book inventory with issue/return',
      'Smart expense tracking with categories',
      'Loan & EMI auto-calculation system',
      'Real-time analytics dashboard',
      'Fast search and filtering',
      'Automated alerts and reminders',
      'Report export options',
      'Responsive Vue.js interface'
    ],

    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    packages: [
      'Laravel Breeze / Sanctum for Auth',
      'Laravel Excel for data export',
      'Chart.js for analytics & graphs'
    ],
  },
  {
    slug: 'shiv-petroleum',
    image: shivPetroleum,
    title: 'Shiv Petroleum ',
    description: 'Book Management, Expense Management, and Petrol Management system built with Laravel for efficient tracking, automation, and streamlined operations.',
    category: 'laravel',
    client: 'Finance and Petrol Pump',
    date: '12 December, 2024',
    url: 'https://petroleum.digitize-info.com/',
    details: 'petrol pump fuel management system so Created a scalable Expanse Management and book management system and payment gateway and Api integration using Laravel and Vue.js.',
    features: [
      'Petrol pump fuel sales and stock tracking',
      'Smart expense and book management',
      'Role-based authentication and secure access',
      'Real-time dashboard with key metrics',
      'Invoice, billing, and payment tracking',
      'Payment gateway and API integrations',
      'Advanced search, sorting, and filters',
      'Data export and reporting options',
      'Responsive Vue.js interface'
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    packages: [
      'Laravel Sanctum for authentication',
      'Laravel Excel for data export',
      'Chart.js for analytics',
      'Payment Gateway API integration'
    ]
  },
  {
    slug: 'eventhub',
    image: eventHub,
    title: 'EventHub',
    description: 'A complete Book and Event Management system built with Laravel for smooth event planning, tracking, and operations.',
    category: 'laravel',
    client: 'Event Management',
    date: '12 March, 2025',
    url: 'https://versapublish.com/',
    details: 'Developed an Event Management System using Laravel to simplify planning, organizing, and managing events like conferences, weddings, and exhibitions. The system includes booking management, vendor coordination, scheduling, budgeting, and real-time status tracking for seamless event execution.',

    features: [
      'Event creation, scheduling, and management',
      'Vendor and client coordination tools',
      'Book and inventory management',
      'Budget and expense tracking',
      'Automated reminders and notifications',
      'Real-time event progress dashboard',
      'Advanced search and filtering',
      'Role-based secure access control',
      'Responsive and user-friendly interface'
    ],
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    packages: [
      'Laravel Breeze / Sanctum for authentication',
      'Laravel Excel for report export',
      'Chart.js for analytics'
    ]
  },
  {
    slug: 'bus-tracking',
    image: bustraking,
    title: 'Bus Tracking',
    description: 'A real-time bus tracking and booking management system built with Laravel.',
    category: 'laravel',
    client: 'Tours & Travels',
    date: '12 May, 2024',
    url: 'https://metarescuex.com/',
    details: 'Developed a real-time bus tracking system using Laravel with GPS API integration to show live bus locations, estimated arrival times, and route details. The system also includes booking and fuel/expense tracking, offering a responsive and seamless experience across all devices.',
    features: [
      'Live bus location tracking using GPS APIs',
      'Real-time arrival and route updates',
      'Booking and passenger management',
      'Fuel, expenses, and trip record tracking',
      'Interactive maps with live movement updates',
      'Admin dashboard with analytics',
      'Role-based secure authentication',
      'Responsive UI across all devices'
    ],
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Google Maps API'],
    packages: [
      'Laravel Sanctum for authentication',
      'Laravel Excel for report exports',
      'Chart.js for analytics and graphs'
    ]
  },
  {
  slug: 'automated-blog-posting-system',
  image: aiBlogAutomation,
  video: wordpressFbMov,
  title: 'Automated Blog Posting System',
  description: 'A fully automated blog posting system that publishes AI-generated content to WordPress and Facebook without manual effort.',
  category: 'n8n',
  client: 'Content Marketing',
  date: '31 Dec, 2025',
  url: '',
  details: 'Built an end-to-end automation using n8n and AI where blogs are created and published automatically. The system fetches news from RSS feeds, generates SEO-friendly blog content using AI, creates featured images, formats content into clean HTML, and publishes the same post to WordPress and Facebook. The workflow is scalable, duplicate-safe, and runs on a schedule without human intervention.',
  features: [
    'Automatic blog generation using AI',
    'RSS-based latest news fetching',
    'SEO-friendly long-form content',
    'Auto-generated featured images',
    'Markdown to clean HTML conversion',
    'Direct publishing to WordPress',
    'Auto-sharing posts on Facebook Pages',
    'Duplicate post prevention',
    'Scheduled and fully automated workflow'
  ],
  technologies: [
    'n8n',
    'Google Gemini AI',
    'WordPress REST API',
    'Facebook Graph API'
  ],
  packages: [
    'RSS Feed Reader',
    'AI Content Generation',
    'WordPress REST Integration',
    'Facebook Page Automation'
  ]
}

];

export default projects;

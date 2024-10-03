import ServiceItem from './ServiceItem/ServiceItem';
import nino from '../../../../assets/images/nino.svg';
import nika from '../../../../assets/images/nika.svg';
import nugo from '../../../../assets/images/nugo.svg';
import graphic from '../../../../assets/images/graphic.jpg';
import music from '../../../../assets/images/music.jpg';
import pi from '../../../../assets/images/pi.jpg';

export default function ServicesList() {
  const services = [
    {
      id: 1,
      img: pi,
      avatar: nino,
      category: 'Tutoring',
      subCategory: 'Math',
      title: 'Private math lessons',
      desc: 'Tutoring high schoolers in Math',
      tier: 'Tier 2',
      price: '200L',
      name: 'Nino',
    },
    {
      id: 2,
      img: graphic,
      avatar: nika,
      category: 'Design',
      subCategory: 'Graphic design',
      title: 'Experienced graphic designer',
      desc: 'Creative graphic designer specializing in developing visually appealing templates for various products. Adept at understanding client needs and translating them into effective design solutions. Committed to delivering high-quality work that enhances branding and engages target audiences. Pricing varies by project scope.',
      tier: 'Tier 3',
      price: 'TBD',
      name: 'Nika',
    },
    {
      id: 3,
      img: music,
      avatar: nugo,
      category: 'Tutoring',
      subCategory: 'Music',
      title: "Nugo, let's go!",
      desc: 'I will make you fall in love with guitar',
      tier: 'Tier 1',
      price: '100L',
      name: 'Nugo',
    },
    {
      id: 4,
      img: music,
      avatar: nugo,
      category: 'Tutoring',
      subCategory: 'Music',
      title: "Nugo, let's go!",
      desc: 'I will make you fall in love with guitar',
      tier: 'Tier 1',
      price: '100L',
      name: 'Nugo',
    },
  ];

  return (
    <div className="services-list">
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          img={service.img}
          avatar={service.avatar}
          category={service.category}
          subCategory={service.subCategory}
          title={service.title}
          desc={service.desc}
          tier={service.tier}
          price={service.price}
          name={service.name}
        />
      ))}
    </div>
  );
}

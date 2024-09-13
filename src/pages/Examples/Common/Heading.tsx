type HeadingType = {
  title: string;
};

const Heading = ({ title }: HeadingType) => {
  return <h2 className="mb-2.5 text-24 font-black uppercase text-primary-700 tablet:mb-5">{title}</h2>;
};

export default Heading;

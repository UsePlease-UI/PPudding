type HeadingType = {
    title: string;
};

const Heading = ({ title }: HeadingType) => {
    return <h2 className="text-parimary-600 mb-10 text-24 font-black uppercase tablet:mb-20">{title}</h2>;
};

export default Heading;

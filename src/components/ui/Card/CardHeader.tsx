interface Props {
  title: string;
  subTitle: string;
}

const CardHeader = ({ title, subTitle }: Props) => {
  return (
    <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-x-5 flex-wrap">
      <h3 className="tracking-tight text-accent text-xl font-bold md:text-3xl">
        {title}
      </h3>
      <h4 className="tracking-tight text-sm md:text-base font-medium text-gray-600">
        {subTitle}
      </h4>
    </div>
  );
};

export default CardHeader;

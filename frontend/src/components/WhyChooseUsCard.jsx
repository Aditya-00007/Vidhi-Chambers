const WhyChooseUsCard = ({ item }) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-3xl
        border
        border-gray-200
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div
        className="
          w-20
          h-20
          rounded-full
          bg-(--accent)/10
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            w-15
            h-15
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-7">{item.description}</p>
    </div>
  );
};

export default WhyChooseUsCard;

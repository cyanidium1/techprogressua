import Image from "next/image";
import CatalogSlider from "./CatalogSlider";

export default function CatalogueCard({ photos = [], title }) {
  const isSinglePhoto = typeof photos === "string";

  return (
    <div className="w-full bg-[#A1A1A1] p-1 shadow-xl overflow-hidden transition-shadow duration-300 ease-in-out cursor-pointer hover:shadow-red-400 hover:shadow-xl group">
      <div className="relative flex justify-center items-center p-8 bg-white">
        {/* Логотип в углу */}
        <div className="absolute top-2 left-2">
          <Image src="/images/logo.png" alt="Logo" width={120} height={60} />
        </div>
      </div>

      <div className="w-full bg-white">
        {isSinglePhoto ? (
          <Image
            src={photos}
            alt={title}
            width={500}
            height={300}
            className="object-contain w-full max-h-44 mb-2"
          />
        ) : (
          <CatalogSlider photos={photos} />
        )}
      </div>
      {/* Заголовок карточки с анимацией */}
      <div className="bg-[#A1A1A1] text-center py-3 transition-all duration-300 ease-in-out">
        <p className="text-white text-lg font-semibold group-hover:text-red-400 transition-all duration-300 ease-in-out">
          {title}{" "}
          <span className="inline-block group-hover:translate-x-2 group-hover:text-red-400 transition-all duration-300 ease-in-out">
            &rarr;
          </span>
        </p>
      </div>
    </div>
  );
}

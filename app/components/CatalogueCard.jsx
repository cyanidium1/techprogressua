import Image from "next/image";

export default function CatalogueCard({ photo, title }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 ease-in-out cursor-pointer hover:shadow-red-400 hover:shadow-xl group">
      <div className="relative flex justify-center items-center p-8">
        {/* Логотип в углу */}
        <div className="absolute top-2 left-2">
          <Image
            src="/images/logo.png" // Путь к логотипу
            alt="Logo"
            width={120}
            height={60}
          />
        </div>

        {/* Основное изображение */}
        <Image
          src={photo} // Путь к изображению продукта, который передается через пропсы
          alt={title}
          width={500}
          height={300}
          className="object-contain w-full max-h-44"
        />
      </div>

      {/* Заголовок карточки с анимацией */}
      <div className="bg-gray-500 text-center py-3 transition-all duration-300 ease-in-out">
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

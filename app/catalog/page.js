import React from "react";
import { performRequest } from "../lib/datocms";
import ProductCard from "../components/Card";

async function fetchCategoriesAndItems() {
  const query = `
    {
      allCategories(orderBy: order_ASC) {
        name
        order
        mainphoto {
          url
        }
        subcategory {
          title
          id
          items {
            id
            name
            price
            mainphoto {
              url
            }
          }
        }
      }
      allItems {
        id
        name
        price
        mainphoto {
          url
        }
      }
    }
  `;

  let categories = [];

  try {
    const response = await performRequest({ query });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return { categories };
}

const CatalogPage = async () => {
  const { categories } = await fetchCategoriesAndItems();

  return (
    <div className="container mx-auto px-4 flex">
      {/* Левый летающий блок */}
      <aside className="sticky top-4 h-screen p-4 w-1/4 bg-gray-100">
        <nav className="space-y-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.name}`}
              className="block p-3 text-red-600 border border-gray-300 rounded hover:bg-gray-200"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={category.mainphoto.url}
                  alt={category.name}
                  className="w-6 h-6"
                />
                <span>{category.name}</span>
              </div>
            </a>
          ))}
        </nav>
      </aside>

      {/* Контент с карточками продуктов */}
      <main className="w-3/4">
        <h1 className="text-2xl font-bold mb-6">Каталог товаров</h1>
        <div className="space-y-8">
          {categories.map((category) => (
            <div
              key={category.name}
              id={category.name}
              className="category-block"
            >
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>

              {/* Подкатегории с товарами */}
              {category.subcategory.map((sub) => (
                <div key={sub.id} className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">{sub.title}</h3>

                  {/* Товары внутри подкатегории */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sub.items.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={{
                          name: product.name, // Название продукта
                          price: product.price, // Цена продукта
                          imageSrc: product.mainphoto.url, // Картинка продукта
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CatalogPage;

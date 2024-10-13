import CategoriesMenu from "./components/Categories";
import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import ProductionHomepage from "./components/ProductionHomepage";
import ProductLine from "./components/ProductLine";
import Advantages from "./components/WhyUs";
import { performRequest } from "./lib/datocms";

// Это серверный компонент, данные будут получены и переданы на сервере
export default async function Home() {
  // GraphQL запрос для получения категорий и товаров
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
        }
      }
      allItems {
        mainphoto {
          url
        }
        mainphotohover {
          url
        }
        description
        price
        recomended
        newone
        name
      }
    }
  `;

  let categories = [];
  let items = [];

  try {
    const response = await performRequest({ query });
    const data = response.data.allCategories;
    items = response.data.allItems;
    categories = data.map((category) => ({
      name: category.name,
      photos: category.mainphoto?.map((photo) => photo.url) || [],
      dropdownItems: category.subcategory.map((sub) => ({
        name: sub.title,
        key: sub.id,
      })),
    }));
    console.dir(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  const recommendedItems = items.filter((item) => item.recomended);
  const newItems = items.filter((item) => item.newone);

  return (
    <>
      <CategoriesMenu categories={categories} />
      <Hero />
      <ProductionHomepage text="Наш каталог" categories={categories} />
      <Advantages />
      <OurClients />
      <ProductLine title="Рекомендовані товари" items={recommendedItems} />
      <ProductLine title="Нові товари" items={newItems} />
    </>
  );
}

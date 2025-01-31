import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "../components/billboard";
import ProductList from "../components/products-list";
import Container from "../components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("696c4410-939c-4a3b-b1c8-23c32d687665");
  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

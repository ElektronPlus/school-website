import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/articles";

import { fetchAPI } from "../../services/api";
import { GetStaticPaths, GetStaticProps } from "next";

const Category = ({ category }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
      <><Seo seo={seo} /><div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>{category.attributes.name}</h1>
        <Articles articles={category.attributes.articles.data} />
      </div>
    </div></>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  };
}

export default Category;
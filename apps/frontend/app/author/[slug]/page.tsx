export default async function Page()  {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "mariusz" }}],
    fallback: true,
  };
}

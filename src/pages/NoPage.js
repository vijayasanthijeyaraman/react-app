import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section class="bg-white  dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl h-[calc(100vh-112px)]  lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-500 ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-700 ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            to="/"
            class="inline-flex text-white bg-purple-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;

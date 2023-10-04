import NewestCategory from "@/components/homeAuth/newestCategory";
import FeaturedSection from "./../../components/homeAuth/featuredSection/index";
import FavoriteCategory from "./../../components/homeAuth/favoriteCategory/index";

export const metadata = {
  title: "Moodflix - Home",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix - Home",
    content: "title",
  },

  description: "Home de usuário",
};

const HomeAuth = () => {
  return (
    <>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
      </main>
    </>
  );
};

export default HomeAuth;

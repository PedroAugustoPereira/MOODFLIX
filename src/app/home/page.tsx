import HeaderAuth from "@/components/headerAuth";

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
        <HeaderAuth />
      </main>
    </>
  );
};

export default HomeAuth;

import HeaderAuth from "@/components/headerAuth";
import styles from "./styles.module.scss";
import ContentForm from "@/components/profile/contentForm";
import Footer from "@/components/common/footer";

export const metadata = {
  title: "Moodflix - Profile",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix - Login",
    content: "title",
  },

  description: "Acesse seu perfil!",
};

const UserInfo = () => {
  return (
    <>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>

        <ContentForm />
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default UserInfo;

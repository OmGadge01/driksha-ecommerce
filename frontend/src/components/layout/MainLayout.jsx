import Navbar from "../layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
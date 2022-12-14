import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-customLight-100 dark:bg-customDark-100 w-full h-full">
      <aside className="hidden sm:block">
        <Navbar />
      </aside>
      {children}
    </div>
  );
};

export default MainLayout;

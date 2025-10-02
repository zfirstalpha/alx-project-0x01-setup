import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Users Page</h1>
      </main>
    </div>
  );
};

export default UsersPage;

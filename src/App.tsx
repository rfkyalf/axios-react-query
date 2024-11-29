import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProductList from './components/ProductList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-neutral-50 min-h-screen">
        <div className="w-[1020px] mx-auto py-4">
          <h1 className="text-[2rem] text-neutral-950 font-bold">
            React Query with Axios
          </h1>
          <ProductList />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;

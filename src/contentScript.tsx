import { useCallback } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';
import { createRoot } from 'react-dom/client';
import useSWR from 'swr';

import './index.css';
import { SWRConfigComponent } from './utilities/SWRConfigComponent';

type CatAPIResult = {
  id: string;
  url: string;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <pre>react-error-boundary {error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        reset button
      </button>
    </>
  );
};
const ViewComponent = () => {
  const getCatImageUrl = useCallback(async () => {
    const result = await axios.get<CatAPIResult[]>(
      'https://api.thecatapi.com/v1/images/search'
    );
    return result.data;
  }, []);

  const { data, isLoading, isValidating, mutate } = useSWR(
    '/cat',
    getCatImageUrl
  );

  if (isLoading || isValidating)
    return (
      <div className="h-full w-full animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    );
  return (
    <>
      {data?.map((value) => (
        <img
          className="h-3/5 w-full object-contain"
          key={value.id}
          src={value.url}
          alt=""
        />
      ))}
      <button
        className="h-1/5 w-full rounded-md bg-gray-400 text-xl font-bold  hover:cursor-pointer"
        onClick={() => mutate()}
      >
        load
      </button>
    </>
  );
};

const Main = () => {
  return (
    <div className="fixed bottom-5 right-5 flex h-48 w-48 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-none bg-white">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SWRConfigComponent>
          <ViewComponent />
        </SWRConfigComponent>
      </ErrorBoundary>
    </div>
  );
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
const root = createRoot(app);
root.render(<Main />);

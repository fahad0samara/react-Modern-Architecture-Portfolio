import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertTriangle } from 'lucide-react';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center gap-3 text-red-800">
        <AlertTriangle className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Something went wrong</h2>
      </div>
      <p className="mt-2 text-sm text-red-700">{error.message}</p>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
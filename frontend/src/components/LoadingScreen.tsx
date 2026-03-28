import { motion } from 'motion/react';
import { Skeleton } from './ui/skeleton';

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-16">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-8">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
            <div className="flex gap-4 mt-8">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>

        {/* Loading Spinner */}
        <div className="fixed bottom-8 right-8">
          <motion.div
            className="w-16 h-16 border-4 border-zinc-200 border-t-zinc-900 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );    
}

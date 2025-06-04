'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface AnimatePresenceWrapperProps {
  children: React.ReactNode;
}

export default function AnimatePresenceWrapper({ children }: AnimatePresenceWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
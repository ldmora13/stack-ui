'use client';

import * as React from 'react';
import { RadialNav } from './ui/Radial-nav-icon';
import { Bot, Code, Frame } from 'lucide-react';

const ITEMS = [
  { id: 1, icon: Code, label: 'Code', angle: 0 },
  { id: 2, icon: Bot, label: 'AI', angle: -115 },
  { id: 3, icon: Frame, label: 'Design', angle: 115 },
];

export const RadialNavDemo = () => (
  <RadialNav items={ITEMS} defaultActiveId={1} />
);
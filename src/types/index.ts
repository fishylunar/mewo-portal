/**
 * @file types.ts
 * @type type
 * @project Mewo Portal
 * @description Structure / Type Definitions for the 
 * Application & User object.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { ReactNode } from 'react';

export type Application = {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  url: string;
  hidden: boolean;
  featured?: boolean;
  requiredRole?: string;
  isPublic?: boolean;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
};
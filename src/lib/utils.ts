/**
 * @file utils.ts
 * @type generic
 * @project Mewo Portal
 * @description This file is a utils file provided by shadcn/ui
 * @author shadcn
 * @date 2/16/25.
 * @version 1.0.1
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

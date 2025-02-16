/**
 * @file applicationUtils.ts
 * @type lib
 * @project Mewo Portal
 * @description This file provides logic for 
 * checking wether or not a user can access an 
 * app, and provides a list of apps the user can use.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { Application } from '../types';

export const hasAppAccess = (app: Application, userRoles: string[]): boolean => {
  if (app.isPublic) return true;
  if (!app.requiredRole) return true;
  return userRoles.includes(app.requiredRole);
};

export const getAccessibleApps = (apps: Application[], userRoles: string[]): Application[] => {
  return apps.filter(app => app.isPublic || hasAppAccess(app, userRoles));
};

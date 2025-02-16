/**
 * @file applications.ts
 * @type data
 * @project Mewo Portal
 * @description Contains the Applications list, their props, and so on.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { Application } from '../types';
import { Link2, FileText, Link, Container, EthernetPort, Shield } from 'lucide-react';

export const applications: Application[] = [
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Create and manage shortened URLs',
    icon: <Link2 className="h-6 w-6" />,
    url: `https://owo.${import.meta.env.VITE_BASE_HOST}/`,
    hidden: false,
    featured: true,
    requiredRole: 'dashboard_access_shortener',
  },
  {
    id: 'file-share',
    name: 'File Share',
    description: 'Secure file sharing platform',
    icon: <FileText className="h-6 w-6" />,
    url: `https://file.${import.meta.env.VITE_BASE_HOST}/api/v2/open/auth/oauth/bweh`,
    hidden: false,
    featured: true,
    requiredRole: 'dashboard_access_files',
  },
  {
    id: "portainer",
    name: "Portainer",
    description: "Manage the containers!",
    icon: <Container className="h-6 w-6" />,
    url: `https://portainer.${import.meta.env.VITE_BASE_HOST}/`,
    hidden: false,
    featured: false,
    requiredRole: "dashboard_access_portainer"
  },
  {
    id: "traefik",
    name: "Traefik",
    description: "Manage the reverse proxy!",
    icon: <EthernetPort className="h-6 w-6" />,
    url: `https://traefik.${import.meta.env.VITE_BASE_HOST}/`,
    hidden: false,
    featured: false,
    requiredRole: "dashboard_access_traefik"
  },
  {
    id: "keycloak_admin",
    name: "Keycloak Admin",
    description: "Access the Keycloak admin panel!",
    icon: <Shield className="h-6 w-6" />,
    url: `https://auth.${import.meta.env.VITE_BASE_HOST}:8443/admin/`,
    hidden: false,
    featured: false,
    requiredRole: "dashboard_access_keycloak"
  },
  {
    id: 'link-tree',
    name: 'Link Hub',
    description: 'Your personal link & info landing page',
    icon: <Link className="h-6 w-6" />,
    url: `https://im.${import.meta.env.VITE_BASE_HOST}/`,
    hidden: false,
    featured: true,
    isPublic: true,
  }
];

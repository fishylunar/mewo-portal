/**
 * @file Dashboard.tsx
 * @project Mewo Portal
 * @description Provides the main UI for the Dashboard.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Application } from '../types';
import { AppCard } from './AppCard';
import { getAccessibleApps, hasAppAccess } from '../lib/applicationUtils';
import { applications } from '../data/applications';

interface DashboardProps {
    userRoles: string[];
}

export const Dashboard: React.FC<DashboardProps> = ({ userRoles }) => {
    const handleAppLaunch = (app: Application) => {
        if (!hasAppAccess(app, userRoles)) {
            console.error('No access to this application');
            return;
        }
        window.open(app.url, '_blank');
    };

    const accessibleFeaturedApps = getAccessibleApps(
        applications.filter(app => app.featured),
        userRoles
    );
    const accessibleApps = getAccessibleApps(applications, userRoles);

    return (
        <main className="container mx-auto px-4 py-8">
            {/* Featured Apps Section */}
            {accessibleFeaturedApps.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Featured Apps
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {accessibleFeaturedApps.map(app => (
                            <AppCard
                                key={app.id}
                                app={app}
                                onLaunch={handleAppLaunch}
                                variant="featured"
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* All Apps Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        All Applications
                    </h2>
                    <Button
                        variant="outline"
                        className="border-gray-700 hover:border-purple-500/50 text-purple-300"
                        onClick={() => window.location.href = '/request-app'}
                    >
                        Request App
                    </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {accessibleApps.map(app => (
                        <AppCard
                            key={app.id}
                            app={app}
                            onLaunch={handleAppLaunch}
                            variant="compact"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

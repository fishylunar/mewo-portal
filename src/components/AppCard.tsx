/**
 * @file AppCard.tsx
 * @type component
 * @project Mewo Portal
 * @description App Card component, either returns a
 * Featured App card, or generic App Card.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Application } from '../types';

interface AppCardProps {
    app: Application;
    onLaunch: (app: Application) => void;
    variant?: 'featured' | 'compact';
}

export const AppCard: React.FC<AppCardProps> = ({ app, onLaunch, variant = 'compact' }) => {
    if (variant === 'featured') {
        return (
            <Card className="group relative bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-all duration-300 rounded-lg" />
                <div className="relative p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                            {app.icon}
                        </div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                            {app.name}
                        </h3>
                    </div>
                    <p className="text-gray-400 mb-4 flex-grow">{app.description}</p>
                    <Button
                        onClick={() => onLaunch(app)}
                        className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 hover:border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
                    >
                        Launch {app.name}
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <Card className="group bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <Button
                variant="ghost"
                onClick={() => onLaunch(app)}
                className="w-full h-full p-4 flex flex-col items-center space-y-2 hover:bg-gray-800"
            >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300">
                    {app.icon}
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {app.name}
                </span>
            </Button>
        </Card>
    );
};
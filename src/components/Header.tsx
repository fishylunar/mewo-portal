/**
 * @file Header.tsx
 * @type component
 * @project Mewo Portal
 * @description Header component, contains app icon, 
 * welcome text, and "settings" dropdown.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from '../types';

interface HeaderProps {
    user: User;
    onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img
                    src="https://mewo.gay/icon-512-maskable.png"
                    alt="Mewo Logo"
                    className="h-8 w-8 rounded-md shadow-md shadow-purple-500/20"
                />
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Hi {user.firstName}!
                    </h1>
                    <p className="text-sm text-gray-400">Welcome back to Mewo Portal</p>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem
                        className="text-gray-200 focus:bg-gray-700 focus:text-gray-200"
                        onClick={() => window.location.href = 'https://auth.mewo.gay:8443/realms/bweh/account/?referer=dashboard'}
                    >
                        User Management
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-gray-200 focus:bg-gray-700 focus:text-gray-200"
                        onClick={onLogout}
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
);
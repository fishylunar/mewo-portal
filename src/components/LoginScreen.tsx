/**
 * @file WelcomeScreen.tsx
 * @type component
 * @project Mewo Portal
 * @description Landing page for unauthenticated users.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { Button } from '@/components/ui/button';

interface LoginScreenProps {
    onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
            <div className="mb-8">
                <img
                    src="https://mewo.gay/icon-512-maskable.png"
                    alt="Mewo Logo"
                    className="h-16 w-16 rounded-md mx-auto mb-4 shadow-lg shadow-purple-500/20"
                />
                <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    hiiii :3
                </h1>
                <p className="text-gray-400 text-lg">Access all my gay tools in one place owo</p>
            </div>
            <Button
                onClick={onLogin}
                className="px-8 py-6 text-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 hover:border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
                Get Access
            </Button>
        </div>
    </div>
);
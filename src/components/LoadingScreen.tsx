/**
 * @file LoadingScreen.tsx
 * @type component
 * @project Mewo Portal
 * @description Loading Screen spinner & debug view
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

interface LoadingScreenProps {
  initAttempts: number;
  debugInfo: string[];
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ initAttempts, debugInfo }) => (
  <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500 mb-4"></div>
    <p className="text-gray-400 mb-2">Connecting to authentication service...</p>
    <p className="text-gray-500 text-sm">Attempt {initAttempts + 1}/3</p>
    <div className="mt-4 max-w-md text-xs text-gray-600 overflow-auto max-h-40">
      {debugInfo.map((info, i) => (
        <div key={i}>{info}</div>
      ))}
    </div>
  </div>
);
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { getStatus, getQR, disconnect as disconnectAPI, restart } from '../../../libs/whatsapp_api';

export default function WhatsAppConnectionFlow({ onConnected }) {
    const [state, setState] = useState({
        status: 'checking',
        qrImage: null,
        error: null,
        history: []
    });

    const checkStatus = async () => {
        try {
            const data = await getStatus();
            if (data.connected) {
                setState(s => ({ ...s, status: 'connected' }));
                onConnected();
            } else {
                fetchQR();
            }
            return data.connected;
        } catch (error) {
            setState(s => ({ ...s, status: 'error', error: 'Connection check failed' }));
            return false;
        }
    };

    const fetchQR = async () => {
        setState(s => ({ ...s, status: 'loading', error: null }));
        try {
            const qrImageUrl = await getQR();
            setState(s => ({
                ...s,
                status: 'qr-ready',
                qrImage: qrImageUrl
            }));
        } catch (error) {
            setState(s => ({
                ...s,
                status: 'error',
                error: 'Failed to load QR code'
            }));
        }
    };

    const handleDisconnect = async () => {
        await disconnectAPI();
        setState(s => ({ ...s, status: 'disconnected' }));
        setTimeout(checkStatus, 2000);
    };

    useEffect(() => {
        checkStatus();

        const interval = setInterval(() => {
            checkStatus().then(connected => {
                if (connected) clearInterval(interval);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Status badge colors
    const statusColors = {
        checking: 'bg-gray-500',
        loading: 'bg-yellow-500',
        'qr-ready': 'bg-blue-500',
        connected: 'bg-green-500',
        error: 'bg-red-500',
        disconnected: 'bg-gray-400'
    };

    return (
        <div className="max-w-md mx-auto py-8 px-4">
            {/* Connection Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            WhatsApp Connection
                            <span className={`inline-block w-3 h-3 rounded-full ${statusColors[state.status] || 'bg-gray-500'
                                } ${state.status === 'connected' ? 'animate-pulse' : ''}`} />
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${state.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {state.status.toUpperCase()}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {state.status === 'checking' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center py-8"
                            >
                                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
                                <p className="text-gray-600">Checking connection status...</p>
                            </motion.div>
                        )}

                        {state.status === 'loading' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center py-8"
                            >
                                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
                                <p className="text-gray-600">Generating QR code...</p>
                            </motion.div>
                        )}

                        {state.status === 'qr-ready' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative mb-6">
                                    {state.qrImage && (
                                        <img
                                            src={state.qrImage}
                                            alt="WhatsApp QR Code"
                                            className="border-8 border-white rounded-lg shadow-xl w-64 h-64"
                                        />
                                    )}
                                    <div className="absolute inset-0 border-2 border-blue-400 rounded-lg pointer-events-none animate-ping-once" />
                                </div>

                                <p className="text-center text-gray-600 mb-6">
                                    Scan this QR code with your <strong>WhatsApp Business</strong> app<br />
                                    on your phone to connect your account
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={fetchQR}
                                        className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <RefreshIcon className="w-4 h-4" />
                                        Refresh QR
                                    </button>
                                    <button
                                        onClick={checkStatus}
                                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                    >
                                        Check Status
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {state.status === 'connected' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="flex flex-col items-center py-4"
                            >
                                <div className="bg-green-100 text-green-800 p-4 rounded-full mb-6">
                                    <CheckCircleIcon className="w-12 h-12" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Successfully Connected!</h3>
                                <p className="text-gray-600 mb-6 text-center">
                                    Your WhatsApp Business account is now linked to the dashboard
                                </p>
                                <button
                                    onClick={handleDisconnect}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors"
                                >
                                    <DisconnectIcon className="w-4 h-4" />
                                    Disconnect Account
                                </button>
                            </motion.div>
                        )}

                        {state.status === 'error' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                                    <p>{state.error || 'An unknown error occurred'}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        onClick={fetchQR}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Retry Connection
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Connection History */}
            <div className="bg-white rounded-lg shadow-md mt-4">
                <div className="p-4 border-b">
                    <h3 className="font-medium">Connection Log</h3>
                </div>
                <div className="divide-y">
                    {state.history.length > 0 ? (
                        state.history.map((event, i) => (
                            <div key={i} className="p-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className={`inline-block w-2 h-2 rounded-full ${event.type === 'connected' ? 'bg-green-500' : 'bg-red-500'
                                        }`} />
                                    <span className="font-medium">
                                        {new Date(event.timestamp).toLocaleTimeString()}
                                    </span>
                                    <span className="text-gray-500">
                                        {event.type === 'connected' ? 'Connected successfully' : 'Disconnected'}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            No connection events yet
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// SVG Icons
function RefreshIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
    );
}

function CheckCircleIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );
}

function DisconnectIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
    );
}
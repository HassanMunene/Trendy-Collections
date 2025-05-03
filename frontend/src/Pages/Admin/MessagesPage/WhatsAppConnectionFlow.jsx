import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wifi, WifiOff, QrCode, RotateCw, CheckCircle, AlertCircle, Clock,
    ChevronRight, Smartphone, Zap, Shield
} from 'lucide-react';
import { getStatus, getQR, disconnect as disconnectAPI } from '../../../libs/whatsapp_api';

export default function WhatsAppConnectionFlow({ onConnected }) {
    const [state, setState] = useState({
        status: 'checking',
        qrImage: null,
        error: null,
        history: [],
        progress: 0
    });

    // Simulate progress for loading states
    useEffect(() => {
        let interval;
        if (state.status === 'checking' || state.status === 'loading') {
            interval = setInterval(() => {
                setState(s => ({
                    ...s,
                    progress: s.progress < 90 ? s.progress + 10 : s.progress
                }));
            }, 500);
        } else {
            setState(s => ({ ...s, progress: 0 }));
        }
        return () => clearInterval(interval);
    }, [state.status]);

    const checkStatus = async () => {
        try {
            const data = await getStatus();
            if (data.connected) {
                setState(s => ({ ...s, status: 'connected', progress: 100 }));
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
        setState(s => ({ ...s, status: 'loading', error: null, progress: 0 }));
        try {
            const qrImageUrl = await getQR();
            setState(s => ({
                ...s,
                status: 'qr-ready',
                qrImage: qrImageUrl,
                progress: 100
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

    // Status configurations
    const statusConfig = {
        checking: {
            icon: <Wifi className="w-5 h-5" />,
            color: 'bg-blue-500',
            title: 'Checking Connection',
            description: 'Verifying WhatsApp server status...'
        },
        loading: {
            icon: <QrCode className="w-5 h-5" />,
            color: 'bg-yellow-500',
            title: 'Generating QR Code',
            description: 'Preparing your secure connection...'
        },
        'qr-ready': {
            icon: <QrCode className="w-5 h-5" />,
            color: 'bg-purple-500',
            title: 'Scan QR Code',
            description: 'Use WhatsApp on your phone to scan'
        },
        connected: {
            icon: <Wifi className="w-5 h-5" />,
            color: 'bg-green-500',
            title: 'Connected',
            description: 'WhatsApp is successfully linked!'
        },
        error: {
            icon: <WifiOff className="w-5 h-5" />,
            color: 'bg-red-500',
            title: 'Connection Error',
            description: state.error || 'Failed to establish connection'
        },
        disconnected: {
            icon: <WifiOff className="w-5 h-5" />,
            color: 'bg-gray-500',
            title: 'Disconnected',
            description: 'WhatsApp connection was terminated'
        }
    };

    const currentStatus = statusConfig[state.status] || statusConfig.checking;

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            {/* Main Connection Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${currentStatus.color} bg-opacity-20`}>
                            {currentStatus.icon}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">WhatsApp Connection</h2>
                            <p className="text-sm text-gray-400">{currentStatus.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.color} bg-opacity-20 text-white`}>
                            {state.status.toUpperCase()}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${currentStatus.color} ${state.status === 'connected' ? 'animate-pulse' : ''}`} />
                    </div>
                </div>

                {/* Progress Bar */}
                {(state.status === 'checking' || state.status === 'loading') && (
                    <div className="h-1 bg-gray-700">
                        <motion.div
                            className={`h-full ${currentStatus.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${state.progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}

                {/* Content */}
                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {/* Checking/Loading State */}
                        {(state.status === 'checking' || state.status === 'loading') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center py-8"
                            >
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                            className="text-gray-500"
                                        >
                                            <RotateCw className="w-12 h-12" />
                                        </motion.div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-8 h-8 rounded-full ${currentStatus.color} flex items-center justify-center`}>
                                            {currentStatus.icon}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{currentStatus.title}</h3>
                                <p className="text-gray-400 text-center mb-6">{currentStatus.description}</p>
                                <div className="w-full max-w-xs mx-auto bg-gray-800 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${state.progress}%` }}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* QR Ready State */}
                        {state.status === 'qr-ready' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative mb-8">
                                    {state.qrImage && (
                                        <>
                                            <div className="absolute inset-0 rounded-xl bg-purple-500 blur-xl opacity-20 animate-pulse" />
                                            <img
                                                src={state.qrImage}
                                                alt="WhatsApp QR Code"
                                                className="relative z-10 border-4 border-white rounded-xl shadow-lg w-64 h-64"
                                            />
                                            <div className="absolute -inset-2 border-2 border-purple-400 rounded-xl pointer-events-none animate-ping-once" />
                                        </>
                                    )}
                                </div>

                                <div className="text-center max-w-md mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-3">Scan to Connect</h3>
                                    <p className="text-gray-400 mb-4">
                                        Open <strong className="text-white">WhatsApp Business</strong> on your phone,
                                        tap <strong className="text-white">Menu → Linked Devices</strong>,
                                        and scan this code
                                    </p>

                                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <Shield className="w-4 h-4 mr-2 text-green-500" />
                                            <span>End-to-end encrypted</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                                            <span>Expires in 2 minutes</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 w-full max-w-xs">
                                    <button
                                        onClick={fetchQR}
                                        className="flex-1 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                                    >
                                        <RotateCw className="w-5 h-5" />
                                        Refresh
                                    </button>
                                    <button
                                        onClick={checkStatus}
                                        className="flex-1 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Verify
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Connected State */}
                        {state.status === 'connected' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="flex flex-col items-center py-4"
                            >
                                <div className="relative mb-8">
                                    <div className="w-40 h-40 rounded-full bg-green-900 bg-opacity-20 flex items-center justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <div className="p-6 bg-green-600 rounded-full">
                                                <CheckCircle className="w-12 h-12 text-white" />
                                            </div>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-4 border-green-500 border-opacity-30 pointer-events-none"
                                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">Connected Successfully!</h3>
                                <p className="text-gray-400 mb-8 text-center max-w-md">
                                    Your WhatsApp Business account is now securely linked to the dashboard.
                                    You can start managing messages and contacts.
                                </p>

                                <button
                                    onClick={handleDisconnect}
                                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-3 transition-all"
                                >
                                    <WifiOff className="w-5 h-5" />
                                    Disconnect Account
                                </button>

                                <div className="mt-8 w-full max-w-md">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="p-3 bg-gray-800 rounded-lg">
                                            <Smartphone className="w-6 h-6 mx-auto text-blue-400 mb-2" />
                                            <p className="text-xs text-gray-400">Device</p>
                                            <p className="text-sm font-medium text-white">iPhone</p>
                                        </div>
                                        <div className="p-3 bg-gray-800 rounded-lg">
                                            <Zap className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
                                            <p className="text-xs text-gray-400">Status</p>
                                            <p className="text-sm font-medium text-white">Active</p>
                                        </div>
                                        <div className="p-3 bg-gray-800 rounded-lg">
                                            <Clock className="w-6 h-6 mx-auto text-purple-400 mb-2" />
                                            <p className="text-xs text-gray-400">Connected</p>
                                            <p className="text-sm font-medium text-white">Just now</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Error State */}
                        {state.status === 'error' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="flex flex-col items-center py-8"
                            >
                                <div className="mb-6 p-4 bg-red-900 bg-opacity-20 rounded-full">
                                    <AlertCircle className="w-12 h-12 text-red-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Connection Failed</h3>
                                <p className="text-gray-400 mb-6 text-center max-w-md">
                                    {state.error || 'We encountered an issue while trying to connect to WhatsApp.'}
                                </p>
                                <div className="flex gap-4 w-full max-w-xs">
                                    <button
                                        onClick={fetchQR}
                                        className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Connection History */}
            <div className="mt-6 bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                    <h3 className="font-semibold text-white flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        Connection History
                    </h3>
                    <button className="text-xs text-gray-400 hover:text-white transition-colors">
                        View All
                    </button>
                </div>
                <div className="divide-y divide-gray-800">
                    {state.history.length > 0 ? (
                        state.history.map((event, i) => (
                            <div key={i} className="p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${event.type === 'connected' ? 'bg-green-900 bg-opacity-20 text-green-400' : 'bg-red-900 bg-opacity-20 text-red-400'}`}>
                                            {event.type === 'connected' ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                {event.type === 'connected' ? 'Connected successfully' : 'Disconnected'}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {new Date(event.timestamp).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center">
                            <p className="text-gray-500">No connection events yet</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
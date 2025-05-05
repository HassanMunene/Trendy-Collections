import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, QrCode, RotateCw } from 'lucide-react';

import { getStatus, getQR, disconnect as disconnectAPI } from '../../../../libs/whatsapp_api';

import ConnectionHistoryCard from './ConnectionHistoryCard';
import QrCodeReadyStatus from './QrCodeReadyStatus';
import ErrorState from './ErrorState';
import SuccessfullyConnectedState from './SuccessfullyConnectedState';

export default function WhatsAppConnectionFlow({ whatsAppIsConnected }) {
    const [state, setState] = useState({
        status: 'checking',
        qrImage: null,
        error: null,
        history: [],
        progress: 0
    });

    // prevent repeating qr fetching
    const hasQrCodeBeenFetched = useRef(false);

    useEffect(() => {
        let isMounted = true;

        const checkandUpdate = async () => {
            const connected = await checkIfWhatsappIsConnected();
            if (connected && isMounted) {
                clearInterval(interval);
            }
        }
        // Trigger the first check to start checking immediately.
        checkandUpdate();

        // Start a repeat check after every 5 seconds if not connnected.
        const interval = setInterval(() => {
            checkandUpdate();
        }, 5000);

        // When the component unmounts flag is as no longer active
        // Clear the interval so no background checks can continue happening.
        return () => {
            isMounted = false
            clearInterval(interval)
        };
    }, []);

    const checkIfWhatsappIsConnected = async () => {
        try {
            const data = await getStatus();
            // console.log("Data from getStatus() endpoint", data);
            if (data.isConnected) {
                setState((prev) => ({
                    ...prev,
                    status: 'connected',
                    progress: 100
                }));
                // Reset QR flag in case user disconnects later
                hasFetchedQR.current = false;
                whatsAppIsConnected();
            } else {
                if (!hasQrCodeBeenFetched.current) {
                    // if we dont have a QR code fetch it again.
                    fetchQrCodeToConnect();
                }
            }
            return data.isConnected;
        } catch (error) {
            console.log("Error Checking the connection status of whatsapp.", error);
            setState((prev) => ({
                ...prev,
                status: 'error',
                error: 'Connection check failed!'
            }))
            return false;
        }
    }

    const fetchQrCodeToConnect = async () => {
        setState((prev) => ({
            ...prev,
            status: 'loading',
            error: null,
            progress: 0
        }));
        try {
            const qrImageUrl = await getQR();
            setState((prev) => ({
                ...prev,
                status: 'qr-ready',
                qrImage: qrImageUrl,
                progress: 100
            }));
            hasQrCodeBeenFetched.current = true;
        } catch (error) {
            console.log("Error fetching QR", error);
            setState((prev) => ({
                ...prev,
                status: 'error',
                error: 'Failed to load QR code'
            }));
        }
    }

    const handleDisconnect = async () => {
        await disconnectAPI();
        setState((prev) => ({
            ...prev,
            status: 'disconnected'
        }));
    };

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
        <div className="max-w-2xl mx-auto py-4 sm:py-8 px-3 sm:px-4">
            {/* Main Connection Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
                {/* Header part of the connection card. */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-gray-700 gap-3 sm:gap-0">
                    <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${currentStatus.color} bg-opacity-20`}>
                            {React.cloneElement(currentStatus.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold text-white">WhatsApp Connection</h4>
                            <p className="text-xs sm:text-sm text-gray-400">{currentStatus.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.color} bg-opacity-20 text-white`}>
                            {state.status.toUpperCase()}
                        </span>
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentStatus.color} ${state.status === 'connected' ? 'animate-pulse' : ''}`} />
                    </div>
                </div>

                {/* Progress Bar to show the Loading state when getting QR code. */}
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

                {/* Content section of the Card. */}
                <div className="p-4 sm:p-6">
                    <AnimatePresence mode="wait">
                        {/* When we are in the checking state Checking/Loading State */}
                        {(state.status === 'checking' || state.status === 'loading') && (
                            <motion.div className="flex flex-col items-center py-6 sm:py-8">
                                <div className="relative mb-4 sm:mb-6">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 flex items-center justify-center">
                                        <RotateCw className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500 animate-spin" />
                                    </div>
                                    <div className={`absolute inset-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${currentStatus.color}`}>
                                        {React.cloneElement(currentStatus.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
                                    </div>
                                </div>
                                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-center">
                                    {currentStatus.title}
                                </h4>
                            </motion.div>
                        )}

                        {/* QR Ready State - made responsive */}
                        {state.status === 'qr-ready' && (
                            <QrCodeReadyStatus
                                state={state}
                                fetchQrCodeToConnect={fetchQrCodeToConnect}
                                checkIfWhatsappIsConnected={checkIfWhatsappIsConnected}
                            />
                        )}

                        {/* Connected State - made responsive */}
                        {state.status === 'connected' && (
                            <SuccessfullyConnectedState handleDisconnect={handleDisconnect} />
                        )}

                        {/* Error State - made responsive */}
                        {state.status === 'error' && (
                            <ErrorState state={state} fetchQrCodeToConnect={fetchQrCodeToConnect} />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Connection History - made responsive */}
            <ConnectionHistoryCard state={state} />
        </div>
    );
}
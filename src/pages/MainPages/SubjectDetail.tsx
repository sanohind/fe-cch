import { useState, useEffect } from "react";
import PageMeta from "../../components/common/PageMeta";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

import { BasicTab } from "../EntryTabs/BasicTab";
import { PrimaryTab } from "../EntryTabs/PrimaryTab";
import { SrtaTab } from "../EntryTabs/SrtaTab";
import { TemporaryTab } from "../EntryTabs/TemporaryTab";
import { RequestTab } from "../EntryTabs/RequestTab";
import { RaTab } from "../EntryTabs/RaTab";
import { DfaTab } from "../EntryTabs/DfaTab";
import { OccurrenceTab } from "../EntryTabs/OccurrenceTab";
import { OutflowTab } from "../EntryTabs/OutflowTab";
import { CloseTab } from "../EntryTabs/CloseTab";

// ──────────────────────────────────────────────
// Tab definitions
// ──────────────────────────────────────────────
const TABS = [
    { id: "basic", label: "Basic" },
    { id: "primary", label: "Primary" },
    { id: "srta", label: "SRTA" },
    { id: "temporary", label: "Temporary" },
    { id: "request", label: "Request" },
    { id: "ra", label: "RA" },
    { id: "dfa", label: "DFA" },
    { id: "occurrence", label: "Occurrence" },
    { id: "outflow", label: "Outflow" },
    { id: "close", label: "Close" },
];

// ── Alert Dialog ─────────────────────────────────────────────
function AlertDialog({ message, onOk }: { message: string; onOk: () => void }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 z-[999999] bg-black/30" />
            <div className="fixed inset-0 z-[999999] flex items-center justify-center">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center gap-5 min-w-[300px]">
                    <div className="w-14 h-14 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6 14l6 6 10-10" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-base font-semibold text-gray-800 dark:text-white text-center">{message}</p>
                    <button onClick={onOk} className="px-10 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-colors">OK</button>
                </div>
            </div>
        </>
    );
}


// ── Main SubjectDetail Page ───────────────────────────────────
export default function SubjectDetail() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("close");
    const [isEditing, setIsEditing] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);
    const [showCloseSuccess, setShowCloseSuccess] = useState(false);

    const renderTabContent = () => {
        switch (activeTab) {
            case "basic": return <BasicTab />;
            case "primary": return <PrimaryTab />;
            case "srta": return <SrtaTab />;
            case "temporary": return <TemporaryTab />;
            case "request": return <RequestTab />;
            case "ra": return <RaTab />;
            case "dfa": return <DfaTab />;
            case "occurrence": return <OccurrenceTab />;
            case "outflow": return <OutflowTab />;
            case "close": return <CloseTab isEditing={isEditing} />;
            default: return null;
        }
    };

    return (
        <>
            <PageMeta title="Subject Detail | CCH" description="Detail subject CCH" />

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Subject Detail</h2>
            </div>

            {/* Tab container — pill style sama dengan NewEntry */}
            <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden">
                <div className="p-3 border-b border-gray-200 dark:border-gray-800">
                    <nav className="flex rounded-lg bg-gray-100 p-1 dark:bg-gray-900">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-1 items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === tab.id
                                    ? "bg-white text-gray-900 shadow-theme-xs dark:bg-white/[0.03] dark:text-white"
                                    : "bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="pb-6">{renderTabContent()}</div>
            </div>

            {/* Footer buttons */}
            <div className="mt-6 flex items-center justify-center gap-4">
                {isEditing ? (
                    <>
                        <button
                            onClick={() => setShowSaveSuccess(true)}
                            className="flex items-center gap-2 h-11 px-6 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium shadow-theme-xs transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center gap-2 h-11 px-6 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow-theme-xs transition-colors"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 h-11 px-6 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium shadow-theme-xs transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 11.5V14h2.5l7.37-7.37-2.5-2.5L2 11.5zm11.8-6.8a.665.665 0 0 0 0-.94L12.24 2.2a.665.665 0 0 0-.94 0l-1.23 1.23 2.5 2.5 1.23-1.23z" fill="currentColor" /></svg>
                            Modify
                        </button>
                        <button className="flex items-center gap-2 h-11 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium shadow-theme-xs transition-colors">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M18 10c0 4.418-3.582 8-8 8a7.96 7.96 0 0 1-4.472-1.362L2 18l1.362-3.528A7.96 7.96 0 0 1 2 10C2 5.582 5.582 2 10 2s8 3.582 8 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 6v4M10 13v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            Question Request Response
                        </button>
                        <button
                            onClick={() => setShowCloseSuccess(true)}
                            className="flex items-center gap-2 h-11 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium shadow-theme-xs transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Close Application
                        </button>
                    </>
                )}
            </div>

            {showSaveSuccess && (
                <AlertDialog
                    message="Successfully Modified"
                    onOk={() => { setShowSaveSuccess(false); setIsEditing(false); }}
                />
            )}
            {showCloseSuccess && (
                <AlertDialog
                    message="Application Closed Successfully"
                    onOk={() => { setShowCloseSuccess(false); navigate(-1); }}
                />
            )}
        </>
    );
}
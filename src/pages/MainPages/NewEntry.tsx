import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import { Upload, FolderOpen } from "lucide-react";

import { BasicTab } from "../EntryTabs/BasicTab";
import { PrimaryTab } from "../EntryTabs/PrimaryTab";
import { SrtaTab } from "../EntryTabs/SrtaTab";
import { TemporaryTab } from "../EntryTabs/TemporaryTab";
import { RequestTab } from "../EntryTabs/RequestTab";
import { RaTab } from "../EntryTabs/RaTab";
import { DfaTab } from "../EntryTabs/DfaTab";
import { OccurrenceTab } from "../EntryTabs/OccurrenceTab";
import { OutflowTab } from "../EntryTabs/OutflowTab";

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
];

const PlaceholderTab = ({ label }: { label: string }) => (
    <div className="py-12 flex items-center justify-center text-sm text-gray-400 dark:text-gray-500">
        {label} tab — form will be added here.
    </div>
);

// ──────────────────────────────────────────────
// Main NewEntry Component
// ──────────────────────────────────────────────
export default function NewEntry() {
    const [activeTab, setActiveTab] = useState("basic");

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
            default: return <PlaceholderTab label={TABS.find((t) => t.id === activeTab)?.label ?? activeTab} />;
        }
    };

    return (
        <>
            <PageMeta
                title="New Entry | CCH - Customer Complaint Handling"
                description="Halaman input data baru Customer Complaint Handling"
            />

            {/* Page header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Data Entry</h2>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 h-11 rounded-lg bg-brand-500 px-5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 transition-colors">
                        <Upload className="w-4 h-4" />
                        Submit
                    </button>
                    <button className="flex items-center gap-2 h-11 rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                        <FolderOpen className="w-4 h-4" />
                        Save draft
                    </button>
                </div>
            </div>

            {/* Tab container */}
            <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden">
                {/* Tab bar — DefaultTab pill style */}
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

                {/* Tab content */}
                <div className="pb-6">
                    {renderTabContent()}
                </div>
            </div>
        </>
    );
}
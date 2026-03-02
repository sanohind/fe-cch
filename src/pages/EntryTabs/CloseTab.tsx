import { useState } from "react";
import { Upload } from "lucide-react";
import { textareaClass, GRID, LabelCell, ValueCell, FileUploadField } from "./shared";

export const CloseTab = ({ isEditing }: { isEditing: boolean }) => {
    const [cost1, setCost1] = useState(0);
    const [cost2, setCost2] = useState(0);
    const [cost3, setCost3] = useState(0);
    const total = cost1 + cost2 + cost3;

    const costInputClass =
        "w-36 h-9 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-right text-gray-800 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <div>
            {/* Input by */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Input by</LabelCell>
                <ValueCell span>
                    <span className="text-sm text-gray-800 dark:text-white">Ryomen Sukuna</span>
                </ValueCell>
            </div>

            {/* Level of Importance */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Level of Importance by Customer Information</LabelCell>
                <ValueCell span>
                    <span className="text-sm text-gray-800 dark:text-white">A</span>
                </ValueCell>
            </div>

            {/* Count by Customer */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Count by Customer</LabelCell>
                <ValueCell span>
                    <span className="text-sm text-gray-800 dark:text-white">Undetermined</span>
                </ValueCell>
            </div>

            {/* Countermeasure Against Occurrence */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Countermeasure Against Occurrence</LabelCell>
                <ValueCell span className="items-stretch py-3.5">
                    {isEditing
                        ? <textarea rows={2} placeholder="Type here" className={textareaClass} />
                        : <span className="text-sm text-gray-400">-</span>
                    }
                </ValueCell>
            </div>

            {/* Countermeasure Against Outflow */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Countermeasure Against Outflow</LabelCell>
                <ValueCell span className="items-stretch py-3.5">
                    {isEditing
                        ? <textarea rows={2} placeholder="Type here" className={textareaClass} />
                        : <span className="text-sm text-gray-400">-</span>
                    }
                </ValueCell>
            </div>

            {/* Final Report */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Final Report</LabelCell>
                <ValueCell span>
                    <div className="flex items-center gap-3 w-full">
                        <label className={`flex flex-1 items-center justify-between h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-400 dark:border-gray-700 dark:bg-gray-900 transition-colors ${isEditing ? "cursor-pointer hover:border-brand-300" : "opacity-50 cursor-not-allowed"}`}>
                            <span>Choose file</span>
                            <Upload className="w-4 h-4 text-gray-400" />
                            <input type="file" className="hidden" disabled={!isEditing} />
                        </label>
                        <span className="text-sm text-gray-400 whitespace-nowrap">No file choosen</span>
                    </div>
                </ValueCell>
            </div>

            {/* Top Claim Costs */}
            <div
                className="grid border-b border-gray-100 dark:border-gray-800"
                style={{ gridTemplateColumns: "220px minmax(0,1fr) 210px 220px", gridTemplateRows: "auto auto auto auto" }}
            >
                <div className="row-span-4 flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Top Claim Costs</span>
                </div>
                <div className="col-span-3 flex items-center px-6 py-3 border-l border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Currency</span>
                </div>
                <div className="col-span-3 flex items-center justify-between px-6 py-3 border-l border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-700 dark:text-gray-300">1 – Cost to be paid to Customer</span>
                    <input type="number" value={cost1} onChange={(e) => setCost1(Number(e.target.value))} disabled={!isEditing} className={costInputClass} />
                </div>
                <div className="col-span-3 flex items-center justify-between px-6 py-3 border-l border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-700 dark:text-gray-300">2 – Cost to be paid to External (services) provider</span>
                    <input type="number" value={cost2} onChange={(e) => setCost2(Number(e.target.value))} disabled={!isEditing} className={costInputClass} />
                </div>
                <div className="col-span-3 flex items-center justify-between px-6 py-3 border-l border-b border-gray-100 dark:border-gray-800">
                    <span className="text-sm text-gray-700 dark:text-gray-300">3 – Internal cost</span>
                    <input type="number" value={cost3} onChange={(e) => setCost3(Number(e.target.value))} disabled={!isEditing} className={costInputClass} />
                </div>
                <div className="col-span-3 flex items-center justify-between px-6 py-3 border-l border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total (1 + 2 + 3)</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">{total}</span>
                </div>
            </div>

            {/* Recurrence or No-recurrence */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Recurrence or No-recurrence</LabelCell>
                <ValueCell span>
                    <div className="flex gap-6">
                        {["yes", "no"].map((v) => (
                            <label key={v} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="recurrence" value={v} disabled={!isEditing} className="w-4 h-4 accent-brand-500 disabled:opacity-50" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{v === "yes" ? "Yes" : "No"}</span>
                            </label>
                        ))}
                    </div>
                </ValueCell>
            </div>

            {/* Request for horizontal development */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Request for horizontal development</LabelCell>
                <ValueCell span>
                    <div className="flex gap-6">
                        {["yes", "no"].map((v) => (
                            <label key={v} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="horizontal_dev" value={v} disabled={!isEditing} className="w-4 h-4 accent-brand-500 disabled:opacity-50" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{v === "yes" ? "Yes" : "No"}</span>
                            </label>
                        ))}
                    </div>
                </ValueCell>
            </div>

            {/* Author comment */}
            <div className={`${GRID}`}>
                <LabelCell>Author comment</LabelCell>
                <ValueCell span className="items-stretch py-3.5">
                    <textarea
                        rows={3}
                        placeholder="Type your comment here"
                        disabled={!isEditing}
                        className={textareaClass + " disabled:opacity-50 disabled:cursor-not-allowed"}
                    />
                </ValueCell>
            </div>
        </div>
    );
};

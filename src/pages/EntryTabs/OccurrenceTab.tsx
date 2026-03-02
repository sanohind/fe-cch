import { useState } from "react";
import { inputClass, selectClass, textareaClass, GRID, LabelCell, ValueCell, ShadeCell, SecondaryValueCell, SelectWrapper, RadioOption } from "./shared";

export const OccurrenceTab = () => {
    const [defectMadeBy, setDefectMadeBy] = useState<"own_plant" | "other_sanoh" | "supplier" | "unknown">("supplier");

    const showPlantFields = defectMadeBy === "own_plant" || defectMadeBy === "other_sanoh";
    const showSupplierField = defectMadeBy === "supplier";
    const showProcessAndCause = defectMadeBy !== "unknown";

    return (
        <div>
            {/* Status | - | Latest modified | - */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Status</LabelCell>
                <ValueCell>
                    <span className="text-sm text-gray-400 dark:text-gray-500">-</span>
                </ValueCell>
                <ShadeCell>Latest modified</ShadeCell>
                <SecondaryValueCell>
                    <span className="text-sm text-gray-400 dark:text-gray-500">-</span>
                </SecondaryValueCell>
            </div>

            {/* Defect made by * | radio options */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell required>Defect made by</LabelCell>
                <ValueCell span>
                    <div className="flex gap-6 items-center">
                        {[
                            { value: "own_plant", label: "Own Plant" },
                            { value: "other_sanoh", label: "Other Sanoh Plant" },
                            { value: "supplier", label: "Supplier" },
                            { value: "unknown", label: "Unknown" },
                        ].map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="defect_made_by"
                                    value={opt.value}
                                    checked={defectMadeBy === opt.value}
                                    onChange={() => setDefectMadeBy(opt.value as typeof defectMadeBy)}
                                    className="w-4 h-4 accent-brand-500"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{opt.label}</span>
                            </label>
                        ))}
                    </div>
                </ValueCell>
            </div>

            {/* Own Plant / Other Sanoh → Responsible Plant | Office | Plant */}
            {showPlantFields && (
                <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                    <LabelCell>Responsible Plant</LabelCell>
                    <ValueCell>
                        <SelectWrapper>
                            <select className={selectClass}>
                                <option value="">Responsible plant</option>
                                <option>Plant A</option>
                                <option>Plant B</option>
                            </select>
                        </SelectWrapper>
                    </ValueCell>
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 dark:bg-gray-800/60 border-l border-gray-100 dark:border-gray-800">
                        <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">Office</span>
                        <SelectWrapper>
                            <select className={selectClass}>
                                <option value="">Office</option>
                                <option>Office A</option>
                                <option>Office B</option>
                            </select>
                        </SelectWrapper>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3.5 border-l border-gray-100 dark:border-gray-800">
                        <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">Plant</span>
                        <SelectWrapper>
                            <select className={selectClass}>
                                <option value="">Plant</option>
                                <option>Plant A</option>
                                <option>Plant B</option>
                            </select>
                        </SelectWrapper>
                    </div>
                </div>
            )}

            {/* Supplier → Supplier name input */}
            {showSupplierField && (
                <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                    <LabelCell>Supplier name</LabelCell>
                    <ValueCell span>
                        <input type="text" placeholder="Supplier name" className={inputClass} />
                    </ValueCell>
                </div>
            )}

            {/* Process name | select + factor radios (row-span-2) | Comment textarea (row-span-2) */}
            {showProcessAndCause && (
                <div
                    className="grid border-b border-gray-100 dark:border-gray-800"
                    style={{ gridTemplateColumns: "220px minmax(0,1fr) 210px 220px", gridTemplateRows: "auto auto" }}
                >
                    <div className="row-span-2 flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Process name</span>
                    </div>
                    <div className="flex items-center px-6 py-3.5 border-l border-b border-gray-100 dark:border-gray-800">
                        <SelectWrapper>
                            <select className={selectClass}>
                                <option value="">Process name</option>
                                <option>Process A</option>
                                <option>Process B</option>
                            </select>
                        </SelectWrapper>
                    </div>
                    <div className="row-span-2 flex items-start px-6 pt-3.5 bg-gray-50 dark:bg-gray-800/60 border-l border-gray-100 dark:border-gray-800">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Comment</span>
                    </div>
                    <div className="row-span-2 flex items-stretch px-6 py-3.5 border-l border-gray-100 dark:border-gray-800">
                        <textarea rows={4} placeholder="Type your comment here" className={textareaClass + " flex-1"} />
                    </div>
                    <div className="flex items-center gap-6 px-6 py-3.5 border-l border-gray-100 dark:border-gray-800">
                        {["Man", "Method", "Machine", "Material", "Design"].map((opt) => (
                            <RadioOption key={opt} name="process_factor" value={opt.toLowerCase()} label={opt} />
                        ))}
                    </div>
                </div>
            )}

            {/* Occurrence cause | select + textarea */}
            <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                <LabelCell>Occurrence cause</LabelCell>
                <ValueCell span className="items-stretch py-3.5">
                    <div className="flex flex-col gap-3 w-full">
                        <SelectWrapper>
                            <select className={selectClass}>
                                <option value="">Occurrence cause</option>
                                <option>Cause A</option>
                                <option>Cause B</option>
                            </select>
                        </SelectWrapper>
                        <textarea
                            rows={3}
                            placeholder="Please describe the cause of occurrence"
                            className={textareaClass}
                        />
                    </div>
                </ValueCell>
            </div>

            {/* Author comment */}
            <div className={`${GRID}`}>
                <LabelCell>Author comment</LabelCell>
                <ValueCell span className="items-stretch py-3.5">
                    <textarea rows={3} placeholder="Type your comment here" className={textareaClass} />
                </ValueCell>
            </div>
        </div>
    );
};

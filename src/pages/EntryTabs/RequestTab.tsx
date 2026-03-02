import { useState } from "react";
import { inputClass, selectClass, textareaClass, GRID, LabelCell, ValueCell, ShadeCell, SecondaryValueCell, SelectWrapper } from "./shared";

export const RequestTab = () => {
    const [items, setItems] = useState([{ id: 1 }]);

    const addItem = () => {
        setItems((prev) => [...prev, { id: prev.length + 1 }]);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={item.id}>
                    {/* Department (n) | select | Due Date (n) | date */}
                    <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
                        <LabelCell>Department ({index + 1})</LabelCell>
                        <ValueCell>
                            <SelectWrapper>
                                <select className={selectClass}>
                                    <option value="">Select department</option>
                                    <option>Engineering</option>
                                    <option>Quality</option>
                                    <option>Production</option>
                                    <option>Logistics</option>
                                </select>
                            </SelectWrapper>
                        </ValueCell>
                        <ShadeCell>Due Date ({index + 1})</ShadeCell>
                        <SecondaryValueCell>
                            <input type="date" className={inputClass} />
                        </SecondaryValueCell>
                    </div>

                    {/* Description (n) | textarea + add button on last item */}
                    <div
                        className={`${GRID} ${index < items.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}
                    >
                        <LabelCell>Description ({index + 1})</LabelCell>
                        <ValueCell span className="items-stretch py-3.5 gap-3">
                            <textarea
                                rows={2}
                                placeholder="Type your description here"
                                className={textareaClass + " flex-1"}
                            />
                            {index === items.length - 1 && (
                                <button
                                    onClick={addItem}
                                    className="self-stretch px-4 rounded-lg bg-brand-500 hover:bg-brand-600 text-white transition-colors flex items-center justify-center shrink-0"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            )}
                        </ValueCell>
                    </div>
                </div>
            ))}
        </div>
    );
};

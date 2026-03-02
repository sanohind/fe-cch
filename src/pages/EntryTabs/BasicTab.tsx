import { Upload } from "lucide-react";
import { inputClass, selectClass, GRID, LabelCell, ValueCell, ShadeCell, SecondaryValueCell, SelectWrapper, RadioOption } from "./shared";

export const BasicTab = () => (
    <div>
        {/* ── Input by | Ryomen Sukuna | Date | 2026/02/24 ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Input by</LabelCell>
            <ValueCell>
                <span className="text-sm font-medium text-gray-800 dark:text-white">Ryomen Sukuna</span>
            </ValueCell>
            <ShadeCell>Date</ShadeCell>
            <SecondaryValueCell>
                <span className="text-sm font-medium text-gray-800 dark:text-white">2026/02/24</span>
            </SecondaryValueCell>
        </div>

        {/* ── Status | - | Latest modified | 2026/02/25 ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Status</LabelCell>
            <ValueCell>
                <span className="text-sm text-gray-400 dark:text-gray-500">-</span>
            </ValueCell>
            <ShadeCell>Latest modified</ShadeCell>
            <SecondaryValueCell>
                <span className="text-sm font-medium text-gray-800 dark:text-white">2026/02/25</span>
            </SecondaryValueCell>
        </div>

        {/* ── Subject * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Subject</LabelCell>
            <ValueCell span>
                <input type="text" placeholder="Input your subject" className={inputClass} />
            </ValueCell>
        </div>

        {/* ── Division in Charge * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Division in Charge</LabelCell>
            <ValueCell span>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Division</option>
                        <option>Chassis</option>
                        <option>Brazing</option>
                        <option>Engine</option>
                    </select>
                </SelectWrapper>
            </ValueCell>
        </div>

        {/* ── Report category * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Report category</LabelCell>
            <ValueCell span>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Report category</option>
                        <option>Internal</option>
                        <option>Customer</option>
                    </select>
                </SelectWrapper>
            </ValueCell>
        </div>

        {/* ── Customer * | [select] | Plant of customer | [select] ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Customer</LabelCell>
            <ValueCell>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Customer</option>
                        <option>Sanoh Gr.</option>
                        <option>TMMIN</option>
                        <option>ADM</option>
                        <option>HPM</option>
                        <option>Toyota</option>
                        <option>Honda</option>
                    </select>
                </SelectWrapper>
            </ValueCell>
            <ShadeCell>Plant of customer</ShadeCell>
            <SecondaryValueCell>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Plant</option>
                        <option>Plant A</option>
                        <option>Plant B</option>
                    </select>
                </SelectWrapper>
            </SecondaryValueCell>
        </div>

        {/* ── Defect class * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Defect class</LabelCell>
            <ValueCell span>
                <div className="flex flex-wrap gap-6 items-center">
                    <RadioOption name="defect_class" value="quality" label="Quality trouble" />
                    <RadioOption name="defect_class" value="delivery" label="Delivery trouble" />
                </div>
            </ValueCell>
        </div>

        {/* ── Line stop * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Line stop</LabelCell>
            <ValueCell span>
                <div className="flex flex-wrap gap-6 items-center">
                    <RadioOption name="line_stop" value="yes" label="Yes" />
                    <RadioOption name="line_stop" value="no" label="No" />
                </div>
            </ValueCell>
        </div>

        {/* ── Count by Customer * | [radios 2 sub-rows] | The month of counted (merged) | month input (merged) ── */}
        <div
            className="grid border-b border-gray-100 dark:border-gray-800"
            style={{ gridTemplateColumns: "220px minmax(0,1fr) 210px 220px", gridTemplateRows: "auto auto" }}
        >
            <div className="row-span-2 flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                    Count by Customer<span className="ml-0.5 text-red-500">*</span>
                </span>
            </div>
            <div className="flex items-center gap-6 px-6 py-3.5 border-l border-b border-gray-100 dark:border-gray-800">
                <RadioOption name="count_by_customer" value="yes" label="Yes" />
                <RadioOption name="count_by_customer" value="no_resp" label="No (Responsibility)" />
            </div>
            <div className="row-span-2 flex items-center justify-start px-6 bg-gray-50 dark:bg-gray-800/60 border-l border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">The month of counted</span>
            </div>
            <div className="row-span-2 flex items-center px-6 border-l border-gray-100 dark:border-gray-800">
                <input type="month" className={inputClass} />
            </div>
            <div className="flex items-center gap-6 px-6 py-3.5 border-l border-gray-100 dark:border-gray-800">
                <RadioOption name="count_by_customer" value="no_non_resp" label="No (Non Responsibility)" />
                <RadioOption name="count_by_customer" value="undetermined" label="Undetermined" />
            </div>
        </div>

        {/* ── Level important SQS * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Level important by Internal Rules (SQS)</LabelCell>
            <ValueCell span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                    <RadioOption name="level_sqs" value="a_internal" label="A (Internal)" />
                    <RadioOption name="level_sqs" value="b_internal" label="B" />
                    <RadioOption name="level_sqs" value="no_internal" label="No (Internal)" />
                    <RadioOption name="level_sqs" value="c_internal" label="C (Internal)" />
                    <RadioOption name="level_sqs" value="not_applicable_internal" label="Not of Applicable (Internal)" />
                    <RadioOption name="level_sqs" value="m_internal" label="M (Internal)" />
                </div>
            </ValueCell>
        </div>

        {/* ── Level important Customer * ── */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Level important by Customer Information</LabelCell>
            <ValueCell span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                    <RadioOption name="level_customer" value="a_customer" label="A (Customer)" />
                    <RadioOption name="level_customer" value="b_customer" label="B" />
                    <RadioOption name="level_customer" value="no_customer" label="No (Customer)" />
                    <RadioOption name="level_customer" value="c_customer" label="C (Customer)" />
                    <RadioOption name="level_customer" value="undetermined" label="Undetermined" />
                    <RadioOption name="level_customer" value="not_applicable_customer" label="Not of Applicable (Customer)" />
                </div>
            </ValueCell>
        </div>

        {/* ── File Attachment ── */}
        <div className={`${GRID}`}>
            <LabelCell>File Attachment</LabelCell>
            <ValueCell span>
                <div className="flex items-center gap-3 w-full">
                    <label className="flex flex-1 items-center justify-between h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-400 cursor-pointer dark:border-gray-700 dark:bg-gray-900 hover:border-brand-300 transition-colors">
                        <span>Choose file</span>
                        <Upload className="w-4 h-4 text-gray-400" />
                        <input type="file" className="hidden" />
                    </label>
                    <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                        No file choosen
                    </span>
                </div>
            </ValueCell>
        </div>
    </div>
);

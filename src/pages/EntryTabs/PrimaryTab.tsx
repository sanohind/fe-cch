import { inputClass, selectClass, textareaClass, GRID, LabelCell, ValueCell, ShadeCell, SecondaryValueCell, SelectWrapper, RadioOption, FileUploadField } from "./shared";

export const PrimaryTab = () => (
    <div>
        {/* Failure mode | select | Date of defect found* | date input */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Failure mode</LabelCell>
            <ValueCell>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Failure</option>
                        <option>Dimensional</option>
                        <option>Visual</option>
                        <option>Functional</option>
                    </select>
                </SelectWrapper>
            </ValueCell>
            <ShadeCell required>Date of defect found</ShadeCell>
            <SecondaryValueCell>
                <input type="date" className={inputClass} />
            </SecondaryValueCell>
        </div>

        {/* Defect qty + Defect photo | Comment textarea (row-span-3) */}
        <div
            className="grid border-b border-gray-100 dark:border-gray-800"
            style={{ gridTemplateColumns: "220px minmax(0,1fr) 210px 220px", gridTemplateRows: "auto auto auto" }}
        >
            <div className="flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-700 dark:text-gray-300">Defect qty<span className="ml-0.5 text-red-500">*</span></span>
            </div>
            <div className="flex items-center px-6 py-3.5 border-l border-b border-gray-100 dark:border-gray-800">
                <span className="text-sm font-medium text-gray-800 dark:text-white">0</span>
            </div>
            <div className="row-span-3 flex items-start px-6 pt-3.5 bg-gray-50 dark:bg-gray-800/60 border-l border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300">Comment</span>
            </div>
            <div className="row-span-3 flex items-stretch px-6 py-3.5 border-l border-gray-100 dark:border-gray-800">
                <textarea rows={5} placeholder="Type your comment here" className={textareaClass + " flex-1"} />
            </div>
            <div className="row-span-2 flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60">
                <span className="text-sm text-gray-700 dark:text-gray-300">Defect photo</span>
            </div>
            <div className="flex flex-col gap-1.5 px-6 py-3 border-l border-b border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">Overall</span>
                <FileUploadField />
            </div>
            <div className="flex flex-col gap-1.5 px-6 py-3 border-l border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">Rejection Area</span>
                <FileUploadField />
            </div>
        </div>

        {/* Part no* | input | Part name | input */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Part no</LabelCell>
            <ValueCell>
                <input type="text" placeholder="Part no" className={inputClass} />
            </ValueCell>
            <ShadeCell>Part name</ShadeCell>
            <SecondaryValueCell>
                <input type="text" placeholder="Part name" className={inputClass} />
            </SecondaryValueCell>
        </div>

        {/* Product Category* | select | Product Family | select */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Product Category</LabelCell>
            <ValueCell>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Product Category</option>
                        <option>Category A</option>
                        <option>Category B</option>
                    </select>
                </SelectWrapper>
            </ValueCell>
            <ShadeCell>Product Family</ShadeCell>
            <SecondaryValueCell>
                <SelectWrapper>
                    <select className={selectClass}>
                        <option value="">Product Family</option>
                        <option>Family A</option>
                        <option>Family B</option>
                    </select>
                </SelectWrapper>
            </SecondaryValueCell>
        </div>

        {/* Line stop* | 2-row radio */}
        <div
            className="grid border-b border-gray-100 dark:border-gray-800"
            style={{ gridTemplateColumns: "220px minmax(0,1fr) 210px 220px", gridTemplateRows: "auto auto" }}
        >
            <div className="row-span-2 flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60">
                <span className="text-sm text-gray-700 dark:text-gray-300">Line stop<span className="ml-0.5 text-red-500">*</span></span>
            </div>
            <div className="flex items-center gap-6 px-6 py-3.5 col-span-3 border-l border-b border-gray-100 dark:border-gray-800">
                <RadioOption name="line_stop_p" value="trial" label="Trial" />
                <RadioOption name="line_stop_p" value="trial_mp" label="Trial for Mass Production" />
                <RadioOption name="line_stop_p" value="mp_3mo" label="Mass Production (within first three month)" />
            </div>
            <div className="flex items-center gap-6 px-6 py-3.5 col-span-3 border-l border-gray-100 dark:border-gray-800">
                <RadioOption name="line_stop_p" value="mp_after_3mo" label="Mass Production (after first three month)" />
                <RadioOption name="line_stop_p" value="service_parts" label="Service Parts" />
            </div>
        </div>

        {/* Product supply form* | radio */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell required>Product supply form</LabelCell>
            <ValueCell span>
                <div className="flex gap-6 items-center">
                    <RadioOption name="product_supply" value="knockdown" label="Knockdown Product" />
                    <RadioOption name="product_supply" value="pass_through" label="Pass Through Product" />
                    <RadioOption name="product_supply" value="not_subject" label="Not Subject" />
                </div>
            </ValueCell>
        </div>

        {/* Estimation of the process */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Estimation of the process of defect occurrence and outflow</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea
                    rows={3}
                    placeholder="Please describe the standard process and defect occurrence and outflow control."
                    className={textareaClass}
                />
            </ValueCell>
        </div>

        {/* Possibility of defects spreading */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Possibility of defects spreading to other parts</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea
                    rows={2}
                    placeholder="If there is a possibility that the defect has spread to other part numbers, please describe the reason and the situation"
                    className={textareaClass}
                />
            </ValueCell>
        </div>

        {/* Comment of QA department director */}
        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Comment of QA department director</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea rows={3} placeholder="Type your comment here" className={textareaClass} />
            </ValueCell>
        </div>

        {/* Author comment + file */}
        <div className={`${GRID}`}>
            <LabelCell>Author comment</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <div className="flex flex-col gap-3 w-full">
                    <textarea rows={3} placeholder="Type your comment here" className={textareaClass} />
                    <div className="flex items-center gap-3">
                        <FileUploadField />
                        <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">No file choosen</span>
                    </div>
                </div>
            </ValueCell>
        </div>
    </div>
);

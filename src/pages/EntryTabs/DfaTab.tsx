import { textareaClass, GRID, LabelCell, ValueCell, ShadeCell, SecondaryValueCell, FileUploadField } from "./shared";

export const DfaTab = () => (
    <div>
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

        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Defective factor analysis sheet</LabelCell>
            <ValueCell span>
                <div className="flex items-center gap-3 w-full">
                    <FileUploadField />
                    <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">No file choosen</span>
                </div>
            </ValueCell>
        </div>

        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Corrective actor checksheet</LabelCell>
            <ValueCell span>
                <div className="flex items-center gap-3 w-full">
                    <FileUploadField />
                    <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">No file choosen</span>
                </div>
            </ValueCell>
        </div>

        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Occurrence mechanism</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea
                    rows={3}
                    placeholder="Please write down complentrary information regarding defect occurrence"
                    className={textareaClass}
                />
            </ValueCell>
        </div>

        <div className={`${GRID} border-b border-gray-100 dark:border-gray-800`}>
            <LabelCell>Outflow mechanism</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea
                    rows={3}
                    placeholder="Please write down complentrary information regarding defect outflow"
                    className={textareaClass}
                />
            </ValueCell>
        </div>

        <div className={`${GRID}`}>
            <LabelCell>Author comment</LabelCell>
            <ValueCell span className="items-stretch py-3.5">
                <textarea rows={3} placeholder="Type your comment here" className={textareaClass} />
            </ValueCell>
        </div>
    </div>
);

import { textareaClass, GRID, LabelCell, ValueCell, FileUploadField } from "./shared";

export const TemporaryTab = () => (
    <div>
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

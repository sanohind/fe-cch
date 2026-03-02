import { textareaClass, GRID, ShadeCell, ValueCell, FileUploadField } from "./shared";

const qtyInputClass =
    "w-16 h-8 rounded-md border border-gray-300 bg-transparent px-2 text-sm text-center text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90";

const SrtaRow = ({
    categoryLabel,
    categoryRowSpan,
    isFirstInGroup,
    subLabel,
    rightOptions,
    showNoneRight = false,
}: {
    categoryLabel?: string;
    categoryRowSpan?: number;
    isFirstInGroup?: boolean;
    subLabel: string;
    rightOptions: string[];
    showNoneRight?: boolean;
}) => (
    <tr className="border-b border-gray-100 dark:border-gray-800">
        {isFirstInGroup && categoryLabel && (
            <td
                rowSpan={categoryRowSpan}
                className="px-6 py-3.5 align-middle bg-gray-50 dark:bg-gray-800/60 border-r border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
            >
                {categoryLabel}
            </td>
        )}
        <td className="px-4 py-3 border-r border-gray-100 dark:border-gray-800">
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-brand-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{subLabel}</span>
            </label>
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 border-r border-gray-100 dark:border-gray-800 whitespace-nowrap">NG</td>
        <td className="px-3 py-3 border-r border-gray-100 dark:border-gray-800">
            <input type="number" defaultValue={0} className={qtyInputClass} />
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 border-r border-gray-100 dark:border-gray-800 whitespace-nowrap">OK</td>
        <td className="px-3 py-3 border-r border-gray-100 dark:border-gray-800">
            <input type="number" defaultValue={0} className={qtyInputClass} />
        </td>
        <td className="px-4 py-3 border-r border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-1.5">
                {rightOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-brand-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{opt}</span>
                    </label>
                ))}
            </div>
        </td>
        <td className="px-3 py-3 border-r border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-1.5">
                {rightOptions.map((opt) => (
                    <input key={opt} type="number" defaultValue={0} className={qtyInputClass} />
                ))}
            </div>
        </td>
        <td className="px-4 py-3">
            {showNoneRight && (
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-brand-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">None</span>
                </label>
            )}
        </td>
    </tr>
);

export const SrtaTab = () => (
    <div>
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <tbody>
                    <SrtaRow categoryLabel="Customer" categoryRowSpan={2} isFirstInGroup subLabel="Completed cars" rightOptions={["Conversion"]} showNoneRight={false} />
                    <SrtaRow subLabel="Sorting" rightOptions={["Replacement"]} showNoneRight />
                    <SrtaRow categoryLabel="Depot" categoryRowSpan={1} isFirstInGroup subLabel="Sorting" rightOptions={["Replacement"]} showNoneRight />
                    <SrtaRow categoryLabel="Internal" categoryRowSpan={1} isFirstInGroup subLabel="Sorting" rightOptions={["None"]} showNoneRight={false} />
                    <SrtaRow categoryLabel="Supplier" categoryRowSpan={1} isFirstInGroup subLabel="Sorting" rightOptions={["None"]} showNoneRight={false} />
                </tbody>
            </table>
        </div>

        <div className={`${GRID} border-t border-gray-100 dark:border-gray-800`}>
            <ShadeCell>Author comment</ShadeCell>
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

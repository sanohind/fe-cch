import { Upload } from "lucide-react";

// ──────────────────────────────────────────────
// Style constants
// ──────────────────────────────────────────────
export const inputClass =
    "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800";

export const selectClass =
    "h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-10 text-sm shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400";

export const textareaClass =
    "w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 resize-none";

// ONE grid template used for every row.
// col1 = label | col2 = primary value | col3 = secondary label (shaded) | col4 = secondary value
export const GRID = "grid grid-cols-[220px_minmax(0,1fr)_210px_220px]";

// ──────────────────────────────────────────────
// Cell components
// ──────────────────────────────────────────────

/** Col 1 — field label */
export const LabelCell = ({
    children,
    required,
    className = "",
}: {
    children: React.ReactNode;
    required?: boolean;
    className?: string;
}) => (
    <div className={`flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60 ${className}`}>
        <span className="text-sm text-gray-700 dark:text-gray-300">
            {children}
            {required && <span className="ml-0.5 text-red-500">*</span>}
        </span>
    </div>
);

/** Col 3 — shaded secondary label */
export const ShadeCell = ({
    children,
    required,
    className = "",
}: {
    children: React.ReactNode;
    required?: boolean;
    className?: string;
}) => (
    <div
        className={`flex items-center px-6 py-3.5 bg-gray-50 dark:bg-gray-800/60 border-l border-gray-100 dark:border-gray-800 ${className}`}
    >
        <span className="text-sm text-gray-600 dark:text-gray-300">
            {children}
            {required && <span className="ml-0.5 text-red-500">*</span>}
        </span>
    </div>
);

/** Col 2 (or col 2-4 via col-span-3) — primary value / input */
export const ValueCell = ({
    children,
    span = false,
    className = "",
}: {
    children: React.ReactNode;
    span?: boolean;
    className?: string;
}) => (
    <div
        className={`flex items-center px-6 py-3.5 border-l border-gray-100 dark:border-gray-800 ${span ? "col-span-3" : ""} ${className}`}
    >
        {children}
    </div>
);

/** Col 4 — secondary value */
export const SecondaryValueCell = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`flex items-center px-6 py-3.5 border-l border-gray-100 dark:border-gray-800 ${className}`}
    >
        {children}
    </div>
);

export const SelectWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full">
        {children}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    </div>
);

export const RadioOption = ({
    name,
    value,
    label,
}: {
    name: string;
    value: string;
    label: string;
}) => (
    <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name={name} value={value} className="w-4 h-4 accent-brand-500" />
        <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{label}</span>
    </label>
);

export const FileUploadField = () => (
    <label className="flex flex-1 items-center justify-between h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-400 cursor-pointer dark:border-gray-700 dark:bg-gray-900 hover:border-brand-300 transition-colors">
        <span>Choose file</span>
        <Upload className="w-4 h-4 text-gray-400" />
        <input type="file" className="hidden" />
    </label>
);

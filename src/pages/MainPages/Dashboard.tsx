import { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import PaginationWithButton from "../../components/tables/DataTables/TableTwo/PaginationWithButton";
import PageMeta from "../../components/common/PageMeta";
import { useNavigate } from "react-router";
import { Triangle, Circle, X } from "lucide-react";

// ──────────────────────────────────────────────
// Types & Dummy Data
// ──────────────────────────────────────────────
type StatusType = "circle" | "triangle" | "x";
type LevelType = "A" | "B" | "C" | "NA" | "M";

interface ReportEntry {
    id: number;
    statusDot: StatusType;
    level: LevelType;
    customer: string;
    division: string;
    date: string;
    reportCategory: string;
    failure: string;
    mode: string;
    subject: string;
    creator: string;
}


const tableData: ReportEntry[] = [
    {
        id: 1,
        statusDot: "circle",
        level: "A",
        customer: "Sanoh Gr.",
        division: "Chassis",
        date: "2026/02/24",
        reportCategory: "Internal",
        failure: "Other",
        mode: "",
        subject: "Subject 1",
        creator: "Ryomen Sukuna",
    },
    {
        id: 2,
        statusDot: "circle",
        level: "B",
        customer: "TMMIN",
        division: "Brazing",
        date: "2026/02/25",
        reportCategory: "Customer",
        failure: "Leak",
        mode: "",
        subject: "Subject 2",
        creator: "Gojo Satoru",
    },
    {
        id: 3,
        statusDot: "circle",
        level: "C",
        customer: "ADM",
        division: "Brazing",
        date: "2026/02/26",
        reportCategory: "Customer",
        failure: "Leak",
        mode: "",
        subject: "Subject 3",
        creator: "Geto Suguru",
    },
    {
        id: 4,
        statusDot: "circle",
        level: "A",
        customer: "HPM",
        division: "Chassis",
        date: "2026/02/27",
        reportCategory: "Customer",
        failure: "Leak",
        mode: "",
        subject: "Subject 4",
        creator: "Itadori Yuji",
    },
    {
        id: 5,
        statusDot: "circle",
        level: "NA",
        customer: "",
        division: "",
        date: "",
        reportCategory: "",
        failure: "",
        mode: "",
        subject: "[DRAFT] Subject 5",
        creator: "Yuta Okkutsu",
    },
    {
        id: 6,
        statusDot: "circle",
        level: "M",
        customer: "",
        division: "",
        date: "",
        reportCategory: "",
        failure: "",
        mode: "",
        subject: "[DRAFT] Subject 6",
        creator: "Naoya Zenin",
    },
    {
        id: 7,
        statusDot: "triangle",
        level: "B",
        customer: "Toyota",
        division: "Engine",
        date: "2026/02/20",
        reportCategory: "Internal",
        failure: "Crack",
        mode: "Online",
        subject: "Subject 7",
        creator: "Megumi Fushiguro",
    },
    {
        id: 8,
        statusDot: "x",
        level: "A",
        customer: "Honda",
        division: "Brazing",
        date: "2026/02/19",
        reportCategory: "Customer",
        failure: "Dent",
        mode: "Offline",
        subject: "Subject 8",
        creator: "Nobara Kugisaki",
    },
    {
        id: 9,
        statusDot: "circle",
        level: "C",
        customer: "Daihatsu",
        division: "Chassis",
        date: "2026/02/18",
        reportCategory: "Internal",
        failure: "Leak",
        mode: "",
        subject: "Subject 9",
        creator: "Toge Inumaki",
    },
    {
        id: 10,
        statusDot: "triangle",
        level: "NA",
        customer: "Suzuki",
        division: "Engine",
        date: "2026/02/17",
        reportCategory: "Customer",
        failure: "Other",
        mode: "Online",
        subject: "Subject 10",
        creator: "Panda",
    },
];

// ──────────────────────────────────────────────
// Status icon renderer (lucide-react only)
// ──────────────────────────────────────────────
const StatusIcon = ({ type }: { type: StatusType }) => {
    if (type === "circle") {
        return <Circle className="w-4 h-4 fill-blue-500 text-blue-500" />;
    }
    if (type === "triangle") {
        return <Triangle className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
    }
    return <X className="w-4 h-4 text-gray-600 dark:text-gray-400" strokeWidth={2.5} />;
};

const levelStyles: Record<LevelType, string> = {
    A: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
    B: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
    C: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
    NA: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    M: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
};

const LevelBadge = ({ level }: { level: LevelType }) => (
    <span className={`inline-flex items-center justify-center w-8 h-6 rounded-md text-xs font-semibold ${levelStyles[level]}`}>
        {level}
    </span>
);

// ──────────────────────────────────────────────
// Reusable Filter Dropdown (no new CSS classes)
// ──────────────────────────────────────────────
interface FilterSelectProps {
    placeholder: string;
    options: string[];
    value: string;
    onChange: (val: string) => void;
}

const FilterSelect = ({ placeholder, options, value, onChange }: FilterSelectProps) => (
    <div className="relative">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-10 text-sm shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800 ${value ? "text-gray-800 dark:text-white/90" : "text-gray-400 dark:text-gray-400"
                }`}
        >
            <option value="">{placeholder}</option>
            {options.map((o) => (
                <option key={o} value={o} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
                    {o}
                </option>
            ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    </div>
);

// ──────────────────────────────────────────────
// Main Dashboard Component
// ──────────────────────────────────────────────
// ──────────────────────────────────────────────
// Dashboard Component
// ──────────────────────────────────────────────
export default function Dashboard() {
    const navigate = useNavigate();
    // Filter states (temporary)
    const [filterStatus, setFilterStatus] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterEventCategory, setFilterEventCategory] = useState("");
    const [filterCustomer, setFilterCustomer] = useState("");
    const [filterReportCategory, setFilterReportCategory] = useState("");
    const [filterProductCategory, setFilterProductCategory] = useState("");
    const [filterPriority, setFilterPriority] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Applied states (to filter the table only when Submit is clicked)
    const [appliedFilters, setAppliedFilters] = useState({
        status: "",
        location: "",
        eventCat: "",
        customer: "",
        reportCat: "",
        productCat: "",
        priority: "",
        date: "",
        search: ""
    });

    // Table states
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const handleApplyFilters = () => {
        setAppliedFilters({
            status: filterStatus,
            location: filterLocation,
            eventCat: filterEventCategory,
            customer: filterCustomer,
            reportCat: filterReportCategory,
            productCat: filterProductCategory,
            priority: filterPriority,
            date: filterDate,
            search: searchTerm
        });
        setCurrentPage(1);
    };

    const filteredData = useMemo(() => {
        return tableData.filter((row) => {
            const matchSearch = appliedFilters.search
                ? Object.values(row).some(
                    (v) =>
                        typeof v === "string" &&
                        v.toLowerCase().includes(appliedFilters.search.toLowerCase())
                )
                : true;
            const matchCustomer = appliedFilters.customer ? row.customer === appliedFilters.customer : true;
            const matchReportCat = appliedFilters.reportCat ? row.reportCategory === appliedFilters.reportCat : true;
            const matchLocation = appliedFilters.location ? row.division === appliedFilters.location : true;
            const matchEventCat = appliedFilters.eventCat ? row.reportCategory === appliedFilters.eventCat : true;
            return matchSearch && matchCustomer && matchReportCat && matchLocation && matchEventCat;
        });
    }, [appliedFilters]);

    const totalItems = filteredData.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => setCurrentPage(page);
    const handleItemsPerPage = (val: number) => { setItemsPerPage(val); setCurrentPage(1); };

    return (
        <>
            <PageMeta
                title="Dashboard | CCH - Customer Complaint Handling"
                description="Dashboard halaman utama Customer Complaint Handling CCH"
            />

            {/* ── Filter Bar ──────────────────────────────── */}
            <div className="mb-6 space-y-3 rounded-xl border border-gray-100 bg-white p-5 dark:border-white/[0.05] dark:bg-white/[0.03]">
                {/* Row 1: 3 dropdowns + search subject */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <FilterSelect
                        placeholder="Status"
                        options={["Circle", "Triangle", "X"]}
                        value={filterStatus}
                        onChange={setFilterStatus}
                    />
                    <FilterSelect
                        placeholder="Location"
                        options={["Chassis", "Brazing", "Engine"]}
                        value={filterLocation}
                        onChange={setFilterLocation}
                    />
                    <FilterSelect
                        placeholder="Event Category"
                        options={["Internal", "Customer"]}
                        value={filterEventCategory}
                        onChange={setFilterEventCategory}
                    />
                    {/* Search Subject input */}
                    <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                            <svg className="fill-current" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.04199 9.37363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z" fill="" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search Subject"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleApplyFilters()}
                            className="h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-10 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </div>
                </div>

                {/* Row 2: 5 dropdowns */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <FilterSelect
                        placeholder="Customer"
                        options={["Sanoh Gr.", "TMMIN", "ADM", "HPM", "Toyota", "Honda", "Daihatsu", "Suzuki"]}
                        value={filterCustomer}
                        onChange={setFilterCustomer}
                    />
                    <FilterSelect
                        placeholder="Report Category"
                        options={["Internal", "Customer"]}
                        value={filterReportCategory}
                        onChange={setFilterReportCategory}
                    />
                    <FilterSelect
                        placeholder="Product Category"
                        options={["Pipe", "Tube", "Hose"]}
                        value={filterProductCategory}
                        onChange={setFilterProductCategory}
                    />
                    <FilterSelect
                        placeholder="Priority Level"
                        options={["High", "Medium", "Low"]}
                        value={filterPriority}
                        onChange={setFilterPriority}
                    />
                    <FilterSelect
                        placeholder="Date"
                        options={["This Week", "This Month", "This Year"]}
                        value={filterDate}
                        onChange={setFilterDate}
                    />
                </div>
                {/* Submit Filter Button */}
                <div className="flex justify-start pt-1">
                    <button
                        onClick={handleApplyFilters}
                        className="flex items-center gap-2 h-11 px-6 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium shadow-theme-xs transition-colors"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>

            {/* ── DataTable 2 Style Table ──────────────────── */}
            <div className="overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
                {/* Controls: show entries + search */}
                <div className="flex flex-col gap-2 px-4 py-4 border border-b-0 border-gray-100 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-gray-500 dark:text-gray-400">Show</span>
                        <div className="relative z-20 bg-transparent">
                            <select
                                className="w-full py-2 pl-3 pr-8 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg appearance-none dark:bg-dark-900 h-9 bg-none shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                                value={itemsPerPage}
                                onChange={(e) => handleItemsPerPage(Number(e.target.value))}
                            >
                                {[5, 8, 10].map((val) => (
                                    <option key={val} value={val} className="text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                                        {val}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute z-30 text-gray-500 -translate-y-1/2 right-2 top-1/2 dark:text-gray-400">
                                <svg className="stroke-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">entries</span>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                        <button
                            onClick={() => navigate("/new-entry")}
                            className="flex items-center gap-2 h-11 rounded-lg bg-brand-500 px-4 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 transition-colors whitespace-nowrap"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.33337V12.6667M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            New Entry
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="max-w-full overflow-x-auto custom-scrollbar">
                    <Table>
                        <TableHeader className="border-t border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                {["Status", "Level", "Customer", "Division", "Date", "Report Category", "Failure", "Mode", "Subject", "Creator"].map((label, idx) => (
                                    <TableCell key={idx} isHeader className="px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                                        <p className="font-medium text-gray-700 text-theme-xs dark:text-gray-400">{label}</p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {currentData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="px-4 py-4 border border-gray-100 dark:border-white/[0.05] whitespace-nowrap">
                                        <StatusIcon type={row.statusDot} />
                                    </TableCell>
                                    <TableCell className="px-4 py-4 border border-gray-100 dark:border-white/[0.05] whitespace-nowrap">
                                        <LevelBadge level={row.level} />
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.customer}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.division}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.date}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.reportCategory}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.failure}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.mode}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 border border-gray-100 dark:border-white/[0.05] text-theme-sm whitespace-nowrap">
                                        <button
                                            onClick={() => navigate(`/subject-detail/${row.id}`)}
                                            className="text-brand-500 hover:text-brand-600 hover:underline dark:text-brand-400 text-left"
                                        >
                                            {row.subject}
                                        </button>
                                    </TableCell>
                                    <TableCell className="px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                                        {row.creator}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                        <PaginationWithButton
                            totalPages={totalPages}
                            initialPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                        <div className="pt-3 xl:pt-0">
                            <p className="pt-3 text-sm font-medium text-center text-gray-500 border-t border-gray-100 dark:border-gray-800 dark:text-gray-400 xl:border-t-0 xl:pt-0 xl:text-left">
                                Showing {totalItems === 0 ? 0 : startIndex + 1} to {endIndex} of {totalItems} entries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

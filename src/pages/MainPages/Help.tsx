import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import FaqOne from "../../components/faqs/FaqOne";

// ──────────────────────────────────────────────
// FAQ data — seputar aplikasi CCH
// ──────────────────────────────────────────────
const generalFaqs = [
    {
        title: "Apa itu Customer Complaint Handling (CCH)?",
        content:
            "CCH adalah sistem manajemen keluhan pelanggan yang digunakan untuk mencatat, menelusuri, dan menyelesaikan pengaduan atau temuan kualitas dari pelanggan maupun internal. Sistem ini mencakup seluruh siklus penanganan, mulai dari pencatatan awal hingga penutupan kasus.",
    },
    {
        title: "Siapa saja yang dapat mengakses aplikasi ini?",
        content:
            "Aplikasi ini dapat diakses oleh karyawan yang telah memiliki akun dan izin akses yang diberikan oleh administrator. Setiap pengguna memiliki peran (role) berbeda, seperti Author, Reviewer, dan Administrator, yang menentukan fitur apa saja yang dapat digunakan.",
    },
    {
        title: "Bagaimana cara membuat data entry baru?",
        content:
            "Klik menu 'New Entry' pada navigasi sebelah kiri. Isi formulir yang tersedia dimulai dari tab Basic (informasi dasar), lanjutkan ke tab-tab berikutnya sesuai kebutuhan (Primary, SRTA, RA, DFA, Occurrence, Outflow), kemudian klik tombol 'Submit' untuk menyimpan data.",
    },
    {
        title: "Apa perbedaan tombol 'Submit' dan 'Save Draft'?",
        content:
            "'Submit' digunakan untuk mengirimkan data entry secara resmi ke sistem dan dapat dilihat oleh pihak terkait. 'Save Draft' menyimpan data sementara tanpa mengirimkannya, sehingga dapat dilanjutkan atau diedit di lain waktu sebelum disubmit.",
    },
];

const tabFaqs = [
    {
        title: "Apa fungsi tab 'Basic' pada New Entry?",
        content:
            "Tab Basic berisi informasi dasar keluhan, seperti nama subject, divisi penanggung jawab, kategori laporan, customer, defect class, line stop, count by customer, dan level kepentingan. Semua field bertanda * (bintang merah) wajib diisi sebelum dapat submit.",
    },
    {
        title: "Apa yang dimaksud dengan tab 'SRTA'?",
        content:
            "SRTA (Sorting, Replacement, Total Action) adalah tab yang digunakan untuk mencatat tindakan penyortiran dan penggantian barang di sisi customer, depot, internal, maupun supplier. Setiap baris menunjukkan jumlah barang NG (Not Good) dan OK, serta jenis countermeasure yang dilakukan.",
    },
    {
        title: "Apa fungsi tab 'Occurrence' dan 'Outflow'?",
        content:
            "Tab Occurrence digunakan untuk menganalisis penyebab terjadinya defect, termasuk siapa pembuat defect (own plant, supplier, dll.), nama proses, faktor penyebab (Man, Method, Machine, Material, Design), dan cause analysis. Tab Outflow difokuskan pada analisis mengapa defect bisa lolos (escape) dari kontrol kualitas hingga sampai ke pelanggan.",
    },
    {
        title: "Apa isi tab 'RA' dan 'DFA'?",
        content:
            "Tab RA (Risk Assessment) digunakan untuk menilai risiko dari temuan kualitas beserta komentar author. Tab DFA (Defective Factor Analysis) berisi unggahan lembar analisis faktor defektif, checksheet corrective action, serta uraian mekanisme terjadinya occurrence dan outflow.",
    },
];

const subjectDetailFaqs = [
    {
        title: "Bagaimana cara melihat detail sebuah subject?",
        content:
            "Pada halaman Dashboard, klik nama subject (ditandai dengan teks biru dan bergaris bawah) di kolom 'Subject'. Sistem akan mengarahkan Anda ke halaman Subject Detail yang menampilkan semua informasi dari subject tersebut secara lengkap dalam format tab.",
    },
    {
        title: "Bagaimana cara memodifikasi data pada Subject Detail?",
        content:
            "Pada halaman Subject Detail, klik tombol 'Modify' di bagian bawah halaman untuk masuk ke mode edit. Lakukan perubahan data yang diperlukan, lalu klik 'Save' untuk menyimpan. Akan muncul konfirmasi 'Successfully Modified' jika perubahan berhasil disimpan.",
    },
    {
        title: "Apa yang terjadi saat tombol 'Close Application' diklik?",
        content:
            "Tombol 'Close Application' digunakan untuk menutup/menyelesaikan kasus keluhan secara resmi. Setelah dikonfirmasi dengan klik 'OK' pada dialog konfirmasi, status kasus akan berubah menjadi Closed dan Anda akan diarahkan kembali ke halaman sebelumnya.",
    },
    {
        title: "Apa fungsi tombol 'Question Request Response'?",
        content:
            "Tombol ini digunakan untuk mengirimkan pertanyaan atau permintaan klarifikasi kepada pihak terkait (misalnya customer atau divisi lain) jika terdapat informasi yang belum jelas atau memerlukan konfirmasi tambahan sebelum kasus dapat ditutup.",
    },
];

// ──────────────────────────────────────────────
// Reusable accordion section component
// ──────────────────────────────────────────────
function FaqSection({ items }: { items: { title: string; content: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <FaqOne
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    toggleAccordion={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}

// ──────────────────────────────────────────────
// Help Page
// ──────────────────────────────────────────────
export default function Help() {
    return (
        <>
            <PageMeta
                title="Help & FAQ | CCH - Customer Complaint Handling"
                description="Halaman bantuan dan pertanyaan umum seputar aplikasi Customer Complaint Handling"
            />

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Help &amp; FAQ</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
                {/* Section 1 — Umum */}
                <ComponentCard
                    title="Umum"
                    desc="Pertanyaan umum seputar aplikasi CCH"
                >
                    <FaqSection items={generalFaqs} />
                </ComponentCard>

                {/* Section 2 — Tab & Form */}
                <ComponentCard
                    title="Tab & Form Entry"
                    desc="Penjelasan seputar isi masing-masing tab pada formulir data entry"
                >
                    <FaqSection items={tabFaqs} />
                </ComponentCard>

                {/* Section 3 — Subject Detail */}
                <ComponentCard
                    title="Subject Detail"
                    desc="Cara menggunakan halaman detail dan melakukan tindakan pada kasus"
                >
                    <FaqSection items={subjectDetailFaqs} />
                </ComponentCard>
            </div>
        </>
    );
}

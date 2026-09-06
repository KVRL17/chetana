"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import greenLogo from "../../../logo-green.png";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  FileJson,
  HardDrive,
  Inbox,
  LayoutDashboard,
  UsersRound,
  NotebookTabs,
  CalendarCheck2,
  BellRing,
  IndianRupee,
  ReceiptText,
  UserCog,
  ListTodo,
  BarChart3,
  DatabaseBackup,
  LogOut,
  Mail,
  Menu,
  Phone,
  RefreshCw,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  UserPlus,
  X,
} from "lucide-react";
import { formTypeLabels, type FormSubmissionRecord, type FormType, type SubmissionStatus } from "@/lib/form-submission-types";
import CentreManagement, { centreRouteMeta, isCentreAdminRoute } from "./CentreManagement";

interface SessionState {
  loading: boolean;
  configured: boolean;
  authenticated: boolean;
  username: string;
}

const statusLabels: Record<SubmissionStatus, string> = {
  new: "New",
  contacted: "Contacted",
  scheduled: "Scheduled",
  closed: "Closed",
};

const statusClasses: Record<SubmissionStatus, string> = {
  new: "bg-amber-50 text-amber-800 border-amber-200",
  contacted: "bg-sky-50 text-sky-800 border-sky-200",
  scheduled: "bg-emerald-50 text-emerald-800 border-emerald-200",
  closed: "bg-slate-100 text-slate-700 border-slate-200",
};

function prettyLabel(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function valueText(value: string | number | boolean | null) {
  if (value === null || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

function getIdentity(record: FormSubmissionRecord) {
  const data = record.data;
  const nameKeys = ["fullName", "name", "studentName", "contactPerson", "parentName"];
  const emailKeys = ["email"];
  const phoneKeys = ["phone"];

  const find = (keys: string[]) => {
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
  };

  return { name: find(nameKeys) || "Website Visitor", email: find(emailKeys), phone: find(phoneKeys) };
}

function dateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function relativeDay(value: string) {
  const date = new Date(value);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const submitted = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const days = Math.round((today - submitted) / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function LoginScreen({ session, onLogin }: { session: SessionState; onLogin: () => void }) {
  const [username, setUsername] = useState(session.username || "admin");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to sign in.");
      onLogin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#102f34] px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, #e3c08d 0, transparent 28%), radial-gradient(circle at 90% 80%, #5d8079 0, transparent 30%)" }} />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <section className="relative w-full max-w-[1040px] overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_40px_120px_rgba(0,0,0,.35)] grid lg:grid-cols-[1.05fr_.95fr]">
        <div className="hidden lg:flex bg-[#173f45] text-white p-12 flex-col justify-between min-h-[650px] relative overflow-hidden">
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-[0.15em] uppercase text-white/85">
              <Sparkles className="h-3.5 w-3.5" /> Private Admin Portal
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-[-0.04em]">Every client. Every enquiry.<br />One calm workspace.</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/70">Manage website enquiries and the centre's internal client, counselling, appointment and operations records in your own JSON storage.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"><HardDrive className="h-5 w-5 text-[#e3c08d]" /><div className="mt-3 text-sm font-semibold">JSON Storage</div><div className="mt-1 text-xs text-white/55">No database required</div></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"><ShieldCheck className="h-5 w-5 text-[#e3c08d]" /><div className="mt-3 text-sm font-semibold">Private Access</div><div className="mt-1 text-xs text-white/55">Password protected</div></div>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-[#173f45]/10 shadow-sm">
              <Image src={greenLogo} alt="Chetana" className="h-full w-full object-cover" />
            </div>
            <div><div className="text-sm font-bold text-[#173f45]">Chetana</div><div className="text-xs text-slate-500">Administration</div></div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5d8079]">Secure sign in</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-slate-900">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Sign in to manage website enquiries and centre operations.</p>
          </div>

          {!session.configured && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Admin credentials are not configured yet. Set <code className="font-semibold">ADMIN_PASSWORD</code> and <code className="font-semibold">ADMIN_SESSION_SECRET</code> using <code className="font-semibold">.env.example</code> before signing in.
            </div>
          )}

          <form onSubmit={login} className="mt-7 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Username</span>
              <div className="relative"><UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#5d8079] focus:bg-white focus:ring-4 focus:ring-[#5d8079]/10" /></div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
              <div className="relative"><ShieldCheck className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#5d8079] focus:bg-white focus:ring-4 focus:ring-[#5d8079]/10" /></div>
            </label>
            {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <button disabled={submitting || !session.configured} className="h-13 w-full rounded-xl bg-[#173f45] text-sm font-bold text-white shadow-lg shadow-[#173f45]/15 transition hover:bg-[#102f34] disabled:cursor-not-allowed disabled:opacity-50">
              {submitting ? "Signing in…" : "Sign in to dashboard"}
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-400">Protected access • Session expires automatically</p>
        </div>
      </section>
    </main>
  );
}

function DetailPanel({ record, onClose, onSaved }: { record: FormSubmissionRecord; onClose: () => void; onSaved: (record: FormSubmissionRecord) => void }) {
  const [status, setStatus] = useState<SubmissionStatus>(record.status);
  const [notes, setNotes] = useState(record.adminNotes || "");
  const [data, setData] = useState(record.data);
  const [saving, setSaving] = useState(false);
  const [clientImporting, setClientImporting] = useState(false);
  const [clientImportedCode, setClientImportedCode] = useState("");
  const [error, setError] = useState("");
  const identity = getIdentity(record);

  useEffect(() => {
    setStatus(record.status);
    setNotes(record.adminNotes || "");
    setData(record.data);
    setClientImportedCode("");
    setError("");
  }, [record]);

  const updateField = (key: string, value: string) => {
    const original = data[key];
    let next: string | number | boolean | null = value;
    if (typeof original === "number") next = value === "" ? 0 : Number(value);
    if (typeof original === "boolean") next = value === "true";
    setData((current) => ({ ...current, [key]: next }));
  };

  const createClientProfile = async () => {
    setClientImporting(true);
    setError("");
    try {
      const pick = (...keys: string[]) => {
        for (const key of keys) {
          const value = data[key];
          if (value !== null && value !== undefined && String(value).trim()) return String(value).trim();
        }
        return "";
      };
      const consentValue = data.consent;
      const clientData = {
        fullName: pick("fullName", "name", "studentName", "contactPerson") || identity.name,
        phone: pick("phone") || identity.phone,
        alternatePhone: "",
        email: pick("email") || identity.email,
        dateOfBirth: "",
        age: pick("age"),
        gender: pick("gender"),
        occupationOrClass: pick("currentClass"),
        schoolCollegeOrCompany: pick("schoolCollege", "organizationName"),
        parentGuardianName: pick("parentName"),
        relationship: "",
        city: pick("cityLocation", "city", "location"),
        address: "",
        emergencyContact: "",
        counsellingFor: pick("counsellingFor", "programInterested") || record.formName.replace(" Form", ""),
        primaryConcern: pick("primaryConcern", "mainConcern", "careerArea", "briefMessage", "message", "requirements"),
        preferredLanguage: pick("preferredLanguage"),
        preferredSessionType: pick("preferredSessionType"),
        referralSource: `Website — ${record.formName}`,
        assignedCounsellor: "",
        status: "New",
        consent: consentValue === true || String(consentValue).toLowerCase() === "true" ? "Received" : "Pending",
        tags: record.formType,
        documents: "",
        notes: `Created from website enquiry received ${dateLabel(record.submittedAt)}.`,
        sourceSubmissionId: record.id,
      };
      const response = await fetch("/api/centre-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collection: "clients", data: clientData }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to create client profile.");
      setClientImportedCode(body.record?.clientCode || "Created");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create client profile.");
    } finally {
      setClientImporting(false);
    }
  };

  const save = async () => {
    setSaving(true);
    setError("");
    try {
      const response = await fetch(`/api/form-submissions/${record.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, adminNotes: notes, data }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to save changes.");
      onSaved(body.submission);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/35 backdrop-blur-sm flex justify-end" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="h-full w-full max-w-2xl bg-white shadow-[-30px_0_80px_rgba(15,23,42,.18)] flex flex-col animate-[slideIn_.2s_ease-out]">
        <div className="border-b border-slate-100 px-5 py-5 sm:px-7 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5d8079]"><Inbox className="h-3.5 w-3.5" /> {record.formName}</div>
            <h2 className="mt-2 truncate text-2xl font-semibold tracking-[-0.03em] text-slate-900">{identity.name}</h2>
            <p className="mt-1 text-sm text-slate-500">Received {dateLabel(record.submittedAt)}</p>
          </div>
          <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50" aria-label="Close details"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {identity.phone && <a href={`tel:${identity.phone}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-[#5d8079]/40"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400"><Phone className="h-3.5 w-3.5" /> Phone</div><div className="mt-2 text-sm font-semibold text-slate-800">{identity.phone}</div></a>}
            {identity.email && <a href={`mailto:${identity.email}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-[#5d8079]/40"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400"><Mail className="h-3.5 w-3.5" /> Email</div><div className="mt-2 truncate text-sm font-semibold text-slate-800">{identity.email}</div></a>}
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-3"><h3 className="text-sm font-bold text-slate-900">Submission details</h3><span className="text-[11px] font-semibold text-slate-400">Editable • saved to JSON</span></div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {Object.entries(data).map(([key, value]) => (
                <label key={key} className={String(value ?? "").length > 80 ? "sm:col-span-2" : ""}>
                  <span className="mb-1.5 block text-xs font-bold text-slate-500">{prettyLabel(key)}</span>
                  {typeof value === "boolean" ? (
                    <select value={String(value)} onChange={(e) => updateField(key, e.target.value)} className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#5d8079] focus:ring-4 focus:ring-[#5d8079]/10"><option value="true">Yes</option><option value="false">No</option></select>
                  ) : String(value ?? "").length > 80 ? (
                    <textarea rows={4} value={value === null ? "" : String(value)} onChange={(e) => updateField(key, e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#5d8079] focus:ring-4 focus:ring-[#5d8079]/10" />
                  ) : (
                    <input value={value === null ? "" : String(value)} onChange={(e) => updateField(key, e.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#5d8079] focus:ring-4 focus:ring-[#5d8079]/10" />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label><span className="mb-2 block text-sm font-bold text-slate-800">Follow-up status</span><select value={status} onChange={(e) => setStatus(e.target.value as SubmissionStatus)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium outline-none focus:border-[#5d8079] focus:ring-4 focus:ring-[#5d8079]/10">{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
            <div><span className="mb-2 block text-sm font-bold text-slate-800">Record ID</span><div className="h-12 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 font-mono text-xs text-slate-500 truncate">{record.id}</div></div>
          </div>

          <label className="mt-5 block"><span className="mb-2 block text-sm font-bold text-slate-800">Private admin notes</span><textarea rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add follow-up notes, call outcome, appointment details…" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#5d8079] focus:ring-4 focus:ring-[#5d8079]/10" /></label>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-500">
            <div><span className="font-bold text-slate-700">Email subject:</span> {record.subject}</div>
            <div><span className="font-bold text-slate-700">Source page:</span> {record.sourcePath || "—"}</div>
            <div><span className="font-bold text-slate-700">Last updated:</span> {dateLabel(record.updatedAt)}</div>
          </div>
          {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        </div>

        <div className="border-t border-slate-100 bg-white px-5 py-4 sm:px-7 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">{clientImportedCode ? <span className="font-semibold text-emerald-700">Client profile ready: {clientImportedCode}</span> : "Changes update the JSON file immediately."}</div>
          <div className="flex flex-wrap gap-2">
            <button onClick={createClientProfile} disabled={clientImporting} className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#173f45]/15 bg-[#173f45]/[0.05] px-4 text-xs font-bold text-[#173f45] hover:bg-[#173f45]/10 disabled:opacity-60"><UserPlus className="h-4 w-4" /> {clientImporting ? "Creating…" : "Create client profile"}</button>
            <button onClick={save} disabled={saving} className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#173f45] px-5 text-sm font-bold text-white hover:bg-[#102f34] disabled:opacity-60"><Save className="h-4 w-4" /> {saving ? "Saving…" : "Save changes"}</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function AdminDashboard() {
  const pathname = usePathname();
  const [session, setSession] = useState<SessionState>({ loading: true, configured: true, authenticated: false, username: "admin" });
  const [records, setRecords] = useState<FormSubmissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | FormType>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | SubmissionStatus>("all");
  const [selected, setSelected] = useState<FormSubmissionRecord | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const routedView = useMemo(() => {
    if (pathname === "/admin/new") {
      return { type: "all" as const, status: "new" as const, title: "New enquiries", subtitle: "Website enquiries that still need follow-up" };
    }
    if (pathname === "/admin/scheduled") {
      return { type: "all" as const, status: "scheduled" as const, title: "Scheduled enquiries", subtitle: "Enquiries with a scheduled follow-up or session" };
    }
    const formMatch = pathname.match(/^\/admin\/forms\/([^/]+)$/);
    if (formMatch && formMatch[1] in formTypeLabels) {
      const formType = formMatch[1] as FormType;
      return { type: formType, status: "all" as const, title: formTypeLabels[formType], subtitle: `Submissions received through the ${formTypeLabels[formType]}` };
    }
    return { type: "all" as const, status: "all" as const, title: "Enquiry dashboard", subtitle: "All website form submissions in one place" };
  }, [pathname]);

  const centreRoute = isCentreAdminRoute(pathname);
  const headerView = centreRoute ? centreRouteMeta[pathname] : routedView;

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/session", { cache: "no-store" });
      const body = await response.json();
      setSession({ loading: false, configured: Boolean(body.configured), authenticated: Boolean(body.authenticated), username: body.username || "admin" });
    } catch {
      setSession((current) => ({ ...current, loading: false, authenticated: false }));
    }
  }, []);

  const loadRecords = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/form-submissions", { cache: "no-store" });
      if (response.status === 401) {
        setSession((current) => ({ ...current, authenticated: false }));
        return;
      }
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to load enquiries.");
      setRecords(body.submissions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load enquiries.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { checkSession(); }, [checkSession]);
  useEffect(() => { if (session.authenticated) loadRecords(); }, [session.authenticated, loadRecords]);
  useEffect(() => {
    setTypeFilter(routedView.type);
    setStatusFilter(routedView.status);
    setSearch("");
    setSelected(null);
    setSidebarOpen(false);
  }, [routedView]);

  const stats = useMemo(() => {
    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const sevenDays = now.getTime() - 7 * 86_400_000;
    return {
      total: records.length,
      newCount: records.filter((r) => r.status === "new").length,
      today: records.filter((r) => new Date(r.submittedAt).getTime() >= startToday).length,
      week: records.filter((r) => new Date(r.submittedAt).getTime() >= sevenDays).length,
    };
  }, [records]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return records.filter((record) => {
      if (typeFilter !== "all" && record.formType !== typeFilter) return false;
      if (statusFilter !== "all" && record.status !== statusFilter) return false;
      if (!term) return true;
      const identity = getIdentity(record);
      const haystack = [record.formName, record.subject, identity.name, identity.email, identity.phone, ...Object.values(record.data).map(valueText)].join(" ").toLowerCase();
      return haystack.includes(term);
    });
  }, [records, search, typeFilter, statusFilter]);

  const handleAdminUnauthorized = useCallback(() => {
    setSession((current) => ({ ...current, authenticated: false }));
  }, []);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    setRecords([]);
    setSession((current) => ({ ...current, authenticated: false }));
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), submissions: records }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `chetana-form-submissions-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const handleSaved = (updated: FormSubmissionRecord) => {
    setRecords((current) => current.map((item) => item.id === updated.id ? updated : item));
    setSelected(updated);
  };

  if (session.loading) {
    return <main className="min-h-screen bg-[#102f34] grid place-items-center"><div className="flex items-center gap-3 text-sm font-semibold text-white/80"><RefreshCw className="h-5 w-5 animate-spin" /> Loading secure admin…</div></main>;
  }
  if (!session.authenticated) return <LoginScreen session={session} onLogin={checkSession} />;

  return (
    <main className="min-h-screen bg-[#f4f5f3] text-slate-900">
      {sidebarOpen && <button className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[278px] bg-[#12373d] text-white transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col overflow-y-auto p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="h-11 w-11 overflow-hidden rounded-full border border-white/15"><Image src={greenLogo} alt="Chetana" className="h-full w-full object-cover" /></div><div><div className="text-sm font-bold">Chetana</div><div className="text-[11px] text-white/50">Admin Console</div></div></div>
            <button onClick={() => setSidebarOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg text-white/60 hover:bg-white/10 lg:hidden"><X className="h-4 w-4" /></button>
          </div>

          <nav className="mt-9 space-y-1.5">
            <Link href="/admin" onClick={() => { setTypeFilter("all"); setStatusFilter("all"); setSidebarOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${pathname === "/admin" ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/[0.07] hover:text-white"}`}><LayoutDashboard className={`h-4 w-4 ${pathname === "/admin" ? "text-[#e3c08d]" : ""}`} /> Dashboard</Link>
            <Link href="/admin/new" onClick={() => { setTypeFilter("all"); setStatusFilter("new"); setSidebarOpen(false); }} className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition ${pathname === "/admin/new" ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/[0.07] hover:text-white"}`}><span className="flex items-center gap-3"><Inbox className={`h-4 w-4 ${pathname === "/admin/new" ? "text-[#e3c08d]" : ""}`} /> New enquiries</span><span className="rounded-full bg-[#e3c08d] px-2 py-0.5 text-[10px] font-bold text-[#173f45]">{stats.newCount}</span></Link>
            <Link href="/admin/scheduled" onClick={() => { setTypeFilter("all"); setStatusFilter("scheduled"); setSidebarOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${pathname === "/admin/scheduled" ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/[0.07] hover:text-white"}`}><CalendarDays className={`h-4 w-4 ${pathname === "/admin/scheduled" ? "text-[#e3c08d]" : ""}`} /> Scheduled</Link>
          </nav>

          <div className="mt-7 border-t border-white/10 pt-6">
            <div className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Command centre</div>
            <div className="mt-2 space-y-0.5">
              {[
                ["/admin/centre", "Executive overview", LayoutDashboard],
                ["/admin/today", "Today desk", CalendarCheck2],
                ["/admin/calendar", "Centre calendar", CalendarDays],
                ["/admin/leads", "CRM pipeline", UserPlus],
              ].map(([href, label, Icon]) => { const active = pathname === href; return <Link key={String(href)} href={String(href)} onClick={() => setSidebarOpen(false)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}><Icon className={`h-4 w-4 ${active ? "text-[#e3c08d]" : ""}`} /><span>{String(label)}</span></Link>; })}
            </div>

            <div className="mt-5 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Client care</div>
            <div className="mt-2 space-y-0.5">
              {[
                ["/admin/clients", "Clients", UsersRound],
                ["/admin/sessions", "Counselling records", NotebookTabs],
                ["/admin/care-plans", "Care plans & packages", Sparkles],
                ["/admin/communications", "Communication log", Mail],
                ["/admin/documents", "Client documents", FileJson],
                ["/admin/appointments", "Appointments", CalendarCheck2],
                ["/admin/follow-ups", "Follow-ups", BellRing],
              ].map(([href, label, Icon]) => { const active = pathname === href; return <Link key={String(href)} href={String(href)} onClick={() => setSidebarOpen(false)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}><Icon className={`h-4 w-4 ${active ? "text-[#e3c08d]" : ""}`} /><span>{String(label)}</span></Link>; })}
            </div>

            <div className="mt-5 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Business operations</div>
            <div className="mt-2 space-y-0.5">
              {[
                ["/admin/tasks", "Centre tasks", ListTodo],
                ["/admin/services", "Services & fees", Sparkles],
                ["/admin/payments", "Payments", IndianRupee],
                ["/admin/expenses", "Expenses", ReceiptText],
                ["/admin/finance", "Finance command", BarChart3],
                ["/admin/inventory", "Inventory & supplies", HardDrive],
                ["/admin/staff", "Staff", UserCog],
              ].map(([href, label, Icon]) => { const active = pathname === href; return <Link key={String(href)} href={String(href)} onClick={() => setSidebarOpen(false)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}><Icon className={`h-4 w-4 ${active ? "text-[#e3c08d]" : ""}`} /><span>{String(label)}</span></Link>; })}
            </div>

            <div className="mt-5 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Control & insights</div>
            <div className="mt-2 space-y-0.5">
              {[
                ["/admin/reports", "Reports", BarChart3],
                ["/admin/archive", "Archive", DatabaseBackup],
                ["/admin/data", "Data & backup", DatabaseBackup],
              ].map(([href, label, Icon]) => { const active = pathname === href; return <Link key={String(href)} href={String(href)} onClick={() => setSidebarOpen(false)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}><Icon className={`h-4 w-4 ${active ? "text-[#e3c08d]" : ""}`} /><span>{String(label)}</span></Link>; })}
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-6"><div className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Website forms</div><div className="mt-2 space-y-0.5">{Object.entries(formTypeLabels).map(([type, label]) => { const count = records.filter((r) => r.formType === type).length; const href = `/admin/forms/${type}`; const active = pathname === href; return <Link key={type} href={href} onClick={() => { setTypeFilter(type as FormType); setStatusFilter("all"); setSidebarOpen(false); }} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition ${active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}><span className="truncate">{label}</span><span className={`ml-2 text-[10px] ${active ? "text-[#e3c08d]" : "text-white/35"}`}>{count}</span></Link>; })}</div></div>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.06] p-4"><div className="flex items-center gap-2 text-xs font-semibold"><HardDrive className="h-4 w-4 text-[#e3c08d]" /> JSON storage active</div><p className="mt-2 text-[11px] leading-5 text-white/45">Website enquiries and centre records are read from and updated in private server JSON files.</p></div>
          <button onClick={logout} className="mt-3 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-white/55 hover:bg-white/[0.06] hover:text-white"><LogOut className="h-4 w-4" /> Sign out</button>
        </div>
      </aside>

      <section className="min-h-screen lg:pl-[278px]">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#f4f5f3]/90 backdrop-blur-xl">
          <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-7 lg:px-9">
            <div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"><Menu className="h-4 w-4" /></button><div><h1 className="text-lg font-semibold tracking-[-0.025em] text-slate-900">{headerView.title}</h1><p className="hidden text-xs text-slate-500 sm:block">{headerView.subtitle}</p></div></div>
            <div className="flex items-center gap-2">{centreRoute && <div className="hidden items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 sm:flex"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Private JSON live</div>}{!centreRoute && <><button onClick={loadRecords} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Refresh"><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /></button><button onClick={downloadJson} className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-xs font-bold text-slate-700 hover:bg-slate-50 sm:inline-flex"><Download className="h-4 w-4" /> Export JSON</button></> }<div className="ml-1 grid h-10 w-10 place-items-center rounded-xl bg-[#173f45] text-xs font-bold text-white shadow-lg shadow-[#173f45]/10">AD</div></div>
          </div>
        </header>

        {centreRoute ? (
          <CentreManagement pathname={pathname} onUnauthorized={handleAdminUnauthorized} />
        ) : (
        <div className="px-4 py-6 sm:px-7 lg:px-9 lg:py-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><div className="inline-flex items-center gap-2 rounded-full border border-[#5d8079]/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5d8079]"><Sparkles className="h-3 w-3" /> Live overview</div><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">{routedView.title}</h2><p className="mt-2 text-sm text-slate-500">{routedView.subtitle}. Review, update and follow up without a database.</p></div><div className="text-xs text-slate-400">Last refreshed {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</div></div>

          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {[
              { label: "Total enquiries", value: stats.total, icon: Inbox, note: "All time" },
              { label: "New", value: stats.newCount, icon: Clock3, note: "Needs follow-up" },
              { label: "Today", value: stats.today, icon: CalendarDays, note: "Received today" },
              { label: "Last 7 days", value: stats.week, icon: CheckCircle2, note: "Recent activity" },
            ].map((item) => <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,.03)] sm:p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-slate-500">{item.label}</p><div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-900">{item.value}</div></div><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#173f45]/[0.07] text-[#173f45]"><item.icon className="h-4 w-4" /></div></div><p className="mt-4 text-[11px] text-slate-400">{item.note}</p></div>)}
          </div>

          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_36px_rgba(15,23,42,.035)]">
            <div className="border-b border-slate-100 p-4 sm:p-5">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="relative w-full xl:max-w-md"><Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, email or form data…" className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-[#5d8079] focus:bg-white focus:ring-4 focus:ring-[#5d8079]/10" /></div>
                <div className="flex flex-wrap gap-2"><select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as "all" | FormType)} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none"><option value="all">All forms</option>{Object.entries(formTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as "all" | SubmissionStatus)} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none"><option value="all">All statuses</option>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><button onClick={downloadJson} className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 sm:hidden"><FileJson className="h-4 w-4" /> JSON</button></div>
              </div>
            </div>

            {error && <div className="m-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
            {loading && records.length === 0 ? (
              <div className="grid min-h-64 place-items-center"><div className="flex items-center gap-3 text-sm text-slate-500"><RefreshCw className="h-4 w-4 animate-spin" /> Loading enquiries…</div></div>
            ) : filtered.length === 0 ? (
              <div className="grid min-h-72 place-items-center px-6 text-center"><div><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-400"><Inbox className="h-6 w-6" /></div><h3 className="mt-4 text-base font-semibold text-slate-800">No matching enquiries</h3><p className="mt-1 text-sm text-slate-400">Try changing the search or filters.</p></div></div>
            ) : (
              <>
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[880px] text-left">
                    <thead><tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400"><th className="px-5 py-3.5">Person</th><th className="px-5 py-3.5">Form</th><th className="px-5 py-3.5">Contact</th><th className="px-5 py-3.5">Received</th><th className="px-5 py-3.5">Status</th><th className="px-5 py-3.5 text-right">View</th></tr></thead>
                    <tbody>{filtered.map((record) => { const identity = getIdentity(record); return <tr key={record.id} onClick={() => setSelected(record)} className="cursor-pointer border-b border-slate-100 last:border-0 hover:bg-[#173f45]/[0.025]"><td className="px-5 py-4"><div className="flex items-center gap-3"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#173f45]/[0.07] text-xs font-bold text-[#173f45]">{identity.name.slice(0, 1).toUpperCase()}</div><div className="min-w-0"><div className="max-w-[220px] truncate text-sm font-semibold text-slate-800">{identity.name}</div><div className="mt-0.5 text-[11px] text-slate-400">{record.id.slice(0, 8)}</div></div></div></td><td className="px-5 py-4"><div className="max-w-[210px] truncate text-xs font-semibold text-slate-600">{record.formName}</div></td><td className="px-5 py-4"><div className="text-xs font-medium text-slate-600">{identity.phone || "—"}</div><div className="mt-1 max-w-[190px] truncate text-[11px] text-slate-400">{identity.email || "No email"}</div></td><td className="px-5 py-4"><div className="text-xs font-semibold text-slate-600">{relativeDay(record.submittedAt)}</div><div className="mt-1 text-[11px] text-slate-400">{dateLabel(record.submittedAt)}</div></td><td className="px-5 py-4"><span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusClasses[record.status]}`}>{statusLabels[record.status]}</span></td><td className="px-5 py-4 text-right"><button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-700"><ChevronRight className="h-4 w-4" /></button></td></tr>; })}</tbody>
                  </table>
                </div>
                <div className="divide-y divide-slate-100 md:hidden">{filtered.map((record) => { const identity = getIdentity(record); return <button key={record.id} onClick={() => setSelected(record)} className="w-full p-4 text-left hover:bg-slate-50"><div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#173f45]/[0.07] text-xs font-bold text-[#173f45]">{identity.name.slice(0, 1).toUpperCase()}</div><div className="min-w-0"><div className="truncate text-sm font-semibold text-slate-800">{identity.name}</div><div className="mt-0.5 truncate text-xs text-slate-400">{record.formName}</div></div></div><ChevronRight className="mt-2 h-4 w-4 shrink-0 text-slate-300" /></div><div className="mt-3 flex items-center justify-between gap-3"><div className="text-xs text-slate-500">{identity.phone || identity.email || "No contact"}</div><span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusClasses[record.status]}`}>{statusLabels[record.status]}</span></div><div className="mt-2 text-[11px] text-slate-400">{dateLabel(record.submittedAt)}</div></button>; })}</div>
              </>
            )}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3 text-[11px] text-slate-400 sm:px-5"><span>Showing {filtered.length} of {records.length}</span><span>JSON-backed storage</span></div>
          </section>
        </div>
        )}
      </section>

      {!centreRoute && selected && <DetailPanel record={selected} onClose={() => setSelected(null)} onSaved={handleSaved} />}
    </main>
  );
}

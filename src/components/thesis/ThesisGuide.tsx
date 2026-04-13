"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  History,
  Search,
  Brain,
  FlaskConical,
  AlertTriangle,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Paperclip,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  GraduationCap,
  Code,
  Sparkles,
  Eye,
  EyeOff,
  BookMarked,
  ListChecks,
  AlertCircle,
  Info,
  CheckCircle2,
  LightbulbIcon,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sections } from "@/lib/sections-data";
import type { SectionData, Example, Callout } from "@/lib/sections-data";
import ChatPanel from "@/components/thesis/ChatPanel";

// ── Icon map ──
const iconMap: Record<number, React.ElementType> = {
  1: FileText,
  2: BookOpen,
  3: History,
  4: Search,
  5: Brain,
  6: FlaskConical,
  7: AlertTriangle,
  8: BarChart3,
  9: MessageSquare,
  10: CheckCircle,
  11: Lightbulb,
  12: Paperclip,
  13: BookMarked,
};

// ── Callout Box ──
function CalloutBox({ callout }: { callout: Callout }) {
  const styles: Record<string, string> = {
    tip: "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:border-amber-700 dark:text-amber-200",
    warning: "border-red-300 bg-red-50 text-red-900 dark:bg-red-950/30 dark:border-red-700 dark:text-red-200",
    success: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-700 dark:text-emerald-200",
    info: "border-sky-300 bg-sky-50 text-sky-900 dark:bg-sky-950/30 dark:border-sky-700 dark:text-sky-200",
    purple: "border-purple-300 bg-purple-50 text-purple-900 dark:bg-purple-950/30 dark:border-purple-700 dark:text-purple-200",
  };

  const icons: Record<string, React.ElementType> = {
    tip: LightbulbIcon,
    warning: AlertCircle,
    success: CheckCircle2,
    info: Info,
    purple: Sparkles,
  };

  const Icon = icons[callout.type] || Info;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border-l-4 p-4 ${styles[callout.type] || styles.info}`}
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-semibold text-sm">{callout.title}</p>
          <p className="mt-1 text-sm leading-relaxed opacity-90">{callout.content}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Example Card with toggle ──
function ExampleCard({ example, index }: { example: Example; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                {example.title}
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 px-2 text-xs text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
            >
              {isOpen ? (
                <>
                  <EyeOff className="mr-1 h-3 w-3" /> Ocultar
                </>
              ) : (
                <>
                  <Eye className="mr-1 h-3 w-3" /> Ver Ejemplo
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <CardContent className="px-4 pb-4 pt-0">
                <div className="rounded-md bg-white/70 p-4 text-sm leading-relaxed text-gray-800 dark:bg-gray-900/50 dark:text-gray-200 whitespace-pre-line border border-emerald-100 dark:border-emerald-800/50">
                  {example.content}
                </div>
                {example.keywords && (
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Keywords:</span>
                    {example.keywords.split(", ").map((kw) => (
                      <Badge key={kw} variant="secondary" className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 hover:bg-emerald-200">
                        {kw}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

// ── Cheat Sheet ──
function CheatSheet({ items }: { items: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(items.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Card className="border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 dark:border-slate-700">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-200">
                Resumen Rápido (Cheat Sheet)
              </CardTitle>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={handleCopy} className="h-7 w-7 p-0">
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-500" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{copied ? "¡Copiado!" : "Copiar resumen"}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ── Common Mistakes Box ──
function CommonMistakes({ items }: { items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <CardTitle className="text-sm font-bold text-red-800 dark:text-red-300">
              Errores Comunes a Evitar
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <ul className="space-y-1.5">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ── Section Renderer ──
function SectionView({ section }: { section: SectionData }) {
  const SectionIcon = iconMap[section.id] || FileText;

  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-lg dark:from-slate-700 dark:to-slate-800">
            <SectionIcon className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-mono">
                Sección {section.id}/{sections.length}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              {section.title}
            </h2>
          </div>
        </div>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          {section.description}
        </p>
        <Separator />
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-sky-200 bg-sky-50/50 dark:border-sky-800 dark:bg-sky-950/20">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0" />
              <div>
                <h3 className="font-semibold text-sky-800 dark:text-sky-300 mb-2">
                  ¿Qué es esta sección?
                </h3>
                <p className="text-sm leading-relaxed text-sky-900 dark:text-sky-200 whitespace-pre-line">
                  {section.explanation}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* What to Include */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
          <ListChecks className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          Qué incluir
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {section.whatToInclude.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
          <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          Recomendaciones
        </h3>
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {section.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                  {rec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Callouts */}
      <div className="space-y-3">
        {section.callouts.map((callout, i) => (
          <CalloutBox key={i} callout={callout} />
        ))}
      </div>

      {/* Examples */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
          <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          Ejemplos — Ingeniería de Sistemas
        </h3>
        <div className="space-y-3">
          {section.examples.map((example, i) => (
            <ExampleCard key={i} example={example} index={i} />
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <CommonMistakes items={section.commonMistakes} />

      {/* Cheat Sheet */}
      <CheatSheet items={section.cheatSheet} />
    </motion.div>
  );
}

// ── Sidebar Item ──
function SidebarItem({
  section,
  isActive,
  isCompleted,
  onClick,
}: {
  section: SectionData;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  const SectionIcon = iconMap[section.id] || FileText;

  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 ${
        isActive
          ? "bg-white/15 text-white shadow-sm"
          : "text-slate-300 hover:bg-white/8 hover:text-white"
      }`}
    >
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors ${
          isActive
            ? "bg-emerald-500 text-white"
            : isCompleted
            ? "bg-emerald-500/20 text-emerald-400"
            : "bg-white/10 text-slate-400 group-hover:bg-white/15 group-hover:text-slate-300"
        }`}
      >
        {isCompleted && !isActive ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <SectionIcon className="h-4 w-4" />
        )}
      </div>
      <span className="truncate font-medium">{section.shortTitle}</span>
      {isCompleted && (
        <Badge className="ml-auto h-5 bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 border-0">
          ✓
        </Badge>
      )}
    </button>
  );
}

// ── Main ThesisGuide Component ──
export default function ThesisGuide() {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") return 0;
    try {
      const saved = localStorage.getItem("tic-guide-progress");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.activeSection === "number") return parsed.activeSection;
      }
    } catch { /* ignore */ }
    return 0;
  });
  const [completedSections, setCompletedSections] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("tic-guide-progress");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.completedSections)) return parsed.completedSections;
      }
    } catch { /* ignore */ }
    return [];
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "tic-guide-progress",
        JSON.stringify({ activeSection, completedSections })
      );
    } catch {
      // ignore
    }
  }, [activeSection, completedSections]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setShowScrollTop(contentRef.current.scrollTop > 300);
      }
    };
    const el = contentRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => { if (el) el.removeEventListener("scroll", handleScroll); };
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setActiveSection(index);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, []);

  const handlePrev = useCallback(() => {
    if (activeSection > 0) {
      handleNavigate(activeSection - 1);
    }
  }, [activeSection, handleNavigate]);

  const handleNext = useCallback(() => {
    // Mark current section as completed
    if (!completedSections.includes(sections[activeSection].id)) {
      setCompletedSections((prev) => [...prev, sections[activeSection].id]);
    }
    if (activeSection < sections.length - 1) {
      handleNavigate(activeSection + 1);
    }
  }, [activeSection, completedSections, handleNavigate]);

  const handleScrollTop = useCallback(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, []);

  const progressPercent = Math.round((completedSections.length / sections.length) * 100);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-slate-800">
        {/* Logo area */}
        <div className="flex items-center gap-3 p-5 border-b border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">Guía TIC</h1>
            <p className="text-[11px] text-slate-400">
              Trabajo de Integración Curricular
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Progreso</span>
            <span className="text-xs font-bold text-emerald-400">
              {completedSections.length}/{sections.length}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-3">
          <div className="space-y-1">
            {sections.map((section, i) => (
              <SidebarItem
                key={section.id}
                section={section}
                isActive={activeSection === i}
                isCompleted={completedSections.includes(section.id)}
                onClick={() => handleNavigate(i)}
              />
            ))}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 space-y-2">
          <p className="text-[11px] text-slate-500 text-center">
            Ingeniería en Sistemas y Computación
          </p>
          <div className="h-px bg-white/5" />
          <p className="text-[10px] text-slate-600 text-center leading-relaxed">
            Docente Valeria Herrera Salazar - TIC<br />
            Derechos reservados
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80 px-4 py-3 sm:px-6">
          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-8 w-8 p-0"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800">
              <SheetTitle className="sr-only">Navegación</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                  <GraduationCap className="h-6 w-6 text-emerald-400" />
                  <div>
                    <h2 className="text-sm font-bold text-white">Guía TIC</h2>
                    <p className="text-xs text-slate-400">Ingeniería de Sistemas</p>
                  </div>
                </div>
                <ScrollArea className="flex-1 px-3 py-3">
                  <div className="space-y-1">
                    {sections.map((section, i) => (
                      <SidebarItem
                        key={section.id}
                        section={section}
                        isActive={activeSection === i}
                        isCompleted={completedSections.includes(section.id)}
                        onClick={() => {
                          handleNavigate(i);
                          setMobileMenuOpen(false);
                        }}
                      />
                    ))}
                  </div>
                </ScrollArea>
                <div className="border-t border-white/10 p-4 space-y-3">
                  <p className="text-xs text-slate-500 text-center">
                    {completedSections.length}/{sections.length} secciones
                  </p>
                  <div className="h-px bg-white/5" />
                  <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                    Docente Valeria Herrera Salazar - TIC<br />
                    Derechos reservados
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile progress */}
          <div className="flex-1 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                {sections[activeSection].shortTitle}
              </span>
              <span className="text-xs text-slate-400 shrink-0">
                {activeSection + 1}/{sections.length}
              </span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Desktop top bar content */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {sections[activeSection].title}
              </span>
            </div>
            <div className="flex-1" />
            <Badge variant="outline" className="text-xs">
              Sección {activeSection + 1} de {sections.length}
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-0 text-xs">
              {completedSections.length} completadas
            </Badge>
          </div>
        </header>

        {/* Content area */}
        <div ref={contentRef} className="flex-1 overflow-y-auto scroll-smooth">
          <div ref={mainRef} className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
            <AnimatePresence mode="wait">
              <SectionView section={sections[activeSection]} />
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={activeSection === 0}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>

              <span className="text-xs text-slate-400 font-medium">
                {activeSection + 1} / {sections.length}
              </span>

              <Button
                onClick={handleNext}
                className="gap-2 bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {activeSection === sections.length - 1 ? "Terminar ✓" : "Siguiente"}
                {activeSection < sections.length - 1 && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 pb-4 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Docente Valeria Herrera Salazar - TIC
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                Derechos reservados &copy; {new Date().getFullYear()}
              </p>
            </div>

            {/* Bottom spacer */}
            <div className="h-8" />
          </div>
        </div>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleScrollTop}
                    size="sm"
                    className="h-10 w-10 rounded-full shadow-lg bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Volver arriba</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Panel */}
      <ChatPanel />
    </div>
  );
}

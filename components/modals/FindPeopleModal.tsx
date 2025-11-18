"use client";

import {
  Bookmark,
  Briefcase,
  Building,
  ChevronDown,
  Globe,
  Lock,
  MapPin,
  Search,
  Users,
  X,
} from "lucide-react";
import { useEffect } from "react";

import data from "@/constants/components/findPeopleModal.json";
import styles from "@/styles/components/modals/FindPeopleModal.module.css";

const iconMap = {
  Search,
  Briefcase,
  Globe,
  MapPin,
  Building,
  Users,
} as const;

type FindPeopleModalProps = {
  open: boolean;
  onClose: () => void;
};

export function FindPeopleModal({ open, onClose }: FindPeopleModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <header className={styles.headerRow}>
          <div className={styles.headerTop}>
            <div className={styles.titleColumn}>
              <div className={styles.titleGroup}>
                <h2 className={styles.title}>{data.title}</h2>
                <button type="button" className={styles.savedSearchButton}>
                  <Bookmark size={14} />
                  {data.savedSearchLabel}
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
            <div className={styles.metaColumn}>
              <div className={styles.metaContent}>
                <div className={styles.limitBadge}>
                  <Search size={14} />
                  <span>
                    {data.limit.used.toLocaleString()}/{data.limit.total.toLocaleString()}
                  </span>
                </div>
                <div className={styles.metaHelperRow}>
                  <p className={styles.helperText}>{data.stats.helper}</p>
                  <span className={styles.unlockCopy}>
                    <Lock size={14} />
                    {data.stats.unlockCopy}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </header>
        <div className={styles.body}>
          <section className={styles.filterColumn}>
            <div className={styles.filterPrimaryLabel}>
              <Search size={16} />
              <span>{data.filters[0]?.label}</span>
            </div>
            <div className={styles.searchInputWrapper}>
              <Search size={18} />
              <input
                placeholder={data.filters[0]?.placeholder}
                aria-label="People keyword search"
              />
            </div>
            <div className={styles.divider} />
            <ul className={styles.filterList}>
              {data.filters.slice(1).map((filter) => {
                const Icon = iconMap[filter.icon as keyof typeof iconMap] ?? Search;
                return (
                  <li key={filter.label} className={styles.filterItem}>
                    <div className={styles.filterHeader}>
                      <div className={styles.filterHeaderLeft}>
                        <Icon size={18} />
                        <span>{filter.label}</span>
                      </div>
                      <ChevronDown size={16} />
                    </div>
                    <p className={styles.filterPlaceholder}>{filter.placeholder}</p>
                  </li>
                );
              })}
            </ul>
            <div className={styles.filterActions}>
              {data.buttons.map((button) => (
                <button
                  key={button.label}
                  type="button"
                  className={`${styles.modalButton} ${styles[button.variant]}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </section>
          <section className={styles.resultsColumn}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsLabels}>
                <span>NAME</span>
                <span>TITLE</span>
                <span>HEADLINE</span>
                <span>LINKEDIN URL</span>
                <span>COMPANY</span>
              </div>
            </div>
            <div className={styles.emptyState}>
              <div className={styles.loadingSpinner} aria-hidden="true" />
              <p className={styles.emptyTitle}>{data.helperCopy.title}</p>
              <p className={styles.emptySubtitle}>{data.helperCopy.subtitle}</p>
              <p className={styles.emptyOr}>{data.helperCopy.orCopy}</p>
              <p className={styles.emptyFooter}>{data.helperCopy.footer}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

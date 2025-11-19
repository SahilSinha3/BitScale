"use client";

import Image from "next/image";
import {
  BookOpenCheck,
  Boxes,
  ChevronsUpDown,
  LayoutDashboard,
  Rocket,
  Settings,
} from "lucide-react";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

import sidebarData from "@/constants/components/sidebar.json";
import supportPopover from "@/constants/components/supportPopover.json";
import styles from "@/styles/components/layout/Sidebar.module.css";

const iconComponents = {
  LayoutDashboard,
  Rocket,
  Boxes,
  BookOpenCheck,
  Settings,
} as const;

type IconName = keyof typeof iconComponents;

function getIcon(name: string) {
  const key = name as IconName;
  return iconComponents[key] ?? LayoutDashboard;
}

export function Sidebar() {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const toggleWorkspace = () => {
    setWorkspaceOpen((prev) => !prev);
  };

  const handleWorkspaceKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleWorkspace();
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (workspaceRef.current && !workspaceRef.current.contains(event.target as Node)) {
        setWorkspaceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <aside className={styles.container}>
      <div className={styles.brandWrapper}>
        <Image
          src="/bitscalelogo.svg"
          alt={sidebarData.brand.name}
          width={186}
          height={22}
          className={styles.brandLogo}
          priority
        />
      </div>

      <div
        className={styles.workspaceCard}
        onClick={toggleWorkspace}
        onKeyDown={handleWorkspaceKeyDown}
        ref={workspaceRef}
        role="button"
        aria-haspopup="menu"
        aria-expanded={workspaceOpen}
        tabIndex={0}
      >
        <div className={styles.workspaceInfo}>
          <div className={styles.workspaceAvatar}>
            <Image
              src={sidebarData.workspace.avatar}
              alt="Workspace avatar"
              width={36}
              height={36}
            />
          </div>
          <div>
            <p className={styles.workspaceName}>{sidebarData.workspace.name}</p>
          </div>
        </div>
        <ChevronsUpDown className={styles.navIcon} />
        {workspaceOpen ? (
          <div className={styles.workspacePopover}>
            <p className={styles.workspacePopoverTitle}>Switch workspace</p>
            <ul>
              {(sidebarData.workspaceOptions ?? []).map((workspace) => (
                <li key={workspace.name}>
                  <div className={styles.workspacePopoverRow}>
                    <Image src={workspace.logo} alt={workspace.name} width={28} height={28} />
                    <div>
                      <p className={styles.workspacePopoverName}>{workspace.name}</p>
                      <p className={styles.workspacePopoverMeta}>{workspace.subtitle}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className={styles.sections}>
        {sidebarData.sections.map((section) => (
          <div key={section.title}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <div className={styles.navList}>
              {section.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={`${styles.navButton} ${item.isHighlighted ? styles.active : ""}`}
                  >
                    <span className={styles.navButtonContent}>
                      <Icon className={styles.navIcon} />
                      {item.label}
                    </span>
                    {item.label === "Playbooks" ? (
                      <span className={styles.playbookRightIcon}>
                        <Rocket size={16} />
                      </span>
                    ) : null}
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.supportCard}>
        <div className={styles.supportContent}>
          <Image
            src="/bitscalelogo.svg"
            alt={`${sidebarData.brand.name} logo`}
            width={140}
            height={22}
            className={styles.supportLogo}
          />
          <div className={styles.supportTextBlock}>
            <p className={styles.supportDescription}>{sidebarData.support.subtitle}</p>
            <span className={styles.supportArrow}>→</span>
          </div>
        </div>
        <div className={styles.supportPopover}>
          <p className={styles.supportPopoverTitle}>{supportPopover.title}</p>
          <p className={styles.supportPopoverSubtitle}>{supportPopover.subtitle}</p>
          <ul>
            {supportPopover.options.map((option) => (
              <li key={option.label}>
                <p className={styles.supportOptionLabel}>{option.label}</p>
                <p className={styles.supportOptionDescription}>{option.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

import { useEffect, useState } from "react";

/**
 * __Use only for client-side components!__
 * @returns `isTabsReady` returns `true` in a browser
 * @returns `activeTabId` returns active tab ID
 * @returns `setActiveTabWithCache()` activeTabId setter. Also saves activeTabId to localStorage
 */
export const useTabs = (tabName = "activeTab", initialTabIndex = 0) => {
  const [activeTabId, setActiveTab] = useState(initialTabIndex);
  const [isTabsReady, setTabsReady] = useState(false);

  const setActiveTabWithCache = (tabIndex) => {
    setActiveTab(tabIndex);
    window?.localStorage?.setItem?.(tabName, tabIndex);
  };

  useEffect(() => {
    const savedActiveTabIndex = localStorage?.getItem?.(tabName);

    if (savedActiveTabIndex) {
      setActiveTab(savedActiveTabIndex);
    }

    setTabsReady(true);
  }, [tabName]);

  return { isTabsReady, activeTabId, setActiveTabWithCache };
};

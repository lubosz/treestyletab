pref("extensions.treestyletab.animation.enabled",           true);
pref("extensions.treestyletab.animation.indent.duration",   200);
pref("extensions.treestyletab.animation.collapse.duration", 150);

pref("extensions.treestyletab.tabbar.width",           200);
pref("extensions.treestyletab.tabbar.height",          32);
pref("extensions.treestyletab.tabbar.shrunkenWidth",   80);
pref("extensions.treestyletab.tabbar.position",        "left");
pref("extensions.treestyletab.tabbar.position.subbrowser.enabled", false);
pref("extensions.treestyletab.tabbar.multirow",        false);
pref("extensions.treestyletab.tabbar.invertTab",       true);
pref("extensions.treestyletab.tabbar.invertTabContents", false);
pref("extensions.treestyletab.tabbar.invertClosebox",  false);
pref("extensions.treestyletab.tabbar.scroll.smooth",   true);
pref("extensions.treestyletab.tabbar.scroll.duration", 250);
// 0 = no scroll, 1 = scroll to new tab only when the current tab will not scrolled out, 2 = scroll to new tab always
pref("extensions.treestyletab.tabbar.scrollToNewTab.mode", 1);
// flat, mixed, vertigo
// pref("extensions.treestyletab.tabbar.style",      "mixed");
pref("extensions.treestyletab.platform.default.tabbar.style", "mixed");
pref("extensions.treestyletab.tabbar.style.aero", false);
// 0 = disabled, 1 = hide, 2 = shrink
pref("extensions.treestyletab.tabbar.autoHide.mode",                   0);
pref("extensions.treestyletab.tabbar.autoHide.mode.fullscreen",        1);
pref("extensions.treestyletab.tabbar.autoHide.mode.toggle",            2);
pref("extensions.treestyletab.tabbar.autoHide.mode.toggle.fullscreen", 1);
pref("extensions.treestyletab.tabbar.autoHide.delay",      50);
pref("extensions.treestyletab.tabbar.autoHide.area",       7);
pref("extensions.treestyletab.tabbar.autoHide.expandArea", false);
pref("extensions.treestyletab.tabbar.autoShow.mousemove", true);
pref("extensions.treestyletab.tabbar.autoShow.accelKeyDown", true);
pref("extensions.treestyletab.tabbar.autoShow.accelKeyDown.delay", 800);
pref("extensions.treestyletab.tabbar.autoShow.tabSwitch", true);
pref("extensions.treestyletab.tabbar.autoShow.feedback", false);
pref("extensions.treestyletab.tabbar.autoShow.feedback.delay", 3000);
pref("extensions.treestyletab.tabbar.autoShow.keepShownOnMouseover", true);
pref("extensions.treestyletab.tabbar.togglerSize", 5);
pref("extensions.treestyletab.tabbar.fixed.autoCancelOnDrop", true);
pref("extensions.treestyletab.tabbar.fixed.insensitiveArea", 14);
pref("extensions.treestyletab.tabbar.fixed.horizontal", true);
pref("extensions.treestyletab.tabbar.fixed.vertical", false);
pref("extensions.treestyletab.enableSubtreeIndent.allTabsPopup", true);
pref("extensions.treestyletab.allowSubtreeCollapseExpand.horizontal", false);
pref("extensions.treestyletab.allowSubtreeCollapseExpand.vertical",   true);
pref("extensions.treestyletab.stackCollapsedTabs", true);
pref("extensions.treestyletab.showBorderForFirstTab",  false);
pref("extensions.treestyletab.autoExpand.enabled",     true);
pref("extensions.treestyletab.autoExpand.delay",       500);
pref("extensions.treestyletab.autoExpand.intelligently", true);
pref("extensions.treestyletab.autoExpand.collapseFinally", false);
pref("extensions.treestyletab.maxTreeLevel.horizontal", 0);
pref("extensions.treestyletab.maxTreeLevel.vertical",   999);
pref("extensions.treestyletab.maxTreeLevel.phisical", false);
pref("extensions.treestyletab.indent",          12);
pref("extensions.treestyletab.indent.property", "margin");
// pref("extensions.treestyletab.indent.property.top", "");
// pref("extensions.treestyletab.indent.property.right", "");
// pref("extensions.treestyletab.indent.property.bottom", "");
// pref("extensions.treestyletab.indent.property.left", "");
pref("extensions.treestyletab.platform.default.indent.property.top", "");
pref("extensions.treestyletab.platform.default.indent.property.right", "");
pref("extensions.treestyletab.platform.default.indent.property.bottom", "");
pref("extensions.treestyletab.platform.default.indent.property.left", "");
// 0 = first child, 1 = last child
pref("extensions.treestyletab.insertNewChildAt", 1);
pref("extensions.treestyletab.twisty.style", "auto"); // none, retro, modern-black, modern-white, auto
pref("extensions.treestyletab.twisty.expandSensitiveArea", true);
pref("extensions.treestyletab.clickOnIndentSpaces.enabled", true);
pref("extensions.treestyletab.tooltip.includeChildren",  true);

pref("extensions.treestyletab.show.context-item-reloadTabSubtree", true);
pref("extensions.treestyletab.show.context-item-reloadDescendantTabs", false);
pref("extensions.treestyletab.show.context-item-removeTabSubtree", true);
pref("extensions.treestyletab.show.context-item-removeDescendantTabs", false);
pref("extensions.treestyletab.show.context-item-removeAllTabsButThisTree", false);
pref("extensions.treestyletab.show.context-item-collapseAllSubtree", true);
pref("extensions.treestyletab.show.context-item-expandAllSubtree", true);
pref("extensions.treestyletab.show.context-item-toggleAutoHide", true);
pref("extensions.treestyletab.show.context-item-toggleFixed", true);
pref("extensions.treestyletab.show.context-item-bookmarkTabSubtree", true);

// 0 = always ask, 1 = load into the tab, 2 = open new child tab
pref("extensions.treestyletab.dropLinksOnTab.behavior", 0);
// value = Basic | Structure | Collapse/expand
//   Basic behavior:
//     0 = always ask
//     1 = tree
//     2 = separate
//     4 = replace
//   Structure:
//     256  = use dummy tab (for subtree)
//     1024 = use dummy tab, only if there is any orphan
//     512  = do not restore tree structure
//   Collapse/expand:
//     2048 = expand all tree
pref("extensions.treestyletab.openGroupBookmark.behavior", 2304); /* 0 | 256 | 2048 */
// 0 = always ask, 1 = bookmark all, 2 = bookmark only the parent tab
pref("extensions.treestyletab.bookmarkDroppedTabs.behavior", 0);
pref("extensions.treestyletab.taskbarPreviews.hideCollapsedTabs", true);

pref("extensions.treestyletab.autoCollapseExpandSubtreeOnSelect",      true);
pref("extensions.treestyletab.autoCollapseExpandSubtreeOnSelect.onCurrentTabRemove", true);
pref("extensions.treestyletab.autoCollapseExpandSubtreeOnSelect.whileFocusMovingByShortcut", false);
pref("extensions.treestyletab.collapseExpandSubtree.dblclick",         false);
// -1 = restore last state, 0 = always collapse, 1 = always expand
pref("extensions.treestyletab.collapseExpandSubtree.sessionRestore", -1);
pref("extensions.treestyletab.autoExpandSubtreeOnCollapsedChildFocused", true);
pref("extensions.treestyletab.autoExpandSubtreeOnAppendChild",         true);
pref("extensions.treestyletab.autoAttach", true);
// 0 = don't attach
// 1 = attach if the search term equals to the selection in the current tab
// 2 = always attach
pref("extensions.treestyletab.autoAttach.searchResult", 1);
// 0 = don't attach (open as an independent tab)
// 1 = attach to the current tab (open as a child)
// 2 = attach to the parent of the current tab (open as a sibling)
pref("extensions.treestyletab.autoAttach.newTabCommand", 0);
// 0 = default, 1 = only visible tabs
pref("extensions.treestyletab.focusMode", 1);
/*
  3 = promote only the first child tab as the parent level
  0 = promote all children as the parent level
  1 = detach all children
  2 = close all children too
*/
pref("extensions.treestyletab.closeParentBehavior", 3);
pref("extensions.treestyletab.closeParentBehavior.moveDetachedTabsToBottom", false);
/*
  3 = promote only the first child tab as the root level
  1 = promote all children as new roots (=detach all children)
  Note: this affects only when closeParentBehavior == 0
*/
pref("extensions.treestyletab.closeRootBehavior", 3);
pref("extensions.treestyletab.createSubtree.underParent", true);
/*
  0   = do nothing.
  1   = always ask.
  2   = reopen all tabs of the tree if a member of tree is reopened.
  256 = don't reopen tree if some tabs are overflowed and lost from the history.
*/
pref("extensions.treestyletab.undoCloseTabSet.behavior", 3);

pref("extensions.treestyletab.autoRepositionStatusPanel", true);
pref("extensions.treestyletab.restoreTreeOnStartup", false);


pref("browser.link.open_newwindow.restriction.override", 0);
pref("browser.tabs.loadFolderAndReplace.override", false);
pref("browser.tabs.insertRelatedAfterCurrent.override", false);
pref("browser.tabs.insertRelatedAfterCurrent.override.force", true);

pref("extensions.multipletab.show.multipletab-selection-item-removeTabSubtree", true);
pref("extensions.multipletab.show.multipletab-selection-item-createSubtree", true);


pref("extensions.treestyletab.compatibility.TMP", true); // Tab Mix Plus
pref("extensions.treestyletab.compatibility.STM.warnForNewTabPosition", true); // Super Tab Mode


pref("extensions.treestyletab.platform.Darwin.tabbar.style", "metal");
pref("extensions.treestyletab.platform.Darwin.indent.property.top", "margin-bottom");
pref("extensions.treestyletab.platform.Linux.tabbar.style", "plain");


pref("extensions.treestyletab.prefsVersion", 0);

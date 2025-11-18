/**
 * Utility functions for layout management
 * Based on MUI Joy UI Order Dashboard template
 */

/**
 * Toggle the sidebar visibility on mobile
 */
export function toggleSidebar() {
  if (typeof document !== 'undefined') {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('sidebar-open');
    }
  }
}

/**
 * Close the sidebar on mobile
 */
export function closeSidebar() {
  if (typeof document !== 'undefined') {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.remove('sidebar-open');
    }
  }
}

/**
 * Open the sidebar on mobile
 */
export function openSidebar() {
  if (typeof document !== 'undefined') {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.add('sidebar-open');
    }
  }
}

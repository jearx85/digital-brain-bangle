import './NoteSideBarButton.css';

import React from 'react';

import { Button, ChevronDoubleLeftIcon } from '@bangle.io/ui-components';

import OffcanvasMenu from '../components/OffCanvasMenu/OffcanvasMenu';

export function NoteSidebarShowButton({
  showNoteSidebar,
  widescreen,
  isNoteSidebarShown,
}: {
  showNoteSidebar: () => void;
  widescreen: boolean;
  isNoteSidebarShown: boolean;
}) {
  if (!widescreen || isNoteSidebarShown) {
    return null;
  }

  return (
    <>
      <ChevronDoubleLeftIcon
        className="offcanvas-arrow material-symbols-outlined fixed right-0 top-10 z-30 border-r-0"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        chevron_left
      </ChevronDoubleLeftIcon>
      <OffcanvasMenu />

      {/* <Button
      ariaLabel="Show note sidebar"
      className="fixed right-0 top-10 z-30 border-r-0"
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
      tooltipPlacement="bottom"
      size="sm"
      variant="soft"
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
      onPress={() => {
        showNoteSidebar();
      }}
      leftIcon={<ChevronDoubleLeftIcon />}
    /> */}
    </>
  );
}

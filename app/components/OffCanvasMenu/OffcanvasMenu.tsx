/* eslint-disable import/no-unresolved */
import './OffcanvasMenu.css';

// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import { IoIosLink } from 'react-icons/io';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import {
  IoCalendarOutline,
  IoChatboxOutline,
  IoDocumentTextOutline,
} from 'react-icons/io5';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import { Tooltip } from 'react-tooltip';

import { NoteSidebar } from '../../note-sidebar/NoteSidebar';
import AIChat from '../AIChat/AIChat';
import MyCalendar from '../MyCalendar/myCalendar';
import PluginElastic from '../plugin/PluginElastic';

export default function OffcanvasMenu() {
  const [activeComponent, setActiveComponent] = useState('ChatboxOutline');

  function handleComponentClick(componentName: any) {
    setActiveComponent(componentName);
  }

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="header-offcanvas-menu">
          <button
            className="nav-offcanvas-item"
            id="AIChat"
            onClick={() => handleComponentClick('ChatboxOutline')}
            data-tooltip-id="AIchat-tooltip"
            data-tooltip-content="Asistente"
          >
            <IoChatboxOutline />
          </button>
          <Tooltip id="AIchat-tooltip" />

          <button
            className="nav-offcanvas-item"
            id="calendar"
            onClick={() => handleComponentClick('CalendarOutline')}
            data-tooltip-id="calendar-tooltip"
            data-tooltip-content="Calendario"
          >
            <IoCalendarOutline />
          </button>
          <Tooltip id="calendar-tooltip" />

          <button
            className="nav-offcanvas-item"
            id="relations"
            onClick={() => handleComponentClick('relations')}
            data-tooltip-id="relations-tooltip"
            data-tooltip-content="Relacion"
          >
            <IoIosLink />
          </button>
          <Tooltip id="relations-tooltip" />

          <button
            className="nav-offcanvas-item"
            id="plugin"
            onClick={() => handleComponentClick('plugin')}
            data-tooltip-id="plugin-tooltip"
            data-tooltip-content="Plugin"
          >
            <IoDocumentTextOutline />
          </button>
          <Tooltip id="plugin-tooltip" />

          <button
            className="btn btn-close"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {activeComponent === 'CalendarOutline' && (
            <>
              <MyCalendar />
            </>
          )}
          {activeComponent === 'ChatboxOutline' && (
            <>
              <AIChat />
            </>
          )}
          {activeComponent === 'relations' && (
            <>
              <NoteSidebar
                onDismiss={function (): void {
                  throw new Error('Function not implemented.');
                }}
                widgets={[]}
              />
            </>
          )}
          {activeComponent === 'plugin' && (
            <>
              <PluginElastic />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

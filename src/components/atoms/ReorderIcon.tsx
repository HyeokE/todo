import { useEffect, useRef } from 'react';

import { DragControls } from 'framer-motion';
import { useTheme } from 'styled-components';

import { useScrollBlock } from '@hooks/useScrollBlock';

interface Props {
  dragControls: DragControls;
}
export function ReorderIcon({ dragControls }: Props) {
  const theme = useTheme();
  const color = theme.colors.lavender400;

  const [scrollBlock, setScrollBlock] = useScrollBlock();
  const svfRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svfRef.current) {
      svfRef.current.addEventListener('touchstart', (e) => {
        e.preventDefault();
        dragControls.start(e);
        setScrollBlock(true);
      });
      svfRef.current.addEventListener('touchend', (e) => {
        e.preventDefault();
        setScrollBlock(false);
      });
    }
    return () => {
      if (svfRef.current) {
        svfRef.current.removeEventListener('touchstart', (e) => {
          e.preventDefault();
        });
        svfRef.current.removeEventListener('touchend', (e) => {
          e.preventDefault();
        });
      }
    };
  }, [scrollBlock]);
  return (
    <svg
      ref={svfRef}
      width="30"
      height="50"
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseDown={(e) => {
        dragControls.start(e);
      }}
    >
      <circle cx="7" cy="7" r="3" fill={color} />
      <circle cx="23" cy="7" r="3" fill={color} />
      <circle cx="15" cy="7" r="3" fill={color} />
      <circle cx="7" cy="16" r="3" fill={color} />
      <circle cx="23" cy="16" r="3" fill={color} />
      <circle cx="15" cy="16" r="3" fill={color} />
      <circle cx="7" cy="25" r="3" fill={color} />
      <circle cx="23" cy="25" r="3" fill={color} />
      <circle cx="15" cy="25" r="3" fill={color} />
      <circle cx="7" cy="34" r="3" fill={color} />
      <circle cx="23" cy="34" r="3" fill={color} />
      <circle cx="15" cy="34" r="3" fill={color} />
      <circle cx="7" cy="43" r="3" fill={color} />
      <circle cx="23" cy="43" r="3" fill={color} />
      <circle cx="15" cy="43" r="3" fill={color} />
    </svg>
  );
}

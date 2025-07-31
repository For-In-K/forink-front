// components/nodes/MilestoneNode.tsx
import React from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';

const MilestoneNode = ({ id, data }: NodeProps) => {
  const idx = Number(id);

  const isOdd = idx % 2 === 1;
  const isLeftRightSourceRight = idx % 4 === 2;

  return (
    <div
      style={{
        position: 'relative',
        padding: 0,
        width: 'fit-content',
        height: 'fit-content',
        background: 'transparent',
      }}
    >
      {isOdd ? (
        <Handle
          type="target"
          position={Position.Top}
          id="target-top"
          style={{ background: '#555' }}
        />
      ) : isLeftRightSourceRight ? (
        <Handle
          type="target"
          position={Position.Left}
          id="target-left"
          style={{
            background: '#555',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      ) : (
        <Handle
          type="target"
          position={Position.Right}
          id="target-right"
          style={{
            background: '#555',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      )}

      {data.label}

      {isOdd ? (
        <Handle
          type="source"
          position={Position.Bottom}
          id="source-bottom"
          style={{ background: '#555' }}
        />
      ) : isLeftRightSourceRight ? (
        <Handle
          type="source"
          position={Position.Right}
          id="source-right"
          style={{
            background: '#555',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      ) : (
        <Handle
          type="source"
          position={Position.Left}
          id="source-left"
          style={{
            background: '#555',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </div>
  );
};

export default MilestoneNode;

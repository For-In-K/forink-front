import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import type { Node, Edge, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import { useNavigate } from 'react-router-dom';

import { getX } from '@utils/coordinates';
import { milestoneNodeTypes } from 'types/milestone';
import MilestoneButton from '@components/status/MilestoneButton';
import { subroadmaps } from '@mocks/data/roadmaps';

interface MilestoneWrapperProps {
  roadmapType: string;
}

const MilestoneWrapper = ({ roadmapType }: MilestoneWrapperProps) => {
  const navigate = useNavigate();

  const handleMilestoneSelect = (roadmapId: number) => {
    navigate(`/roadmap/${roadmapType}/${roadmapId}`);
  };

  const initialNodes: Node[] = subroadmaps.map((sub: any, index: number) => ({
    id: sub.roadmapId.toString(),
    position: {
      x: getX(index),
      y: index * 180,
    },
    data: {
      label: (
        <MilestoneButton
          title={sub.title}
          statusType={sub.statusType}
          onClick={() => handleMilestoneSelect(sub.roadmapId)}
        />
      ),
    },
    draggable: true,
    type: 'milestoneNode',
    style: {
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      width: 'fit-content',
      height: 'fit-content',
      padding: 0,
    },
  }));

  const initialEdges: Edge[] = subroadmaps
    .slice(0, -1)
    .map((sub: any, index: number) => ({
      id: `e${sub.roadmapId}-${subroadmaps[index + 1].roadmapId}`,
      source: sub.roadmapId.toString(),
      target: subroadmaps[index + 1].roadmapId.toString(),
      type: 'default',
      animated: true,
      style: {
        stroke: '#404F6E',
        strokeWidth: 8,
        strokeLinecap: 'round',
        strokeDasharray: '16 12',
        strokeDashoffset: 0,
        animation: 'flowDash 3s linear infinite',
      },
    }));

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: '1300px' }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={milestoneNodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        minZoom={1}
        maxZoom={1}
        panOnScroll={true}
        panOnDrag={true}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default MilestoneWrapper;

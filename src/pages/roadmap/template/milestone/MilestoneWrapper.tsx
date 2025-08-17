import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoadmapsOnType } from '@hooks/useRoadmaps';

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

import { getX } from '@utils/coordinates';
import { milestoneNodeTypes } from 'types/milestone';
import MilestoneButton from '@components/button/MilestoneButton';

interface MilestoneWrapperProps {
  roadmapType: string;
}

const MilestoneWrapper = ({ roadmapType }: MilestoneWrapperProps) => {
  const navigate = useNavigate();

  const handleMilestoneSelect = useCallback(
    (roadmapId: number) => {
      navigate(`/roadmap/${roadmapType}/${roadmapId}`);
    },
    [navigate, roadmapType]
  );

  const { data: roadmapsOnType = [], isLoading } =
    useRoadmapsOnType(roadmapType);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!roadmapsOnType || roadmapsOnType.length === 0) return;

    const newNodes: Node[] = roadmapsOnType.map((sub: any, index: number) => ({
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
        border: 'none',
        boxShadow: 'none',
        width: 'fit-content',
        height: 'fit-content',
        padding: 0,
      },
    }));

    const newEdges: Edge[] = roadmapsOnType
      .slice(0, -1)
      .map((sub: any, index: number) => ({
        id: `e${sub.roadmapId}-${roadmapsOnType[index + 1].roadmapId}`,
        source: sub.roadmapId.toString(),
        target: roadmapsOnType[index + 1].roadmapId.toString(),
        type: 'default',
        animated: true,
        style: {
          stroke: '#e4e4e7',
          strokeWidth: 7,
          strokeLinecap: 'round',
          strokeDasharray: '16 12',
          strokeDashoffset: 0,
          animation: 'flowDash 3s linear infinite',
        },
      }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, [roadmapsOnType, handleMilestoneSelect]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (roadmapsOnType.length === 0) {
    return <div>No roadmaps found</div>;
  }

  return (
    <div style={{ width: '100%', height: '1000px' }}>
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
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default MilestoneWrapper;

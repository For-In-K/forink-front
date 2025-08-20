import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import { useRoadmapsOnType } from '@hooks/useRoadmaps';
import { guideAdministrationSubroadmap } from '@constants/guides';

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
import MilestoneWrapperSkeleton from '../MilestoneWrapperSkeleton';

interface MilestoneWrapperProps {
  roadmapType: string;
}

const MilestoneWrapper = ({ roadmapType }: MilestoneWrapperProps) => {
  const navigate = useNavigate();
  const { isUser, isPreGuide } = useAuth();

  const handleMilestoneSelect = useCallback(
    (roadmapId: number) => {
      navigate(`/roadmap/${roadmapType}/${roadmapId}`);
    },
    [navigate, roadmapType]
  );

  const { data: userSubroadmaps = [], isLoading: isUserSubroadmaps } =
    useRoadmapsOnType(roadmapType, { enabled: isUser });

  const getRoadmapsData = () => {
    if (isUser) {
      return { data: userSubroadmaps, isLoading: isUserSubroadmaps };
    } else if (isPreGuide) {
      return { data: guideAdministrationSubroadmap, isLoading: false };
    }
    return { data: [], isLoading: false };
  };

  const { data: roadmapsOnType, isLoading } = getRoadmapsData();

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
    return <MilestoneWrapperSkeleton />;
  }

  if (roadmapsOnType.length === 0) {
    return (
      <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-700">
        해당 타입의 로드맵이 없어요. 개발자에게 문의해주세요.
      </div>
    );
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
        // zoomOnPinch={false}
        zoomOnDoubleClick={false}
        // minZoom={1}
        // maxZoom={1}
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

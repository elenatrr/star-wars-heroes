import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function CustomNode({ data }: { data: { [key: string]: string } }) {
  const displayDetails = ['height', 'hair_color', 'gender', 'director', 'producer', 'model', 'max_atmosphering_speed'];

  return (
    <div className="text-sm max-w-60 p-1 rounded-md bg-white text-black border-4 border-banana">
      <p className="font-bold text-center mb-1">
        {data.name}
      </p>
      {displayDetails.map((detail) => 
        data[detail] && <p key={detail} className="text-gray-500 capitalize">{`${detail.split("_").join(" ")}: ${data[detail]}`}</p>
      )}
      <Handle
        type="target"
        position={Position.Top}
        className="w-8"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-8"
      />
    </div>
  );
}

export default memo(CustomNode);

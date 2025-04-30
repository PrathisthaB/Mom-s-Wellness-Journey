
import React from 'react';
import { Clock } from 'lucide-react';
import { calculateReadingTime } from '@/utils/readingTime';

const ReadingTime = ({ content }) => {
  const minutes = calculateReadingTime(content);
  
  return (
    <div className="flex items-center text-sm text-gray-500">
      <Clock className="w-4 h-4 mr-1" />
      <span>{minutes} min read</span>
    </div>
  );
};

export default ReadingTime;
